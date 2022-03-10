function cov_15vl0zzumf() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\user\\user.reducer.js";
  var hash = "64f9a564f84a3439471555e6b699f31100c0bcb7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\user\\user.reducer.js",
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
    hash: "64f9a564f84a3439471555e6b699f31100c0bcb7"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_15vl0zzumf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_15vl0zzumf();
import UserActionTypes from "./user.types";
const INITIAL_STATE = (cov_15vl0zzumf().s[0]++, {
  currentUser: null,
  error: null
});
cov_15vl0zzumf().s[1]++;

const UserReducer = (state = (cov_15vl0zzumf().b[0][0]++, INITIAL_STATE), action) => {
  cov_15vl0zzumf().f[0]++;
  cov_15vl0zzumf().s[2]++;

  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      cov_15vl0zzumf().b[1][0]++;
      cov_15vl0zzumf().s[3]++;
      return { ...state,
        currentUser: action.payload,
        error: null
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      cov_15vl0zzumf().b[1][1]++;
      cov_15vl0zzumf().s[4]++;
      return { ...state,
        currentUser: null,
        error: null
      };

    case UserActionTypes.SIGN_IN_FAILURE:
      cov_15vl0zzumf().b[1][2]++;

    case UserActionTypes.SIGN_OUT_FAILURE:
      cov_15vl0zzumf().b[1][3]++;
      cov_15vl0zzumf().s[5]++;
      return { ...state,
        error: action.payload
      };

    default:
      cov_15vl0zzumf().b[1][4]++;
      cov_15vl0zzumf().s[6]++;
      return state;
  }
};

export default UserReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIucmVkdWNlci5qcyJdLCJuYW1lcyI6WyJVc2VyQWN0aW9uVHlwZXMiLCJJTklUSUFMX1NUQVRFIiwiY3VycmVudFVzZXIiLCJlcnJvciIsIlVzZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiU0lHTl9JTl9TVUNDRVNTIiwicGF5bG9hZCIsIlNJR05fT1VUX1NVQ0NFU1MiLCJTSUdOX0lOX0ZBSUxVUkUiLCJTSUdOX09VVF9GQUlMVVJFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxlQUFQLE1BQTRCLGNBQTVCO0FBRUEsTUFBTUMsYUFBYSw2QkFBRztBQUNwQkMsRUFBQUEsV0FBVyxFQUFFLElBRE87QUFFcEJDLEVBQUFBLEtBQUssRUFBRTtBQUZhLENBQUgsQ0FBbkI7OztBQUtBLE1BQU1DLFdBQVcsR0FBRyxDQUFDQyxLQUFLLGdDQUFHSixhQUFILENBQU4sRUFBd0JLLE1BQXhCLEtBQW1DO0FBQUE7QUFBQTs7QUFDckQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS1AsZUFBZSxDQUFDUSxlQUFyQjtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQUUsR0FBR0gsS0FBTDtBQUFZSCxRQUFBQSxXQUFXLEVBQUVJLE1BQU0sQ0FBQ0csT0FBaEM7QUFBeUNOLFFBQUFBLEtBQUssRUFBRTtBQUFoRCxPQUFQOztBQUNGLFNBQUtILGVBQWUsQ0FBQ1UsZ0JBQXJCO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFBRSxHQUFHTCxLQUFMO0FBQVlILFFBQUFBLFdBQVcsRUFBRSxJQUF6QjtBQUErQkMsUUFBQUEsS0FBSyxFQUFFO0FBQXRDLE9BQVA7O0FBQ0YsU0FBS0gsZUFBZSxDQUFDVyxlQUFyQjtBQUFBOztBQUNBLFNBQUtYLGVBQWUsQ0FBQ1ksZ0JBQXJCO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFBRSxHQUFHUCxLQUFMO0FBQVlGLFFBQUFBLEtBQUssRUFBRUcsTUFBTSxDQUFDRztBQUExQixPQUFQOztBQUNGO0FBQUE7QUFBQTtBQUNFLGFBQU9KLEtBQVA7QUFUSjtBQVdELENBWkQ7O0FBY0EsZUFBZUQsV0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyQWN0aW9uVHlwZXMgZnJvbSBcIi4vdXNlci50eXBlc1wiO1xyXG5cclxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcclxuICBjdXJyZW50VXNlcjogbnVsbCxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IFVzZXJSZWR1Y2VyID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBVc2VyQWN0aW9uVHlwZXMuU0lHTl9JTl9TVUNDRVNTOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY3VycmVudFVzZXI6IGFjdGlvbi5wYXlsb2FkLCBlcnJvcjogbnVsbCB9O1xyXG4gICAgY2FzZSBVc2VyQWN0aW9uVHlwZXMuU0lHTl9PVVRfU1VDQ0VTUzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGN1cnJlbnRVc2VyOiBudWxsLCBlcnJvcjogbnVsbCB9O1xyXG4gICAgY2FzZSBVc2VyQWN0aW9uVHlwZXMuU0lHTl9JTl9GQUlMVVJFOlxyXG4gICAgY2FzZSBVc2VyQWN0aW9uVHlwZXMuU0lHTl9PVVRfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJSZWR1Y2VyO1xyXG4iXX0=