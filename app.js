const builtInImages = [];

const deviceSafeZones = {
  iphoneClassic: {
    lock: { x: 0.18, y: 0.08, width: 0.64, height: 0.18 },
    home: { x: 0.04, y: 0.02, width: 0.24, height: 0.055 },
  },
  iphoneNotch: {
    lock: { x: 0.16, y: 0.08, width: 0.68, height: 0.18 },
    home: { x: 0.04, y: 0.02, width: 0.27, height: 0.06 },
  },
  iphoneIsland: {
    lock: { x: 0.15, y: 0.075, width: 0.7, height: 0.19 },
    home: { x: 0.04, y: 0.02, width: 0.27, height: 0.06 },
  },
  galaxyLegacy: {
    lock: { x: 0.15, y: 0.085, width: 0.7, height: 0.17 },
    home: { x: 0.03, y: 0.02, width: 0.24, height: 0.055 },
  },
  galaxyModern: {
    lock: { x: 0.14, y: 0.08, width: 0.72, height: 0.17 },
    home: { x: 0.03, y: 0.02, width: 0.24, height: 0.055 },
  },
  galaxyFlip: {
    lock: { x: 0.16, y: 0.08, width: 0.68, height: 0.17 },
    home: { x: 0.03, y: 0.02, width: 0.23, height: 0.055 },
  },
  custom: {
    lock: { x: 0.15, y: 0.08, width: 0.7, height: 0.18 },
    home: { x: 0.04, y: 0.02, width: 0.26, height: 0.06 },
  },
};

const displayCutoutPresets = {
  none: {
    type: "none",
    label: "컷아웃 없음",
    left: 0.5,
    top: 0,
    width: 0,
    height: 0,
    bezelTop: 0,
    bezelBottom: 0,
  },
  iphoneIsland61: {
    type: "island",
    label: "Dynamic Island · 6.1형",
    left: 0.5,
    top: 0.024,
    width: 0.308,
    height: 0.036,
  },
  iphoneIsland63: {
    type: "island",
    label: "Dynamic Island · 6.3형",
    left: 0.5,
    top: 0.022,
    width: 0.298,
    height: 0.034,
  },
  iphoneIsland65: {
    type: "island",
    label: "Dynamic Island · 6.5형",
    left: 0.5,
    top: 0.023,
    width: 0.292,
    height: 0.035,
  },
  iphoneIsland67: {
    type: "island",
    label: "Dynamic Island · 6.7형",
    left: 0.5,
    top: 0.022,
    width: 0.284,
    height: 0.034,
  },
  iphoneIsland69: {
    type: "island",
    label: "Dynamic Island · 6.9형",
    left: 0.5,
    top: 0.021,
    width: 0.274,
    height: 0.033,
  },
  iphoneNotch58Legacy: {
    type: "notch",
    label: "노치 · 5.8형",
    left: 0.5,
    top: 0,
    width: 0.488,
    height: 0.058,
  },
  iphoneNotch61Legacy: {
    type: "notch",
    label: "노치 · 6.1형",
    left: 0.5,
    top: 0,
    width: 0.46,
    height: 0.056,
  },
  iphoneNotch65Legacy: {
    type: "notch",
    label: "노치 · 6.5형",
    left: 0.5,
    top: 0,
    width: 0.446,
    height: 0.055,
  },
  iphoneNotch54Modern: {
    type: "notch",
    label: "노치 · 5.4형",
    left: 0.5,
    top: 0,
    width: 0.498,
    height: 0.058,
  },
  iphoneNotch61Modern: {
    type: "notch",
    label: "노치 · 6.1형",
    left: 0.5,
    top: 0,
    width: 0.455,
    height: 0.055,
  },
  iphoneNotch67Modern: {
    type: "notch",
    label: "노치 · 6.7형",
    left: 0.5,
    top: 0,
    width: 0.425,
    height: 0.053,
  },
  iphoneNotch54Compact: {
    type: "notch",
    label: "작은 노치 · 5.4형",
    left: 0.5,
    top: 0,
    width: 0.428,
    height: 0.053,
  },
  iphoneNotch61Compact: {
    type: "notch",
    label: "작은 노치 · 6.1형",
    left: 0.5,
    top: 0,
    width: 0.382,
    height: 0.05,
  },
  iphoneNotch67Compact: {
    type: "notch",
    label: "작은 노치 · 6.7형",
    left: 0.5,
    top: 0,
    width: 0.35,
    height: 0.048,
  },
  iphoneClassic40: {
    type: "classic-bezel",
    label: "홈 버튼형 · 4.0형",
    left: 0.5,
    top: 0.048,
    width: 0.19,
    height: 0.013,
    bezelTop: 0.098,
    bezelBottom: 0.118,
  },
  iphoneClassic47: {
    type: "classic-bezel",
    label: "홈 버튼형 · 4.7형",
    left: 0.5,
    top: 0.043,
    width: 0.18,
    height: 0.012,
    bezelTop: 0.086,
    bezelBottom: 0.106,
  },
  iphoneClassic55: {
    type: "classic-bezel",
    label: "홈 버튼형 · 5.5형",
    left: 0.5,
    top: 0.04,
    width: 0.18,
    height: 0.011,
    bezelTop: 0.078,
    bezelBottom: 0.097,
  },
  galaxyHomeButton: {
    type: "android-home-bezel",
    label: "상하 베젤 + 홈 버튼",
    left: 0.5,
    top: 0.039,
    width: 0.18,
    height: 0.01,
    bezelTop: 0.074,
    bezelBottom: 0.091,
  },
  galaxyInfinity2017: {
    type: "legacy-bezel",
    label: "Infinity Display · 2017",
    left: 0.5,
    top: 0.025,
    width: 0.19,
    height: 0.009,
    bezelTop: 0.046,
    bezelBottom: 0.032,
  },
  galaxyInfinity2018: {
    type: "legacy-bezel",
    label: "Infinity Display · 2018",
    left: 0.5,
    top: 0.022,
    width: 0.18,
    height: 0.008,
    bezelTop: 0.043,
    bezelBottom: 0.029,
  },
  galaxyCenterPunch1080: {
    type: "hole",
    label: "중앙 펀치홀 · FHD",
    left: 0.5,
    top: 0.039,
    width: 0.042,
    height: 0.042,
  },
  galaxyCenterPunch1080Large: {
    type: "hole",
    label: "큰 중앙 펀치홀 · FHD",
    left: 0.5,
    top: 0.039,
    width: 0.046,
    height: 0.046,
  },
  galaxyCenterPunch1440: {
    type: "hole",
    label: "중앙 펀치홀 · QHD",
    left: 0.5,
    top: 0.036,
    width: 0.036,
    height: 0.036,
  },
  galaxyCenterPunch1440Large: {
    type: "hole",
    label: "큰 중앙 펀치홀 · QHD",
    left: 0.5,
    top: 0.036,
    width: 0.039,
    height: 0.039,
  },
  galaxyCenterPunchFlip: {
    type: "hole",
    label: "중앙 펀치홀 · Z Flip",
    left: 0.5,
    top: 0.035,
    width: 0.039,
    height: 0.039,
  },
  galaxyRightPunch1080: {
    type: "hole",
    label: "우측 펀치홀 · FHD",
    left: 0.813,
    top: 0.046,
    width: 0.045,
    height: 0.045,
  },
  galaxyRightPunch1440: {
    type: "hole",
    label: "우측 펀치홀 · QHD",
    left: 0.815,
    top: 0.045,
    width: 0.039,
    height: 0.039,
  },
  galaxyRightDualPunch1440: {
    type: "pill-hole",
    label: "우측 듀얼 펀치홀 · QHD",
    left: 0.788,
    top: 0.045,
    width: 0.108,
    height: 0.038,
  },
};

const displayCutoutByDeviceId = {
  "iphone-17-pro-max": "iphoneIsland69",
  "iphone-17-pro": "iphoneIsland63",
  "iphone-air": "iphoneIsland65",
  "iphone-17": "iphoneIsland63",
  "iphone-16-pro-max": "iphoneIsland69",
  "iphone-16-pro": "iphoneIsland63",
  "iphone-16-plus": "iphoneIsland67",
  "iphone-16": "iphoneIsland61",
  "iphone-15-pro-max": "iphoneIsland67",
  "iphone-15-pro": "iphoneIsland61",
  "iphone-15-plus": "iphoneIsland67",
  "iphone-15": "iphoneIsland61",
  "iphone-14-pro-max": "iphoneIsland67",
  "iphone-14-pro": "iphoneIsland61",
  "iphone-16e": "iphoneNotch61Compact",
  "iphone-14-plus": "iphoneNotch67Compact",
  "iphone-14": "iphoneNotch61Compact",
  "iphone-13-pro-max": "iphoneNotch67Compact",
  "iphone-13-pro": "iphoneNotch61Compact",
  "iphone-13": "iphoneNotch61Compact",
  "iphone-13-mini": "iphoneNotch54Compact",
  "iphone-12-pro-max": "iphoneNotch67Modern",
  "iphone-12-pro": "iphoneNotch61Modern",
  "iphone-12": "iphoneNotch61Modern",
  "iphone-12-mini": "iphoneNotch54Modern",
  "iphone-11-pro-max": "iphoneNotch65Legacy",
  "iphone-11-pro": "iphoneNotch58Legacy",
  "iphone-11": "iphoneNotch61Legacy",
  "iphone-xs-max": "iphoneNotch65Legacy",
  "iphone-xs": "iphoneNotch58Legacy",
  "iphone-xr": "iphoneNotch61Legacy",
  "iphone-x": "iphoneNotch58Legacy",
  "iphone-se-3": "iphoneClassic47",
  "iphone-se-2": "iphoneClassic47",
  "iphone-8-plus": "iphoneClassic55",
  "iphone-8": "iphoneClassic47",
  "iphone-7-plus": "iphoneClassic55",
  "iphone-7": "iphoneClassic47",
  "iphone-se-1": "iphoneClassic40",
  "galaxy-s26-ultra": "galaxyCenterPunch1440",
  "galaxy-s26-plus": "galaxyCenterPunch1440",
  "galaxy-s26": "galaxyCenterPunch1080",
  "galaxy-s25-ultra": "galaxyCenterPunch1440",
  "galaxy-s25-edge": "galaxyCenterPunch1440",
  "galaxy-s25-plus": "galaxyCenterPunch1440",
  "galaxy-s25": "galaxyCenterPunch1080",
  "galaxy-s24-ultra": "galaxyCenterPunch1440",
  "galaxy-s24-plus": "galaxyCenterPunch1440",
  "galaxy-s24": "galaxyCenterPunch1080",
  "galaxy-s24-fe": "galaxyCenterPunch1080",
  "galaxy-s23-ultra": "galaxyCenterPunch1440",
  "galaxy-s23-plus": "galaxyCenterPunch1080",
  "galaxy-s23": "galaxyCenterPunch1080",
  "galaxy-s23-fe": "galaxyCenterPunch1080",
  "galaxy-s22-ultra": "galaxyCenterPunch1440",
  "galaxy-s22-plus": "galaxyCenterPunch1080",
  "galaxy-s22": "galaxyCenterPunch1080",
  "galaxy-s21-ultra": "galaxyCenterPunch1440",
  "galaxy-s21-plus": "galaxyCenterPunch1080",
  "galaxy-s21": "galaxyCenterPunch1080",
  "galaxy-s21-fe": "galaxyCenterPunch1080",
  "galaxy-note20-ultra": "galaxyCenterPunch1440",
  "galaxy-note20": "galaxyCenterPunch1080",
  "galaxy-s20-ultra": "galaxyCenterPunch1440Large",
  "galaxy-s20-plus": "galaxyCenterPunch1440",
  "galaxy-s20": "galaxyCenterPunch1440",
  "galaxy-s20-fe": "galaxyCenterPunch1080Large",
  "galaxy-note10-plus": "galaxyCenterPunch1440",
  "galaxy-note10": "galaxyCenterPunch1080",
  "galaxy-s10-plus": "galaxyRightDualPunch1440",
  "galaxy-s10": "galaxyRightPunch1440",
  "galaxy-s10e": "galaxyRightPunch1080",
  "galaxy-note9": "galaxyInfinity2018",
  "galaxy-s9-plus": "galaxyInfinity2018",
  "galaxy-s9": "galaxyInfinity2018",
  "galaxy-note8": "galaxyInfinity2017",
  "galaxy-s8-plus": "galaxyInfinity2017",
  "galaxy-s8": "galaxyInfinity2017",
  "galaxy-s7-edge": "galaxyHomeButton",
  "galaxy-s7": "galaxyHomeButton",
  "galaxy-z-flip7": "galaxyCenterPunchFlip",
  "galaxy-z-flip6": "galaxyCenterPunchFlip",
  "galaxy-z-flip5": "galaxyCenterPunchFlip",
  "galaxy-z-flip4": "galaxyCenterPunchFlip",
  "galaxy-z-flip3": "galaxyCenterPunchFlip",
  "galaxy-z-flip-5g": "galaxyCenterPunchFlip",
};

const deviceGroupLabels = {
  iPhone: "iPhone · 2016-2025",
  Galaxy: "Galaxy 플래그십 · 2016-2026",
  Custom: "직접 입력",
};

const deviceGroupOrder = ["iPhone", "Galaxy", "Custom"];

function getDisplayCutoutPreset(presetId) {
  return displayCutoutPresets[presetId] || displayCutoutPresets.none;
}

function createDeviceProfiles(group, safeZonePreset, entries) {
  return entries.map((entry) => ({
    ...entry,
    group,
    safeZones: deviceSafeZones[safeZonePreset],
    displayCutout: getDisplayCutoutPreset(displayCutoutByDeviceId[entry.id]),
  }));
}

const iphoneProfiles = [
  ...createDeviceProfiles("iPhone", "iphoneIsland", [
    {
      id: "iphone-17-pro-max",
      name: "iPhone 17 Pro Max (2025)",
      width: 1320,
      height: 2868,
      note: "2025 · 6.9형 · Dynamic Island",
    },
    {
      id: "iphone-17-pro",
      name: "iPhone 17 Pro (2025)",
      width: 1206,
      height: 2622,
      note: "2025 · 6.3형 · Dynamic Island",
    },
    {
      id: "iphone-air",
      name: "iPhone Air (2025)",
      width: 1260,
      height: 2736,
      note: "2025 · 6.5형 · Dynamic Island",
    },
    {
      id: "iphone-17",
      name: "iPhone 17 (2025)",
      width: 1206,
      height: 2622,
      note: "2025 · 6.3형 · Dynamic Island",
    },
    {
      id: "iphone-16-pro-max",
      name: "iPhone 16 Pro Max (2024)",
      width: 1320,
      height: 2868,
      note: "2024 · 6.9형 · Dynamic Island",
    },
    {
      id: "iphone-16-pro",
      name: "iPhone 16 Pro (2024)",
      width: 1206,
      height: 2622,
      note: "2024 · 6.3형 · Dynamic Island",
    },
    {
      id: "iphone-16-plus",
      name: "iPhone 16 Plus (2024)",
      width: 1290,
      height: 2796,
      note: "2024 · 6.7형 · Dynamic Island",
    },
    {
      id: "iphone-16",
      name: "iPhone 16 (2024)",
      width: 1179,
      height: 2556,
      note: "2024 · 6.1형 · Dynamic Island",
    },
    {
      id: "iphone-15-pro-max",
      name: "iPhone 15 Pro Max (2023)",
      width: 1290,
      height: 2796,
      note: "2023 · 6.7형 · Dynamic Island",
    },
    {
      id: "iphone-15-pro",
      name: "iPhone 15 Pro (2023)",
      width: 1179,
      height: 2556,
      note: "2023 · 6.1형 · Dynamic Island",
    },
    {
      id: "iphone-15-plus",
      name: "iPhone 15 Plus (2023)",
      width: 1290,
      height: 2796,
      note: "2023 · 6.7형 · Dynamic Island",
    },
    {
      id: "iphone-15",
      name: "iPhone 15 (2023)",
      width: 1179,
      height: 2556,
      note: "2023 · 6.1형 · Dynamic Island",
    },
    {
      id: "iphone-14-pro-max",
      name: "iPhone 14 Pro Max (2022)",
      width: 1290,
      height: 2796,
      note: "2022 · 6.7형 · Dynamic Island",
    },
    {
      id: "iphone-14-pro",
      name: "iPhone 14 Pro (2022)",
      width: 1179,
      height: 2556,
      note: "2022 · 6.1형 · Dynamic Island",
    },
  ]),
  ...createDeviceProfiles("iPhone", "iphoneNotch", [
    {
      id: "iphone-16e",
      name: "iPhone 16e (2025)",
      width: 1170,
      height: 2532,
      note: "2025 · 6.1형 · 노치",
    },
    {
      id: "iphone-14-plus",
      name: "iPhone 14 Plus (2022)",
      width: 1284,
      height: 2778,
      note: "2022 · 6.7형 · 노치",
    },
    {
      id: "iphone-14",
      name: "iPhone 14 (2022)",
      width: 1170,
      height: 2532,
      note: "2022 · 6.1형 · 노치",
    },
    {
      id: "iphone-13-pro-max",
      name: "iPhone 13 Pro Max (2021)",
      width: 1284,
      height: 2778,
      note: "2021 · 6.7형 · 노치",
    },
    {
      id: "iphone-13-pro",
      name: "iPhone 13 Pro (2021)",
      width: 1170,
      height: 2532,
      note: "2021 · 6.1형 · 노치",
    },
    {
      id: "iphone-13",
      name: "iPhone 13 (2021)",
      width: 1170,
      height: 2532,
      note: "2021 · 6.1형 · 노치",
    },
    {
      id: "iphone-13-mini",
      name: "iPhone 13 mini (2021)",
      width: 1080,
      height: 2340,
      note: "2021 · 5.4형 · 노치",
    },
    {
      id: "iphone-12-pro-max",
      name: "iPhone 12 Pro Max (2020)",
      width: 1284,
      height: 2778,
      note: "2020 · 6.7형 · 노치",
    },
    {
      id: "iphone-12-pro",
      name: "iPhone 12 Pro (2020)",
      width: 1170,
      height: 2532,
      note: "2020 · 6.1형 · 노치",
    },
    {
      id: "iphone-12",
      name: "iPhone 12 (2020)",
      width: 1170,
      height: 2532,
      note: "2020 · 6.1형 · 노치",
    },
    {
      id: "iphone-12-mini",
      name: "iPhone 12 mini (2020)",
      width: 1080,
      height: 2340,
      note: "2020 · 5.4형 · 노치",
    },
    {
      id: "iphone-11-pro-max",
      name: "iPhone 11 Pro Max (2019)",
      width: 1242,
      height: 2688,
      note: "2019 · 6.5형 · 노치",
    },
    {
      id: "iphone-11-pro",
      name: "iPhone 11 Pro (2019)",
      width: 1125,
      height: 2436,
      note: "2019 · 5.8형 · 노치",
    },
    {
      id: "iphone-11",
      name: "iPhone 11 (2019)",
      width: 828,
      height: 1792,
      note: "2019 · 6.1형 · 노치",
    },
    {
      id: "iphone-xs-max",
      name: "iPhone XS Max (2018)",
      width: 1242,
      height: 2688,
      note: "2018 · 6.5형 · 노치",
    },
    {
      id: "iphone-xs",
      name: "iPhone XS (2018)",
      width: 1125,
      height: 2436,
      note: "2018 · 5.8형 · 노치",
    },
    {
      id: "iphone-xr",
      name: "iPhone XR (2018)",
      width: 828,
      height: 1792,
      note: "2018 · 6.1형 · 노치",
    },
    {
      id: "iphone-x",
      name: "iPhone X (2017)",
      width: 1125,
      height: 2436,
      note: "2017 · 5.8형 · 노치",
    },
  ]),
  ...createDeviceProfiles("iPhone", "iphoneClassic", [
    {
      id: "iphone-se-3",
      name: "iPhone SE 3세대 (2022)",
      width: 750,
      height: 1334,
      note: "2022 · 4.7형 · 홈 버튼",
    },
    {
      id: "iphone-se-2",
      name: "iPhone SE 2세대 (2020)",
      width: 750,
      height: 1334,
      note: "2020 · 4.7형 · 홈 버튼",
    },
    {
      id: "iphone-8-plus",
      name: "iPhone 8 Plus (2017)",
      width: 1080,
      height: 1920,
      note: "2017 · 5.5형 · 홈 버튼",
    },
    {
      id: "iphone-8",
      name: "iPhone 8 (2017)",
      width: 750,
      height: 1334,
      note: "2017 · 4.7형 · 홈 버튼",
    },
    {
      id: "iphone-7-plus",
      name: "iPhone 7 Plus (2016)",
      width: 1080,
      height: 1920,
      note: "2016 · 5.5형 · 홈 버튼",
    },
    {
      id: "iphone-7",
      name: "iPhone 7 (2016)",
      width: 750,
      height: 1334,
      note: "2016 · 4.7형 · 홈 버튼",
    },
    {
      id: "iphone-se-1",
      name: "iPhone SE 1세대 (2016)",
      width: 640,
      height: 1136,
      note: "2016 · 4.0형 · 홈 버튼",
    },
  ]),
];

const galaxyProfiles = [
  ...createDeviceProfiles("Galaxy", "galaxyModern", [
    {
      id: "galaxy-s26-ultra",
      name: "Galaxy S26 Ultra (2026)",
      width: 1440,
      height: 3120,
      note: "2026 · 6.9형 · S Pen 지원",
    },
    {
      id: "galaxy-s26-plus",
      name: "Galaxy S26+ (2026)",
      width: 1440,
      height: 3120,
      note: "2026 · 6.7형 · Quad HD+",
    },
    {
      id: "galaxy-s26",
      name: "Galaxy S26 (2026)",
      width: 1080,
      height: 2340,
      note: "2026 · 6.3형 · FHD+",
    },
    {
      id: "galaxy-s25-ultra",
      name: "Galaxy S25 Ultra (2025)",
      width: 1440,
      height: 3120,
      note: "2025 · 6.9형 · S Pen 지원",
    },
    {
      id: "galaxy-s25-edge",
      name: "Galaxy S25 Edge (2025)",
      width: 1440,
      height: 3120,
      note: "2025 · 6.7형 · 슬림 모델",
    },
    {
      id: "galaxy-s25-plus",
      name: "Galaxy S25+ (2025)",
      width: 1440,
      height: 3120,
      note: "2025 · 6.7형 · Quad HD+",
    },
    {
      id: "galaxy-s25",
      name: "Galaxy S25 (2025)",
      width: 1080,
      height: 2340,
      note: "2025 · 6.2형 · FHD+",
    },
    {
      id: "galaxy-s24-ultra",
      name: "Galaxy S24 Ultra (2024)",
      width: 1440,
      height: 3120,
      note: "2024 · 6.8형 · S Pen 지원",
    },
    {
      id: "galaxy-s24-plus",
      name: "Galaxy S24+ (2024)",
      width: 1440,
      height: 3120,
      note: "2024 · 6.7형 · Quad HD+",
    },
    {
      id: "galaxy-s24",
      name: "Galaxy S24 (2024)",
      width: 1080,
      height: 2340,
      note: "2024 · 6.2형 · FHD+",
    },
    {
      id: "galaxy-s24-fe",
      name: "Galaxy S24 FE (2024)",
      width: 1080,
      height: 2340,
      note: "2024 · 6.7형 · FE",
    },
    {
      id: "galaxy-s23-ultra",
      name: "Galaxy S23 Ultra (2023)",
      width: 1440,
      height: 3088,
      note: "2023 · 6.8형 · S Pen 지원",
    },
    {
      id: "galaxy-s23-plus",
      name: "Galaxy S23+ (2023)",
      width: 1080,
      height: 2340,
      note: "2023 · 6.6형 · FHD+",
    },
    {
      id: "galaxy-s23",
      name: "Galaxy S23 (2023)",
      width: 1080,
      height: 2340,
      note: "2023 · 6.1형 · FHD+",
    },
    {
      id: "galaxy-s23-fe",
      name: "Galaxy S23 FE (2023)",
      width: 1080,
      height: 2340,
      note: "2023 · 6.4형 · FE",
    },
    {
      id: "galaxy-s22-ultra",
      name: "Galaxy S22 Ultra (2022)",
      width: 1440,
      height: 3088,
      note: "2022 · 6.8형 · S Pen 지원",
    },
    {
      id: "galaxy-s22-plus",
      name: "Galaxy S22+ (2022)",
      width: 1080,
      height: 2340,
      note: "2022 · 6.6형 · FHD+",
    },
    {
      id: "galaxy-s22",
      name: "Galaxy S22 (2022)",
      width: 1080,
      height: 2340,
      note: "2022 · 6.1형 · FHD+",
    },
    {
      id: "galaxy-s21-ultra",
      name: "Galaxy S21 Ultra (2021)",
      width: 1440,
      height: 3200,
      note: "2021 · 6.8형 · Quad HD+",
    },
    {
      id: "galaxy-s21-plus",
      name: "Galaxy S21+ (2021)",
      width: 1080,
      height: 2400,
      note: "2021 · 6.7형 · FHD+",
    },
    {
      id: "galaxy-s21",
      name: "Galaxy S21 (2021)",
      width: 1080,
      height: 2400,
      note: "2021 · 6.2형 · FHD+",
    },
    {
      id: "galaxy-s21-fe",
      name: "Galaxy S21 FE (2022)",
      width: 1080,
      height: 2340,
      note: "2022 · 6.4형 · FE",
    },
    {
      id: "galaxy-note20-ultra",
      name: "Galaxy Note20 Ultra (2020)",
      width: 1440,
      height: 3088,
      note: "2020 · 6.9형 · S Pen 지원",
    },
    {
      id: "galaxy-note20",
      name: "Galaxy Note20 (2020)",
      width: 1080,
      height: 2400,
      note: "2020 · 6.7형 · FHD+",
    },
    {
      id: "galaxy-s20-ultra",
      name: "Galaxy S20 Ultra (2020)",
      width: 1440,
      height: 3200,
      note: "2020 · 6.9형 · Quad HD+",
    },
    {
      id: "galaxy-s20-plus",
      name: "Galaxy S20+ (2020)",
      width: 1440,
      height: 3200,
      note: "2020 · 6.7형 · Quad HD+",
    },
    {
      id: "galaxy-s20",
      name: "Galaxy S20 (2020)",
      width: 1440,
      height: 3200,
      note: "2020 · 6.2형 · Quad HD+",
    },
    {
      id: "galaxy-s20-fe",
      name: "Galaxy S20 FE (2020)",
      width: 1080,
      height: 2400,
      note: "2020 · 6.5형 · FE",
    },
    {
      id: "galaxy-note10-plus",
      name: "Galaxy Note10+ (2019)",
      width: 1440,
      height: 3040,
      note: "2019 · 6.8형 · S Pen 지원",
    },
    {
      id: "galaxy-note10",
      name: "Galaxy Note10 (2019)",
      width: 1080,
      height: 2280,
      note: "2019 · 6.3형 · FHD+",
    },
    {
      id: "galaxy-s10-plus",
      name: "Galaxy S10+ (2019)",
      width: 1440,
      height: 3040,
      note: "2019 · 6.4형 · Quad HD+",
    },
    {
      id: "galaxy-s10",
      name: "Galaxy S10 (2019)",
      width: 1440,
      height: 3040,
      note: "2019 · 6.1형 · Quad HD+",
    },
    {
      id: "galaxy-s10e",
      name: "Galaxy S10e (2019)",
      width: 1080,
      height: 2280,
      note: "2019 · 5.8형 · FHD+",
    },
    {
      id: "galaxy-note9",
      name: "Galaxy Note9 (2018)",
      width: 1440,
      height: 2960,
      note: "2018 · 6.4형 · S Pen 지원",
    },
    {
      id: "galaxy-s9-plus",
      name: "Galaxy S9+ (2018)",
      width: 1440,
      height: 2960,
      note: "2018 · 6.2형 · Quad HD+",
    },
    {
      id: "galaxy-s9",
      name: "Galaxy S9 (2018)",
      width: 1440,
      height: 2960,
      note: "2018 · 5.8형 · Quad HD+",
    },
    {
      id: "galaxy-note8",
      name: "Galaxy Note8 (2017)",
      width: 1440,
      height: 2960,
      note: "2017 · 6.3형 · S Pen 지원",
    },
    {
      id: "galaxy-s8-plus",
      name: "Galaxy S8+ (2017)",
      width: 1440,
      height: 2960,
      note: "2017 · 6.2형 · Quad HD+",
    },
    {
      id: "galaxy-s8",
      name: "Galaxy S8 (2017)",
      width: 1440,
      height: 2960,
      note: "2017 · 5.8형 · Quad HD+",
    },
  ]),
  ...createDeviceProfiles("Galaxy", "galaxyLegacy", [
    {
      id: "galaxy-s7-edge",
      name: "Galaxy S7 edge (2016)",
      width: 1440,
      height: 2560,
      note: "2016 · 5.5형 · Quad HD",
    },
    {
      id: "galaxy-s7",
      name: "Galaxy S7 (2016)",
      width: 1440,
      height: 2560,
      note: "2016 · 5.1형 · Quad HD",
    },
  ]),
  ...createDeviceProfiles("Galaxy", "galaxyFlip", [
    {
      id: "galaxy-z-flip7",
      name: "Galaxy Z Flip7 (2025)",
      width: 1080,
      height: 2520,
      note: "2025 · 6.9형 · Z Flip",
    },
    {
      id: "galaxy-z-flip6",
      name: "Galaxy Z Flip6 (2024)",
      width: 1080,
      height: 2640,
      note: "2024 · 6.7형 · Z Flip",
    },
    {
      id: "galaxy-z-flip5",
      name: "Galaxy Z Flip5 (2023)",
      width: 1080,
      height: 2640,
      note: "2023 · 6.7형 · Z Flip",
    },
    {
      id: "galaxy-z-flip4",
      name: "Galaxy Z Flip4 (2022)",
      width: 1080,
      height: 2640,
      note: "2022 · 6.7형 · Z Flip",
    },
    {
      id: "galaxy-z-flip3",
      name: "Galaxy Z Flip3 (2021)",
      width: 1080,
      height: 2640,
      note: "2021 · 6.7형 · Z Flip",
    },
    {
      id: "galaxy-z-flip-5g",
      name: "Galaxy Z Flip 5G (2020)",
      width: 1080,
      height: 2636,
      note: "2020 · 6.7형 · Z Flip",
    },
  ]),
];

