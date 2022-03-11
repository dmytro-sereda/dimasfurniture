function cov_2dl18g5y1p() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/components/cart/cart.styles.jsx";
  var hash = "39c09b4398a07a80c20988e4b7dbff7200bab292";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/components/cart/cart.styles.jsx",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 29
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 11,
          column: 25
        },
        end: {
          line: 11,
          column: 58
        }
      },
      "2": {
        start: {
          line: 16,
          column: 23
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "3": {
        start: {
          line: 20,
          column: 21
        },
        end: {
          line: 35,
          column: 1
        }
      },
      "4": {
        start: {
          line: 37,
          column: 27
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "5": {
        start: {
          line: 42,
          column: 27
        },
        end: {
          line: 49,
          column: 1
        }
      },
      "6": {
        start: {
          line: 51,
          column: 30
        },
        end: {
          line: 54,
          column: 1
        }
      },
      "7": {
        start: {
          line: 56,
          column: 25
        },
        end: {
          line: 63,
          column: 1
        }
      },
      "8": {
        start: {
          line: 65,
          column: 28
        },
        end: {
          line: 74,
          column: 1
        }
      },
      "9": {
        start: {
          line: 76,
          column: 33
        },
        end: {
          line: 84,
          column: 1
        }
      },
      "10": {
        start: {
          line: 86,
          column: 25
        },
        end: {
          line: 92,
          column: 1
        }
      },
      "11": {
        start: {
          line: 94,
          column: 26
        },
        end: {
          line: 96,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 13
          },
          end: {
            line: 11,
            column: 14
          }
        },
        loc: {
          start: {
            line: 11,
            column: 25
          },
          end: {
            line: 11,
            column: 58
          }
        },
        line: 11
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 25
          },
          end: {
            line: 11,
            column: 58
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 11,
            column: 42
          },
          end: {
            line: 11,
            column: 48
          }
        }, {
          start: {
            line: 11,
            column: 51
          },
          end: {
            line: 11,
            column: 58
          }
        }],
        line: 11
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
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "39c09b4398a07a80c20988e4b7dbff7200bab292"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2dl18g5y1p = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2dl18g5y1p();
import styled from "styled-components";
import { Heading2, OverlayStyles } from "../../overall-styles/overall-styles.styles";
export const CartContainer = (cov_2dl18g5y1p().s[0]++, styled.div`
  width: 100vw;
  height: 100vh;
  display: ${props => {
  cov_2dl18g5y1p().f[0]++;
  cov_2dl18g5y1p().s[1]++;
  return props.isHidden ? (cov_2dl18g5y1p().b[0][0]++, "none") : (cov_2dl18g5y1p().b[0][1]++, "block");
}};
  position: fixed;
  z-index: 499;
`);
export const Overlay = (cov_2dl18g5y1p().s[2]++, styled.div`
  ${OverlayStyles}
`);
export const Popup = (cov_2dl18g5y1p().s[3]++, styled.div`
  width: 110rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem 0;
  border-radius: 6rem;
  z-index: 502;

  @media only screen and (max-width: 28.125em) {
    width: 95%;
    padding: 2rem 2rem;
  }
`);
export const CartHeading = (cov_2dl18g5y1p().s[4]++, styled.h2`
  text-align: center;
  ${Heading2}
`);
export const CloseButton = (cov_2dl18g5y1p().s[5]++, styled.div`
  cursor: pointer;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: 3rem;
  right: 5rem;
`);
export const ItemsContainer = (cov_2dl18g5y1p().s[6]++, styled.div`
  max-height: 62rem;
  overflow: scroll;
`);
export const ItemsInfo = (cov_2dl18g5y1p().s[7]++, styled.div`
  display: flex;
  max-width: 100rem;
  margin: 0 auto;
  border-bottom: 1px solid #515151;
  padding-bottom: 0.3rem;
  margin-top: 2rem;
`);
export const CartItemChar = (cov_2dl18g5y1p().s[8]++, styled.p`
  font-size: 2rem;
  font-weight: 400;
  text-align: left;
  width: 23%;

  &:last-of-type {
    width: 8%;
  }
`);
export const CheckoutContainer = (cov_2dl18g5y1p().s[9]++, styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 100rem;
  margin: 0 auto;
  margin-top: 1rem;
`);
export const TotalText = (cov_2dl18g5y1p().s[10]++, styled.h4`
  font-size: 3rem;
  font-weight: 600;
  margin-right: 4.8rem;
  display: flex;
  align-items: center;
`);
export const TotalValue = (cov_2dl18g5y1p().s[11]++, styled.p`
  font-size: 2.8rem;
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuc3R5bGVzLmpzeCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJIZWFkaW5nMiIsIk92ZXJsYXlTdHlsZXMiLCJDYXJ0Q29udGFpbmVyIiwiZGl2IiwicHJvcHMiLCJpc0hpZGRlbiIsIk92ZXJsYXkiLCJQb3B1cCIsIkNhcnRIZWFkaW5nIiwiaDIiLCJDbG9zZUJ1dHRvbiIsIkl0ZW1zQ29udGFpbmVyIiwiSXRlbXNJbmZvIiwiQ2FydEl0ZW1DaGFyIiwicCIsIkNoZWNrb3V0Q29udGFpbmVyIiwiVG90YWxUZXh0IiwiaDQiLCJUb3RhbFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUVBLFNBQ0VDLFFBREYsRUFFRUMsYUFGRixRQUdPLDRDQUhQO0FBS0EsT0FBTyxNQUFNQyxhQUFhLDZCQUFHSCxNQUFNLENBQUNJLEdBQUk7QUFDeEM7QUFDQTtBQUNBLGFBQWNDLEtBQUQsSUFBWTtBQUFBO0FBQUE7QUFBQSxTQUFBQSxLQUFLLENBQUNDLFFBQU4sZ0NBQWlCLE1BQWpCLGlDQUEwQixPQUExQjtBQUFpQyxDQUFFO0FBQzVEO0FBQ0E7QUFDQSxDQU4wQixDQUFuQjtBQVFQLE9BQU8sTUFBTUMsT0FBTyw2QkFBR1AsTUFBTSxDQUFDSSxHQUFJO0FBQ2xDLElBQUlGLGFBQWM7QUFDbEIsQ0FGb0IsQ0FBYjtBQUlQLE9BQU8sTUFBTU0sS0FBSyw2QkFBR1IsTUFBTSxDQUFDSSxHQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZrQixDQUFYO0FBaUJQLE9BQU8sTUFBTUssV0FBVyw2QkFBR1QsTUFBTSxDQUFDVSxFQUFHO0FBQ3JDO0FBQ0EsSUFBSVQsUUFBUztBQUNiLENBSHdCLENBQWpCO0FBS1AsT0FBTyxNQUFNVSxXQUFXLDZCQUFHWCxNQUFNLENBQUNJLEdBQUk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQd0IsQ0FBakI7QUFTUCxPQUFPLE1BQU1RLGNBQWMsNkJBQUdaLE1BQU0sQ0FBQ0ksR0FBSTtBQUN6QztBQUNBO0FBQ0EsQ0FIMkIsQ0FBcEI7QUFLUCxPQUFPLE1BQU1TLFNBQVMsNkJBQUdiLE1BQU0sQ0FBQ0ksR0FBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBzQixDQUFmO0FBU1AsT0FBTyxNQUFNVSxZQUFZLDZCQUFHZCxNQUFNLENBQUNlLENBQUU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVHlCLENBQWxCO0FBV1AsT0FBTyxNQUFNQyxpQkFBaUIsNkJBQUdoQixNQUFNLENBQUNJLEdBQUk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVI4QixDQUF2QjtBQVVQLE9BQU8sTUFBTWEsU0FBUyw4QkFBR2pCLE1BQU0sQ0FBQ2tCLEVBQUc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTnNCLENBQWY7QUFRUCxPQUFPLE1BQU1DLFVBQVUsOEJBQUduQixNQUFNLENBQUNlLENBQUU7QUFDbkM7QUFDQSxDQUZ1QixDQUFoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCB7XG4gIEhlYWRpbmcyLFxuICBPdmVybGF5U3R5bGVzLFxufSBmcm9tIFwiLi4vLi4vb3ZlcmFsbC1zdHlsZXMvb3ZlcmFsbC1zdHlsZXMuc3R5bGVzXCI7XG5cbmV4cG9ydCBjb25zdCBDYXJ0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiAkeyhwcm9wcykgPT4gKHByb3BzLmlzSGlkZGVuID8gXCJub25lXCIgOiBcImJsb2NrXCIpfTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA0OTk7XG5gO1xuXG5leHBvcnQgY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXG4gICR7T3ZlcmxheVN0eWxlc31cbmA7XG5cbmV4cG9ydCBjb25zdCBQb3B1cCA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMTByZW07XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIGJvcmRlci1yYWRpdXM6IDZyZW07XG4gIHotaW5kZXg6IDUwMjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4LjEyNWVtKSB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBwYWRkaW5nOiAycmVtIDJyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJ0SGVhZGluZyA9IHN0eWxlZC5oMmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAke0hlYWRpbmcyfVxuYDtcblxuZXhwb3J0IGNvbnN0IENsb3NlQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDNyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDNyZW07XG4gIHJpZ2h0OiA1cmVtO1xuYDtcblxuZXhwb3J0IGNvbnN0IEl0ZW1zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWF4LWhlaWdodDogNjJyZW07XG4gIG92ZXJmbG93OiBzY3JvbGw7XG5gO1xuXG5leHBvcnQgY29uc3QgSXRlbXNJbmZvID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAxMDByZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzUxNTE1MTtcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBDYXJ0SXRlbUNoYXIgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMjMlO1xuXG4gICY6bGFzdC1vZi10eXBlIHtcbiAgICB3aWR0aDogOCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDaGVja291dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXgtd2lkdGg6IDEwMHJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi10b3A6IDFyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgVG90YWxUZXh0ID0gc3R5bGVkLmg0YFxuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1yaWdodDogNC44cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRvdGFsVmFsdWUgPSBzdHlsZWQucGBcbiAgZm9udC1zaXplOiAyLjhyZW07XG5gOyJdfQ==