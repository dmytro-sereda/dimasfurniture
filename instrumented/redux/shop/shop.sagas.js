function cov_2cwc7scvm1() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\shop\\shop.sagas.js";
  var hash = "bf68064edf14615342594c206df86bc0a1b84cb5";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\shop\\shop.sagas.js",
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
    hash: "bf68064edf14615342594c206df86bc0a1b84cb5"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2cwc7scvm1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2cwc7scvm1();
import ShopActionTypes from "./shop.types";
import { takeLatest, put, call, all } from "redux-saga/effects";
import { convertCollectionsSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./shop.actions";
export function* fetchCollections() {
  cov_2cwc7scvm1().f[0]++;
  cov_2cwc7scvm1().s[0]++;

  try {
    const querySnapshot = (cov_2cwc7scvm1().s[1]++, yield firestore.collection("collections").get());
    const collections = (cov_2cwc7scvm1().s[2]++, yield call(convertCollectionsSnapshotToMap, querySnapshot));
    cov_2cwc7scvm1().s[3]++;
    yield put(fetchCollectionsSuccess(collections));
  } catch (err) {
    cov_2cwc7scvm1().s[4]++;
    yield put(fetchCollectionsFailure(err));
  }
}
export function* onFetchCollections() {
  cov_2cwc7scvm1().f[1]++;
  cov_2cwc7scvm1().s[5]++;
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}
export function* ShopSagas() {
  cov_2cwc7scvm1().f[2]++;
  cov_2cwc7scvm1().s[6]++;
  yield all([call(onFetchCollections)]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3Auc2FnYXMuanMiXSwibmFtZXMiOlsiU2hvcEFjdGlvblR5cGVzIiwidGFrZUxhdGVzdCIsInB1dCIsImNhbGwiLCJhbGwiLCJjb252ZXJ0Q29sbGVjdGlvbnNTbmFwc2hvdFRvTWFwIiwiZmlyZXN0b3JlIiwiZmV0Y2hDb2xsZWN0aW9uc1N1Y2Nlc3MiLCJmZXRjaENvbGxlY3Rpb25zRmFpbHVyZSIsImZldGNoQ29sbGVjdGlvbnMiLCJxdWVyeVNuYXBzaG90IiwiY29sbGVjdGlvbiIsImdldCIsImNvbGxlY3Rpb25zIiwiZXJyIiwib25GZXRjaENvbGxlY3Rpb25zIiwiRkVUQ0hfQ09MTEVDVElPTlNfU1RBUlQiLCJTaG9wU2FnYXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxlQUFQLE1BQTRCLGNBQTVCO0FBQ0EsU0FBU0MsVUFBVCxFQUFxQkMsR0FBckIsRUFBMEJDLElBQTFCLEVBQWdDQyxHQUFoQyxRQUEyQyxvQkFBM0M7QUFFQSxTQUNFQywrQkFERixFQUVFQyxTQUZGLFFBR08sK0JBSFA7QUFLQSxTQUNFQyx1QkFERixFQUVFQyx1QkFGRixRQUdPLGdCQUhQO0FBS0EsT0FBTyxVQUFVQyxnQkFBVixHQUE2QjtBQUFBO0FBQUE7O0FBQ2xDLE1BQUk7QUFDRixVQUFNQyxhQUFhLDZCQUFHLE1BQU1KLFNBQVMsQ0FBQ0ssVUFBVixDQUFxQixhQUFyQixFQUFvQ0MsR0FBcEMsRUFBVCxDQUFuQjtBQUNBLFVBQU1DLFdBQVcsNkJBQUcsTUFBTVYsSUFBSSxDQUM1QkUsK0JBRDRCLEVBRTVCSyxhQUY0QixDQUFiLENBQWpCO0FBRkU7QUFNRixVQUFNUixHQUFHLENBQUNLLHVCQUF1QixDQUFDTSxXQUFELENBQXhCLENBQVQ7QUFDRCxHQVBELENBT0UsT0FBT0MsR0FBUCxFQUFZO0FBQUE7QUFDWixVQUFNWixHQUFHLENBQUNNLHVCQUF1QixDQUFDTSxHQUFELENBQXhCLENBQVQ7QUFDRDtBQUNGO0FBRUQsT0FBTyxVQUFVQyxrQkFBVixHQUErQjtBQUFBO0FBQUE7QUFDcEMsUUFBTWQsVUFBVSxDQUFDRCxlQUFlLENBQUNnQix1QkFBakIsRUFBMENQLGdCQUExQyxDQUFoQjtBQUNEO0FBRUQsT0FBTyxVQUFVUSxTQUFWLEdBQXNCO0FBQUE7QUFBQTtBQUMzQixRQUFNYixHQUFHLENBQUMsQ0FBQ0QsSUFBSSxDQUFDWSxrQkFBRCxDQUFMLENBQUQsQ0FBVDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNob3BBY3Rpb25UeXBlcyBmcm9tIFwiLi9zaG9wLnR5cGVzXCI7XHJcbmltcG9ydCB7IHRha2VMYXRlc3QsIHB1dCwgY2FsbCwgYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBjb252ZXJ0Q29sbGVjdGlvbnNTbmFwc2hvdFRvTWFwLFxyXG4gIGZpcmVzdG9yZSxcclxufSBmcm9tIFwiLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UudXRpbHNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZmV0Y2hDb2xsZWN0aW9uc1N1Y2Nlc3MsXHJcbiAgZmV0Y2hDb2xsZWN0aW9uc0ZhaWx1cmUsXHJcbn0gZnJvbSBcIi4vc2hvcC5hY3Rpb25zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGZldGNoQ29sbGVjdGlvbnMoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSB5aWVsZCBmaXJlc3RvcmUuY29sbGVjdGlvbihcImNvbGxlY3Rpb25zXCIpLmdldCgpO1xyXG4gICAgY29uc3QgY29sbGVjdGlvbnMgPSB5aWVsZCBjYWxsKFxyXG4gICAgICBjb252ZXJ0Q29sbGVjdGlvbnNTbmFwc2hvdFRvTWFwLFxyXG4gICAgICBxdWVyeVNuYXBzaG90XHJcbiAgICApO1xyXG4gICAgeWllbGQgcHV0KGZldGNoQ29sbGVjdGlvbnNTdWNjZXNzKGNvbGxlY3Rpb25zKSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoZmV0Y2hDb2xsZWN0aW9uc0ZhaWx1cmUoZXJyKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIG9uRmV0Y2hDb2xsZWN0aW9ucygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNob3BBY3Rpb25UeXBlcy5GRVRDSF9DT0xMRUNUSU9OU19TVEFSVCwgZmV0Y2hDb2xsZWN0aW9ucyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogU2hvcFNhZ2FzKCkge1xyXG4gIHlpZWxkIGFsbChbY2FsbChvbkZldGNoQ29sbGVjdGlvbnMpXSk7XHJcbn1cclxuIl19