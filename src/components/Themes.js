export const LightTheme = {
  body:"#feffee",
  text:"#3d0c02",
  fontFamily:"'Mulish', sans-serif",
  bodyRgba : "252, 246, 244",
  textRgba: "0,0,0",
  hoverColor: "rgba(0, 255, 217,.4)",
  hoverShadow: "rgba(0, 255, 217,.2)"
}

export const DarkTheme = {
  body:"#3d0c02",
  text:"#feffee",
  fontFamily:"'Mulish', sans-serif",
  bodyRgba : "0,0,0",
  textRgba: "252, 246, 244",
  hoverColor: "rgba(0, 255, 217,.4)",
  hoverShadow: "rgba(0, 255, 217,.4)"
}

export const breakpoints = {
  sm: 20,//em
  md: 30,
  lg: 45,
  xl: 60,
  xxl:75,
}

export const mediaQueries = key => {
  return style => `@media (max-width: ${key}em) { ${style} }`
}