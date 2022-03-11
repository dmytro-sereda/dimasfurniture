function cov_21905dzvht() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/components/error-boundary/error-boundary.styles.jsx";
  var hash = "ed4ff357848cd9cea647c7e95d430a29402fd331";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/components/error-boundary/error-boundary.styles.jsx",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 33
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 35
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "2": {
        start: {
          line: 14,
          column: 40
        },
        end: {
          line: 14,
          column: 58
        }
      },
      "3": {
        start: {
          line: 21,
          column: 30
        },
        end: {
          line: 24,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 14,
            column: 22
          },
          end: {
            line: 14,
            column: 23
          }
        },
        loc: {
          start: {
            line: 14,
            column: 40
          },
          end: {
            line: 14,
            column: 58
          }
        },
        line: 14
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
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ed4ff357848cd9cea647c7e95d430a29402fd331"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_21905dzvht = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_21905dzvht();
import styled from "styled-components";
export const ErrorImageOverlay = (cov_21905dzvht().s[0]++, styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`);
export const ErrorImageContainer = (cov_21905dzvht().s[1]++, styled.div`
  display: inline-block;
  background-image: ${({
  imageUrl
}) => {
  cov_21905dzvht().f[0]++;
  cov_21905dzvht().s[2]++;
  return `url(${imageUrl})`;
}};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`);
export const ErrorImageText = (cov_21905dzvht().s[3]++, styled.h2`
  font-size: 28px;
  color: #515151;
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLWJvdW5kYXJ5LnN0eWxlcy5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiRXJyb3JJbWFnZU92ZXJsYXkiLCJkaXYiLCJFcnJvckltYWdlQ29udGFpbmVyIiwiaW1hZ2VVcmwiLCJFcnJvckltYWdlVGV4dCIsImgyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5CO0FBRUEsT0FBTyxNQUFNQyxpQkFBaUIsNkJBQUdELE1BQU0sQ0FBQ0UsR0FBSTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVA4QixDQUF2QjtBQVNQLE9BQU8sTUFBTUMsbUJBQW1CLDZCQUFHSCxNQUFNLENBQUNFLEdBQUk7QUFDOUM7QUFDQSxzQkFBc0IsQ0FBQztBQUFFRSxFQUFBQTtBQUFGLENBQUQsS0FBa0I7QUFBQTtBQUFBO0FBQUEsU0FBQyxPQUFNQSxRQUFTLEdBQWhCO0FBQWtCLENBQUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBnQyxDQUF6QjtBQVNQLE9BQU8sTUFBTUMsY0FBYyw2QkFBR0wsTUFBTSxDQUFDTSxFQUFHO0FBQ3hDO0FBQ0E7QUFDQSxDQUgyQixDQUFwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBFcnJvckltYWdlT3ZlcmxheSA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogNjB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IEVycm9ySW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6ICR7KHsgaW1hZ2VVcmwgfSkgPT4gYHVybCgke2ltYWdlVXJsfSlgfTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogNDB2aDtcbiAgaGVpZ2h0OiA0MHZoO1xuYDtcblxuZXhwb3J0IGNvbnN0IEVycm9ySW1hZ2VUZXh0ID0gc3R5bGVkLmgyYFxuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiAjNTE1MTUxO1xuYDtcbiJdfQ==