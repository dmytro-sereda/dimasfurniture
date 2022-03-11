function cov_2bsve9ii64() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/shop/shop.selectors.js";
  var hash = "de3bdff852704ae33c4016cecd6bc956ef7cb679";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/shop/shop.selectors.js",
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
      },
      "6": {
        start: {
          line: 15,
          column: 32
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "7": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 18,
          column: 3
        }
      },
      "8": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 63
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
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 15,
            column: 32
          },
          end: {
            line: 15,
            column: 33
          }
        },
        loc: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 16
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 16,
            column: 38
          },
          end: {
            line: 16,
            column: 39
          }
        },
        loc: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 63
          }
        },
        line: 17
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 63
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 17,
            column: 25
          },
          end: {
            line: 17,
            column: 56
          }
        }, {
          start: {
            line: 17,
            column: 59
          },
          end: {
            line: 17,
            column: 63
          }
        }],
        line: 17
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "de3bdff852704ae33c4016cecd6bc956ef7cb679"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2bsve9ii64 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2bsve9ii64();
import { createSelector } from "reselect";
cov_2bsve9ii64().s[0]++;
export const selectShop = state => {
  cov_2bsve9ii64().f[0]++;
  cov_2bsve9ii64().s[1]++;
  return state.shop;
};
export const selectCollections = (cov_2bsve9ii64().s[2]++, createSelector([selectShop], shop => {
  cov_2bsve9ii64().f[1]++;
  cov_2bsve9ii64().s[3]++;
  return shop.collections;
}));
export const selectIsLoading = (cov_2bsve9ii64().s[4]++, createSelector([selectShop], shop => {
  cov_2bsve9ii64().f[2]++;
  cov_2bsve9ii64().s[5]++;
  return shop.isLoading;
}));
cov_2bsve9ii64().s[6]++;
export const selectCollection = collectionUrlParam => {
  cov_2bsve9ii64().f[3]++;
  cov_2bsve9ii64().s[7]++;
  return createSelector([selectCollections], collections => {
    cov_2bsve9ii64().f[4]++;
    cov_2bsve9ii64().s[8]++;
    return collectionUrlParam ? (cov_2bsve9ii64().b[0][0]++, collections[collectionUrlParam]) : (cov_2bsve9ii64().b[0][1]++, null);
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3Auc2VsZWN0b3JzLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVNlbGVjdG9yIiwic2VsZWN0U2hvcCIsInN0YXRlIiwic2hvcCIsInNlbGVjdENvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnMiLCJzZWxlY3RJc0xvYWRpbmciLCJpc0xvYWRpbmciLCJzZWxlY3RDb2xsZWN0aW9uIiwiY29sbGVjdGlvblVybFBhcmFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsY0FBVCxRQUErQixVQUEvQjs7QUFFQSxPQUFPLE1BQU1DLFVBQVUsR0FBSUMsS0FBRCxJQUFXO0FBQUE7QUFBQTtBQUFBLFNBQUFBLEtBQUssQ0FBQ0MsSUFBTjtBQUFVLENBQXhDO0FBRVAsT0FBTyxNQUFNQyxpQkFBaUIsNkJBQUdKLGNBQWMsQ0FDN0MsQ0FBQ0MsVUFBRCxDQUQ2QyxFQUU1Q0UsSUFBRCxJQUFVO0FBQUE7QUFBQTtBQUFBLFNBQUFBLElBQUksQ0FBQ0UsV0FBTDtBQUFnQixDQUZtQixDQUFqQixDQUF2QjtBQUtQLE9BQU8sTUFBTUMsZUFBZSw2QkFBR04sY0FBYyxDQUMzQyxDQUFDQyxVQUFELENBRDJDLEVBRTFDRSxJQUFELElBQVU7QUFBQTtBQUFBO0FBQUEsU0FBQUEsSUFBSSxDQUFDSSxTQUFMO0FBQWMsQ0FGbUIsQ0FBakIsQ0FBckI7O0FBS1AsT0FBTyxNQUFNQyxnQkFBZ0IsR0FBSUMsa0JBQUQsSUFDOUI7QUFBQTtBQUFBO0FBQUEsU0FBQVQsY0FBYyxDQUFDLENBQUNJLGlCQUFELENBQUQsRUFBdUJDLFdBQUQsSUFDbEM7QUFBQTtBQUFBO0FBQUEsV0FBQUksa0JBQWtCLGdDQUFHSixXQUFXLENBQUNJLGtCQUFELENBQWQsaUNBQXFDLElBQXJDLENBQWxCO0FBQTJELEdBRC9DLENBQWQ7QUFFQyxDQUhJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IgfSBmcm9tIFwicmVzZWxlY3RcIjtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdFNob3AgPSAoc3RhdGUpID0+IHN0YXRlLnNob3A7XG5cbmV4cG9ydCBjb25zdCBzZWxlY3RDb2xsZWN0aW9ucyA9IGNyZWF0ZVNlbGVjdG9yKFxuICBbc2VsZWN0U2hvcF0sXG4gIChzaG9wKSA9PiBzaG9wLmNvbGxlY3Rpb25zXG4pO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0SXNMb2FkaW5nID0gY3JlYXRlU2VsZWN0b3IoXG4gIFtzZWxlY3RTaG9wXSxcbiAgKHNob3ApID0+IHNob3AuaXNMb2FkaW5nXG4pO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0Q29sbGVjdGlvbiA9IChjb2xsZWN0aW9uVXJsUGFyYW0pID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFtzZWxlY3RDb2xsZWN0aW9uc10sIChjb2xsZWN0aW9ucykgPT5cbiAgICBjb2xsZWN0aW9uVXJsUGFyYW0gPyBjb2xsZWN0aW9uc1tjb2xsZWN0aW9uVXJsUGFyYW1dIDogbnVsbFxuICApO1xuIl19