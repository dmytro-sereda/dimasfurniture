function cov_1z0qrs8zba() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\menu\\menu.reducer.js";
  var hash = "e3da47caec73a923bd4ceb1a4552484060fb68ce";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\menu\\menu.reducer.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 22
        },
        end: {
          line: 5,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 20
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "2": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "3": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 61
        }
      },
      "4": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 20
          },
          end: {
            line: 7,
            column: 21
          }
        },
        loc: {
          start: {
            line: 7,
            column: 55
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 7
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 21
          },
          end: {
            line: 7,
            column: 42
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 7,
            column: 29
          },
          end: {
            line: 7,
            column: 42
          }
        }],
        line: 7
      },
      "1": {
        loc: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 10,
            column: 61
          }
        }, {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 12,
            column: 19
          }
        }],
        line: 8
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e3da47caec73a923bd4ceb1a4552484060fb68ce"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1z0qrs8zba = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1z0qrs8zba();
import MenuActionTypes from "./menu.types";
const DEFAULT_STATE = (cov_1z0qrs8zba().s[0]++, {
  isMenuHidden: true
});
cov_1z0qrs8zba().s[1]++;

const MenuReducer = (state = (cov_1z0qrs8zba().b[0][0]++, DEFAULT_STATE), action) => {
  cov_1z0qrs8zba().f[0]++;
  cov_1z0qrs8zba().s[2]++;

  switch (action.type) {
    case MenuActionTypes.TOGGLE_MENU:
      cov_1z0qrs8zba().b[1][0]++;
      cov_1z0qrs8zba().s[3]++;
      return { ...state,
        isMenuHidden: !state.isMenuHidden
      };

    default:
      cov_1z0qrs8zba().b[1][1]++;
      cov_1z0qrs8zba().s[4]++;
      return state;
  }
};

export default MenuReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUucmVkdWNlci5qcyJdLCJuYW1lcyI6WyJNZW51QWN0aW9uVHlwZXMiLCJERUZBVUxUX1NUQVRFIiwiaXNNZW51SGlkZGVuIiwiTWVudVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJUT0dHTEVfTUVOVSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxlQUFQLE1BQTRCLGNBQTVCO0FBRUEsTUFBTUMsYUFBYSw2QkFBRztBQUNwQkMsRUFBQUEsWUFBWSxFQUFFO0FBRE0sQ0FBSCxDQUFuQjs7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLENBQUNDLEtBQUssZ0NBQUdILGFBQUgsQ0FBTixFQUF3QkksTUFBeEIsS0FBbUM7QUFBQTtBQUFBOztBQUNyRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLTixlQUFlLENBQUNPLFdBQXJCO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFBRSxHQUFHSCxLQUFMO0FBQVlGLFFBQUFBLFlBQVksRUFBRSxDQUFDRSxLQUFLLENBQUNGO0FBQWpDLE9BQVA7O0FBQ0Y7QUFBQTtBQUFBO0FBQ0UsYUFBT0UsS0FBUDtBQUpKO0FBTUQsQ0FQRDs7QUFTQSxlQUFlRCxXQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lbnVBY3Rpb25UeXBlcyBmcm9tIFwiLi9tZW51LnR5cGVzXCI7XHJcblxyXG5jb25zdCBERUZBVUxUX1NUQVRFID0ge1xyXG4gIGlzTWVudUhpZGRlbjogdHJ1ZSxcclxufTtcclxuXHJcbmNvbnN0IE1lbnVSZWR1Y2VyID0gKHN0YXRlID0gREVGQVVMVF9TVEFURSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBNZW51QWN0aW9uVHlwZXMuVE9HR0xFX01FTlU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc01lbnVIaWRkZW46ICFzdGF0ZS5pc01lbnVIaWRkZW4gfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNZW51UmVkdWNlcjtcclxuIl19