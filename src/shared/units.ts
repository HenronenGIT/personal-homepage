// import { type TSize } from "types";

const padding = {
  p0: "2px",
  p1: "4px",
  p2: "6px",
  p3: "10px",
  p4: "18px",
  p5: "26px",
  p6: "34px",
  p7: "52px",
  p8: "72px",
} as const;

const gap = {
  gp0: "2px",
  gp1: "4px",
  gp2: "6px",
  gp3: "10px",
  gp4: "18px",
  gp5: "26px",
  gp6: "34px",
  gp7: "52px",
  gp8: "72px",
} as const;

const margin = {
  m0: "2px",
  m1: "6px",
  m2: "10px",
  m3: "18px",
  m4: "26px",
  m5: "34px",
  m6: "52px",
  m7: "85px",
  m8: "250px",
} as const;

// const borderRadius = {
//   r1: "3px",
//   r2: "5px",
//   r3: "8px",
//   r4: "14px",
//   r5: "20px",
//   rMax: "9999px",
// } as const;

// const borderWidth = {
//   b1: "1px",
//   b2: "2px",
// } as const;

export const fontSize = {
  f0: "12px",
  f1: "14px",
  f2: "16px",
  f3: "20px",
  f4: "24px",
  f5: "32px",
  f6: "48px",
  f7: "60px",
} as const;

// NOTE: (!important) put these in order (smallet to largest)
export const breakpoints = {
  bp1: "480px",
  bp2: "576px", // mobile (legacy)
  bp3: "768px", // tablet (legacy)
  bp4: "1080px", // desktop (legacy)
  bp5: "1280px",
  bp6: "1536px",
  bp7: "1920px", // NB! It's WIDTH, not HEIGHT (1920x1080) corresponds to bp4, not bp7.
} as const;

const size = {
  // profile
  profileXs: "24px",
  profileSm: "30px",
  profileMd: "44px",
  profileLg: "58px",
  profileXl: "84px",

  // button
  buttonSm: "120px",
  buttonMd: "160px",
  buttonLg: "200px",

  // button
  inputSm: "150px",
  inputMd: "200px",
  inputLg: "250px",

  // accordion
  accordionSm: "250px",
  accordionMd: "350px",
  accordionLg: "450px",
} as const;

// const zIndex = {
//   zDialog: 100,
//   zSelect: 101,
//   zContextMenu: 102,
//   zSubContextMenu: 103,
//   zDropdownMenu: 102,
//   zSubDropdownMenu: 103,
//   zModal: 200,
//   zToast: 999,
//   zNavBar: 9999,
// } as const;

const height = {
  h2: "45px",
  h1: "35px",
  h0: "24px",
} as const;

export const unit = {
  tagMinWidth: "150px",
  tagMaxWidth: "300px",
  badgeMinWidth: "50px",
  badgeMaxWidth: "100px",
  icon: "25px",
  inputMaxWidth: "600px",
  inputMaxHeight: "300px",
  cardM: "20px",
  cardP: {
    base: `${padding.p4} ${padding.p4}`,
    bp3: `${padding.p4}`,
    bp4: `${padding.p4} ${padding.p5}`,
  },
  // aggregate
  ...height,
  ...padding,
  ...gap,
  ...margin,
  ...fontSize,
  ...breakpoints,
  ...size,
} as const;

// export const glow = {
//   g1: "0 0 10px 2px rgba(0, 255, 255, 1.0)",
//   g2: "0 0 10px 3px rgba(0, 255, 255, 1.0)",
//   g3: "0 0 10px 5px rgba(0, 255, 255, 1.0)",
// } as const;

// export const getHeight = (size: TSize) => {
//   switch (size) {
//     case "ic":
//       return unit.h1;
//     case "xs":
//       return unit.h0;
//     case "sm":
//       return unit.h1;
//     case "md":
//       return unit.h1;
//     case "lg":
//       return unit.h1;
//     default:
//       return unit.h2;
//   }
// };

export type TBreakpoint = keyof typeof breakpoints;
export type TUnit = keyof typeof unit;
