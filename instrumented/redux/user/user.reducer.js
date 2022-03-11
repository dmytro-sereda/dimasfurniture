function cov_1zoxxsw2k2() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/user/user.reducer.js";
  var hash = "6b00aeb7eaac2960c7c31718dc908fc8182050f1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/user/user.reducer.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 22
        },
        end: {
          line: 6,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
          column: 20
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "2": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 19,
          column: 3
        }
      },
      "3": {
        start: {
          line: 11,
          column: 6
        },
        end: {
          line: 11,
          column: 68
        }
      },
      "4": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 58
        }
      },
      "5": {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 49
        }
      },
      "6": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 20
          },
          end: {
            line: 8,
            column: 21
          }
        },
        loc: {
          start: {
            line: 8,
            column: 55
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 8
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 8,
            column: 21
          },
          end: {
            line: 8,
            column: 42
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 8,
            column: 29
          },
          end: {
            line: 8,
            column: 42
          }
        }],
        line: 8
      },
      "1": {
        loc: {
          start: {
            line: 9,
            column: 2
          },
          end: {
            line: 19,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 11,
            column: 68
          }
        }, {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 13,
            column: 58
          }
        }, {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 41
          }
        }, {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 16,
            column: 49
          }
        }, {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 18,
            column: 19
          }
        }],
        line: 9
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
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6b00aeb7eaac2960c7c31718dc908fc8182050f1"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1zoxxsw2k2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1zoxxsw2k2();
import UserActionTypes from "./user.types";
const INITIAL_STATE = (cov_1zoxxsw2k2().s[0]++, {
  currentUser: null,
  error: null
});
cov_1zoxxsw2k2().s[1]++;

const UserReducer = (state = (cov_1zoxxsw2k2().b[0][0]++, INITIAL_STATE), action) => {
  cov_1zoxxsw2k2().f[0]++;
  cov_1zoxxsw2k2().s[2]++;

  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      cov_1zoxxsw2k2().b[1][0]++;
      cov_1zoxxsw2k2().s[3]++;
      return { ...state,
        currentUser: action.payload,
        error: null
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      cov_1zoxxsw2k2().b[1][1]++;
      cov_1zoxxsw2k2().s[4]++;
      return { ...state,
        currentUser: null,
        error: null
      };

    case UserActionTypes.SIGN_IN_FAILURE:
      cov_1zoxxsw2k2().b[1][2]++;

    case UserActionTypes.SIGN_OUT_FAILURE:
      cov_1zoxxsw2k2().b[1][3]++;
      cov_1zoxxsw2k2().s[5]++;
      return { ...state,
        error: action.payload
      };

    default:
      cov_1zoxxsw2k2().b[1][4]++;
      cov_1zoxxsw2k2().s[6]++;
      return state;
  }
};

export default UserReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIucmVkdWNlci5qcyJdLCJuYW1lcyI6WyJVc2VyQWN0aW9uVHlwZXMiLCJJTklUSUFMX1NUQVRFIiwiY3VycmVudFVzZXIiLCJlcnJvciIsIlVzZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU0lHTl9JTl9TVUNDRVNTIiwicGF5bG9hZCIsIlNJR05fT1VUX1NVQ0NFU1MiLCJTSUdOX0lOX0ZBSUxVUkUiLCJTSUdOX09VVF9GQUlMVVJFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxlQUFQLE1BQTRCLGNBQTVCO0FBRUEsTUFBTUMsYUFBYSw2QkFBRztBQUNwQkMsRUFBQUEsV0FBVyxFQUFFLElBRE87QUFFcEJDLEVBQUFBLEtBQUssRUFBRTtBQUZhLENBQUgsQ0FBbkI7OztBQUtBLE1BQU1DLFdBQVcsR0FBRyxDQUFDQyxLQUFLLGdDQUFHSixhQUFILENBQU4sRUFBd0JLLE1BQXhCLEtBQW1DO0FBQUE7QUFBQTs7QUFDckQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS1AsZUFBZSxDQUFDUSxlQUFyQjtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQUUsR0FBR0gsS0FBTDtBQUFZSCxRQUFBQSxXQUFXLEVBQUVJLE1BQU0sQ0FBQ0csT0FBaEM7QUFBeUNOLFFBQUFBLEtBQUssRUFBRTtBQUFoRCxPQUFQOztBQUNGLFNBQUtILGVBQWUsQ0FBQ1UsZ0JBQXJCO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFBRSxHQUFHTCxLQUFMO0FBQVlILFFBQUFBLFdBQVcsRUFBRSxJQUF6QjtBQUErQkMsUUFBQUEsS0FBSyxFQUFFO0FBQXRDLE9BQVA7O0FBQ0YsU0FBS0gsZUFBZSxDQUFDVyxlQUFyQjtBQUFBOztBQUNBLFNBQUtYLGVBQWUsQ0FBQ1ksZ0JBQXJCO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFBRSxHQUFHUCxLQUFMO0FBQVlGLFFBQUFBLEtBQUssRUFBRUcsTUFBTSxDQUFDRztBQUExQixPQUFQOztBQUNGO0FBQUE7QUFBQTtBQUNFLGFBQU9KLEtBQVA7QUFUSjtBQVdELENBWkQ7O0FBY0EsZUFBZUQsV0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyQWN0aW9uVHlwZXMgZnJvbSBcIi4vdXNlci50eXBlc1wiO1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBjdXJyZW50VXNlcjogbnVsbCxcbiAgZXJyb3I6IG51bGwsXG59O1xuXG5jb25zdCBVc2VyUmVkdWNlciA9IChzdGF0ZSA9IElOSVRJQUxfU1RBVEUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBVc2VyQWN0aW9uVHlwZXMuU0lHTl9JTl9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRVc2VyOiBhY3Rpb24ucGF5bG9hZCwgZXJyb3I6IG51bGwgfTtcbiAgICBjYXNlIFVzZXJBY3Rpb25UeXBlcy5TSUdOX09VVF9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRVc2VyOiBudWxsLCBlcnJvcjogbnVsbCB9O1xuICAgIGNhc2UgVXNlckFjdGlvblR5cGVzLlNJR05fSU5fRkFJTFVSRTpcbiAgICBjYXNlIFVzZXJBY3Rpb25UeXBlcy5TSUdOX09VVF9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJSZWR1Y2VyO1xuIl19