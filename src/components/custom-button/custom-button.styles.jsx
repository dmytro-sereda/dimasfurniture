import styled, { css } from "styled-components";

const MainButtonStyles = css`
  background-color: #ffc451;
  font-size: ${(props) => (props.size === "large" ? "2.8rem" : "2rem")};

  &:hover {
    background-color: #ffb930;
  }
`;

const GoogleSignInStyles = css`
  background-color: #515151;
  font-size: 1.6rem;

  &:hover {
    background-color: #3d3d3d;
  }
`;

const getButtonStyles = (props) => {
  return props.mainColor ? MainButtonStyles : GoogleSignInStyles;
};

export const ButtonContainer = styled.button`
  color: white;
  text-transform: uppercase;
  display: block;
  padding: 1.4rem 4.9rem;
  font-family: "Rajdhani", sans-serif;
  border-radius: 5rem;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease-out;
  font-weight: 600;

  ${getButtonStyles}
`;
