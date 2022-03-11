function cov_1rb53ptj74() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/components/shopping-item/shopping-item.styles.jsx";
  var hash = "4f6202391cfe1a2a3bba357595fb654f70fd32b4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/components/shopping-item/shopping-item.styles.jsx",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 29
        },
        end: {
          line: 77,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 37
        },
        end: {
          line: 10,
          column: 51
        }
      },
      "2": {
        start: {
          line: 79,
          column: 34
        },
        end: {
          line: 91,
          column: 1
        }
      },
      "3": {
        start: {
          line: 93,
          column: 25
        },
        end: {
          line: 111,
          column: 1
        }
      },
      "4": {
        start: {
          line: 113,
          column: 25
        },
        end: {
          line: 124,
          column: 1
        }
      },
      "5": {
        start: {
          line: 126,
          column: 25
        },
        end: {
          line: 144,
          column: 1
        }
      },
      "6": {
        start: {
          line: 146,
          column: 29
        },
        end: {
          line: 148,
          column: 1
        }
      },
      "7": {
        start: {
          line: 150,
          column: 30
        },
        end: {
          line: 165,
          column: 1
        }
      },
      "8": {
        start: {
          line: 154,
          column: 40
        },
        end: {
          line: 154,
          column: 54
        }
      },
      "9": {
        start: {
          line: 167,
          column: 31
        },
        end: {
          line: 175,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 26
          },
          end: {
            line: 10,
            column: 27
          }
        },
        loc: {
          start: {
            line: 10,
            column: 37
          },
          end: {
            line: 10,
            column: 51
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 154,
            column: 29
          },
          end: {
            line: 154,
            column: 30
          }
        },
        loc: {
          start: {
            line: 154,
            column: 40
          },
          end: {
            line: 154,
            column: 54
          }
        },
        line: 154
      }
    },
    branchMap: {},
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
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4f6202391cfe1a2a3bba357595fb654f70fd32b4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1rb53ptj74 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1rb53ptj74();
import styled from "styled-components";
import { Heading3 } from "../../overall-styles/overall-styles.styles";
import CustomButton from "../custom-button/custom-button";
export const ItemContainer = (cov_1rb53ptj74().s[0]++, styled.div`
  border-radius: 4.9rem;
  width: 40rem;
  height: 53.7rem;
  background-image: url(${props => {
  cov_1rb53ptj74().f[0]++;
  cov_1rb53ptj74().s[1]++;
  return props.imageUrl;
}});
  background-size: cover;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .item-btn {
    z-index: 100;
    opacity: 0;
  }

  &::after {
    border-radius: 4.9rem;
    content: "";
    position: absolute;
    background-color: black;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    transition: all 0.4s;
  }

  &:hover {
    &::after {
      opacity: 0.7;

      @media only screen and (max-width: 56.25em) {
        display: none;
      }
    }

    * {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 93.75em) {
    width: 35rem;
    height: 48.5rem;
  }

  @media only screen and (max-width: 73.125em) {
    width: 30rem;
    height: 40rem;
  }

  @media only screen and (max-width: 56.25em) {
    width: 27rem;
    height: 100%;
    border-radius: 4rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.15);
    background-image: none;
    overflow: hidden;
    padding-bottom: 1.9rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 50rem;
    height: 100%;
  }

  @media only screen and (max-width: 28.125em) {
    width: 70%;
  }
`);
export const ShoppingItemButton = (cov_1rb53ptj74().s[2]++, styled(CustomButton)`
  opacity: 0;
  z-index: 100;

  @media only screen and (max-width: 56.25em) {
    opacity: 1;
  }

  @media only screen and (max-width: 43.75em) {
    font-size: 3.6rem;
    margin: 1rem 0;
  }
`);
export const ItemTitle = (cov_1rb53ptj74().s[3]++, styled.h3`
  ${Heading3}
  z-index: 100;

  @media only screen and (max-width: 56.25em) {
    margin-top: 2rem;
    opacity: 1;
    font-size: 3.2rem;
    color: #515151;
  }

  @media only screen and (max-width: 43.75em) {
    font-size: 4rem;
  }

  @media only screen and (max-width: 28.125em) {
    font-size: 5rem;
  }
`);
export const CharsList = (cov_1rb53ptj74().s[4]++, styled.ul`
  opacity: 0;
  list-style: none;
  margin: 2rem 0 2.4rem 0;
  z-index: 100;
  transition: all 0.4s;

  @media only screen and (max-width: 56.25em) {
    opacity: 1;
    margin: 1rem 0 2rem 0;
  }
`);
export const CharsItem = (cov_1rb53ptj74().s[5]++, styled.li`
  color: white;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;

  @media only screen and (max-width: 56.25em) {
    color: #515151;
    text-align: left;
  }

  @media only screen and (max-width: 43.75em) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 28.125em) {
    font-size: 3.5rem;
  }
`);
export const CharsItemData = (cov_1rb53ptj74().s[6]++, styled.span`
  font-weight: 300;
`);
export const ImageContainer = (cov_1rb53ptj74().s[7]++, styled.div`
  width: 100%;
  /* height: 30rem; */
  display: none;
  /* background-image: url(${props => {
  cov_1rb53ptj74().f[1]++;
  cov_1rb53ptj74().s[8]++;
  return props.imageUrl;
}}); */
  background-size: cover;

  @media only screen and (max-width: 56.25em) {
    display: block;
  }

  @media only screen and (max-width: 43.75em) {
    height: 100%;
    /* height: 50rem; */
  }
`);
export const ItemImagePhones = (cov_1rb53ptj74().s[9]++, styled.img`
  display: none;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 56.25em) {
    display: block;
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWl0ZW0uc3R5bGVzLmpzeCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJIZWFkaW5nMyIsIkN1c3RvbUJ1dHRvbiIsIkl0ZW1Db250YWluZXIiLCJkaXYiLCJwcm9wcyIsImltYWdlVXJsIiwiU2hvcHBpbmdJdGVtQnV0dG9uIiwiSXRlbVRpdGxlIiwiaDMiLCJDaGFyc0xpc3QiLCJ1bCIsIkNoYXJzSXRlbSIsImxpIiwiQ2hhcnNJdGVtRGF0YSIsInNwYW4iLCJJbWFnZUNvbnRhaW5lciIsIkl0ZW1JbWFnZVBob25lcyIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFFQSxTQUFTQyxRQUFULFFBQXlCLDRDQUF6QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsZ0NBQXpCO0FBRUEsT0FBTyxNQUFNQyxhQUFhLDZCQUFHSCxNQUFNLENBQUNJLEdBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsMEJBQTJCQyxLQUFELElBQVc7QUFBQTtBQUFBO0FBQUEsU0FBQUEsS0FBSyxDQUFDQyxRQUFOO0FBQWMsQ0FBQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXZFMEIsQ0FBbkI7QUF5RVAsT0FBTyxNQUFNQyxrQkFBa0IsNkJBQUdQLE1BQU0sQ0FBQ0UsWUFBRCxDQUFlO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVorQixDQUF4QjtBQWNQLE9BQU8sTUFBTU0sU0FBUyw2QkFBR1IsTUFBTSxDQUFDUyxFQUFHO0FBQ25DLElBQUlSLFFBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBbEJzQixDQUFmO0FBb0JQLE9BQU8sTUFBTVMsU0FBUyw2QkFBR1YsTUFBTSxDQUFDVyxFQUFHO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FYc0IsQ0FBZjtBQWFQLE9BQU8sTUFBTUMsU0FBUyw2QkFBR1osTUFBTSxDQUFDYSxFQUFHO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWxCc0IsQ0FBZjtBQW9CUCxPQUFPLE1BQU1DLGFBQWEsNkJBQUdkLE1BQU0sQ0FBQ2UsSUFBSztBQUN6QztBQUNBLENBRjBCLENBQW5CO0FBSVAsT0FBTyxNQUFNQyxjQUFjLDZCQUFHaEIsTUFBTSxDQUFDSSxHQUFJO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLDZCQUE4QkMsS0FBRCxJQUFXO0FBQUE7QUFBQTtBQUFBLFNBQUFBLEtBQUssQ0FBQ0MsUUFBTjtBQUFjLENBQUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWYyQixDQUFwQjtBQWlCUCxPQUFPLE1BQU1XLGVBQWUsNkJBQUdqQixNQUFNLENBQUNrQixHQUFJO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FSNEIsQ0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgeyBIZWFkaW5nMyB9IGZyb20gXCIuLi8uLi9vdmVyYWxsLXN0eWxlcy9vdmVyYWxsLXN0eWxlcy5zdHlsZXNcIjtcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSBcIi4uL2N1c3RvbS1idXR0b24vY3VzdG9tLWJ1dHRvblwiO1xuXG5leHBvcnQgY29uc3QgSXRlbUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6IDQuOXJlbTtcbiAgd2lkdGg6IDQwcmVtO1xuICBoZWlnaHQ6IDUzLjdyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkeyhwcm9wcykgPT4gcHJvcHMuaW1hZ2VVcmx9KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuaXRlbS1idG4ge1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDQuOXJlbTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBvcGFjaXR5OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgb3BhY2l0eTogMC43O1xuXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAqIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5My43NWVtKSB7XG4gICAgd2lkdGg6IDM1cmVtO1xuICAgIGhlaWdodDogNDguNXJlbTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzMuMTI1ZW0pIHtcbiAgICB3aWR0aDogMzByZW07XG4gICAgaGVpZ2h0OiA0MHJlbTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAgIHdpZHRoOiAyN3JlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNHJlbTtcbiAgICBib3gtc2hhZG93OiAwIDAgMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS45cmVtO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0My43NWVtKSB7XG4gICAgd2lkdGg6IDUwcmVtO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjguMTI1ZW0pIHtcbiAgICB3aWR0aDogNzAlO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2hvcHBpbmdJdGVtQnV0dG9uID0gc3R5bGVkKEN1c3RvbUJ1dHRvbilgXG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IDEwMDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0My43NWVtKSB7XG4gICAgZm9udC1zaXplOiAzLjZyZW07XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJdGVtVGl0bGUgPSBzdHlsZWQuaDNgXG4gICR7SGVhZGluZzN9XG4gIHotaW5kZXg6IDEwMDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiAzLjJyZW07XG4gICAgY29sb3I6ICM1MTUxNTE7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4LjEyNWVtKSB7XG4gICAgZm9udC1zaXplOiA1cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2hhcnNMaXN0ID0gc3R5bGVkLnVsYFxuICBvcGFjaXR5OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDJyZW0gMCAyLjRyZW0gMDtcbiAgei1pbmRleDogMTAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIG1hcmdpbjogMXJlbSAwIDJyZW0gMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENoYXJzSXRlbSA9IHN0eWxlZC5saWBcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgICBjb2xvcjogIzUxNTE1MTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0My43NWVtKSB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyOC4xMjVlbSkge1xuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQ2hhcnNJdGVtRGF0YSA9IHN0eWxlZC5zcGFuYFxuICBmb250LXdlaWdodDogMzAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGhlaWdodDogMzByZW07ICovXG4gIGRpc3BsYXk6IG5vbmU7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkeyhwcm9wcykgPT4gcHJvcHMuaW1hZ2VVcmx9KTsgKi9cbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvKiBoZWlnaHQ6IDUwcmVtOyAqL1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSXRlbUltYWdlUGhvbmVzID0gc3R5bGVkLmltZ2BcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuYDtcbiJdfQ==