import React, { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import { ShopPageContainer } from "./shop.styles";

import Spinner from "../../components/spinner/spinner.component";

const CollectionOverview = lazy(() =>
  import("../../components/collection-overview/collection-overview.component")
);
const CollectionPage = lazy(() => import("../collection/collection.component"));

const ShopPage = ({ match }) => {
  return (
    <ShopPageContainer>
      <Suspense fallback={<Spinner />}>
        <Route exact path={match.path} component={CollectionOverview} />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </Suspense>
    </ShopPageContainer>
  );
};

export default withRouter(ShopPage);
