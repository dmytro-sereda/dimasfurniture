function cov_1l0g2hikn6() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\pages\\about\\about.styles.jsx";
  var hash = "0fa5e11fdf7801d1bbd479df2bf2cf17c7f0dac6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\pages\\about\\about.styles.jsx",
    statementMap: {
      "0": {
        start: {
          line: 9,
          column: 34
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "1": {
        start: {
          line: 18,
          column: 34
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "2": {
        start: {
          line: 27,
          column: 28
        },
        end: {
          line: 33,
          column: 1
        }
      },
      "3": {
        start: {
          line: 35,
          column: 26
        },
        end: {
          line: 50,
          column: 1
        }
      },
      "4": {
        start: {
          line: 52,
          column: 25
        },
        end: {
          line: 72,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "0fa5e11fdf7801d1bbd479df2bf2cf17c7f0dac6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1l0g2hikn6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1l0g2hikn6();
import styled from "styled-components";
import { Container, Heading2, Paragraph } from "../../overall-styles/overall-styles.styles";
export const AboutPageContainer = (cov_1l0g2hikn6().s[0]++, styled.div`
  ${Container}
  padding: 4rem 0;

  @media only screen and (max-width: 107.5em) {
    padding: 4rem 2rem;
  }
`);
export const AboutInfoContainer = (cov_1l0g2hikn6().s[1]++, styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 28.125em) {
    display: block;
  }
`);
export const AboutHeading = (cov_1l0g2hikn6().s[2]++, styled.h2`
  ${Heading2}

  @media only screen and (max-width: 73.125em) {
    line-height: 1;
  }
`);
export const AboutImage = (cov_1l0g2hikn6().s[3]++, styled.img`
  display: block;
  margin-right: 5rem;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 73.125em) {
    width: 41.3rem;
    height: 53.7rem;
  }

  @media only screen and (max-width: 28.125em) {
    margin: 0 auto;
    margin-bottom: 4rem;
  }
`);
export const AboutText = (cov_1l0g2hikn6().s[4]++, styled.p`
  ${Paragraph}
  column-count: 2;
  column-gap: 4rem;
  column-rule: 1px solid #eee;
  text-align: left;

  @media only screen and (max-width: 73.125em) {
    column-count: 1;
    column-rule: none;
    font-size: 4rem;
  }

  @media only screen and (max-width: 28.125em) {
    margin-top: 2rem;
  }

  span {
    color: #df0000;
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnN0eWxlcy5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVyIiwiSGVhZGluZzIiLCJQYXJhZ3JhcGgiLCJBYm91dFBhZ2VDb250YWluZXIiLCJkaXYiLCJBYm91dEluZm9Db250YWluZXIiLCJBYm91dEhlYWRpbmciLCJoMiIsIkFib3V0SW1hZ2UiLCJpbWciLCJBYm91dFRleHQiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFFQSxTQUNFQyxTQURGLEVBRUVDLFFBRkYsRUFHRUMsU0FIRixRQUlPLDRDQUpQO0FBTUEsT0FBTyxNQUFNQyxrQkFBa0IsNkJBQUdKLE1BQU0sQ0FBQ0ssR0FBSTtBQUM3QyxJQUFJSixTQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUCtCLENBQXhCO0FBU1AsT0FBTyxNQUFNSyxrQkFBa0IsNkJBQUdOLE1BQU0sQ0FBQ0ssR0FBSTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVArQixDQUF4QjtBQVNQLE9BQU8sTUFBTUUsWUFBWSw2QkFBR1AsTUFBTSxDQUFDUSxFQUFHO0FBQ3RDLElBQUlOLFFBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTnlCLENBQWxCO0FBUVAsT0FBTyxNQUFNTyxVQUFVLDZCQUFHVCxNQUFNLENBQUNVLEdBQUk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZnVCLENBQWhCO0FBaUJQLE9BQU8sTUFBTUMsU0FBUyw2QkFBR1gsTUFBTSxDQUFDWSxDQUFFO0FBQ2xDLElBQUlULFNBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXBCc0IsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIENvbnRhaW5lcixcclxuICBIZWFkaW5nMixcclxuICBQYXJhZ3JhcGgsXHJcbn0gZnJvbSBcIi4uLy4uL292ZXJhbGwtc3R5bGVzL292ZXJhbGwtc3R5bGVzLnN0eWxlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0UGFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgJHtDb250YWluZXJ9XHJcbiAgcGFkZGluZzogNHJlbSAwO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNy41ZW0pIHtcclxuICAgIHBhZGRpbmc6IDRyZW0gMnJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXRJbmZvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyOC4xMjVlbSkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0SGVhZGluZyA9IHN0eWxlZC5oMmBcclxuICAke0hlYWRpbmcyfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczLjEyNWVtKSB7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXRJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3My4xMjVlbSkge1xyXG4gICAgd2lkdGg6IDQxLjNyZW07XHJcbiAgICBoZWlnaHQ6IDUzLjdyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4LjEyNWVtKSB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFib3V0VGV4dCA9IHN0eWxlZC5wYFxyXG4gICR7UGFyYWdyYXBofVxyXG4gIGNvbHVtbi1jb3VudDogMjtcclxuICBjb2x1bW4tZ2FwOiA0cmVtO1xyXG4gIGNvbHVtbi1ydWxlOiAxcHggc29saWQgI2VlZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDczLjEyNWVtKSB7XHJcbiAgICBjb2x1bW4tY291bnQ6IDE7XHJcbiAgICBjb2x1bW4tcnVsZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjguMTI1ZW0pIHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAjZGYwMDAwO1xyXG4gIH1cclxuYDtcclxuIl19