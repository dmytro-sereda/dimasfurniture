import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavigationList = styled.ul`
  display: flex;
  list-style: none;
`;

export const NavigationItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 5.5rem;
  }
`;

export const NavigationLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.color === "light" ? "white" : "#515151")};
  font-size: 2.4rem;
  text-transform: uppercase;
  font-weight: 400;
  position: relative;

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
