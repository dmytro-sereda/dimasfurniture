function cov_zmzwk9hfh() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\store.js";
  var hash = "dfb74fc921a161d4908646f2e2f062641f9f587b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\store.js",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 23
        },
        end: {
          line: 9,
          column: 45
        }
      },
      "1": {
        start: {
          line: 10,
          column: 20
        },
        end: {
          line: 10,
          column: 36
        }
      },
      "2": {
        start: {
          line: 12,
          column: 0
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "3": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 13,
          column: 27
        }
      },
      "4": {
        start: {
          line: 16,
          column: 21
        },
        end: {
          line: 16,
          column: 78
        }
      },
      "5": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 29
        }
      },
      "6": {
        start: {
          line: 19,
          column: 25
        },
        end: {
          line: 19,
          column: 44
        }
      }
    },
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 0
          },
          end: {
            line: 14,
            column: 1
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 12,
            column: 0
          },
          end: {
            line: 14,
            column: 1
          }
        }, {
          start: {
            line: 12,
            column: 0
          },
          end: {
            line: 14,
            column: 1
          }
        }],
        line: 12
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {},
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "dfb74fc921a161d4908646f2e2f062641f9f587b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_zmzwk9hfh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_zmzwk9hfh();
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";
const sagaMiddleware = (cov_zmzwk9hfh().s[0]++, createSagaMiddleware());
const middlewares = (cov_zmzwk9hfh().s[1]++, [sagaMiddleware]);
cov_zmzwk9hfh().s[2]++;

if (process.env.NODE_ENV === "development") {
  cov_zmzwk9hfh().b[0][0]++;
  cov_zmzwk9hfh().s[3]++;
  middlewares.push(logger);
} else {
  cov_zmzwk9hfh().b[0][1]++;
}

export const store = (cov_zmzwk9hfh().s[4]++, createStore(rootReducer, applyMiddleware(...middlewares)));
cov_zmzwk9hfh().s[5]++;
sagaMiddleware.run(rootSaga);
export const persistor = (cov_zmzwk9hfh().s[6]++, persistStore(store));
export default {
  store,
  persistor
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwibG9nZ2VyIiwicGVyc2lzdFN0b3JlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJyb290UmVkdWNlciIsInJvb3RTYWdhIiwic2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInB1c2giLCJzdG9yZSIsInJ1biIsInBlcnNpc3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixTQUFTQSxXQUFULEVBQXNCQyxlQUF0QixRQUE2QyxPQUE3QztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsY0FBbkI7QUFDQSxTQUFTQyxZQUFULFFBQTZCLGVBQTdCO0FBQ0EsT0FBT0Msb0JBQVAsTUFBaUMsa0JBQWpDO0FBRUEsT0FBT0MsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGFBQXJCO0FBRUEsTUFBTUMsY0FBYyw0QkFBR0gsb0JBQW9CLEVBQXZCLENBQXBCO0FBQ0EsTUFBTUksV0FBVyw0QkFBRyxDQUFDRCxjQUFELENBQUgsQ0FBakI7OztBQUVBLElBQUlFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLGFBQTdCLEVBQTRDO0FBQUE7QUFBQTtBQUMxQ0gsRUFBQUEsV0FBVyxDQUFDSSxJQUFaLENBQWlCVixNQUFqQjtBQUNELENBRkQ7QUFBQTtBQUFBOztBQUlBLE9BQU8sTUFBTVcsS0FBSyw0QkFBR2IsV0FBVyxDQUFDSyxXQUFELEVBQWNKLGVBQWUsQ0FBQyxHQUFHTyxXQUFKLENBQTdCLENBQWQsQ0FBWDs7QUFDUEQsY0FBYyxDQUFDTyxHQUFmLENBQW1CUixRQUFuQjtBQUVBLE9BQU8sTUFBTVMsU0FBUyw0QkFBR1osWUFBWSxDQUFDVSxLQUFELENBQWYsQ0FBZjtBQUVQLGVBQWU7QUFBRUEsRUFBQUEsS0FBRjtBQUFTRSxFQUFBQTtBQUFULENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBsb2dnZXIgZnJvbSBcInJlZHV4LWxvZ2dlclwiO1xyXG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcIkByZWR1eC1zYWdhL2NvcmVcIjtcclxuXHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yb290LXJlZHVjZXJcIjtcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuL3Jvb3Qtc2FnYVwiO1xyXG5cclxuY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG5jb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIikge1xyXG4gIG1pZGRsZXdhcmVzLnB1c2gobG9nZ2VyKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG5zYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IHN0b3JlLCBwZXJzaXN0b3IgfTtcclxuIl19