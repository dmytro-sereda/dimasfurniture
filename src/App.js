import "./App.css";

import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Cart from "./components/cart/cart.component";
import Footer from "./components/footer/footer.component";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Cart />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
