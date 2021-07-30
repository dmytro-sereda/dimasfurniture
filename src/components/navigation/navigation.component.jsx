import React from "react";

import {
  NavigationContainer,
  NavigationList,
  NavigationItem,
  NavigationLink,
} from "./navigation.styles";

const Navigation = (props) => {
  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationItem>
          <NavigationLink {...props} to="/">
            Main
          </NavigationLink>
        </NavigationItem>

        <NavigationItem>
          <NavigationLink {...props} to="/shop">
            Shop
          </NavigationLink>
        </NavigationItem>

        <NavigationItem>
          <NavigationLink {...props} to="/about">
            About
          </NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationContainer>
  );
};

export default Navigation;
