function cov_2ley227u6o() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/store.js";
  var hash = "15fb9f11bd1b39a128f5c21b22798d8e1d6349d4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/store.js",
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
    hash: "15fb9f11bd1b39a128f5c21b22798d8e1d6349d4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ley227u6o = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2ley227u6o();
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";
const sagaMiddleware = (cov_2ley227u6o().s[0]++, createSagaMiddleware());
const middlewares = (cov_2ley227u6o().s[1]++, [sagaMiddleware]);
cov_2ley227u6o().s[2]++;

if (process.env.NODE_ENV === "development") {
  cov_2ley227u6o().b[0][0]++;
  cov_2ley227u6o().s[3]++;
  middlewares.push(logger);
} else {
  cov_2ley227u6o().b[0][1]++;
}

export const store = (cov_2ley227u6o().s[4]++, createStore(rootReducer, applyMiddleware(...middlewares)));
cov_2ley227u6o().s[5]++;
sagaMiddleware.run(rootSaga);
export const persistor = (cov_2ley227u6o().s[6]++, persistStore(store));
export default {
  store,
  persistor
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiYXBwbHlNaWRkbGV3YXJlIiwibG9nZ2VyIiwicGVyc2lzdFN0b3JlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJyb290UmVkdWNlciIsInJvb3RTYWdhIiwic2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInB1c2giLCJzdG9yZSIsInJ1biIsInBlcnNpc3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixTQUFTQSxXQUFULEVBQXNCQyxlQUF0QixRQUE2QyxPQUE3QztBQUNBLE9BQU9DLE1BQVAsTUFBbUIsY0FBbkI7QUFDQSxTQUFTQyxZQUFULFFBQTZCLGVBQTdCO0FBQ0EsT0FBT0Msb0JBQVAsTUFBaUMsa0JBQWpDO0FBRUEsT0FBT0MsV0FBUCxNQUF3QixnQkFBeEI7QUFDQSxPQUFPQyxRQUFQLE1BQXFCLGFBQXJCO0FBRUEsTUFBTUMsY0FBYyw2QkFBR0gsb0JBQW9CLEVBQXZCLENBQXBCO0FBQ0EsTUFBTUksV0FBVyw2QkFBRyxDQUFDRCxjQUFELENBQUgsQ0FBakI7OztBQUVBLElBQUlFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLGFBQTdCLEVBQTRDO0FBQUE7QUFBQTtBQUMxQ0gsRUFBQUEsV0FBVyxDQUFDSSxJQUFaLENBQWlCVixNQUFqQjtBQUNELENBRkQ7QUFBQTtBQUFBOztBQUlBLE9BQU8sTUFBTVcsS0FBSyw2QkFBR2IsV0FBVyxDQUFDSyxXQUFELEVBQWNKLGVBQWUsQ0FBQyxHQUFHTyxXQUFKLENBQTdCLENBQWQsQ0FBWDs7QUFDUEQsY0FBYyxDQUFDTyxHQUFmLENBQW1CUixRQUFuQjtBQUVBLE9BQU8sTUFBTVMsU0FBUyw2QkFBR1osWUFBWSxDQUFDVSxLQUFELENBQWYsQ0FBZjtBQUVQLGVBQWU7QUFBRUEsRUFBQUEsS0FBRjtBQUFTRSxFQUFBQTtBQUFULENBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIjtcbmltcG9ydCB7IHBlcnNpc3RTdG9yZSB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcIkByZWR1eC1zYWdhL2NvcmVcIjtcblxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3Jvb3QtcmVkdWNlclwiO1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuL3Jvb3Qtc2FnYVwiO1xuXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG5jb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XG4gIG1pZGRsZXdhcmVzLnB1c2gobG9nZ2VyKTtcbn1cblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xuc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcblxuZXhwb3J0IGNvbnN0IHBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShzdG9yZSk7XG5cbmV4cG9ydCBkZWZhdWx0IHsgc3RvcmUsIHBlcnNpc3RvciB9O1xuIl19