const customDeviceProfile = {
  id: "custom",
  name: "직접 입력",
  width: 1290,
  height: 2796,
  note: "해상도를 직접 넣고 공용 안전 영역 로직 사용",
  group: "Custom",
  safeZones: deviceSafeZones.custom,
  displayCutout: displayCutoutPresets.none,
};

const deviceProfiles = [...iphoneProfiles, ...galaxyProfiles, customDeviceProfile];

const screenModes = [
  { id: "lock", name: "잠금 화면" },
  { id: "home", name: "홈 화면" },
];

const customResolutionLimits = {
  minWidth: 100,
  maxWidth: 3200,
  minHeight: 100,
  maxHeight: 5000,
};

function createThemePreset(config) {
  return {
    photoBlendOpacity: 0.18,
    glowOpacity: 0.48,
    gridOpacity: 0.16,
    gridColor: "rgba(17,24,39,0.045)",
    previewSurface: "#f4f1ea",
    cardFill: "rgba(255,255,255,0.96)",
    cardShadowLayer: "0 18px 40px rgba(15, 23, 42, 0.12)",
    cardShadowColor: "rgba(145, 155, 170, 0.24)",
    cardShadowBlurFactor: 0.06,
    cardShadowOffsetFactor: 0.022,
    cardStroke: "rgba(17,24,39,0.08)",
    frameOutline: "rgba(17,24,39,0.06)",
    frameHighlight: "rgba(255,255,255,0.42)",
    overlayStops: [
      "rgba(255,255,255,0.54)",
      "rgba(255,255,255,0)",
      "rgba(232,226,217,0.18)",
    ],
    ...config,
  };
}

const themePresets = [
  createThemePreset({
    id: "paper-ivory",
    name: "Paper Ivory",
    meta: "오프화이트 + 샌드 베이지",
    gradient: ["#fcfbf7", "#f3eee4", "#e6dccf"],
    glow: "rgba(233, 220, 196, 0.85)",
  }),
  createThemePreset({
    id: "soft-mint",
    name: "Soft Mint",
    meta: "화이트 + 페일 민트 포인트",
    gradient: ["#fcfdfb", "#eef4ef", "#d7e6db"],
    glow: "rgba(201, 225, 210, 0.82)",
  }),
  createThemePreset({
    id: "cloud-blue",
    name: "Cloud Blue",
    meta: "라이트 그레이 + 소프트 블루",
    gradient: ["#f9fafc", "#edf2f7", "#dce6f1"],
    glow: "rgba(202, 217, 234, 0.82)",
  }),
  createThemePreset({
    id: "eta-white",
    name: "ETA White",
    meta: "에타 화이트 모드 시간표용 · 순백 배경",
    gradient: ["#ffffff", "#ffffff", "#ffffff"],
    glow: "rgba(255,255,255,0)",
    photoBlendOpacity: 0,
    glowOpacity: 0,
    gridOpacity: 0,
    previewSurface: "#ffffff",
    cardFill: "rgba(255,255,255,1)",
    cardShadowLayer: "0 16px 36px rgba(15, 23, 42, 0.08)",
    overlayStops: ["rgba(255,255,255,0)", "rgba(255,255,255,0)", "rgba(255,255,255,0)"],
  }),
  createThemePreset({
    id: "eta-dark",
    name: "ETA Dark",
    meta: "에타 다크 모드 시간표용 · 순검정 배경",
    gradient: ["#070708", "#070708", "#070708"],
    glow: "rgba(255,255,255,0)",
    photoBlendOpacity: 0,
    glowOpacity: 0,
    gridOpacity: 0,
    previewSurface: "#070708",
    cardFill: "rgba(14,14,16,0.96)",
    cardShadowLayer: "0 20px 46px rgba(0, 0, 0, 0.42)",
    cardShadowColor: "rgba(0, 0, 0, 0.42)",
    cardStroke: "rgba(255,255,255,0.1)",
    frameOutline: "rgba(255,255,255,0.08)",
    frameHighlight: "rgba(255,255,255,0.02)",
    overlayStops: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0)", "rgba(0,0,0,0)"],
  }),
];

const defaultsByMode = {
  lock: {
    size: 0.72,
    x: 0.5,
    y: 0.63,
    radius: 28,
  },
  home: {
    size: 0.78,
    x: 0.5,
    y: 0.58,
    radius: 24,
  },
};

const state = {
  sources: [...builtInImages],
  selectedSourceId: builtInImages[0]?.id ?? null,
  selectedDeviceId: deviceProfiles[0].id,
  lastPresetDeviceId: deviceProfiles[0].id,
  selectedThemeId: "eta-white",
  screenMode: screenModes[0].id,
  sourceBlend: true,
  safePlacement: true,
  cardWidthRatio: defaultsByMode.lock.size,
  x: defaultsByMode.lock.x,
  y: defaultsByMode.lock.y,
  cornerRadius: defaultsByMode.lock.radius,
  activeImage: null,
  dragSession: null,
  customWidth: deviceProfiles[0].width,
  customHeight: deviceProfiles[0].height,
  customWidthDraft: String(deviceProfiles[0].width),
  customHeightDraft: String(deviceProfiles[0].height),
};

const elements = {
  sourceGrid: document.getElementById("sourceGrid"),
  imageUpload: document.getElementById("imageUpload"),
  profileModeGroup: document.getElementById("profileModeGroup"),
  devicePresetField: document.getElementById("devicePresetField"),
  deviceSelect: document.getElementById("deviceSelect"),
  deviceMeta: document.getElementById("deviceMeta"),
  screenModeGroup: document.getElementById("screenModeGroup"),
  customGrid: document.getElementById("customGrid"),
  customHint: document.getElementById("customHint"),
  customWidth: document.getElementById("customWidth"),
  customHeight: document.getElementById("customHeight"),
  themeGrid: document.getElementById("themeGrid"),
  sourceBlend: document.getElementById("sourceBlend"),
  safePlacement: document.getElementById("safePlacement"),
  sizeRange: document.getElementById("sizeRange"),
  xRange: document.getElementById("xRange"),
  yRange: document.getElementById("yRange"),
  cornerRange: document.getElementById("cornerRange"),
  sizeValue: document.getElementById("sizeValue"),
  xValue: document.getElementById("xValue"),
  yValue: document.getElementById("yValue"),
  cornerValue: document.getElementById("cornerValue"),
  autoArrangeButton: document.getElementById("autoArrangeButton"),
  resetButton: document.getElementById("resetButton"),
  downloadButton: document.getElementById("downloadButton"),
  statusMessage: document.getElementById("statusMessage"),
  previewSpec: document.getElementById("previewSpec"),
  phonePreview: document.getElementById("phonePreview"),
  imageCard: document.getElementById("imageCard"),
  overlapWarning: document.getElementById("overlapWarning"),
  floatingPreviewDock: document.getElementById("floatingPreviewDock"),
  floatingPreviewSpec: document.getElementById("floatingPreviewSpec"),
  floatingPreviewPeek: document.getElementById("floatingPreviewPeek"),
  floatingPreviewToggle: document.getElementById("floatingPreviewToggle"),
  floatingPreviewJump: document.getElementById("floatingPreviewJump"),
  floatingPhonePreview: document.getElementById("floatingPhonePreview"),
};

