function cov_v2kl98ssg() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/root-reducer.js";
  var hash = "7281c1c93ba3c30815dd0410accd5ccd7fe24b80";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/root-reducer.js",
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
    hash: "7281c1c93ba3c30815dd0410accd5ccd7fe24b80"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_v2kl98ssg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_v2kl98ssg();
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CartReducer from "./cart/cart.reducer";
import ShopReducer from "./shop/shop.reducer";
import UserReducer from "./user/user.reducer";
import MenuReducer from "./menu/menu.reducer";
const persistConfig = (cov_v2kl98ssg().s[0]++, {
  key: "root",
  storage
});
const rootReducer = (cov_v2kl98ssg().s[1]++, combineReducers({
  cart: CartReducer,
  shop: ShopReducer,
  user: UserReducer,
  menu: MenuReducer
}));
export default persistReducer(persistConfig, rootReducer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb3QtcmVkdWNlci5qcyJdLCJuYW1lcyI6WyJjb21iaW5lUmVkdWNlcnMiLCJwZXJzaXN0UmVkdWNlciIsInN0b3JhZ2UiLCJDYXJ0UmVkdWNlciIsIlNob3BSZWR1Y2VyIiwiVXNlclJlZHVjZXIiLCJNZW51UmVkdWNlciIsInBlcnNpc3RDb25maWciLCJrZXkiLCJyb290UmVkdWNlciIsImNhcnQiLCJzaG9wIiwidXNlciIsIm1lbnUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixTQUFTQSxlQUFULFFBQWdDLE9BQWhDO0FBQ0EsU0FBU0MsY0FBVCxRQUErQixlQUEvQjtBQUNBLE9BQU9DLE9BQVAsTUFBb0IsMkJBQXBCO0FBRUEsT0FBT0MsV0FBUCxNQUF3QixxQkFBeEI7QUFDQSxPQUFPQyxXQUFQLE1BQXdCLHFCQUF4QjtBQUNBLE9BQU9DLFdBQVAsTUFBd0IscUJBQXhCO0FBQ0EsT0FBT0MsV0FBUCxNQUF3QixxQkFBeEI7QUFFQSxNQUFNQyxhQUFhLDRCQUFHO0FBQ3BCQyxFQUFBQSxHQUFHLEVBQUUsTUFEZTtBQUVwQk4sRUFBQUE7QUFGb0IsQ0FBSCxDQUFuQjtBQUtBLE1BQU1PLFdBQVcsNEJBQUdULGVBQWUsQ0FBQztBQUNsQ1UsRUFBQUEsSUFBSSxFQUFFUCxXQUQ0QjtBQUVsQ1EsRUFBQUEsSUFBSSxFQUFFUCxXQUY0QjtBQUdsQ1EsRUFBQUEsSUFBSSxFQUFFUCxXQUg0QjtBQUlsQ1EsRUFBQUEsSUFBSSxFQUFFUDtBQUo0QixDQUFELENBQWxCLENBQWpCO0FBT0EsZUFBZUwsY0FBYyxDQUFDTSxhQUFELEVBQWdCRSxXQUFoQixDQUE3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIjtcblxuaW1wb3J0IENhcnRSZWR1Y2VyIGZyb20gXCIuL2NhcnQvY2FydC5yZWR1Y2VyXCI7XG5pbXBvcnQgU2hvcFJlZHVjZXIgZnJvbSBcIi4vc2hvcC9zaG9wLnJlZHVjZXJcIjtcbmltcG9ydCBVc2VyUmVkdWNlciBmcm9tIFwiLi91c2VyL3VzZXIucmVkdWNlclwiO1xuaW1wb3J0IE1lbnVSZWR1Y2VyIGZyb20gXCIuL21lbnUvbWVudS5yZWR1Y2VyXCI7XG5cbmNvbnN0IHBlcnNpc3RDb25maWcgPSB7XG4gIGtleTogXCJyb290XCIsXG4gIHN0b3JhZ2UsXG59O1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGNhcnQ6IENhcnRSZWR1Y2VyLFxuICBzaG9wOiBTaG9wUmVkdWNlcixcbiAgdXNlcjogVXNlclJlZHVjZXIsXG4gIG1lbnU6IE1lbnVSZWR1Y2VyLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBlcnNpc3RSZWR1Y2VyKHBlcnNpc3RDb25maWcsIHJvb3RSZWR1Y2VyKTtcbiJdfQ==