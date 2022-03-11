function cov_22ttfchnmz() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/user/user.selectors.js";
  var hash = "28c45dfa38d4c98ba5cf461274a213dae5fcf616";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/user/user.selectors.js",
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
          column: 33
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
          column: 28
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
            column: 28
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
    hash: "28c45dfa38d4c98ba5cf461274a213dae5fcf616"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_22ttfchnmz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_22ttfchnmz();
import { createSelector } from "reselect";
cov_22ttfchnmz().s[0]++;
export const selectUser = state => {
  cov_22ttfchnmz().f[0]++;
  cov_22ttfchnmz().s[1]++;
  return state.user;
};
export const selectCurrentUser = (cov_22ttfchnmz().s[2]++, createSelector([selectUser], user => {
  cov_22ttfchnmz().f[1]++;
  cov_22ttfchnmz().s[3]++;
  return user.currentUser;
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuc2VsZWN0b3JzLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVNlbGVjdG9yIiwic2VsZWN0VXNlciIsInN0YXRlIiwidXNlciIsInNlbGVjdEN1cnJlbnRVc2VyIiwiY3VycmVudFVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLFNBQVNBLGNBQVQsUUFBK0IsVUFBL0I7O0FBRUEsT0FBTyxNQUFNQyxVQUFVLEdBQUlDLEtBQUQsSUFBVztBQUFBO0FBQUE7QUFBQSxTQUFBQSxLQUFLLENBQUNDLElBQU47QUFBVSxDQUF4QztBQUVQLE9BQU8sTUFBTUMsaUJBQWlCLDZCQUFHSixjQUFjLENBQzdDLENBQUNDLFVBQUQsQ0FENkMsRUFFNUNFLElBQUQsSUFBVTtBQUFBO0FBQUE7QUFBQSxTQUFBQSxJQUFJLENBQUNFLFdBQUw7QUFBZ0IsQ0FGbUIsQ0FBakIsQ0FBdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gXCJyZXNlbGVjdFwiO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlciA9IChzdGF0ZSkgPT4gc3RhdGUudXNlcjtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdEN1cnJlbnRVc2VyID0gY3JlYXRlU2VsZWN0b3IoXG4gIFtzZWxlY3RVc2VyXSxcbiAgKHVzZXIpID0+IHVzZXIuY3VycmVudFVzZXJcbik7XG4iXX0=