function createPreviewTarget(root, specNode, compact = false) {
  return {
    root,
    specNode,
    compact,
    backgroundPhoto: root.querySelector(".background-photo"),
    backgroundGradient: root.querySelector(".background-gradient"),
    backgroundGrid: root.querySelector(".background-grid"),
    clockZone: root.querySelector(".clock-zone"),
    clockZoneLabel: root.querySelector(".clock-zone span"),
    imageCard: root.querySelector(".image-card"),
    imageCardImage: root.querySelector(".image-card img"),
    displayCutout: root.querySelector(".display-cutout"),
  };
}

const previewTargets = [
  createPreviewTarget(elements.phonePreview, elements.previewSpec),
  createPreviewTarget(elements.floatingPhonePreview, elements.floatingPreviewSpec, true),
];

let floatingPreviewFrame = 0;
const centerSnapThreshold = 0.018;
let floatingPreviewCollapsed = false;

function setStatus(message) {
  elements.statusMessage.textContent = message;
}

function trackEvent(name, params = {}) {
  window.etaAnalytics?.track?.(name, params);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeHtml(value) {
  return escapeAttribute(value);
}

function getSelectedSource() {
  return state.sources.find((source) => source.id === state.selectedSourceId);
}

function getSourceType(source) {
  if (!source) {
    return "none";
  }

  return source.id.startsWith("upload-") ? "upload" : "built_in";
}

function getSelectedTheme() {
  return themePresets.find((theme) => theme.id === state.selectedThemeId);
}

function getPreviewBackgroundCss(theme) {
  return `linear-gradient(180deg, ${theme.overlayStops[0]} 0%, ${theme.overlayStops[1]} 32%), linear-gradient(145deg, ${theme.gradient[0]} 0%, ${theme.gradient[1]} 52%, ${theme.gradient[2]} 100%)`;
}

function getSelectedDevice() {
  if (state.selectedDeviceId !== "custom") {
    return (
      deviceProfiles.find((device) => device.id === state.selectedDeviceId) ||
      deviceProfiles[0]
    );
  }

  const template = deviceProfiles.find((device) => device.id === "custom");
  return {
    ...template,
    width: clamp(
      Number(state.customWidth) || template.width,
      customResolutionLimits.minWidth,
      customResolutionLimits.maxWidth,
    ),
    height: clamp(
      Number(state.customHeight) || template.height,
      customResolutionLimits.minHeight,
      customResolutionLimits.maxHeight,
    ),
  };
}

function syncCustomInputValue(element, value) {
  if (document.activeElement === element) {
    return;
  }

  element.value = value;
}

function sanitizeDigits(value) {
  return String(value ?? "").replace(/\D+/g, "");
}

function syncCustomResolutionFromDevice(device) {
  state.customWidth = clamp(
    Number(device?.width) || deviceProfiles[0].width,
    customResolutionLimits.minWidth,
    customResolutionLimits.maxWidth,
  );
  state.customHeight = clamp(
    Number(device?.height) || deviceProfiles[0].height,
    customResolutionLimits.minHeight,
    customResolutionLimits.maxHeight,
  );
  state.customWidthDraft = String(state.customWidth);
  state.customHeightDraft = String(state.customHeight);
}

function updateCustomResolution(axis, inputElement) {
  if (state.selectedDeviceId !== "custom") {
    return;
  }

  const isWidth = axis === "width";
  const min = isWidth ? customResolutionLimits.minWidth : customResolutionLimits.minHeight;
  const max = isWidth ? customResolutionLimits.maxWidth : customResolutionLimits.maxHeight;
  const draftKey = isWidth ? "customWidthDraft" : "customHeightDraft";
  const valueKey = isWidth ? "customWidth" : "customHeight";
  const normalized = sanitizeDigits(inputElement.value);
  const parsed = Number(normalized);

  if (inputElement.value !== normalized) {
    inputElement.value = normalized;
  }

  state[draftKey] = normalized;

  if (normalized && Number.isFinite(parsed) && parsed >= min) {
    state[valueKey] = clamp(parsed, min, max);
  }

  render();
  syncAnalyticsContext();
}

function commitCustomResolution(axis) {
  if (state.selectedDeviceId !== "custom") {
    return;
  }

  const isWidth = axis === "width";
  const min = isWidth ? customResolutionLimits.minWidth : customResolutionLimits.minHeight;
  const max = isWidth ? customResolutionLimits.maxWidth : customResolutionLimits.maxHeight;
  const draftKey = isWidth ? "customWidthDraft" : "customHeightDraft";
  const valueKey = isWidth ? "customWidth" : "customHeight";
  const inputElement = isWidth ? elements.customWidth : elements.customHeight;
  const normalized = sanitizeDigits(state[draftKey]);
  const parsed = Number(normalized);

  if (normalized && Number.isFinite(parsed)) {
    state[valueKey] = clamp(parsed, min, max);
  }

  state[draftKey] = String(state[valueKey]);
  inputElement.value = state[draftKey];
  render();
  syncAnalyticsContext();
}

function syncAnalyticsContext() {
  const device = getSelectedDevice();
  const theme = getSelectedTheme();
  const source = getSelectedSource();

  window.etaAnalytics?.setContext?.({
    device_id: device.id,
    device_group: device.group || "Custom",
    output_width: device.width,
    output_height: device.height,
    screen_mode: state.screenMode,
    theme_id: theme.id,
    source_type: getSourceType(source),
    safe_placement: state.safePlacement,
    source_blend: state.sourceBlend,
  });
}

function setProfileMode(mode) {
  if (mode === "custom") {
    state.selectedDeviceId = "custom";
    autoArrangeCard(false);
    render();
    syncAnalyticsContext();
    trackEvent("profile_mode_changed", {
      profile_mode: "custom",
    });
    setStatus("직접 입력 모드로 전환했습니다.");
    return;
  }

  state.selectedDeviceId = state.lastPresetDeviceId || deviceProfiles[0].id;
  syncCustomResolutionFromDevice(getSelectedDevice());
  autoArrangeCard(false);
  render();
  syncAnalyticsContext();
  trackEvent("profile_mode_changed", {
    profile_mode: "preset",
  });
  setStatus("기기 프리셋 모드로 전환했습니다.");
}

function getDisplayCutout(device) {
  return device?.displayCutout || displayCutoutPresets.none;
}

function getSafeZone(device) {
  return device.safeZones[state.screenMode] || device.safeZones.lock;
}

function getVisibleDisplayBounds(device, cardHeight = 0) {
  const cutout = getDisplayCutout(device);
  const minY = (cutout.bezelTop || 0) + cardHeight / 2;
  const maxY = Math.max(minY, 1 - (cutout.bezelBottom || 0) - cardHeight / 2);
  return {
    minY,
    maxY,
  };
}

function getCardMetrics(device) {
  const image = state.activeImage;
  const imageAspect = image ? image.naturalHeight / image.naturalWidth : 1.56;
  const width = clamp(state.cardWidthRatio, 0.42, 0.92);
  const height = width * imageAspect * (device.width / device.height);
  return { width, height };
}

function rectFromCenter(x, y, width, height) {
  return {
    left: x - width / 2,
    top: y - height / 2,
    width,
    height,
  };
}

function overlaps(a, b) {
  return (
    a.left < b.x + b.width &&
    a.left + a.width > b.x &&
    a.top < b.y + b.height &&
    a.top + a.height > b.y
  );
}

function snapValueToCenter(value, min, max) {
  if (0.5 < min || 0.5 > max) {
    return value;
  }

  return Math.abs(value - 0.5) <= centerSnapThreshold ? 0.5 : value;
}

function resolveCardPlacement(device, desiredX = state.x, desiredY = state.y) {
  const { width, height } = getCardMetrics(device);
  const safeZone = getSafeZone(device);
  const bounds = getVisibleDisplayBounds(device, height);
  const minX = width / 2;
  const maxX = 1 - width / 2;

  let x = clamp(snapValueToCenter(desiredX, minX, maxX), minX, maxX);
  let y = clamp(snapValueToCenter(desiredY, bounds.minY, bounds.maxY), bounds.minY, bounds.maxY);
  let rect = rectFromCenter(x, y, width, height);
  let overlap = overlaps(rect, safeZone);

  if (state.safePlacement && overlap) {
    const candidates = [];
    const gap = 0.028;
    const belowY = safeZone.y + safeZone.height + height / 2 + gap;
    const aboveY = safeZone.y - height / 2 - gap;
    const leftX = safeZone.x - width / 2 - gap;
    const rightX = safeZone.x + safeZone.width + width / 2 + gap;

    if (belowY <= bounds.maxY) {
      candidates.push({ x, y: belowY });
    }

    if (aboveY >= bounds.minY) {
      candidates.push({ x, y: aboveY });
    }

    if (leftX >= width / 2) {
      candidates.push({ x: leftX, y });
    }

    if (rightX <= 1 - width / 2) {
      candidates.push({ x: rightX, y });
    }

    if (candidates.length > 0) {
      const best = candidates.reduce((closest, candidate) => {
        const currentDistance =
          (candidate.x - desiredX) ** 2 + (candidate.y - desiredY) ** 2;
        const bestDistance =
          (closest.x - desiredX) ** 2 + (closest.y - desiredY) ** 2;
        return currentDistance < bestDistance ? candidate : closest;
      });
      x = clamp(best.x, minX, maxX);
      y = clamp(best.y, bounds.minY, bounds.maxY);
    } else {
      y = clamp(safeZone.y + safeZone.height + height / 2 + gap, bounds.minY, bounds.maxY);
    }

    rect = rectFromCenter(x, y, width, height);
    overlap = overlaps(rect, safeZone);
  }

  return { x, y, width, height, rect, overlap, safeZone };
}

function syncControlValues() {
  elements.sizeRange.value = Math.round(state.cardWidthRatio * 100);
  elements.xRange.value = Math.round(state.x * 100);
  elements.yRange.value = Math.round(state.y * 100);
  elements.cornerRange.value = state.cornerRadius;
  elements.sizeValue.textContent = `${Math.round(state.cardWidthRatio * 100)}%`;
  elements.xValue.textContent = `${Math.round(state.x * 100)}%`;
  elements.yValue.textContent = `${Math.round(state.y * 100)}%`;
  elements.cornerValue.textContent = `${state.cornerRadius}px`;
}

function renderSources() {
  if (state.sources.length === 0) {
    elements.sourceGrid.innerHTML = `
      <div class="source-empty-state">
        <strong>아직 업로드된 시간표가 없습니다</strong>
        <span>위의 이미지 업로드 버튼으로 에브리타임 시간표 이미지를 추가하세요.</span>
      </div>
    `;
    return;
  }

  elements.sourceGrid.innerHTML = state.sources
    .map((source) => {
      const selectedClass = source.id === state.selectedSourceId ? " is-selected" : "";
      return `
        <button class="source-tile${selectedClass}" type="button" data-source-id="${escapeAttribute(source.id)}">
          <div class="source-thumb">
            <img src="${escapeAttribute(source.src)}" alt="${escapeAttribute(source.name)} 미리보기" />
          </div>
          <div class="source-title">
            <span class="source-name">${escapeHtml(source.name)}</span>
            <span class="source-meta">${escapeHtml(source.meta)}</span>
          </div>
        </button>
      `;
    })
    .join("");

  elements.sourceGrid.querySelectorAll("[data-source-id]").forEach((button) => {
    button.addEventListener("click", async () => {
      state.selectedSourceId = button.dataset.sourceId;
      renderSources();
      await loadSelectedImage();
      autoArrangeCard(false);
      render();
      syncAnalyticsContext();
      trackEvent("timetable_source_selected", {
        source_type: getSourceType(getSelectedSource()),
      });
      setStatus("이미지를 바꿨습니다. 드래그해서 위치를 조정할 수 있습니다.");
    });
  });
}

function renderDevices() {
  const groupedDevices = deviceProfiles.reduce((groups, device) => {
    const groupKey = device.group || "Custom";
    if (groupKey === "Custom") {
      return groups;
    }

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(device);
    return groups;
  }, {});

  elements.deviceSelect.innerHTML = deviceGroupOrder
    .filter((groupKey) => groupedDevices[groupKey]?.length)
    .map((groupKey) => {
      const options = groupedDevices[groupKey]
        .map(
          (device) =>
            `<option value="${escapeAttribute(device.id)}">${escapeHtml(device.name)}</option>`,
        )
        .join("");

      if (groupKey === "Custom") {
        return options;
      }

      return `<optgroup label="${escapeAttribute(deviceGroupLabels[groupKey] || groupKey)}">${options}</optgroup>`;
    })
    .join("");

  elements.deviceSelect.value =
    state.selectedDeviceId === "custom" ? state.lastPresetDeviceId : state.selectedDeviceId;
}

function renderProfileModeToggle() {
  const selectedMode = state.selectedDeviceId === "custom" ? "custom" : "preset";
  elements.profileModeGroup.querySelectorAll("[data-profile-mode]").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.profileMode === selectedMode);
  });
}

