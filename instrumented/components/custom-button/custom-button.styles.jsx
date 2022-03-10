function cov_17wfyemv3d() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\components\\custom-button\\custom-button.styles.jsx";
  var hash = "293e1fb796359cb200cb777ca2f9727ba27165b9";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\components\\custom-button\\custom-button.styles.jsx",
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
    hash: "293e1fb796359cb200cb777ca2f9727ba27165b9"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_17wfyemv3d = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_17wfyemv3d();
import styled, { css } from "styled-components";
const MainButtonStyles = (cov_17wfyemv3d().s[0]++, css`
  background-color: #ffc451;
  font-size: ${props => {
  cov_17wfyemv3d().f[0]++;
  cov_17wfyemv3d().s[1]++;
  return props.size === "large" ? (cov_17wfyemv3d().b[0][0]++, "2.8rem") : (cov_17wfyemv3d().b[0][1]++, "2rem");
}};

  &:hover {
    background-color: #ffb930;
  }
`);
const GoogleSignInStyles = (cov_17wfyemv3d().s[2]++, css`
  background-color: #515151;
  font-size: 1.6rem;

  &:hover {
    background-color: #3d3d3d;
  }
`);
cov_17wfyemv3d().s[3]++;

const getButtonStyles = props => {
  cov_17wfyemv3d().f[1]++;
  cov_17wfyemv3d().s[4]++;
  return props.mainColor ? (cov_17wfyemv3d().b[1][0]++, MainButtonStyles) : (cov_17wfyemv3d().b[1][1]++, GoogleSignInStyles);
};

export const ButtonContainer = (cov_17wfyemv3d().s[5]++, styled.button`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1idXR0b24uc3R5bGVzLmpzeCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJjc3MiLCJNYWluQnV0dG9uU3R5bGVzIiwicHJvcHMiLCJzaXplIiwiR29vZ2xlU2lnbkluU3R5bGVzIiwiZ2V0QnV0dG9uU3R5bGVzIiwibWFpbkNvbG9yIiwiQnV0dG9uQ29udGFpbmVyIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU9BLE1BQVAsSUFBaUJDLEdBQWpCLFFBQTRCLG1CQUE1QjtBQUVBLE1BQU1DLGdCQUFnQiw2QkFBR0QsR0FBSTtBQUM3QjtBQUNBLGVBQWdCRSxLQUFELElBQVk7QUFBQTtBQUFBO0FBQUEsU0FBQUEsS0FBSyxDQUFDQyxJQUFOLEtBQWUsT0FBZixnQ0FBeUIsUUFBekIsaUNBQW9DLE1BQXBDO0FBQTBDLENBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBzQixDQUF0QjtBQVNBLE1BQU1DLGtCQUFrQiw2QkFBR0osR0FBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVB3QixDQUF4Qjs7O0FBU0EsTUFBTUssZUFBZSxHQUFJSCxLQUFELElBQVc7QUFBQTtBQUFBO0FBQ2pDLFNBQU9BLEtBQUssQ0FBQ0ksU0FBTixnQ0FBa0JMLGdCQUFsQixpQ0FBcUNHLGtCQUFyQyxDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxPQUFPLE1BQU1HLGVBQWUsNkJBQUdSLE1BQU0sQ0FBQ1MsTUFBTztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUgsZUFBZ0I7QUFDcEIsQ0FiNEIsQ0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgTWFpbkJ1dHRvblN0eWxlcyA9IGNzc2BcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNDUxO1xyXG4gIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IChwcm9wcy5zaXplID09PSBcImxhcmdlXCIgPyBcIjIuOHJlbVwiIDogXCIycmVtXCIpfTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiOTMwO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEdvb2dsZVNpZ25JblN0eWxlcyA9IGNzc2BcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE1MTUxO1xyXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZDNkM2Q7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgZ2V0QnV0dG9uU3R5bGVzID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIHByb3BzLm1haW5Db2xvciA/IE1haW5CdXR0b25TdHlsZXMgOiBHb29nbGVTaWduSW5TdHlsZXM7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbmBcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAxLjRyZW0gNC45cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJhamRoYW5pXCIsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2Utb3V0O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICR7Z2V0QnV0dG9uU3R5bGVzfVxyXG5gO1xyXG4iXX0=