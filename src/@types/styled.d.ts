import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string,
      secundary: string,
      textColorPrimary: string,
      textColorSecundary: string,
      backgroundSecundary: string,
      borderColor: string,

      white: string,
      black: string,

      title: string,
      paragraph: string,

      // Buttons
      buttonSolid: string,
      buttonOutline: string,
      borderButton: string,
      textButton: string,
    
      menu: string,


      background: string;
      text: string;

    // NEUTRAL
    neutral25: string,
    neutral50: string,
    neutral100: string,
    neutral200: string,
    neutral300: string,
    neutral400: string,
    neutral500: string,
    neutral600: string,
    neutral700: string,
    neutral800: string,
    neutral900: string,
    neutral950: string,

    // TEXT
    text25: string,
    text50: string,
    text100: string,
    text200: string,
    text300: string,
    text400: string,
    text500: string,
    text600: string,
    text700: string,
    text800: string,
    text900: string,
    text950: string,

    // PRIMARY
    primary25: string,
    primary50: string,
    primary100: string,
    primary200: string,
    primary300: string,
    primary400: string,
    primary500: string,
    primary600: string,
    primary700: string,
    primary800: string,
    primary900: string,
    primary950: string,

    // ERROR DANGER
    danger25: string,
    danger50: string,
    danger100: string,
    danger200: string,
    danger300: string,
    danger400: string,
    danger500: string,
    danger600: string,
    danger700: string,
    danger800: string,
    danger900: string,
    danger950: string,

    // WARNING
    warning25: string,
    warning50: string,
    warning100: string,
    warning200: string,
    warning300: string,
    warning400: string,
    warning500: string,
    warning600: string,
    warning700: string,
    warning800: string,
    warning900: string,
    warning950: string,

    // SUCCESS
    success25: string,
    success50: string,
    success100: string,
    success200: string,
    success300: string,
    success400: string,
    success500: string,
    success600: string,
    success700: string,
    success800: string,
    success900: string,
    success950: string,

    // SECONDARY
    secondary25: string,
    secondary50: string,
    secondary100: string,
    secondary200: string,
    secondary300: string,
    secondary400: string,
    secondary500: string,
    secondary600: string,
    secondary700: string,
    secondary800: string,
    secondary900: string,
    secondary950: string,
    };
  }
}