function renderScreenModes() {
  elements.screenModeGroup.innerHTML = screenModes
    .map((mode) => {
      const selectedClass = mode.id === state.screenMode ? " is-selected" : "";
      return `
        <button class="screen-mode-button${selectedClass}" type="button" data-screen-mode="${mode.id}">
          ${escapeHtml(mode.name)}
        </button>
      `;
    })
    .join("");

  elements.screenModeGroup.querySelectorAll("[data-screen-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.screenMode = button.dataset.screenMode;
      renderScreenModes();
      resetLayoutToDefaults();
      autoArrangeCard(false);
      render();
      syncAnalyticsContext();
      trackEvent("screen_mode_changed", {
        screen_mode: state.screenMode,
      });
      setStatus("화면 타입을 바꿨습니다.");
    });
  });
}

function renderThemes() {
  elements.themeGrid.innerHTML = themePresets
    .map((theme) => {
      const selectedClass = theme.id === state.selectedThemeId ? " is-selected" : "";
      const background = `linear-gradient(145deg, ${theme.gradient[0]}, ${theme.gradient[1]} 56%, ${theme.gradient[2]})`;
      return `
        <button class="theme-tile${selectedClass}" type="button" data-theme-id="${theme.id}">
          <div class="theme-chip" style="background:${background}"></div>
          <div class="theme-title">
            <span class="source-name">${escapeHtml(theme.name)}</span>
            <span class="theme-meta">${escapeHtml(theme.meta)}</span>
          </div>
        </button>
      `;
    })
    .join("");

  elements.themeGrid.querySelectorAll("[data-theme-id]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedThemeId = button.dataset.themeId;
      renderThemes();
      render();
      syncAnalyticsContext();
      trackEvent("theme_changed", {
        theme_id: state.selectedThemeId,
      });
    });
  });
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`이미지를 불러오지 못했습니다: ${src}`));
    image.src = src;
  });
}

async function loadSelectedImage() {
  const source = getSelectedSource();

  if (!source) {
    state.activeImage = null;
    return;
  }

  setStatus(`${source.meta} 불러오는 중...`);
  try {
    if (!source.element) {
      source.element = await loadImage(source.src);
    }
    state.activeImage = source.element;
    setStatus("시간표 이미지를 불러왔습니다.");
  } catch (error) {
    state.activeImage = null;
    setStatus(error.message);
  }
}

function resetLayoutToDefaults() {
  const defaults = defaultsByMode[state.screenMode];
  state.cardWidthRatio = defaults.size;
  state.x = defaults.x;
  state.y = defaults.y;
  state.cornerRadius = defaults.radius;
  syncControlValues();
}

function autoArrangeCard(announce = true) {
  const device = getSelectedDevice();
  const safeZone = getSafeZone(device);
  const { height } = getCardMetrics(device);
  const bounds = getVisibleDisplayBounds(device, height);
  const gap = 0.05;

  state.x = 0.5;
  state.y = clamp(safeZone.y + safeZone.height + height / 2 + gap, bounds.minY, bounds.maxY);

  const resolved = resolveCardPlacement(device, state.x, state.y);
  state.x = resolved.x;
  state.y = resolved.y;
  syncControlValues();

  if (announce) {
    setStatus("시계 안전 영역 아래로 자동 배치했습니다.");
  }
}

function getPreviewSpecText(device, compact = false) {
  const screenLabel = state.screenMode === "lock" ? "잠금 화면" : "홈 화면";
  if (compact) {
    return `${device.name} · ${screenLabel}`;
  }
  return `${device.name} · ${device.width} × ${device.height} · ${screenLabel}`;
}

function getClockZoneLabelText() {
  return state.screenMode === "lock" ? "잠금 화면 시계 안전 영역" : "홈 화면 상단";
}

function syncFloatingPreviewDockState() {
  elements.floatingPreviewDock.classList.toggle("is-collapsed", floatingPreviewCollapsed);
  elements.floatingPreviewToggle.setAttribute("aria-expanded", String(!floatingPreviewCollapsed));
  elements.floatingPreviewToggle.setAttribute(
    "aria-label",
    "작은 미리보기를 옆으로 넣기",
  );
  elements.floatingPreviewToggle.title = "작은 미리보기를 옆으로 넣기";
  elements.floatingPreviewPeek.setAttribute("aria-hidden", String(!floatingPreviewCollapsed));
}

