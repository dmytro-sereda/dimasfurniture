function cov_2aluk9031q() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\shop\\shop.actions.js";
  var hash = "182bf205a6f51d6ce6419f736bf95b830561a418";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\shop\\shop.actions.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 37
        },
        end: {
          line: 5,
          column: 2
        }
      },
      "1": {
        start: {
          line: 3,
          column: 44
        },
        end: {
          line: 5,
          column: 1
        }
      },
      "2": {
        start: {
          line: 7,
          column: 39
        },
        end: {
          line: 10,
          column: 2
        }
      },
      "3": {
        start: {
          line: 7,
          column: 57
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "4": {
        start: {
          line: 12,
          column: 39
        },
        end: {
          line: 15,
          column: 2
        }
      },
      "5": {
        start: {
          line: 12,
          column: 51
        },
        end: {
          line: 15,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 37
          },
          end: {
            line: 3,
            column: 38
          }
        },
        loc: {
          start: {
            line: 3,
            column: 44
          },
          end: {
            line: 5,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 39
          },
          end: {
            line: 7,
            column: 40
          }
        },
        loc: {
          start: {
            line: 7,
            column: 57
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 12,
            column: 39
          },
          end: {
            line: 12,
            column: 40
          }
        },
        loc: {
          start: {
            line: 12,
            column: 51
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "182bf205a6f51d6ce6419f736bf95b830561a418"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2aluk9031q = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2aluk9031q();
import ShopActionTypes from "./shop.types";
cov_2aluk9031q().s[0]++;
export const fetchCollectionsStart = () => {
  cov_2aluk9031q().f[0]++;
  cov_2aluk9031q().s[1]++;
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START
  };
};
cov_2aluk9031q().s[2]++;
export const fetchCollectionsSuccess = collections => {
  cov_2aluk9031q().f[1]++;
  cov_2aluk9031q().s[3]++;
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
  };
};
cov_2aluk9031q().s[4]++;
export const fetchCollectionsFailure = error => {
  cov_2aluk9031q().f[2]++;
  cov_2aluk9031q().s[5]++;
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJTaG9wQWN0aW9uVHlwZXMiLCJmZXRjaENvbGxlY3Rpb25zU3RhcnQiLCJ0eXBlIiwiRkVUQ0hfQ09MTEVDVElPTlNfU1RBUlQiLCJmZXRjaENvbGxlY3Rpb25zU3VjY2VzcyIsImNvbGxlY3Rpb25zIiwiRkVUQ0hfQ09MTEVDVElPTlNfU1VDQ0VTUyIsInBheWxvYWQiLCJmZXRjaENvbGxlY3Rpb25zRmFpbHVyZSIsImVycm9yIiwiRkVUQ0hfQ09MTEVDVElPTlNfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxlQUFQLE1BQTRCLGNBQTVCOztBQUVBLE9BQU8sTUFBTUMscUJBQXFCLEdBQUcsTUFBTztBQUFBO0FBQUE7QUFBQTtBQUMxQ0MsSUFBQUEsSUFBSSxFQUFFRixlQUFlLENBQUNHO0FBRG9CO0FBRTNDLENBRk07O0FBSVAsT0FBTyxNQUFNQyx1QkFBdUIsR0FBSUMsV0FBRCxJQUFrQjtBQUFBO0FBQUE7QUFBQTtBQUN2REgsSUFBQUEsSUFBSSxFQUFFRixlQUFlLENBQUNNLHlCQURpQztBQUV2REMsSUFBQUEsT0FBTyxFQUFFRjtBQUY4QztBQUd4RCxDQUhNOztBQUtQLE9BQU8sTUFBTUcsdUJBQXVCLEdBQUlDLEtBQUQsSUFBWTtBQUFBO0FBQUE7QUFBQTtBQUNqRFAsSUFBQUEsSUFBSSxFQUFFRixlQUFlLENBQUNVLHlCQUQyQjtBQUVqREgsSUFBQUEsT0FBTyxFQUFFRTtBQUZ3QztBQUdsRCxDQUhNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNob3BBY3Rpb25UeXBlcyBmcm9tIFwiLi9zaG9wLnR5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hDb2xsZWN0aW9uc1N0YXJ0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBTaG9wQWN0aW9uVHlwZXMuRkVUQ0hfQ09MTEVDVElPTlNfU1RBUlQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoQ29sbGVjdGlvbnNTdWNjZXNzID0gKGNvbGxlY3Rpb25zKSA9PiAoe1xyXG4gIHR5cGU6IFNob3BBY3Rpb25UeXBlcy5GRVRDSF9DT0xMRUNUSU9OU19TVUNDRVNTLFxyXG4gIHBheWxvYWQ6IGNvbGxlY3Rpb25zLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaENvbGxlY3Rpb25zRmFpbHVyZSA9IChlcnJvcikgPT4gKHtcclxuICB0eXBlOiBTaG9wQWN0aW9uVHlwZXMuRkVUQ0hfQ09MTEVDVElPTlNfRkFJTFVSRSxcclxuICBwYXlsb2FkOiBlcnJvcixcclxufSk7XHJcbiJdfQ==