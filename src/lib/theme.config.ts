export const theme = {
  colors: {
    primary: "#577896",
    primaryDark: "#3F627E",
    primarySoft: "#E8F0F5",
    secondary: "#790000",
    secondarySoft: "#F4EAEA",
    accent: "#337AB7",
    background: "#FFFFFF",
    foreground: "#454242",
    muted: "#F2F0F0",
    surface: "#F8F7F5",
    // Supporting tokens extracted from the mockup
    border: "#D2D3D4",
    lede: "#5d5959",
    copy: "#625e5e",
    fine: "#676363",
    label: "#6b6767",
  },
  fonts: {
    heading: "'Spectral', serif",
    body: "'Open Sans', sans-serif",
  },
  radius: {
    sm: "0.5rem",
    md: "1.5rem",
    lg: "2rem",
  },
} as const;

export type Theme = typeof theme;
