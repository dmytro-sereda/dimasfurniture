function cov_10rz3lypoo() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/menu/menu.selectors.js";
  var hash = "507977fa278283f483f18ea269c0fa0c0a64cfc7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/menu/menu.selectors.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 26
        },
        end: {
          line: 3,
          column: 47
        }
      },
      "1": {
        start: {
          line: 3,
          column: 37
        },
        end: {
          line: 3,
          column: 47
        }
      },
      "2": {
        start: {
          line: 5,
          column: 34
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "3": {
        start: {
          line: 7,
          column: 12
        },
        end: {
          line: 7,
          column: 29
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 26
          },
          end: {
            line: 3,
            column: 27
          }
        },
        loc: {
          start: {
            line: 3,
            column: 37
          },
          end: {
            line: 3,
            column: 47
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 2
          },
          end: {
            line: 7,
            column: 3
          }
        },
        loc: {
          start: {
            line: 7,
            column: 12
          },
          end: {
            line: 7,
            column: 29
          }
        },
        line: 7
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "507977fa278283f483f18ea269c0fa0c0a64cfc7"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_10rz3lypoo = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_10rz3lypoo();
import { createSelector } from "reselect";
cov_10rz3lypoo().s[0]++;
export const selectMenu = state => {
  cov_10rz3lypoo().f[0]++;
  cov_10rz3lypoo().s[1]++;
  return state.menu;
};
export const selectIsMenuHidden = (cov_10rz3lypoo().s[2]++, createSelector([selectMenu], menu => {
  cov_10rz3lypoo().f[1]++;
  cov_10rz3lypoo().s[3]++;
  return menu.isMenuHidden;
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuc2VsZWN0b3JzLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVNlbGVjdG9yIiwic2VsZWN0TWVudSIsInN0YXRlIiwibWVudSIsInNlbGVjdElzTWVudUhpZGRlbiIsImlzTWVudUhpZGRlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsY0FBVCxRQUErQixVQUEvQjs7QUFFQSxPQUFPLE1BQU1DLFVBQVUsR0FBSUMsS0FBRCxJQUFXO0FBQUE7QUFBQTtBQUFBLFNBQUFBLEtBQUssQ0FBQ0MsSUFBTjtBQUFVLENBQXhDO0FBRVAsT0FBTyxNQUFNQyxrQkFBa0IsNkJBQUdKLGNBQWMsQ0FDOUMsQ0FBQ0MsVUFBRCxDQUQ4QyxFQUU3Q0UsSUFBRCxJQUFVO0FBQUE7QUFBQTtBQUFBLFNBQUFBLElBQUksQ0FBQ0UsWUFBTDtBQUFpQixDQUZtQixDQUFqQixDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSBcInJlc2VsZWN0XCI7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RNZW51ID0gKHN0YXRlKSA9PiBzdGF0ZS5tZW51O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0SXNNZW51SGlkZGVuID0gY3JlYXRlU2VsZWN0b3IoXG4gIFtzZWxlY3RNZW51XSxcbiAgKG1lbnUpID0+IG1lbnUuaXNNZW51SGlkZGVuXG4pO1xuIl19