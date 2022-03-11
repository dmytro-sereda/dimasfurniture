function cov_1g3weu7x8y() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/shop/shop.sagas.js";
  var hash = "eb9209fef06aed46471c9977e9b23847dbc72501";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/shop/shop.sagas.js",
    statementMap: {
      "0": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 24,
          column: 3
        }
      },
      "1": {
        start: {
          line: 16,
          column: 26
        },
        end: {
          line: 16,
          column: 73
        }
      },
      "2": {
        start: {
          line: 17,
          column: 24
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "3": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 52
        }
      },
      "4": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 44
        }
      },
      "5": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 78
        }
      },
      "6": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 32,
          column: 40
        }
      }
    },
    fnMap: {
      "0": {
        name: "fetchCollections",
        decl: {
          start: {
            line: 14,
            column: 17
          },
          end: {
            line: 14,
            column: 33
          }
        },
        loc: {
          start: {
            line: 14,
            column: 36
          },
          end: {
            line: 25,
            column: 1
          }
        },
        line: 14
      },
      "1": {
        name: "onFetchCollections",
        decl: {
          start: {
            line: 27,
            column: 17
          },
          end: {
            line: 27,
            column: 35
          }
        },
        loc: {
          start: {
            line: 27,
            column: 38
          },
          end: {
            line: 29,
            column: 1
          }
        },
        line: 27
      },
      "2": {
        name: "ShopSagas",
        decl: {
          start: {
            line: 31,
            column: 17
          },
          end: {
            line: 31,
            column: 26
          }
        },
        loc: {
          start: {
            line: 31,
            column: 29
          },
          end: {
            line: 33,
            column: 1
          }
        },
        line: 31
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "eb9209fef06aed46471c9977e9b23847dbc72501"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1g3weu7x8y = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1g3weu7x8y();
import ShopActionTypes from "./shop.types";
import { takeLatest, put, call, all } from "redux-saga/effects";
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop.actions";
export function* fetchCollections() {
  cov_1g3weu7x8y().f[0]++;
  cov_1g3weu7x8y().s[0]++;

  try {
    const querySnapshot = (cov_1g3weu7x8y().s[1]++, yield firestore.collection("collections").get());
    const collections = (cov_1g3weu7x8y().s[2]++, yield call(convertCollectionsSnapshotToMap, querySnapshot));
    cov_1g3weu7x8y().s[3]++;
    yield put(fetchCollectionsSuccess(collections));
  } catch (err) {
    cov_1g3weu7x8y().s[4]++;
    yield put(fetchCollectionsFailure(err));
  }
}
export function* onFetchCollections() {
  cov_1g3weu7x8y().f[1]++;
  cov_1g3weu7x8y().s[5]++;
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}
export function* ShopSagas() {
  cov_1g3weu7x8y().f[2]++;
  cov_1g3weu7x8y().s[6]++;
  yield all([call(onFetchCollections)]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3Auc2FnYXMuanMiXSwibmFtZXMiOlsiU2hvcEFjdGlvblR5cGVzIiwidGFrZUxhdGVzdCIsInB1dCIsImNhbGwiLCJhbGwiLCJjb252ZXJ0Q29sbGVjdGlvbnNTbmFwc2hvdFRvTWFwIiwiZmlyZXN0b3JlIiwiZmV0Y2hDb2xsZWN0aW9uc1N1Y2Nlc3MiLCJmZXRjaENvbGxlY3Rpb25zRmFpbHVyZSIsImZldGNoQ29sbGVjdGlvbnMiLCJxdWVyeVNuYXBzaG90IiwiY29sbGVjdGlvbiIsImdldCIsImNvbGxlY3Rpb25zIiwiZXJyIiwib25GZXRjaENvbGxlY3Rpb25zIiwiRkVUQ0hfQ09MTEVDVElPTlNfU1RBUlQiLCJTaG9wU2FnYXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxlQUFQLE1BQTRCLGNBQTVCO0FBQ0EsU0FBU0MsVUFBVCxFQUFxQkMsR0FBckIsRUFBMEJDLElBQTFCLEVBQWdDQyxHQUFoQyxRQUEyQyxvQkFBM0M7QUFFQSxTQUNFQywrQkFERixFQUVFQyxTQUZGLFFBR08sK0JBSFA7QUFLQSxTQUNFQyx1QkFERixFQUVFQyx1QkFGRixRQUdPLGdCQUhQO0FBS0EsT0FBTyxVQUFVQyxnQkFBVixHQUE2QjtBQUFBO0FBQUE7O0FBQ2xDLE1BQUk7QUFDRixVQUFNQyxhQUFhLDZCQUFHLE1BQU1KLFNBQVMsQ0FBQ0ssVUFBVixDQUFxQixhQUFyQixFQUFvQ0MsR0FBcEMsRUFBVCxDQUFuQjtBQUNBLFVBQU1DLFdBQVcsNkJBQUcsTUFBTVYsSUFBSSxDQUM1QkUsK0JBRDRCLEVBRTVCSyxhQUY0QixDQUFiLENBQWpCO0FBRkU7QUFNRixVQUFNUixHQUFHLENBQUNLLHVCQUF1QixDQUFDTSxXQUFELENBQXhCLENBQVQ7QUFDRCxHQVBELENBT0UsT0FBT0MsR0FBUCxFQUFZO0FBQUE7QUFDWixVQUFNWixHQUFHLENBQUNNLHVCQUF1QixDQUFDTSxHQUFELENBQXhCLENBQVQ7QUFDRDtBQUNGO0FBRUQsT0FBTyxVQUFVQyxrQkFBVixHQUErQjtBQUFBO0FBQUE7QUFDcEMsUUFBTWQsVUFBVSxDQUFDRCxlQUFlLENBQUNnQix1QkFBakIsRUFBMENQLGdCQUExQyxDQUFoQjtBQUNEO0FBRUQsT0FBTyxVQUFVUSxTQUFWLEdBQXNCO0FBQUE7QUFBQTtBQUMzQixRQUFNYixHQUFHLENBQUMsQ0FBQ0QsSUFBSSxDQUFDWSxrQkFBRCxDQUFMLENBQUQsQ0FBVDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNob3BBY3Rpb25UeXBlcyBmcm9tIFwiLi9zaG9wLnR5cGVzXCI7XG5pbXBvcnQgeyB0YWtlTGF0ZXN0LCBwdXQsIGNhbGwsIGFsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcblxuaW1wb3J0IHtcbiAgY29udmVydENvbGxlY3Rpb25zU25hcHNob3RUb01hcCxcbiAgZmlyZXN0b3JlLFxufSBmcm9tIFwiLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UudXRpbHNcIjtcblxuaW1wb3J0IHtcbiAgZmV0Y2hDb2xsZWN0aW9uc1N1Y2Nlc3MsXG4gIGZldGNoQ29sbGVjdGlvbnNGYWlsdXJlLFxufSBmcm9tIFwiLi9zaG9wLmFjdGlvbnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uKiBmZXRjaENvbGxlY3Rpb25zKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSB5aWVsZCBmaXJlc3RvcmUuY29sbGVjdGlvbihcImNvbGxlY3Rpb25zXCIpLmdldCgpO1xuICAgIGNvbnN0IGNvbGxlY3Rpb25zID0geWllbGQgY2FsbChcbiAgICAgIGNvbnZlcnRDb2xsZWN0aW9uc1NuYXBzaG90VG9NYXAsXG4gICAgICBxdWVyeVNuYXBzaG90XG4gICAgKTtcbiAgICB5aWVsZCBwdXQoZmV0Y2hDb2xsZWN0aW9uc1N1Y2Nlc3MoY29sbGVjdGlvbnMpKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgeWllbGQgcHV0KGZldGNoQ29sbGVjdGlvbnNGYWlsdXJlKGVycikpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogb25GZXRjaENvbGxlY3Rpb25zKCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KFNob3BBY3Rpb25UeXBlcy5GRVRDSF9DT0xMRUNUSU9OU19TVEFSVCwgZmV0Y2hDb2xsZWN0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogU2hvcFNhZ2FzKCkge1xuICB5aWVsZCBhbGwoW2NhbGwob25GZXRjaENvbGxlY3Rpb25zKV0pO1xufVxuIl19