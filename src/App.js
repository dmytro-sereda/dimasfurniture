import "./App.css";
import { connect } from "react-redux";
import React from "react";
import { createStructuredSelector } from "reselect";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Cart from "./components/cart/cart.component";
import Footer from "./components/footer/footer.component";

import WithSpinner from "./components/with-spinner/with-spinner.component";
import Spinner from "./components/spinner/spinner.component";

import { fetchCollectionsStart } from "./redux/shop/shop.actions";
import { selectIsLoading } from "./redux/shop/shop.selectors";

const HomePageWithSpinner = WithSpinner(HomePage);

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
          <Route
            exact
            path="/"
            render={() => (
              <HomePageWithSpinner isLoading={this.props.isLoading} />
            )}
          />
          <Route path="/shop" component={ShopPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
