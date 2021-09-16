import "./App.css";
import { connect } from "react-redux";
import React, { useEffect, lazy, Suspense } from "react";
import { createStructuredSelector } from "reselect";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Cart from "./components/cart/cart.component";
import Footer from "./components/footer/footer.component";

import WithSpinner from "./components/with-spinner/with-spinner.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

import { fetchCollectionsStart } from "./redux/shop/shop.actions";
import { selectIsLoading } from "./redux/shop/shop.selectors";
import { checkUserSession } from "./redux/user/user.actions";

const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const AboutPage = lazy(() => import("./pages/about/about.component"));
const HomePageWithSpinner = WithSpinner(HomePage);

const App = ({ fetchCollectionsStart, checkUserSession, isLoading }) => {
  useEffect(() => {
    fetchCollectionsStart();
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Cart />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePageWithSpinner isLoading={isLoading} />}
        />
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route path="/shop" component={ShopPage} />
            <Route path="/about" component={AboutPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <Footer />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
