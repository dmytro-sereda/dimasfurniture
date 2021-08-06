import styled from "styled-components";

import { Container } from "../../overall-styles/overall-styles.styles";

export const SpinnerOverlay = styled.div`
  ${Container}
  height: 80vh;
  padding: 40rem 0;
`;

export const SpinnerContainer = styled.div`
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #25b09b);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: s3 1s infinite linear;

  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
`;
