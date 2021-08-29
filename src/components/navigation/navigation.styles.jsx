import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  transition: all 0.4s;

  @media only screen and (max-width: 28.125em) {
    ${(props) =>
      props.isTopMenu === true
        ? "position: fixed; top: 50%; left: 50%; background-color: white; transform: translate(-50%, -50%); z-index: 501; width: 60%; padding: 3rem;"
        : ""}
    ${(props) =>
      props.isHidden === true ? `display: none;` : `display: block`};
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  /* margin: 0 auto; */

  @media only screen and (max-width: 28.125em) {
    ${(props) =>
      props.isTopMenu === true
        ? "flex-direction: column; align-items: center;"
        : ""}
  }
`;

export const NavigationItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 5.5rem;

    @media only screen and (max-width: 28.125em) {
      ${(props) =>
        props.isTopMenu === true ? "margin: 0; margin-bottom: 3rem;" : ""}
    }
  }
`;

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.color === "light" ? "white" : "#515151")};
  font-size: 2.4rem;
  text-transform: uppercase;
  font-weight: 400;
  position: relative;

  @media only screen and (max-width: 28.125em) {
    font-size: ${(props) => (props.isTopMenu === true ? "6rem" : "4rem")};
  }

  &:hover::after {
    width: 100%;
  }

  &::after {
    content: "";
    height: 1px;
    width: 0;
    display: block;
    position: absolute;
    background-color: ${(props) =>
      props.color === "light" ? "white" : "#515151"};
    transition: all 0.5s ease-out;
  }
`;
