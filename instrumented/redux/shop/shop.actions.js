function cov_2b3gwxh3dp() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/shop/shop.actions.js";
  var hash = "aaca1b0c32237569667b1ce58238ab93c0fd1a68";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/shop/shop.actions.js",
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
    hash: "aaca1b0c32237569667b1ce58238ab93c0fd1a68"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2b3gwxh3dp = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2b3gwxh3dp();
import ShopActionTypes from "./shop.types";
cov_2b3gwxh3dp().s[0]++;
export const fetchCollectionsStart = () => {
  cov_2b3gwxh3dp().f[0]++;
  cov_2b3gwxh3dp().s[1]++;
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START
  };
};
cov_2b3gwxh3dp().s[2]++;
export const fetchCollectionsSuccess = collections => {
  cov_2b3gwxh3dp().f[1]++;
  cov_2b3gwxh3dp().s[3]++;
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
  };
};
cov_2b3gwxh3dp().s[4]++;
export const fetchCollectionsFailure = error => {
  cov_2b3gwxh3dp().f[2]++;
  cov_2b3gwxh3dp().s[5]++;
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AuYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJTaG9wQWN0aW9uVHlwZXMiLCJmZXRjaENvbGxlY3Rpb25zU3RhcnQiLCJ0eXBlIiwiRkVUQ0hfQ09MTEVDVElPTlNfU1RBUlQiLCJmZXRjaENvbGxlY3Rpb25zU3VjY2VzcyIsImNvbGxlY3Rpb25zIiwiRkVUQ0hfQ09MTEVDVElPTlNfU1VDQ0VTUyIsInBheWxvYWQiLCJmZXRjaENvbGxlY3Rpb25zRmFpbHVyZSIsImVycm9yIiwiRkVUQ0hfQ09MTEVDVElPTlNfRkFJTFVSRSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxlQUFQLE1BQTRCLGNBQTVCOztBQUVBLE9BQU8sTUFBTUMscUJBQXFCLEdBQUcsTUFBTztBQUFBO0FBQUE7QUFBQTtBQUMxQ0MsSUFBQUEsSUFBSSxFQUFFRixlQUFlLENBQUNHO0FBRG9CO0FBRTNDLENBRk07O0FBSVAsT0FBTyxNQUFNQyx1QkFBdUIsR0FBSUMsV0FBRCxJQUFrQjtBQUFBO0FBQUE7QUFBQTtBQUN2REgsSUFBQUEsSUFBSSxFQUFFRixlQUFlLENBQUNNLHlCQURpQztBQUV2REMsSUFBQUEsT0FBTyxFQUFFRjtBQUY4QztBQUd4RCxDQUhNOztBQUtQLE9BQU8sTUFBTUcsdUJBQXVCLEdBQUlDLEtBQUQsSUFBWTtBQUFBO0FBQUE7QUFBQTtBQUNqRFAsSUFBQUEsSUFBSSxFQUFFRixlQUFlLENBQUNVLHlCQUQyQjtBQUVqREgsSUFBQUEsT0FBTyxFQUFFRTtBQUZ3QztBQUdsRCxDQUhNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNob3BBY3Rpb25UeXBlcyBmcm9tIFwiLi9zaG9wLnR5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBmZXRjaENvbGxlY3Rpb25zU3RhcnQgPSAoKSA9PiAoe1xuICB0eXBlOiBTaG9wQWN0aW9uVHlwZXMuRkVUQ0hfQ09MTEVDVElPTlNfU1RBUlQsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29sbGVjdGlvbnNTdWNjZXNzID0gKGNvbGxlY3Rpb25zKSA9PiAoe1xuICB0eXBlOiBTaG9wQWN0aW9uVHlwZXMuRkVUQ0hfQ09MTEVDVElPTlNfU1VDQ0VTUyxcbiAgcGF5bG9hZDogY29sbGVjdGlvbnMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29sbGVjdGlvbnNGYWlsdXJlID0gKGVycm9yKSA9PiAoe1xuICB0eXBlOiBTaG9wQWN0aW9uVHlwZXMuRkVUQ0hfQ09MTEVDVElPTlNfRkFJTFVSRSxcbiAgcGF5bG9hZDogZXJyb3IsXG59KTtcbiJdfQ==