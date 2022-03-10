function cov_1fjh8ap08s() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\menu\\menu.actions.js";
  var hash = "ee8031be3ef7a8ebbafa8c8bbf9e4c588d8de909";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\menu\\menu.actions.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 26
        },
        end: {
          line: 5,
          column: 2
        }
      },
      "1": {
        start: {
          line: 3,
          column: 33
        },
        end: {
          line: 5,
          column: 1
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
            column: 33
          },
          end: {
            line: 5,
            column: 1
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ee8031be3ef7a8ebbafa8c8bbf9e4c588d8de909"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1fjh8ap08s = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1fjh8ap08s();
import MenuActionTypes from "./menu.types";
cov_1fjh8ap08s().s[0]++;
export const toggleMenu = () => {
  cov_1fjh8ap08s().f[0]++;
  cov_1fjh8ap08s().s[1]++;
  return {
    type: MenuActionTypes.TOGGLE_MENU
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJNZW51QWN0aW9uVHlwZXMiLCJ0b2dnbGVNZW51IiwidHlwZSIsIlRPR0dMRV9NRU5VIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsZUFBUCxNQUE0QixjQUE1Qjs7QUFFQSxPQUFPLE1BQU1DLFVBQVUsR0FBRyxNQUFPO0FBQUE7QUFBQTtBQUFBO0FBQy9CQyxJQUFBQSxJQUFJLEVBQUVGLGVBQWUsQ0FBQ0c7QUFEUztBQUVoQyxDQUZNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lbnVBY3Rpb25UeXBlcyBmcm9tIFwiLi9tZW51LnR5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdG9nZ2xlTWVudSA9ICgpID0+ICh7XHJcbiAgdHlwZTogTWVudUFjdGlvblR5cGVzLlRPR0dMRV9NRU5VLFxyXG59KTtcclxuIl19