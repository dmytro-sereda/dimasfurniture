function cov_34bqw7spg() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/menu/menu.reducer.js";
  var hash = "a3a1b321d1056eb4a9526aabb02b0aa0e6b7ced6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/menu/menu.reducer.js",
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
    hash: "a3a1b321d1056eb4a9526aabb02b0aa0e6b7ced6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_34bqw7spg = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_34bqw7spg();
import MenuActionTypes from "./menu.types";
const DEFAULT_STATE = (cov_34bqw7spg().s[0]++, {
  isMenuHidden: true
});
cov_34bqw7spg().s[1]++;

const MenuReducer = (state = (cov_34bqw7spg().b[0][0]++, DEFAULT_STATE), action) => {
  cov_34bqw7spg().f[0]++;
  cov_34bqw7spg().s[2]++;

  switch (action.type) {
    case MenuActionTypes.TOGGLE_MENU:
      cov_34bqw7spg().b[1][0]++;
      cov_34bqw7spg().s[3]++;
      return { ...state,
        isMenuHidden: !state.isMenuHidden
      };

    default:
      cov_34bqw7spg().b[1][1]++;
      cov_34bqw7spg().s[4]++;
      return state;
  }
};

export default MenuReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUucmVkdWNlci5qcyJdLCJuYW1lcyI6WyJNZW51QWN0aW9uVHlwZXMiLCJERUZBVUxUX1NUQVRFIiwiaXNNZW51SGlkZGVuIiwiTWVudVJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJUT0dHTEVfTUVOVSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxlQUFQLE1BQTRCLGNBQTVCO0FBRUEsTUFBTUMsYUFBYSw0QkFBRztBQUNwQkMsRUFBQUEsWUFBWSxFQUFFO0FBRE0sQ0FBSCxDQUFuQjs7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLENBQUNDLEtBQUssK0JBQUdILGFBQUgsQ0FBTixFQUF3QkksTUFBeEIsS0FBbUM7QUFBQTtBQUFBOztBQUNyRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLTixlQUFlLENBQUNPLFdBQXJCO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFBRSxHQUFHSCxLQUFMO0FBQVlGLFFBQUFBLFlBQVksRUFBRSxDQUFDRSxLQUFLLENBQUNGO0FBQWpDLE9BQVA7O0FBQ0Y7QUFBQTtBQUFBO0FBQ0UsYUFBT0UsS0FBUDtBQUpKO0FBTUQsQ0FQRDs7QUFTQSxlQUFlRCxXQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lbnVBY3Rpb25UeXBlcyBmcm9tIFwiLi9tZW51LnR5cGVzXCI7XG5cbmNvbnN0IERFRkFVTFRfU1RBVEUgPSB7XG4gIGlzTWVudUhpZGRlbjogdHJ1ZSxcbn07XG5cbmNvbnN0IE1lbnVSZWR1Y2VyID0gKHN0YXRlID0gREVGQVVMVF9TVEFURSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIE1lbnVBY3Rpb25UeXBlcy5UT0dHTEVfTUVOVTpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc01lbnVIaWRkZW46ICFzdGF0ZS5pc01lbnVIaWRkZW4gfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51UmVkdWNlcjtcbiJdfQ==