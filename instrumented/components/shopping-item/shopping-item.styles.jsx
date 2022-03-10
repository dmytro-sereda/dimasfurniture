function cov_24lbn5epgu() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\components\\shopping-item\\shopping-item.styles.jsx";
  var hash = "eaab5a3e1a0937103154cc202f11dd8f7af521b4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\components\\shopping-item\\shopping-item.styles.jsx",
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
    hash: "eaab5a3e1a0937103154cc202f11dd8f7af521b4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_24lbn5epgu = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_24lbn5epgu();
import styled from "styled-components";
import { Heading3 } from "../../overall-styles/overall-styles.styles";
import CustomButton from "../custom-button/custom-button";
export const ItemContainer = (cov_24lbn5epgu().s[0]++, styled.div`
  border-radius: 4.9rem;
  width: 40rem;
  height: 53.7rem;
  background-image: url(${props => {
  cov_24lbn5epgu().f[0]++;
  cov_24lbn5epgu().s[1]++;
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
export const ShoppingItemButton = (cov_24lbn5epgu().s[2]++, styled(CustomButton)`
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
export const ItemTitle = (cov_24lbn5epgu().s[3]++, styled.h3`
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
export const CharsList = (cov_24lbn5epgu().s[4]++, styled.ul`
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
export const CharsItem = (cov_24lbn5epgu().s[5]++, styled.li`
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
export const CharsItemData = (cov_24lbn5epgu().s[6]++, styled.span`
  font-weight: 300;
`);
export const ImageContainer = (cov_24lbn5epgu().s[7]++, styled.div`
  width: 100%;
  /* height: 30rem; */
  display: none;
  /* background-image: url(${props => {
  cov_24lbn5epgu().f[1]++;
  cov_24lbn5epgu().s[8]++;
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
export const ItemImagePhones = (cov_24lbn5epgu().s[9]++, styled.img`
  display: none;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 56.25em) {
    display: block;
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWl0ZW0uc3R5bGVzLmpzeCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJIZWFkaW5nMyIsIkN1c3RvbUJ1dHRvbiIsIkl0ZW1Db250YWluZXIiLCJkaXYiLCJwcm9wcyIsImltYWdlVXJsIiwiU2hvcHBpbmdJdGVtQnV0dG9uIiwiSXRlbVRpdGxlIiwiaDMiLCJDaGFyc0xpc3QiLCJ1bCIsIkNoYXJzSXRlbSIsImxpIiwiQ2hhcnNJdGVtRGF0YSIsInNwYW4iLCJJbWFnZUNvbnRhaW5lciIsIkl0ZW1JbWFnZVBob25lcyIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFFQSxTQUFTQyxRQUFULFFBQXlCLDRDQUF6QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsZ0NBQXpCO0FBRUEsT0FBTyxNQUFNQyxhQUFhLDZCQUFHSCxNQUFNLENBQUNJLEdBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsMEJBQTJCQyxLQUFELElBQVc7QUFBQTtBQUFBO0FBQUEsU0FBQUEsS0FBSyxDQUFDQyxRQUFOO0FBQWMsQ0FBQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXZFMEIsQ0FBbkI7QUF5RVAsT0FBTyxNQUFNQyxrQkFBa0IsNkJBQUdQLE1BQU0sQ0FBQ0UsWUFBRCxDQUFlO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVorQixDQUF4QjtBQWNQLE9BQU8sTUFBTU0sU0FBUyw2QkFBR1IsTUFBTSxDQUFDUyxFQUFHO0FBQ25DLElBQUlSLFFBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBbEJzQixDQUFmO0FBb0JQLE9BQU8sTUFBTVMsU0FBUyw2QkFBR1YsTUFBTSxDQUFDVyxFQUFHO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FYc0IsQ0FBZjtBQWFQLE9BQU8sTUFBTUMsU0FBUyw2QkFBR1osTUFBTSxDQUFDYSxFQUFHO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWxCc0IsQ0FBZjtBQW9CUCxPQUFPLE1BQU1DLGFBQWEsNkJBQUdkLE1BQU0sQ0FBQ2UsSUFBSztBQUN6QztBQUNBLENBRjBCLENBQW5CO0FBSVAsT0FBTyxNQUFNQyxjQUFjLDZCQUFHaEIsTUFBTSxDQUFDSSxHQUFJO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLDZCQUE4QkMsS0FBRCxJQUFXO0FBQUE7QUFBQTtBQUFBLFNBQUFBLEtBQUssQ0FBQ0MsUUFBTjtBQUFjLENBQUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWYyQixDQUFwQjtBQWlCUCxPQUFPLE1BQU1XLGVBQWUsNkJBQUdqQixNQUFNLENBQUNrQixHQUFJO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FSNEIsQ0FBckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IHsgSGVhZGluZzMgfSBmcm9tIFwiLi4vLi4vb3ZlcmFsbC1zdHlsZXMvb3ZlcmFsbC1zdHlsZXMuc3R5bGVzXCI7XHJcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSBcIi4uL2N1c3RvbS1idXR0b24vY3VzdG9tLWJ1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGJvcmRlci1yYWRpdXM6IDQuOXJlbTtcclxuICB3aWR0aDogNDByZW07XHJcbiAgaGVpZ2h0OiA1My43cmVtO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkeyhwcm9wcykgPT4gcHJvcHMuaW1hZ2VVcmx9KTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLml0ZW0tYnRuIHtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0LjlyZW07XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgb3BhY2l0eTogMC43O1xyXG5cclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICoge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5My43NWVtKSB7XHJcbiAgICB3aWR0aDogMzVyZW07XHJcbiAgICBoZWlnaHQ6IDQ4LjVyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczLjEyNWVtKSB7XHJcbiAgICB3aWR0aDogMzByZW07XHJcbiAgICBoZWlnaHQ6IDQwcmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XHJcbiAgICB3aWR0aDogMjdyZW07XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEuOXJlbTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMuNzVlbSkge1xyXG4gICAgd2lkdGg6IDUwcmVtO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyOC4xMjVlbSkge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU2hvcHBpbmdJdGVtQnV0dG9uID0gc3R5bGVkKEN1c3RvbUJ1dHRvbilgXHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAxMDA7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMuNzVlbSkge1xyXG4gICAgZm9udC1zaXplOiAzLjZyZW07XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSXRlbVRpdGxlID0gc3R5bGVkLmgzYFxyXG4gICR7SGVhZGluZzN9XHJcbiAgei1pbmRleDogMTAwO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC1zaXplOiAzLjJyZW07XHJcbiAgICBjb2xvcjogIzUxNTE1MTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMuNzVlbSkge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyOC4xMjVlbSkge1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFyc0xpc3QgPSBzdHlsZWQudWxgXHJcbiAgb3BhY2l0eTogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMnJlbSAwIDIuNHJlbSAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgbWFyZ2luOiAxcmVtIDAgMnJlbSAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFyc0l0ZW0gPSBzdHlsZWQubGlgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XHJcbiAgICBjb2xvcjogIzUxNTE1MTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjguMTI1ZW0pIHtcclxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDaGFyc0l0ZW1EYXRhID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogaGVpZ2h0OiAzMHJlbTsgKi9cclxuICBkaXNwbGF5OiBub25lO1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkeyhwcm9wcykgPT4gcHJvcHMuaW1hZ2VVcmx9KTsgKi9cclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0My43NWVtKSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiBoZWlnaHQ6IDUwcmVtOyAqL1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtSW1hZ2VQaG9uZXMgPSBzdHlsZWQuaW1nYFxyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuYDtcclxuIl19