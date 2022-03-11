function cov_mxhp1n76y() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/components/custom-button/custom-button.styles.jsx";
  var hash = "a9973bce1981a83cb595c3b7c3cf52b2a4e1c107";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/components/custom-button/custom-button.styles.jsx",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 25
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 27
        },
        end: {
          line: 5,
          column: 69
        }
      },
      "2": {
        start: {
          line: 12,
          column: 27
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "3": {
        start: {
          line: 21,
          column: 24
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "4": {
        start: {
          line: 22,
          column: 2
        },
        end: {
          line: 22,
          column: 65
        }
      },
      "5": {
        start: {
          line: 25,
          column: 31
        },
        end: {
          line: 38,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 5,
            column: 15
          },
          end: {
            line: 5,
            column: 16
          }
        },
        loc: {
          start: {
            line: 5,
            column: 27
          },
          end: {
            line: 5,
            column: 69
          }
        },
        line: 5
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 21,
            column: 24
          },
          end: {
            line: 21,
            column: 25
          }
        },
        loc: {
          start: {
            line: 21,
            column: 35
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 21
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 5,
            column: 27
          },
          end: {
            line: 5,
            column: 69
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 5,
            column: 52
          },
          end: {
            line: 5,
            column: 60
          }
        }, {
          start: {
            line: 5,
            column: 63
          },
          end: {
            line: 5,
            column: 69
          }
        }],
        line: 5
      },
      "1": {
        loc: {
          start: {
            line: 22,
            column: 9
          },
          end: {
            line: 22,
            column: 64
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 22,
            column: 27
          },
          end: {
            line: 22,
            column: 43
          }
        }, {
          start: {
            line: 22,
            column: 46
          },
          end: {
            line: 22,
            column: 64
          }
        }],
        line: 22
      }
    },
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
      "1": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a9973bce1981a83cb595c3b7c3cf52b2a4e1c107"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_mxhp1n76y = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_mxhp1n76y();
import styled, { css } from "styled-components";
const MainButtonStyles = (cov_mxhp1n76y().s[0]++, css`
  background-color: #ffc451;
  font-size: ${props => {
  cov_mxhp1n76y().f[0]++;
  cov_mxhp1n76y().s[1]++;
  return props.size === "large" ? (cov_mxhp1n76y().b[0][0]++, "2.8rem") : (cov_mxhp1n76y().b[0][1]++, "2rem");
}};

  &:hover {
    background-color: #ffb930;
  }
`);
const GoogleSignInStyles = (cov_mxhp1n76y().s[2]++, css`
  background-color: #515151;
  font-size: 1.6rem;

  &:hover {
    background-color: #3d3d3d;
  }
`);
cov_mxhp1n76y().s[3]++;

const getButtonStyles = props => {
  cov_mxhp1n76y().f[1]++;
  cov_mxhp1n76y().s[4]++;
  return props.mainColor ? (cov_mxhp1n76y().b[1][0]++, MainButtonStyles) : (cov_mxhp1n76y().b[1][1]++, GoogleSignInStyles);
};

export const ButtonContainer = (cov_mxhp1n76y().s[5]++, styled.button`
  color: white;
  text-transform: uppercase;
  display: block;
  padding: 1.4rem 4.9rem;
  font-family: "Rajdhani", sans-serif;
  border-radius: 5rem;
  border: none;
  cursor: pointer;
  transition: all 0.4s ease-out;
  font-weight: 600;

  ${getButtonStyles}
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1idXR0b24uc3R5bGVzLmpzeCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJjc3MiLCJNYWluQnV0dG9uU3R5bGVzIiwicHJvcHMiLCJzaXplIiwiR29vZ2xlU2lnbkluU3R5bGVzIiwiZ2V0QnV0dG9uU3R5bGVzIiwibWFpbkNvbG9yIiwiQnV0dG9uQ29udGFpbmVyIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU9BLE1BQVAsSUFBaUJDLEdBQWpCLFFBQTRCLG1CQUE1QjtBQUVBLE1BQU1DLGdCQUFnQiw0QkFBR0QsR0FBSTtBQUM3QjtBQUNBLGVBQWdCRSxLQUFELElBQVk7QUFBQTtBQUFBO0FBQUEsU0FBQUEsS0FBSyxDQUFDQyxJQUFOLEtBQWUsT0FBZiwrQkFBeUIsUUFBekIsZ0NBQW9DLE1BQXBDO0FBQTBDLENBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBzQixDQUF0QjtBQVNBLE1BQU1DLGtCQUFrQiw0QkFBR0osR0FBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVB3QixDQUF4Qjs7O0FBU0EsTUFBTUssZUFBZSxHQUFJSCxLQUFELElBQVc7QUFBQTtBQUFBO0FBQ2pDLFNBQU9BLEtBQUssQ0FBQ0ksU0FBTiwrQkFBa0JMLGdCQUFsQixnQ0FBcUNHLGtCQUFyQyxDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxPQUFPLE1BQU1HLGVBQWUsNEJBQUdSLE1BQU0sQ0FBQ1MsTUFBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUgsZUFBZ0I7QUFDcEIsQ0FiNEIsQ0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBNYWluQnV0dG9uU3R5bGVzID0gY3NzYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNDUxO1xuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiAocHJvcHMuc2l6ZSA9PT0gXCJsYXJnZVwiID8gXCIyLjhyZW1cIiA6IFwiMnJlbVwiKX07XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjkzMDtcbiAgfVxuYDtcblxuY29uc3QgR29vZ2xlU2lnbkluU3R5bGVzID0gY3NzYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE1MTUxO1xuICBmb250LXNpemU6IDEuNnJlbTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2QzZDNkO1xuICB9XG5gO1xuXG5jb25zdCBnZXRCdXR0b25TdHlsZXMgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIHByb3BzLm1haW5Db2xvciA/IE1haW5CdXR0b25TdHlsZXMgOiBHb29nbGVTaWduSW5TdHlsZXM7XG59O1xuXG5leHBvcnQgY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbmBcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMS40cmVtIDQuOXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiUmFqZGhhbmlcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gICR7Z2V0QnV0dG9uU3R5bGVzfVxuYDtcbiJdfQ==