function applyPreviewState(preview, device, theme, selectedSource, resolved, cutout) {
  preview.specNode.textContent = getPreviewSpecText(device, preview.compact);
  preview.root.style.aspectRatio = `${device.width} / ${device.height}`;
  preview.root.style.setProperty("--theme-a", theme.gradient[0]);
  preview.root.style.setProperty("--theme-b", theme.gradient[1]);
  preview.root.style.setProperty("--theme-c", theme.gradient[2]);
  preview.root.style.setProperty("--theme-d", theme.glow);
  preview.root.style.setProperty("--card-radius", `${state.cornerRadius}px`);
  preview.root.style.setProperty("--preview-surface", theme.previewSurface);
  preview.root.style.setProperty("--grid-line-color", theme.gridColor);
  preview.root.style.setProperty("--grid-opacity", `${theme.gridOpacity}`);
  preview.root.style.setProperty("--glow-opacity", `${theme.glowOpacity}`);
  preview.root.style.setProperty("--card-surface", theme.cardFill);
  preview.root.style.setProperty("--card-shadow-layer", theme.cardShadowLayer);
  preview.root.style.setProperty("--card-outline", theme.cardStroke);
  preview.root.style.setProperty("--frame-outline", theme.frameOutline);
  preview.root.style.setProperty("--frame-highlight", theme.frameHighlight);

  preview.backgroundPhoto.style.opacity =
    state.sourceBlend && selectedSource ? `${theme.photoBlendOpacity}` : "0";
  preview.backgroundPhoto.style.backgroundImage =
    state.sourceBlend && selectedSource ? `url("${selectedSource.src}")` : "none";
  preview.backgroundGradient.style.background = getPreviewBackgroundCss(theme);
  preview.backgroundGrid.style.opacity = `${theme.gridOpacity}`;

  preview.clockZone.style.left = `${resolved.safeZone.x * 100}%`;
  preview.clockZone.style.top = `${resolved.safeZone.y * 100}%`;
  preview.clockZone.style.width = `${resolved.safeZone.width * 100}%`;
  preview.clockZone.style.height = `${resolved.safeZone.height * 100}%`;
  preview.clockZoneLabel.textContent = getClockZoneLabelText();

  preview.displayCutout.hidden = cutout.type === "none";
  preview.displayCutout.dataset.cutoutType = cutout.type;
  preview.displayCutout.style.setProperty("--cutout-left", `${cutout.left * 100}%`);
  preview.displayCutout.style.setProperty("--cutout-top", `${cutout.top * 100}%`);
  preview.displayCutout.style.setProperty("--cutout-width", `${cutout.width * 100}%`);
  preview.displayCutout.style.setProperty("--cutout-height", `${cutout.height * 100}%`);
  preview.displayCutout.style.setProperty("--bezel-top", `${(cutout.bezelTop || 0) * 100}%`);
  preview.displayCutout.style.setProperty("--bezel-bottom", `${(cutout.bezelBottom || 0) * 100}%`);

  preview.imageCard.style.width = `${resolved.width * 100}%`;
  preview.imageCard.style.left = `${resolved.x * 100}%`;
  preview.imageCard.style.top = `${resolved.y * 100}%`;
  preview.imageCard.style.display = state.activeImage ? "block" : "none";
  preview.imageCard.disabled = !state.activeImage;

  if (selectedSource) {
    preview.imageCardImage.src = selectedSource.src;
    preview.imageCardImage.alt = `${selectedSource.name} 시간표`;
  } else {
    preview.imageCardImage.removeAttribute("src");
    preview.imageCardImage.alt = "시간표 이미지 미리보기";
  }
}

function updateFloatingPreviewVisibility() {
  const bounds = elements.phonePreview.getBoundingClientRect();
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const visibleHeight = Math.max(0, Math.min(bounds.bottom, viewportHeight) - Math.max(bounds.top, 0));
  const visibleRatio = bounds.height > 0 ? visibleHeight / bounds.height : 1;
  const shouldShow = visibleRatio < 0.45;

  elements.floatingPreviewDock.hidden = !shouldShow;
  elements.floatingPreviewDock.classList.toggle("is-visible", shouldShow);
  syncFloatingPreviewDockState();
}

function scheduleFloatingPreviewVisibility() {
  if (floatingPreviewFrame) {
    return;
  }

  floatingPreviewFrame = window.requestAnimationFrame(() => {
    floatingPreviewFrame = 0;
    updateFloatingPreviewVisibility();
  });
}

function render() {
  const device = getSelectedDevice();
  const theme = getSelectedTheme();
  const selectedSource = getSelectedSource();
  const resolved = resolveCardPlacement(device);
  const cutout = getDisplayCutout(device);
  const isCustomDevice = state.selectedDeviceId === "custom";

  state.x = resolved.x;
  state.y = resolved.y;
  syncControlValues();

  renderProfileModeToggle();
  elements.devicePresetField.hidden = isCustomDevice;
  elements.customGrid.hidden = !isCustomDevice;
  elements.customHint.hidden = !isCustomDevice;
  elements.deviceSelect.hidden = isCustomDevice;
  elements.deviceSelect.value = isCustomDevice ? state.lastPresetDeviceId : state.selectedDeviceId;
  elements.customWidth.disabled = !isCustomDevice;
  elements.customHeight.disabled = !isCustomDevice;
  syncCustomInputValue(elements.customWidth, state.customWidthDraft);
  syncCustomInputValue(elements.customHeight, state.customHeightDraft);
  elements.sourceBlend.checked = state.sourceBlend;
  elements.safePlacement.checked = state.safePlacement;
  elements.deviceMeta.textContent = isCustomDevice
    ? `${device.width} × ${device.height} · 직접 입력 해상도`
    : `${device.width} × ${device.height} · ${device.note}`;
  previewTargets.forEach((preview) => {
    applyPreviewState(preview, device, theme, selectedSource, resolved, cutout);
  });

  const showOverlap = !state.safePlacement && resolved.overlap;
  elements.overlapWarning.hidden = !showOverlap;

  elements.downloadButton.disabled = !state.activeImage;
  elements.imageCard.disabled = !state.activeImage;
  scheduleFloatingPreviewVisibility();
}

function drawCoverImage(ctx, image, canvasWidth, canvasHeight) {
  const imageRatio = image.naturalWidth / image.naturalHeight;
  const canvasRatio = canvasWidth / canvasHeight;
  let drawWidth;
  let drawHeight;
  let offsetX;
  let offsetY;

  if (imageRatio > canvasRatio) {
    drawHeight = canvasHeight;
    drawWidth = drawHeight * imageRatio;
    offsetX = (canvasWidth - drawWidth) / 2;
    offsetY = 0;
  } else {
    drawWidth = canvasWidth;
    drawHeight = drawWidth / imageRatio;
    offsetX = 0;
    offsetY = (canvasHeight - drawHeight) / 2;
  }

  ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
}

function roundedRectPath(ctx, x, y, width, height, radius) {
  const safeRadius = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + safeRadius, y);
  ctx.lineTo(x + width - safeRadius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  ctx.lineTo(x + width, y + height - safeRadius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  ctx.lineTo(x + safeRadius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  ctx.lineTo(x, y + safeRadius);
  ctx.quadraticCurveTo(x, y, x + safeRadius, y);
  ctx.closePath();
}

function drawBackground(ctx, device, theme) {
  const gradient = ctx.createLinearGradient(0, 0, device.width, device.height);
  gradient.addColorStop(0, theme.gradient[0]);
  gradient.addColorStop(0.48, theme.gradient[1]);
  gradient.addColorStop(1, theme.gradient[2]);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, device.width, device.height);

  if (state.sourceBlend && state.activeImage && theme.photoBlendOpacity > 0) {
    ctx.save();
    ctx.globalAlpha = theme.photoBlendOpacity;
    ctx.filter = `blur(${Math.round(device.width * 0.042)}px) saturate(1.02)`;
    drawCoverImage(ctx, state.activeImage, device.width, device.height);
    ctx.restore();
  }

  if (theme.overlayStops.some((stop) => stop !== "rgba(255,255,255,0)" && stop !== "rgba(0,0,0,0)")) {
    ctx.save();
    const topFade = ctx.createLinearGradient(0, 0, 0, device.height);
    topFade.addColorStop(0, theme.overlayStops[0]);
    topFade.addColorStop(0.35, theme.overlayStops[1]);
    topFade.addColorStop(1, theme.overlayStops[2]);
    ctx.fillStyle = topFade;
    ctx.fillRect(0, 0, device.width, device.height);
    ctx.restore();
  }

  if (theme.glowOpacity > 0) {
    [
      { x: 0.15, y: 0.18, radius: 0.22 },
      { x: 0.82, y: 0.72, radius: 0.2 },
    ].forEach((glow) => {
      const gradientGlow = ctx.createRadialGradient(
        device.width * glow.x,
        device.height * glow.y,
        0,
        device.width * glow.x,
        device.height * glow.y,
        device.width * glow.radius,
      );
      gradientGlow.addColorStop(0, theme.glow);
      gradientGlow.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradientGlow;
      ctx.fillRect(0, 0, device.width, device.height);
    });
  }

  if (theme.gridOpacity > 0) {
    ctx.save();
    ctx.globalAlpha = theme.gridOpacity / 0.16;
    ctx.strokeStyle = theme.gridColor;
    ctx.lineWidth = 1;
    for (let i = 1; i < 5; i += 1) {
      const y = (device.height / 5) * i;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(device.width, y);
      ctx.stroke();
    }
    for (let i = 1; i < 5; i += 1) {
      const x = (device.width / 5) * i;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, device.height);
      ctx.stroke();
    }
    ctx.restore();
  }
}

