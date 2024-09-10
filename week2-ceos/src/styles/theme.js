import { css } from "styled-components";

const colors = {
  black: "#000000",
  gray1: "#ADADAD",
  gray2: "#EDEDED",
  white: "#ffffff",

  main_blue: "#279DF4",
  sunday_red: "#EF3206",
};

const fonts = {
  Headline1: css`
    font-family: SUIT;
    font-size: 4.8rem;
    font-weight: 600;
    line-height: 6rem;
  `,

  Body1: css`
    font-family: SUIT;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.8rem;
  `,
  Body2: css`
    font-family: SUIT;
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 2.8rem;
  `,
  Body3: css`
    font-family: SUIT;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 2.4rem;
  `,
  Body4: css`
    font-family: SUIT;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  `,
  Body5: css`
    font-family: SUIT;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 2rem;
  `,
  Body6: css`
    font-family: SUIT;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2rem;
  `,
  Body7: css`
    font-family: SUIT;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.6rem;
  `,
  Body8: css`
    font-family: SUIT;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 1.6rem;
  `,
};

const theme = {
  colors,
  fonts,
};

export default theme;
