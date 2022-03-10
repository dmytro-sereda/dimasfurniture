function cov_1o0g89wes7() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\components\\cart\\cart.styles.jsx";
  var hash = "d8c663914cd0b9c86415c06fa46255944cd1e0cf";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\components\\cart\\cart.styles.jsx",
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
    hash: "d8c663914cd0b9c86415c06fa46255944cd1e0cf"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1o0g89wes7 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1o0g89wes7();
import styled from "styled-components";
import { Heading2, OverlayStyles } from "../../overall-styles/overall-styles.styles";
export const CartContainer = (cov_1o0g89wes7().s[0]++, styled.div`
  width: 100vw;
  height: 100vh;
  display: ${props => {
  cov_1o0g89wes7().f[0]++;
  cov_1o0g89wes7().s[1]++;
  return props.isHidden ? (cov_1o0g89wes7().b[0][0]++, "none") : (cov_1o0g89wes7().b[0][1]++, "block");
}};
  position: fixed;
  z-index: 499;
`);
export const Overlay = (cov_1o0g89wes7().s[2]++, styled.div`
  ${OverlayStyles}
`);
export const Popup = (cov_1o0g89wes7().s[3]++, styled.div`
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
export const CartHeading = (cov_1o0g89wes7().s[4]++, styled.h2`
  text-align: center;
  ${Heading2}
`);
export const CloseButton = (cov_1o0g89wes7().s[5]++, styled.div`
  cursor: pointer;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: 3rem;
  right: 5rem;
`);
export const ItemsContainer = (cov_1o0g89wes7().s[6]++, styled.div`
  max-height: 62rem;
  overflow: scroll;
`);
export const ItemsInfo = (cov_1o0g89wes7().s[7]++, styled.div`
  display: flex;
  max-width: 100rem;
  margin: 0 auto;
  border-bottom: 1px solid #515151;
  padding-bottom: 0.3rem;
  margin-top: 2rem;
`);
export const CartItemChar = (cov_1o0g89wes7().s[8]++, styled.p`
  font-size: 2rem;
  font-weight: 400;
  text-align: left;
  width: 23%;

  &:last-of-type {
    width: 8%;
  }
`);
export const CheckoutContainer = (cov_1o0g89wes7().s[9]++, styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 100rem;
  margin: 0 auto;
  margin-top: 1rem;
`);
export const TotalText = (cov_1o0g89wes7().s[10]++, styled.h4`
  font-size: 3rem;
  font-weight: 600;
  margin-right: 4.8rem;
  display: flex;
  align-items: center;
`);
export const TotalValue = (cov_1o0g89wes7().s[11]++, styled.p`
  font-size: 2.8rem;
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuc3R5bGVzLmpzeCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJIZWFkaW5nMiIsIk92ZXJsYXlTdHlsZXMiLCJDYXJ0Q29udGFpbmVyIiwiZGl2IiwicHJvcHMiLCJpc0hpZGRlbiIsIk92ZXJsYXkiLCJQb3B1cCIsIkNhcnRIZWFkaW5nIiwiaDIiLCJDbG9zZUJ1dHRvbiIsIkl0ZW1zQ29udGFpbmVyIiwiSXRlbXNJbmZvIiwiQ2FydEl0ZW1DaGFyIiwicCIsIkNoZWNrb3V0Q29udGFpbmVyIiwiVG90YWxUZXh0IiwiaDQiLCJUb3RhbFZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUVBLFNBQ0VDLFFBREYsRUFFRUMsYUFGRixRQUdPLDRDQUhQO0FBS0EsT0FBTyxNQUFNQyxhQUFhLDZCQUFHSCxNQUFNLENBQUNJLEdBQUk7QUFDeEM7QUFDQTtBQUNBLGFBQWNDLEtBQUQsSUFBWTtBQUFBO0FBQUE7QUFBQSxTQUFBQSxLQUFLLENBQUNDLFFBQU4sZ0NBQWlCLE1BQWpCLGlDQUEwQixPQUExQjtBQUFpQyxDQUFFO0FBQzVEO0FBQ0E7QUFDQSxDQU4wQixDQUFuQjtBQVFQLE9BQU8sTUFBTUMsT0FBTyw2QkFBR1AsTUFBTSxDQUFDSSxHQUFJO0FBQ2xDLElBQUlGLGFBQWM7QUFDbEIsQ0FGb0IsQ0FBYjtBQUlQLE9BQU8sTUFBTU0sS0FBSyw2QkFBR1IsTUFBTSxDQUFDSSxHQUFJO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZrQixDQUFYO0FBaUJQLE9BQU8sTUFBTUssV0FBVyw2QkFBR1QsTUFBTSxDQUFDVSxFQUFHO0FBQ3JDO0FBQ0EsSUFBSVQsUUFBUztBQUNiLENBSHdCLENBQWpCO0FBS1AsT0FBTyxNQUFNVSxXQUFXLDZCQUFHWCxNQUFNLENBQUNJLEdBQUk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQd0IsQ0FBakI7QUFTUCxPQUFPLE1BQU1RLGNBQWMsNkJBQUdaLE1BQU0sQ0FBQ0ksR0FBSTtBQUN6QztBQUNBO0FBQ0EsQ0FIMkIsQ0FBcEI7QUFLUCxPQUFPLE1BQU1TLFNBQVMsNkJBQUdiLE1BQU0sQ0FBQ0ksR0FBSTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBzQixDQUFmO0FBU1AsT0FBTyxNQUFNVSxZQUFZLDZCQUFHZCxNQUFNLENBQUNlLENBQUU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVHlCLENBQWxCO0FBV1AsT0FBTyxNQUFNQyxpQkFBaUIsNkJBQUdoQixNQUFNLENBQUNJLEdBQUk7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVI4QixDQUF2QjtBQVVQLE9BQU8sTUFBTWEsU0FBUyw4QkFBR2pCLE1BQU0sQ0FBQ2tCLEVBQUc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTnNCLENBQWY7QUFRUCxPQUFPLE1BQU1DLFVBQVUsOEJBQUduQixNQUFNLENBQUNlLENBQUU7QUFDbkM7QUFDQSxDQUZ1QixDQUFoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIEhlYWRpbmcyLFxyXG4gIE92ZXJsYXlTdHlsZXMsXHJcbn0gZnJvbSBcIi4uLy4uL292ZXJhbGwtc3R5bGVzL292ZXJhbGwtc3R5bGVzLnN0eWxlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6ICR7KHByb3BzKSA9PiAocHJvcHMuaXNIaWRkZW4gPyBcIm5vbmVcIiA6IFwiYmxvY2tcIil9O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA0OTk7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgT3ZlcmxheSA9IHN0eWxlZC5kaXZgXHJcbiAgJHtPdmVybGF5U3R5bGVzfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvcHVwID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTEwcmVtO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMnJlbSAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZyZW07XHJcbiAgei1pbmRleDogNTAyO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4LjEyNWVtKSB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgcGFkZGluZzogMnJlbSAycmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0SGVhZGluZyA9IHN0eWxlZC5oMmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgJHtIZWFkaW5nMn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDbG9zZUJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogM3JlbTtcclxuICByaWdodDogNXJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LWhlaWdodDogNjJyZW07XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtc0luZm8gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWF4LXdpZHRoOiAxMDByZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1MTUxNTE7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuM3JlbTtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRJdGVtQ2hhciA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgd2lkdGg6IDIzJTtcclxuXHJcbiAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgd2lkdGg6IDglO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGVja291dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWF4LXdpZHRoOiAxMDByZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUb3RhbFRleHQgPSBzdHlsZWQuaDRgXHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0LjhyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRvdGFsVmFsdWUgPSBzdHlsZWQucGBcclxuICBmb250LXNpemU6IDIuOHJlbTtcclxuYDsiXX0=