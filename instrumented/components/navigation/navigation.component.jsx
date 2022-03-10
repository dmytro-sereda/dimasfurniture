import React from "react";

import {
  NavigationContainer,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from "./navigation.styles";

const Navigation = (props) => {
  return (
    <NavigationContainer {...props}>
      <NavigationList {...props}>
        <NavigationItem {...props}>
          <NavigationLink {...props} to="/">
            Main
          </NavigationLink>
        </NavigationItem>

        <NavigationItem {...props}>
          <NavigationLink {...props} to="/shop">
            Shop
          </NavigationLink>
        </NavigationItem>

        <NavigationItem {...props}>
          <NavigationLink {...props} to="/about">
            About
          </NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationContainer>
  );
};

export default Navigation;
