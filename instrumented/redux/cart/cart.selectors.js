function cov_i7ho649bu() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\cart\\cart.selectors.js";
  var hash = "43fc950673947b06e92d58b128f816018fc79e0c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\cart\\cart.selectors.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 19
        },
        end: {
          line: 3,
          column: 40
        }
      },
      "1": {
        start: {
          line: 3,
          column: 30
        },
        end: {
          line: 3,
          column: 40
        }
      },
      "2": {
        start: {
          line: 5,
          column: 32
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
          column: 25
        }
      },
      "4": {
        start: {
          line: 10,
          column: 31
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "5": {
        start: {
          line: 12,
          column: 12
        },
        end: {
          line: 12,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 19
          },
          end: {
            line: 3,
            column: 20
          }
        },
        loc: {
          start: {
            line: 3,
            column: 30
          },
          end: {
            line: 3,
            column: 40
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
            column: 25
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 12,
            column: 2
          },
          end: {
            line: 12,
            column: 3
          }
        },
        loc: {
          start: {
            line: 12,
            column: 12
          },
          end: {
            line: 12,
            column: 26
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
    hash: "43fc950673947b06e92d58b128f816018fc79e0c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_i7ho649bu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_i7ho649bu();
import { createSelector } from "reselect";
cov_i7ho649bu().s[0]++;

const selectCart = state => {
  cov_i7ho649bu().f[0]++;
  cov_i7ho649bu().s[1]++;
  return state.cart;
};

export const selectCartHidden = (cov_i7ho649bu().s[2]++, createSelector([selectCart], cart => {
  cov_i7ho649bu().f[1]++;
  cov_i7ho649bu().s[3]++;
  return cart.isHidden;
}));
export const selectCartItems = (cov_i7ho649bu().s[4]++, createSelector([selectCart], cart => {
  cov_i7ho649bu().f[2]++;
  cov_i7ho649bu().s[5]++;
  return cart.cartItems;
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuc2VsZWN0b3JzLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVNlbGVjdG9yIiwic2VsZWN0Q2FydCIsInN0YXRlIiwiY2FydCIsInNlbGVjdENhcnRIaWRkZW4iLCJpc0hpZGRlbiIsInNlbGVjdENhcnRJdGVtcyIsImNhcnRJdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixTQUFTQSxjQUFULFFBQStCLFVBQS9COzs7QUFFQSxNQUFNQyxVQUFVLEdBQUlDLEtBQUQsSUFBVztBQUFBO0FBQUE7QUFBQSxTQUFBQSxLQUFLLENBQUNDLElBQU47QUFBVSxDQUF4Qzs7QUFFQSxPQUFPLE1BQU1DLGdCQUFnQiw0QkFBR0osY0FBYyxDQUM1QyxDQUFDQyxVQUFELENBRDRDLEVBRTNDRSxJQUFELElBQVU7QUFBQTtBQUFBO0FBQUEsU0FBQUEsSUFBSSxDQUFDRSxRQUFMO0FBQWEsQ0FGcUIsQ0FBakIsQ0FBdEI7QUFLUCxPQUFPLE1BQU1DLGVBQWUsNEJBQUdOLGNBQWMsQ0FDM0MsQ0FBQ0MsVUFBRCxDQUQyQyxFQUUxQ0UsSUFBRCxJQUFVO0FBQUE7QUFBQTtBQUFBLFNBQUFBLElBQUksQ0FBQ0ksU0FBTDtBQUFjLENBRm1CLENBQWpCLENBQXJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tIFwicmVzZWxlY3RcIjtcclxuXHJcbmNvbnN0IHNlbGVjdENhcnQgPSAoc3RhdGUpID0+IHN0YXRlLmNhcnQ7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0Q2FydEhpZGRlbiA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gIFtzZWxlY3RDYXJ0XSxcclxuICAoY2FydCkgPT4gY2FydC5pc0hpZGRlblxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdENhcnRJdGVtcyA9IGNyZWF0ZVNlbGVjdG9yKFxyXG4gIFtzZWxlY3RDYXJ0XSxcclxuICAoY2FydCkgPT4gY2FydC5jYXJ0SXRlbXNcclxuKTtcclxuIl19