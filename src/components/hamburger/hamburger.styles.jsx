import styled from "styled-components";

export const HamburgerContainer = styled.div`
  width: 4rem;
  height: 4rem;
  margin-left: 1.5rem;
  position: relative;
  cursor: pointer;
  display: none;
  z-index: 501;

  @media only screen and (max-width: 28.125em) {
    display: block;
  }
`;

export const HamburgerLine = styled.span`
  background-color: #515151;
  position: relative;
  width: 4rem;
  height: 3px;
  display: inline-block;
  margin-top: ${(props) => (props.isHidden === true ? "1.3rem" : ` 1.9rem; `)};
  transition: all 0.4s;
  ${(props) =>
    props.isHidden === true
      ? ""
      : `transform: rotate(135deg); background-color: white;`}

  &::after {
    content: "";
    position: absolute;
    top: 1rem;
    background-color: #515151;
    width: 4rem;
    height: 3px;
    transition: all 0.4s;

    ${(props) =>
      props.isHidden === true
        ? ""
        : `transform: rotate(-270deg); 
        top: 0; background-color: white;`}
  }
`;
