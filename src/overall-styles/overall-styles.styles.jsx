import { css } from "styled-components";

export const Container = css`
  max-width: 172rem;
  margin: 0 auto;
`;

export const Heading1 = css`
  font-weight: 700;
  width: 64.5rem;
  font-size: 7.2rem;
  text-transform: uppercase;
  line-height: 1;

  @media only screen and (max-width: 43.75em) {
    width: 67.5rem;
    font-size: 8.5rem;
  }
`;

export const Heading2 = css`
  font-weight: 700;
  font-size: 4.8rem;
  text-transform: uppercase;

  @media only screen and (max-width: 43.75em) {
    font-size: 7rem;
    margin: 0 auto;
  }
`;

export const Heading3 = css`
  font-weight: 600;
  font-size: 4rem;
  color: white;
  text-transform: uppercase;
  z-index: 500;
  opacity: 0;
  transition: all 0.4s;
`;

export const Paragraph = css`
  font-weight: 400;
  font-size: 2.4rem;
  margin: 3.4rem 0;
`;
