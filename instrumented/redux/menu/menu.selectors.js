function cov_1c37850g50() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\menu\\menu.selectors.js";
  var hash = "91d6b1d0ca3d20ac7738b1d0348247eb5a3e5a1e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\menu\\menu.selectors.js",
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
    hash: "91d6b1d0ca3d20ac7738b1d0348247eb5a3e5a1e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1c37850g50 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1c37850g50();
import { createSelector } from "reselect";
cov_1c37850g50().s[0]++;
export const selectMenu = state => {
  cov_1c37850g50().f[0]++;
  cov_1c37850g50().s[1]++;
  return state.menu;
};
export const selectIsMenuHidden = (cov_1c37850g50().s[2]++, createSelector([selectMenu], menu => {
  cov_1c37850g50().f[1]++;
  cov_1c37850g50().s[3]++;
  return menu.isMenuHidden;
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuc2VsZWN0b3JzLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVNlbGVjdG9yIiwic2VsZWN0TWVudSIsInN0YXRlIiwibWVudSIsInNlbGVjdElzTWVudUhpZGRlbiIsImlzTWVudUhpZGRlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsY0FBVCxRQUErQixVQUEvQjs7QUFFQSxPQUFPLE1BQU1DLFVBQVUsR0FBSUMsS0FBRCxJQUFXO0FBQUE7QUFBQTtBQUFBLFNBQUFBLEtBQUssQ0FBQ0MsSUFBTjtBQUFVLENBQXhDO0FBRVAsT0FBTyxNQUFNQyxrQkFBa0IsNkJBQUdKLGNBQWMsQ0FDOUMsQ0FBQ0MsVUFBRCxDQUQ4QyxFQUU3Q0UsSUFBRCxJQUFVO0FBQUE7QUFBQTtBQUFBLFNBQUFBLElBQUksQ0FBQ0UsWUFBTDtBQUFpQixDQUZtQixDQUFqQixDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSBcInJlc2VsZWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0TWVudSA9IChzdGF0ZSkgPT4gc3RhdGUubWVudTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RJc01lbnVIaWRkZW4gPSBjcmVhdGVTZWxlY3RvcihcclxuICBbc2VsZWN0TWVudV0sXHJcbiAgKG1lbnUpID0+IG1lbnUuaXNNZW51SGlkZGVuXHJcbik7XHJcbiJdfQ==