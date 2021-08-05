import "./App.css";
import { connect } from "react-redux";
import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Cart from "./components/cart/cart.component";
import Footer from "./components/footer/footer.component";

import { fetchCollectionsStart } from "./redux/shop/shop.actions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchCollectionsStart();
  }

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

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(App);
