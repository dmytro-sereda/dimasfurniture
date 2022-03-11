function cov_2di2dj2440() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/components/hamburger/hamburger.styles.jsx";
  var hash = "192de50b138aaba2de5e8f72065541d715cc70be";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/components/hamburger/hamburger.styles.jsx",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 34
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "1": {
        start: {
          line: 17,
          column: 29
        },
        end: {
          line: 45,
          column: 1
        }
      },
      "2": {
        start: {
          line: 23,
          column: 28
        },
        end: {
          line: 23,
          column: 76
        }
      },
      "3": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 28,
          column: 61
        }
      },
      "4": {
        start: {
          line: 40,
          column: 6
        },
        end: {
          line: 43,
          column: 41
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 23,
            column: 16
          },
          end: {
            line: 23,
            column: 17
          }
        },
        loc: {
          start: {
            line: 23,
            column: 28
          },
          end: {
            line: 23,
            column: 76
          }
        },
        line: 23
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        },
        loc: {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 28,
            column: 61
          }
        },
        line: 26
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 39,
            column: 6
          },
          end: {
            line: 39,
            column: 7
          }
        },
        loc: {
          start: {
            line: 40,
            column: 6
          },
          end: {
            line: 43,
            column: 41
          }
        },
        line: 40
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 23,
            column: 28
          },
          end: {
            line: 23,
            column: 76
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 23,
            column: 54
          },
          end: {
            line: 23,
            column: 62
          }
        }, {
          start: {
            line: 23,
            column: 65
          },
          end: {
            line: 23,
            column: 76
          }
        }],
        line: 23
      },
      "1": {
        loc: {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 28,
            column: 61
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 27,
            column: 8
          },
          end: {
            line: 27,
            column: 10
          }
        }, {
          start: {
            line: 28,
            column: 8
          },
          end: {
            line: 28,
            column: 61
          }
        }],
        line: 26
      },
      "2": {
        loc: {
          start: {
            line: 40,
            column: 6
          },
          end: {
            line: 43,
            column: 41
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 41,
            column: 10
          },
          end: {
            line: 41,
            column: 12
          }
        }, {
          start: {
            line: 42,
            column: 10
          },
          end: {
            line: 43,
            column: 41
          }
        }],
        line: 40
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
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "192de50b138aaba2de5e8f72065541d715cc70be"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2di2dj2440 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2di2dj2440();
import styled from "styled-components";
export const HamburgerContainer = (cov_2di2dj2440().s[0]++, styled.div`
  width: 4rem;
  height: 4rem;
  margin-left: 1.5rem;
  position: relative;
  cursor: pointer;
  display: none;
  z-index: 501;

  @media only screen and (max-width: 28.125em) {
    display: block;
  }
`);
export const HamburgerLine = (cov_2di2dj2440().s[1]++, styled.span`
  background-color: #515151;
  position: relative;
  width: 4rem;
  height: 3px;
  display: inline-block;
  margin-top: ${props => {
  cov_2di2dj2440().f[0]++;
  cov_2di2dj2440().s[2]++;
  return props.isHidden === true ? (cov_2di2dj2440().b[0][0]++, "1.3rem") : (cov_2di2dj2440().b[0][1]++, ` 1.9rem; `);
}};
  transition: all 0.4s;
  ${props => {
  cov_2di2dj2440().f[1]++;
  cov_2di2dj2440().s[3]++;
  return props.isHidden === true ? (cov_2di2dj2440().b[1][0]++, "") : (cov_2di2dj2440().b[1][1]++, `transform: rotate(135deg); background-color: white;`);
}}

  &::after {
    content: "";
    position: absolute;
    top: 1rem;
    background-color: #515151;
    width: 4rem;
    height: 3px;
    transition: all 0.4s;

    ${props => {
  cov_2di2dj2440().f[2]++;
  cov_2di2dj2440().s[4]++;
  return props.isHidden === true ? (cov_2di2dj2440().b[2][0]++, "") : (cov_2di2dj2440().b[2][1]++, `transform: rotate(-270deg); 
        top: 0; background-color: white;`);
}}
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhhbWJ1cmdlci5zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsIkhhbWJ1cmdlckNvbnRhaW5lciIsImRpdiIsIkhhbWJ1cmdlckxpbmUiLCJzcGFuIiwicHJvcHMiLCJpc0hpZGRlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUVBLE9BQU8sTUFBTUMsa0JBQWtCLDZCQUFHRCxNQUFNLENBQUNFLEdBQUk7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWitCLENBQXhCO0FBY1AsT0FBTyxNQUFNQyxhQUFhLDZCQUFHSCxNQUFNLENBQUNJLElBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFpQkMsS0FBRCxJQUFZO0FBQUE7QUFBQTtBQUFBLFNBQUFBLEtBQUssQ0FBQ0MsUUFBTixLQUFtQixJQUFuQixnQ0FBMEIsUUFBMUIsaUNBQXNDLFdBQXRDO0FBQWdELENBQUU7QUFDOUU7QUFDQSxJQUFLRCxLQUFELElBQ0E7QUFBQTtBQUFBO0FBQUEsU0FBQUEsS0FBSyxDQUFDQyxRQUFOLEtBQW1CLElBQW5CLGdDQUNJLEVBREosaUNBRUsscURBRkw7QUFFeUQsQ0FBQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU9ELEtBQUQsSUFDQTtBQUFBO0FBQUE7QUFBQSxTQUFBQSxLQUFLLENBQUNDLFFBQU4sS0FBbUIsSUFBbkIsZ0NBQ0ksRUFESixpQ0FFSztBQUNYLHlDQUhNO0FBR21DLENBQUM7QUFDMUM7QUFDQSxDQTVCMEIsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5leHBvcnQgY29uc3QgSGFtYnVyZ2VyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogNHJlbTtcbiAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHotaW5kZXg6IDUwMTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4LjEyNWVtKSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBIYW1idXJnZXJMaW5lID0gc3R5bGVkLnNwYW5gXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTUxNTE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDRyZW07XG4gIGhlaWdodDogM3B4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNIaWRkZW4gPT09IHRydWUgPyBcIjEuM3JlbVwiIDogYCAxLjlyZW07IGApfTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmlzSGlkZGVuID09PSB0cnVlXG4gICAgICA/IFwiXCJcbiAgICAgIDogYHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO2B9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTE1MTUxO1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGhlaWdodDogM3B4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuXG4gICAgJHsocHJvcHMpID0+XG4gICAgICBwcm9wcy5pc0hpZGRlbiA9PT0gdHJ1ZVxuICAgICAgICA/IFwiXCJcbiAgICAgICAgOiBgdHJhbnNmb3JtOiByb3RhdGUoLTI3MGRlZyk7IFxuICAgICAgICB0b3A6IDA7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO2B9XG4gIH1cbmA7XG4iXX0=