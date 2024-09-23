import { css } from "styled-components";

export const rowFlex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const columnFlex = css`
  ${rowFlex};
  flex-direction: column;
`;
