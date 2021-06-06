import 'styled-components'

declare module '*.ttf'

export type palletTypes = {
  50?: string
  100?: string
  200?: string
  300?: string
  400?: string
  500?: string
  600?: string
  700?: string
  800?: string
  900?: string
}

export type colorType = {
  transparent?: string
  black?: string
  white?: string
  grey?: palletTypes
  red?: palletTypes
  orange?: palletTypes
  yellow?: palletTypes
  green?: palletTypes
  teal?: palletTypes
  blue?: palletTypes
  cyan?: palletTypes
  purple?: palletTypes
  pink?: palletTypes
}

export type fontFamilyType = {
  sansSerif?: string
  serif?: string
}

export type fontSizeType = {
  xxs?: string
  xs?: string
  sm?: string
  md?: string
  ml?: string
  lg?: string
  xl?: string
  xxl?: string
  fourth?: string
  fifth?: string
  sixth?: string
  seventh?: string
  eighth?: string
  ninth?: string
  tenth?: string
}

export type spacingType = {
  xxs?: string
  xs?: string
  sm?: string
  base?: string
  md?: string
  lg?: string
  xl?: string
}

export type borderRadiusType = {
  none: string
  sm: string
  base: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  full: string
}

const ThemeTypes = {
  Light: 'light',
  Dark: 'dark',
} as const

type ThemeType = typeof ThemeTypes[keyof typeof ThemeTypes]

declare module 'styled-components' {
  export interface DefaultTheme {
    name: ThemeType
    backgroundColor: string
    primaryColor?: string
    textColor: string
    colors: colorType
    fontFamily: string
    fontSize: fontSizeType
    spacing: spacingType
    borderRadius: borderRadiusType
  }
}
