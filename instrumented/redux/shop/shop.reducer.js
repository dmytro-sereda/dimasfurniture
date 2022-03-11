function cov_ncp3dtrn4() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/shop/shop.reducer.js";
  var hash = "394377bd4cb4e4284bb99c34a260d67225e7e344";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/shop/shop.reducer.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 22
        },
        end: {
          line: 7,
          column: 1
        }
      },
      "1": {
        start: {
          line: 9,
          column: 27
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "2": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 22,
          column: 3
        }
      },
      "3": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 15,
          column: 8
        }
      },
      "4": {
        start: {
          line: 17,
          column: 6
        },
        end: {
          line: 17,
          column: 73
        }
      },
      "5": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 67
        }
      },
      "6": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 27
          },
          end: {
            line: 9,
            column: 28
          }
        },
        loc: {
          start: {
            line: 9,
            column: 62
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 28
          },
          end: {
            line: 9,
            column: 49
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 9,
            column: 36
          },
          end: {
            line: 9,
            column: 49
          }
        }],
        line: 9
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 15,
            column: 8
          }
        }, {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 17,
            column: 73
          }
        }, {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 19,
            column: 67
          }
        }, {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 21,
            column: 19
          }
        }],
        line: 10
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
      "1": [0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "394377bd4cb4e4284bb99c34a260d67225e7e344"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ncp3dtrn4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_ncp3dtrn4();
import ShopActionTypes from "./shop.types";
const INITIAL_STATE = (cov_ncp3dtrn4().s[0]++, {
  collections: {},
  error: null,
  isLoading: true
});
cov_ncp3dtrn4().s[1]++;
export const ShopReducer = (state = (cov_ncp3dtrn4().b[0][0]++, INITIAL_STATE), action) => {
  cov_ncp3dtrn4().f[0]++;
  cov_ncp3dtrn4().s[2]++;

  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      cov_ncp3dtrn4().b[1][0]++;
      cov_ncp3dtrn4().s[3]++;
      return { ...state,
        isLoading: true
      };

    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      cov_ncp3dtrn4().b[1][1]++;
      cov_ncp3dtrn4().s[4]++;
      return { ...state,
        collections: action.payload,
        isLoading: false
      };

    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      cov_ncp3dtrn4().b[1][2]++;
      cov_ncp3dtrn4().s[5]++;
      return { ...state,
        error: action.payload,
        isLoading: false
      };

    default:
      cov_ncp3dtrn4().b[1][3]++;
      cov_ncp3dtrn4().s[6]++;
      return state;
  }
};
export default ShopReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3AucmVkdWNlci5qcyJdLCJuYW1lcyI6WyJTaG9wQWN0aW9uVHlwZXMiLCJJTklUSUFMX1NUQVRFIiwiY29sbGVjdGlvbnMiLCJlcnJvciIsImlzTG9hZGluZyIsIlNob3BSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiRkVUQ0hfQ09MTEVDVElPTlNfU1RBUlQiLCJGRVRDSF9DT0xMRUNUSU9OU19TVUNDRVNTIiwicGF5bG9hZCIsIkZFVENIX0NPTExFQ1RJT05TX0ZBSUxVUkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU9BLGVBQVAsTUFBNEIsY0FBNUI7QUFFQSxNQUFNQyxhQUFhLDRCQUFHO0FBQ3BCQyxFQUFBQSxXQUFXLEVBQUUsRUFETztBQUVwQkMsRUFBQUEsS0FBSyxFQUFFLElBRmE7QUFHcEJDLEVBQUFBLFNBQVMsRUFBRTtBQUhTLENBQUgsQ0FBbkI7O0FBTUEsT0FBTyxNQUFNQyxXQUFXLEdBQUcsQ0FBQ0MsS0FBSywrQkFBR0wsYUFBSCxDQUFOLEVBQXdCTSxNQUF4QixLQUFtQztBQUFBO0FBQUE7O0FBQzVELFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtSLGVBQWUsQ0FBQ1MsdUJBQXJCO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFDTCxHQUFHSCxLQURFO0FBRUxGLFFBQUFBLFNBQVMsRUFBRTtBQUZOLE9BQVA7O0FBSUYsU0FBS0osZUFBZSxDQUFDVSx5QkFBckI7QUFBQTtBQUFBO0FBQ0UsYUFBTyxFQUFFLEdBQUdKLEtBQUw7QUFBWUosUUFBQUEsV0FBVyxFQUFFSyxNQUFNLENBQUNJLE9BQWhDO0FBQXlDUCxRQUFBQSxTQUFTLEVBQUU7QUFBcEQsT0FBUDs7QUFDRixTQUFLSixlQUFlLENBQUNZLHlCQUFyQjtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQUUsR0FBR04sS0FBTDtBQUFZSCxRQUFBQSxLQUFLLEVBQUVJLE1BQU0sQ0FBQ0ksT0FBMUI7QUFBbUNQLFFBQUFBLFNBQVMsRUFBRTtBQUE5QyxPQUFQOztBQUNGO0FBQUE7QUFBQTtBQUNFLGFBQU9FLEtBQVA7QUFYSjtBQWFELENBZE07QUFnQlAsZUFBZUQsV0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaG9wQWN0aW9uVHlwZXMgZnJvbSBcIi4vc2hvcC50eXBlc1wiO1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBjb2xsZWN0aW9uczoge30sXG4gIGVycm9yOiBudWxsLFxuICBpc0xvYWRpbmc6IHRydWUsXG59O1xuXG5leHBvcnQgY29uc3QgU2hvcFJlZHVjZXIgPSAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU2hvcEFjdGlvblR5cGVzLkZFVENIX0NPTExFQ1RJT05TX1NUQVJUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgIH07XG4gICAgY2FzZSBTaG9wQWN0aW9uVHlwZXMuRkVUQ0hfQ09MTEVDVElPTlNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjb2xsZWN0aW9uczogYWN0aW9uLnBheWxvYWQsIGlzTG9hZGluZzogZmFsc2UgfTtcbiAgICBjYXNlIFNob3BBY3Rpb25UeXBlcy5GRVRDSF9DT0xMRUNUSU9OU19GQUlMVVJFOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCwgaXNMb2FkaW5nOiBmYWxzZSB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNob3BSZWR1Y2VyO1xuIl19