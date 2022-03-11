function cov_1lzj986zwt() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/pages/about/about.styles.jsx";
  var hash = "bc2e261f5d4279b9dd94ce00e2fc2c7d62cfae0d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/pages/about/about.styles.jsx",
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
    hash: "bc2e261f5d4279b9dd94ce00e2fc2c7d62cfae0d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1lzj986zwt = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1lzj986zwt();
import styled from "styled-components";
import { Container, Heading2, Paragraph } from "../../overall-styles/overall-styles.styles";
export const AboutPageContainer = (cov_1lzj986zwt().s[0]++, styled.div`
  ${Container}
  padding: 4rem 0;

  @media only screen and (max-width: 107.5em) {
    padding: 4rem 2rem;
  }
`);
export const AboutInfoContainer = (cov_1lzj986zwt().s[1]++, styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 28.125em) {
    display: block;
  }
`);
export const AboutHeading = (cov_1lzj986zwt().s[2]++, styled.h2`
  ${Heading2}

  @media only screen and (max-width: 73.125em) {
    line-height: 1;
  }
`);
export const AboutImage = (cov_1lzj986zwt().s[3]++, styled.img`
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
export const AboutText = (cov_1lzj986zwt().s[4]++, styled.p`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LnN0eWxlcy5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiQ29udGFpbmVyIiwiSGVhZGluZzIiLCJQYXJhZ3JhcGgiLCJBYm91dFBhZ2VDb250YWluZXIiLCJkaXYiLCJBYm91dEluZm9Db250YWluZXIiLCJBYm91dEhlYWRpbmciLCJoMiIsIkFib3V0SW1hZ2UiLCJpbWciLCJBYm91dFRleHQiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFFQSxTQUNFQyxTQURGLEVBRUVDLFFBRkYsRUFHRUMsU0FIRixRQUlPLDRDQUpQO0FBTUEsT0FBTyxNQUFNQyxrQkFBa0IsNkJBQUdKLE1BQU0sQ0FBQ0ssR0FBSTtBQUM3QyxJQUFJSixTQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBUCtCLENBQXhCO0FBU1AsT0FBTyxNQUFNSyxrQkFBa0IsNkJBQUdOLE1BQU0sQ0FBQ0ssR0FBSTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVArQixDQUF4QjtBQVNQLE9BQU8sTUFBTUUsWUFBWSw2QkFBR1AsTUFBTSxDQUFDUSxFQUFHO0FBQ3RDLElBQUlOLFFBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTnlCLENBQWxCO0FBUVAsT0FBTyxNQUFNTyxVQUFVLDZCQUFHVCxNQUFNLENBQUNVLEdBQUk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZnVCLENBQWhCO0FBaUJQLE9BQU8sTUFBTUMsU0FBUyw2QkFBR1gsTUFBTSxDQUFDWSxDQUFFO0FBQ2xDLElBQUlULFNBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXBCc0IsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCB7XG4gIENvbnRhaW5lcixcbiAgSGVhZGluZzIsXG4gIFBhcmFncmFwaCxcbn0gZnJvbSBcIi4uLy4uL292ZXJhbGwtc3R5bGVzL292ZXJhbGwtc3R5bGVzLnN0eWxlc1wiO1xuXG5leHBvcnQgY29uc3QgQWJvdXRQYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgJHtDb250YWluZXJ9XG4gIHBhZGRpbmc6IDRyZW0gMDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNy41ZW0pIHtcbiAgICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBBYm91dEluZm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyOC4xMjVlbSkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQWJvdXRIZWFkaW5nID0gc3R5bGVkLmgyYFxuICAke0hlYWRpbmcyfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzMuMTI1ZW0pIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFib3V0SW1hZ2UgPSBzdHlsZWQuaW1nYFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzMuMTI1ZW0pIHtcbiAgICB3aWR0aDogNDEuM3JlbTtcbiAgICBoZWlnaHQ6IDUzLjdyZW07XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4LjEyNWVtKSB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFib3V0VGV4dCA9IHN0eWxlZC5wYFxuICAke1BhcmFncmFwaH1cbiAgY29sdW1uLWNvdW50OiAyO1xuICBjb2x1bW4tZ2FwOiA0cmVtO1xuICBjb2x1bW4tcnVsZTogMXB4IHNvbGlkICNlZWU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3My4xMjVlbSkge1xuICAgIGNvbHVtbi1jb3VudDogMTtcbiAgICBjb2x1bW4tcnVsZTogbm9uZTtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4LjEyNWVtKSB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIGNvbG9yOiAjZGYwMDAwO1xuICB9XG5gO1xuIl19