function drawCard(ctx, device, theme) {
  const placement = resolveCardPlacement(device);
  const x = placement.rect.left * device.width;
  const y = placement.rect.top * device.height;
  const width = placement.rect.width * device.width;
  const height = placement.rect.height * device.height;
  const radius = state.cornerRadius * (device.width / 390);

  ctx.save();
  ctx.shadowColor = theme.cardShadowColor;
  ctx.shadowBlur = width * theme.cardShadowBlurFactor;
  ctx.shadowOffsetY = height * theme.cardShadowOffsetFactor;
  roundedRectPath(ctx, x, y, width, height, radius);
  ctx.fillStyle = theme.cardFill;
  ctx.fill();
  ctx.restore();

  ctx.save();
  roundedRectPath(ctx, x, y, width, height, radius);
  ctx.clip();
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(state.activeImage, x, y, width, height);
  ctx.restore();

  ctx.save();
  ctx.lineWidth = Math.max(2, width * 0.004);
  ctx.strokeStyle = theme.cardStroke;
  roundedRectPath(ctx, x, y, width, height, radius);
  ctx.stroke();
  ctx.restore();
}

async function downloadWallpaper() {
  if (!state.activeImage) {
    setStatus("먼저 시간표 이미지를 선택하세요.");
    return;
  }

  const device = getSelectedDevice();
  const theme = getSelectedTheme();
  const source = getSelectedSource();
  const canvas = document.createElement("canvas");
  canvas.width = device.width;
  canvas.height = device.height;

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    setStatus("캔버스를 초기화하지 못했습니다.");
    return;
  }

  setStatus("PNG를 렌더링하는 중입니다...");
  drawBackground(ctx, device, theme);
  drawCard(ctx, device, theme);

  canvas.toBlob((blob) => {
    if (!blob) {
      setStatus("PNG 생성에 실패했습니다.");
      return;
    }

    const objectUrl = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    const baseName = source.meta.replace(/\.[^.]+$/, "").replace(/[^a-z0-9-_]+/gi, "-");
    anchor.href = objectUrl;
    anchor.download = `${baseName || "wallpaper"}-${device.id}-${state.screenMode}.png`;
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(objectUrl);
    trackEvent("wallpaper_download_started", {
      device_id: device.id,
      device_group: device.group || "Custom",
      output_width: device.width,
      output_height: device.height,
      screen_mode: state.screenMode,
      theme_id: theme.id,
      source_type: getSourceType(source),
      card_width_ratio: Number(state.cardWidthRatio.toFixed(3)),
      position_x: Number(state.x.toFixed(3)),
      position_y: Number(state.y.toFixed(3)),
      corner_radius: state.cornerRadius,
      safe_placement: state.safePlacement,
      source_blend: state.sourceBlend,
    });
    setStatus("PNG 다운로드를 시작했습니다.");
  }, "image/png");
}

function handleSourceUpload(event) {
  const [file] = event.target.files || [];
  if (!file) {
    return;
  }

  const uploadedSource = {
    id: `upload-${Date.now()}`,
    name: "업로드한 시간표",
    meta: file.name,
    src: URL.createObjectURL(file),
  };

  state.sources = [uploadedSource, ...state.sources];
  state.selectedSourceId = uploadedSource.id;
  renderSources();
  loadSelectedImage()
    .then(() => {
      autoArrangeCard(false);
      render();
      syncAnalyticsContext();
      trackEvent("timetable_uploaded", {
        file_type: file.type || "unknown",
        file_size_kb: Math.max(1, Math.round(file.size / 1024)),
      });
      setStatus("업로드한 이미지를 불러왔습니다.");
    })
    .catch((error) => {
      setStatus(error.message || "업로드한 이미지를 처리하지 못했습니다.");
    });

  event.target.value = "";
}

function handleDragStart(event) {
  if (!state.activeImage) {
    return;
  }

  event.preventDefault();

  const bounds = elements.phonePreview.getBoundingClientRect();
  state.dragSession = {
    startX: state.x,
    startY: state.y,
    clientX: event.clientX,
    clientY: event.clientY,
    width: bounds.width,
    height: bounds.height,
  };

  elements.imageCard.setPointerCapture?.(event.pointerId);
  setStatus("드래그 중입니다. 놓으면 현재 위치로 고정됩니다.");
}

function handleDragMove(event) {
  if (!state.dragSession) {
    return;
  }

  const deltaX = (event.clientX - state.dragSession.clientX) / state.dragSession.width;
  const deltaY = (event.clientY - state.dragSession.clientY) / state.dragSession.height;
  state.x = state.dragSession.startX + deltaX;
  state.y = state.dragSession.startY + deltaY;
  render();
}

function handleDragEnd() {
  if (!state.dragSession) {
    return;
  }

  state.dragSession = null;
  trackEvent("card_drag_completed", {
    position_x: Number(state.x.toFixed(3)),
    position_y: Number(state.y.toFixed(3)),
  });
  setStatus("배치를 업데이트했습니다.");
}

function bindEvents() {
  elements.imageUpload.addEventListener("change", handleSourceUpload);

  elements.profileModeGroup.querySelectorAll("[data-profile-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      setProfileMode(button.dataset.profileMode);
    });
  });

  elements.deviceSelect.addEventListener("change", () => {
    state.selectedDeviceId = elements.deviceSelect.value;
    state.lastPresetDeviceId = elements.deviceSelect.value;
    syncCustomResolutionFromDevice(getSelectedDevice());
    autoArrangeCard(false);
    render();
    syncAnalyticsContext();
    trackEvent("device_profile_changed", {
      device_id: state.selectedDeviceId,
      device_group: getSelectedDevice().group || "Custom",
    });
    setStatus("기기 프로필을 변경했습니다.");
  });

  elements.customWidth.addEventListener("input", () => {
    updateCustomResolution("width", elements.customWidth);
  });

  elements.customHeight.addEventListener("input", () => {
    updateCustomResolution("height", elements.customHeight);
  });

  elements.customWidth.addEventListener("blur", () => {
    commitCustomResolution("width");
  });

  elements.customHeight.addEventListener("blur", () => {
    commitCustomResolution("height");
  });

  elements.sourceBlend.addEventListener("change", () => {
    state.sourceBlend = elements.sourceBlend.checked;
    render();
    syncAnalyticsContext();
    trackEvent("source_blend_toggled", {
      enabled: state.sourceBlend,
    });
  });

  elements.safePlacement.addEventListener("change", () => {
    state.safePlacement = elements.safePlacement.checked;
    render();
    syncAnalyticsContext();
    trackEvent("safe_placement_toggled", {
      enabled: state.safePlacement,
    });
  });

  elements.sizeRange.addEventListener("input", () => {
    state.cardWidthRatio = Number(elements.sizeRange.value) / 100;
    render();
  });

  elements.xRange.addEventListener("input", () => {
    state.x = Number(elements.xRange.value) / 100;
    render();
  });

  elements.yRange.addEventListener("input", () => {
    state.y = Number(elements.yRange.value) / 100;
    render();
  });

  elements.cornerRange.addEventListener("input", () => {
    state.cornerRadius = Number(elements.cornerRange.value);
    render();
  });

  elements.autoArrangeButton.addEventListener("click", () => {
    autoArrangeCard();
    render();
    trackEvent("card_auto_arranged", {
      position_x: Number(state.x.toFixed(3)),
      position_y: Number(state.y.toFixed(3)),
    });
  });

  elements.resetButton.addEventListener("click", () => {
    resetLayoutToDefaults();
    autoArrangeCard(false);
    render();
    trackEvent("layout_reset", {
      screen_mode: state.screenMode,
    });
    setStatus("기본 레이아웃으로 되돌렸습니다.");
  });

  elements.downloadButton.addEventListener("click", downloadWallpaper);
  elements.floatingPreviewToggle.addEventListener("click", () => {
    floatingPreviewCollapsed = !floatingPreviewCollapsed;
    syncFloatingPreviewDockState();
  });
  elements.floatingPreviewPeek.addEventListener("click", () => {
    floatingPreviewCollapsed = false;
    syncFloatingPreviewDockState();
  });
  elements.floatingPreviewJump.addEventListener("click", () => {
    elements.phonePreview.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  elements.imageCard.addEventListener("pointerdown", handleDragStart);
  window.addEventListener("pointermove", handleDragMove);
  window.addEventListener("pointerup", handleDragEnd);
  window.addEventListener("pointercancel", handleDragEnd);
  window.addEventListener("scroll", scheduleFloatingPreviewVisibility, { passive: true });
  window.addEventListener("resize", scheduleFloatingPreviewVisibility);
}

async function init() {
  renderSources();
  renderDevices();
  renderScreenModes();
  renderThemes();
  syncControlValues();
  syncFloatingPreviewDockState();
  bindEvents();
  await loadSelectedImage();
  autoArrangeCard(false);
  render();
  syncAnalyticsContext();
  trackEvent("editor_ready", {
    source_type: getSourceType(getSelectedSource()),
  });
  setStatus("시간표 이미지를 업로드한 뒤 기기와 화면 타입을 고르고 PNG로 저장할 수 있습니다.");
}

init().catch((error) => {
  setStatus(error.message || "초기화 중 오류가 발생했습니다.");
});
