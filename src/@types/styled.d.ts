import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary600: string;
      primary200: string;
      primary900: string;
      primary950: string;
      gray950: string;
      neutral900: string;
      neutral200: string;
      white: string;
      danger700: string;

      "gray700/neutral200": string;
      "gray50/neutral800": string;
      "neutral100/gray950": string;
      "neutral600/neutral700": string;
      "neutral700/gray600": string;
      "white/neutral700": string;
      "gray700/white": string;
      "white/gray950": string;
      "white/gray900": string;
      "primary25/gray800": string;
      "primary900/gray900": string;
      "white/primary600": string;
      "primary200/neutral800": string;
      "primary600/neutral200": string;
      "neutral100/neutral700": string;
    };
  }
}
