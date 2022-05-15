export const LightTheme = {
  body:"#FCF6F4",
  text:"#000000",
  fontFamily:"'Mulish', sans-serif",
  bodyRgba : "252, 246, 244",
  textRgba: "0,0,0",
  hoverColor: "rgba(0,255,0,.4)",
  hoverShadow: "rgba(0,255,0,.2)"
}

export const DarkTheme = {
  body:"#000000",
  text:"#FCF6F4",
  fontFamily:"'Mulish', sans-serif",
  bodyRgba : "0,0,0",
  textRgba: "252, 246, 244",
  hoverColor: "rgba(0,255,0,.4)",
  hoverShadow: "rgba(0,255,0,.4)"
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