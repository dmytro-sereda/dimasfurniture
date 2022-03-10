function cov_2ez5slpsux() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\root-reducer.js";
  var hash = "708020b52b94a5cd65a90ea0e80e8031b0a1446a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\root-reducer.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 22
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "1": {
        start: {
          line: 15,
          column: 20
        },
        end: {
          line: 20,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "708020b52b94a5cd65a90ea0e80e8031b0a1446a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ez5slpsux = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2ez5slpsux();
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CartReducer from "./cart/cart.reducer";
import ShopReducer from "./shop/shop.reducer";
import UserReducer from "./user/user.reducer";
import MenuReducer from "./menu/menu.reducer";
const persistConfig = (cov_2ez5slpsux().s[0]++, {
  key: "root",
  storage
});
const rootReducer = (cov_2ez5slpsux().s[1]++, combineReducers({
  cart: CartReducer,
  shop: ShopReducer,
  user: UserReducer,
  menu: MenuReducer
}));
export default persistReducer(persistConfig, rootReducer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb3QtcmVkdWNlci5qcyJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJwZXJzaXN0UmVkdWNlciIsInN0b3JhZ2UiLCJDYXJ0UmVkdWNlciIsIlNob3BSZWR1Y2VyIiwiVXNlclJlZHVjZXIiLCJNZW51UmVkdWNlciIsInBlcnNpc3RDb25maWciLCJrZXkiLCJyb290UmVkdWNlciIsImNhcnQiLCJzaG9wIiwidXNlciIsIm1lbnUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixTQUFTQSxlQUFULFFBQWdDLE9BQWhDO0FBQ0EsU0FBU0MsY0FBVCxRQUErQixlQUEvQjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsMkJBQXBCO0FBRUEsT0FBT0MsV0FBUCxNQUF3QixxQkFBeEI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLHFCQUF4QjtBQUNBLE9BQU9DLFdBQVAsTUFBd0IscUJBQXhCO0FBQ0EsT0FBT0MsV0FBUCxNQUF3QixxQkFBeEI7QUFFQSxNQUFNQyxhQUFhLDZCQUFHO0FBQ3BCQyxFQUFBQSxHQUFHLEVBQUUsTUFEZTtBQUVwQk4sRUFBQUE7QUFGb0IsQ0FBSCxDQUFuQjtBQUtBLE1BQU1PLFdBQVcsNkJBQUdULGVBQWUsQ0FBQztBQUNsQ1UsRUFBQUEsSUFBSSxFQUFFUCxXQUQ0QjtBQUVsQ1EsRUFBQUEsSUFBSSxFQUFFUCxXQUY0QjtBQUdsQ1EsRUFBQUEsSUFBSSxFQUFFUCxXQUg0QjtBQUlsQ1EsRUFBQUEsSUFBSSxFQUFFUDtBQUo0QixDQUFELENBQWxCLENBQWpCO0FBT0EsZUFBZUwsY0FBYyxDQUFDTSxhQUFELEVBQWdCRSxXQUFoQixDQUE3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCI7XHJcblxyXG5pbXBvcnQgQ2FydFJlZHVjZXIgZnJvbSBcIi4vY2FydC9jYXJ0LnJlZHVjZXJcIjtcclxuaW1wb3J0IFNob3BSZWR1Y2VyIGZyb20gXCIuL3Nob3Avc2hvcC5yZWR1Y2VyXCI7XHJcbmltcG9ydCBVc2VyUmVkdWNlciBmcm9tIFwiLi91c2VyL3VzZXIucmVkdWNlclwiO1xyXG5pbXBvcnQgTWVudVJlZHVjZXIgZnJvbSBcIi4vbWVudS9tZW51LnJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XHJcbiAga2V5OiBcInJvb3RcIixcclxuICBzdG9yYWdlLFxyXG59O1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGNhcnQ6IENhcnRSZWR1Y2VyLFxyXG4gIHNob3A6IFNob3BSZWR1Y2VyLFxyXG4gIHVzZXI6IFVzZXJSZWR1Y2VyLFxyXG4gIG1lbnU6IE1lbnVSZWR1Y2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJvb3RSZWR1Y2VyKTtcclxuIl19