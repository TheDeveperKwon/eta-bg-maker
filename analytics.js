(function initAnalytics(global, document) {
  const config = global.__ETA_ANALYTICS__ || {};
  const gaMeasurementId =
    typeof config.gaMeasurementId === "string" ? config.gaMeasurementId.trim() : "";
  const clarityProjectId =
    typeof config.clarityProjectId === "string" ? config.clarityProjectId.trim() : "";
  const debug = config.debug === true;

  function logDebug(type, payload) {
    if (!debug || !global.console) {
      return;
    }

    global.console.info(`[analytics:${type}]`, payload);
  }

  function normalizeName(value, fallback) {
    const sanitized = String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9_]+/g, "_")
      .replace(/_+/g, "_")
      .replace(/^_+|_+$/g, "")
      .slice(0, 40);

    if (!sanitized) {
      return fallback;
    }

    if (!/^[a-z]/.test(sanitized)) {
      return `${fallback}_${sanitized}`.slice(0, 40);
    }

    return sanitized;
  }

  function normalizeValue(value) {
    if (value === null || value === undefined) {
      return null;
    }

    if (typeof value === "number") {
      return Number.isFinite(value) ? value : null;
    }

    if (typeof value === "boolean") {
      return value;
    }

    if (typeof value === "string") {
      const trimmed = value.trim();
      return trimmed ? trimmed.slice(0, 100) : null;
    }

    return JSON.stringify(value).slice(0, 100);
  }

  function sanitizeParams(params) {
    return Object.entries(params || {}).reduce((result, [key, value]) => {
      const normalizedKey = normalizeName(key, "param");
      const normalizedValue = normalizeValue(value);

      if (normalizedValue === null) {
        return result;
      }

      result[normalizedKey] = normalizedValue;
      return result;
    }, {});
  }

  function injectScript(id, src) {
    if (!src || document.getElementById(id)) {
      return;
    }

    const script = document.createElement("script");
    script.id = id;
    script.async = true;
    script.src = src;
    document.head.append(script);
  }

  if (gaMeasurementId) {
    global.dataLayer = global.dataLayer || [];
    global.gtag =
      global.gtag ||
      function gtag() {
        global.dataLayer.push(arguments);
      };

    injectScript(
      "ga4-tag-script",
      `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaMeasurementId)}`,
    );
    global.gtag("js", new Date());
    global.gtag("config", gaMeasurementId);
  }

  if (clarityProjectId) {
    global.clarity =
      global.clarity ||
      function clarity() {
        (global.clarity.q = global.clarity.q || []).push(arguments);
      };

    injectScript(
      "clarity-tag-script",
      `https://www.clarity.ms/tag/${encodeURIComponent(clarityProjectId)}`,
    );
  }

  global.etaAnalytics = {
    enabled: {
      ga4: Boolean(gaMeasurementId),
      clarity: Boolean(clarityProjectId),
    },
    setContext(values) {
      const safeValues = sanitizeParams(values);
      const entries = Object.entries(safeValues);

      if (!entries.length) {
        return;
      }

      if (gaMeasurementId && typeof global.gtag === "function") {
        global.gtag("set", safeValues);
      }

      if (clarityProjectId && typeof global.clarity === "function") {
        entries.forEach(([key, value]) => {
          global.clarity("set", key, String(value));
        });
      }

      logDebug("context", safeValues);
    },
    track(eventName, params) {
      const safeEventName = normalizeName(eventName, "event");
      const safeParams = sanitizeParams(params);

      if (gaMeasurementId && typeof global.gtag === "function") {
        global.gtag("event", safeEventName, safeParams);
      }

      if (clarityProjectId && typeof global.clarity === "function") {
        global.clarity("event", safeEventName);
      }

      logDebug("event", {
        eventName: safeEventName,
        params: safeParams,
      });
    },
  };
})(window, document);
