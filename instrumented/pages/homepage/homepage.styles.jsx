function cov_172ykeezsv() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/pages/homepage/homepage.styles.jsx";
  var hash = "3b04dd386449e79fa2380fdc6266fad68f58d289";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/pages/homepage/homepage.styles.jsx",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 28
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "1": {
        start: {
          line: 24,
          column: 37
        },
        end: {
          line: 39,
          column: 1
        }
      },
      "2": {
        start: {
          line: 41,
          column: 27
        },
        end: {
          line: 47,
          column: 1
        }
      },
      "3": {
        start: {
          line: 49,
          column: 32
        },
        end: {
          line: 54,
          column: 1
        }
      },
      "4": {
        start: {
          line: 56,
          column: 29
        },
        end: {
          line: 63,
          column: 1
        }
      },
      "5": {
        start: {
          line: 65,
          column: 34
        },
        end: {
          line: 69,
          column: 1
        }
      },
      "6": {
        start: {
          line: 71,
          column: 30
        },
        end: {
          line: 87,
          column: 1
        }
      },
      "7": {
        start: {
          line: 89,
          column: 24
        },
        end: {
          line: 119,
          column: 1
        }
      },
      "8": {
        start: {
          line: 120,
          column: 24
        },
        end: {
          line: 156,
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
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3b04dd386449e79fa2380fdc6266fad68f58d289"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_172ykeezsv = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_172ykeezsv();
import styled from "styled-components";
import backgroundImage from "../../assets/ellipse.png";
import CustomButton from "../../components/custom-button/custom-button";
import { Container, Heading1, Paragraph } from "../../overall-styles/overall-styles.styles";
export const FirstSection = (cov_172ykeezsv().s[0]++, styled.section`
  height: 110vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  margin-top: -14.7rem;
  margin-bottom: 15rem;

  @media only screen and (max-width: 56.25em) {
    height: 100%;
  }
`);
export const FirstSectionContainer = (cov_172ykeezsv().s[1]++, styled.div`
  padding-top: 14.7rem;
  display: flex;
  justify-content: space-between;
  height: 100%;

  ${Container}

  @media only screen and (max-width: 107.5em) {
    padding: 14.7rem 4rem 0 4rem;
  }

  @media only screen and (max-width: 34.375em) {
    display: block;
  }
`);
export const MainHeading = (cov_172ykeezsv().s[2]++, styled.h1`
  ${Heading1}
  @media only screen and (max-width: 34.375em) {
    text-align: center;
    margin: 0 auto;
  }
`);
export const SectionParagraph = (cov_172ykeezsv().s[3]++, styled.p`
  ${Paragraph}
  @media only screen and (max-width: 34.375em) {
    text-align: center;
  }
`);
export const TextContainer = (cov_172ykeezsv().s[4]++, styled.div`
  margin-top: 28.4rem;
  margin-bottom: 34rem;

  @media only screen and (max-width: 34.375em) {
    margin: 10rem auto;
  }
`);
export const FirstSectionButton = (cov_172ykeezsv().s[5]++, styled(CustomButton)`
  @media only screen and (max-width: 34.375em) {
    margin: 0 auto;
  }
`);
export const ImageContainer = (cov_172ykeezsv().s[6]++, styled.div`
  position: relative;
  width: 100%;
  align-self: start;

  @media only screen and (max-width: 34.375em) {
    margin-bottom: 10rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }

  @media only screen and (max-width: 28.125em) {
    margin-bottom: -4rem;
  }
`);
export const ImageOne = (cov_172ykeezsv().s[7]++, styled.img`
  width: 45rem;
  height: 66.6rem;
  position: absolute;
  right: 0;
  top: 10rem;
  transition: all 0.4s;
  box-shadow: 0 1.5rem 2.5rem rgba(0, 0, 0, 0.1);
  z-index: 100;

  &:hover {
    transform: scale(1.02);
  }

  @media only screen and (max-width: 56.25em) {
    width: 40rem;
    height: 57rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 34rem;
    height: 51rem;
  }

  @media only screen and (max-width: 34.375em) {
    position: relative;
    top: 0;
    right: 0;
    margin: 0 auto;
  }
`);
export const ImageTwo = (cov_172ykeezsv().s[8]++, styled.img`
  width: 49.6rem;
  height: 33.5rem;
  position: absolute;
  right: 22.6rem;
  top: 53.8em;
  transition: all 0.4s;
  box-shadow: 0 1.5rem 2.5rem rgba(0, 0, 0, 0.1);
  z-index: 101;

  &:hover {
    transform: scale(1.02);
  }

  @media only screen and (max-width: 56.25em) {
    width: 44rem;
    height: 30rem;
  }

  @media only screen and (max-width: 43.75em) {
    width: 38rem;
    height: 24rem;
  }

  @media only screen and (max-width: 34.375em) {
    position: relative;
    top: 0;
    right: 0;
    width: 100%;
    height: auto;
    margin: 0 auto;
  }

  @media only screen and (max-width: 28.125em) {
    margin-top: 4rem;
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLnN0eWxlcy5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiYmFja2dyb3VuZEltYWdlIiwiQ3VzdG9tQnV0dG9uIiwiQ29udGFpbmVyIiwiSGVhZGluZzEiLCJQYXJhZ3JhcGgiLCJGaXJzdFNlY3Rpb24iLCJzZWN0aW9uIiwiRmlyc3RTZWN0aW9uQ29udGFpbmVyIiwiZGl2IiwiTWFpbkhlYWRpbmciLCJoMSIsIlNlY3Rpb25QYXJhZ3JhcGgiLCJwIiwiVGV4dENvbnRhaW5lciIsIkZpcnN0U2VjdGlvbkJ1dHRvbiIsIkltYWdlQ29udGFpbmVyIiwiSW1hZ2VPbmUiLCJpbWciLCJJbWFnZVR3byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFFQSxPQUFPQyxlQUFQLE1BQTRCLDBCQUE1QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsOENBQXpCO0FBRUEsU0FDRUMsU0FERixFQUVFQyxRQUZGLEVBR0VDLFNBSEYsUUFJTyw0Q0FKUDtBQU1BLE9BQU8sTUFBTUMsWUFBWSw2QkFBR04sTUFBTSxDQUFDTyxPQUFRO0FBQzNDO0FBQ0EsMEJBQTBCTixlQUFnQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVnlCLENBQWxCO0FBWVAsT0FBTyxNQUFNTyxxQkFBcUIsNkJBQUdSLE1BQU0sQ0FBQ1MsR0FBSTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSU4sU0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZrQyxDQUEzQjtBQWlCUCxPQUFPLE1BQU1PLFdBQVcsNkJBQUdWLE1BQU0sQ0FBQ1csRUFBRztBQUNyQyxJQUFJUCxRQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU53QixDQUFqQjtBQVFQLE9BQU8sTUFBTVEsZ0JBQWdCLDZCQUFHWixNQUFNLENBQUNhLENBQUU7QUFDekMsSUFBSVIsU0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBLENBTDZCLENBQXRCO0FBT1AsT0FBTyxNQUFNUyxhQUFhLDZCQUFHZCxNQUFNLENBQUNTLEdBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQMEIsQ0FBbkI7QUFTUCxPQUFPLE1BQU1NLGtCQUFrQiw2QkFBR2YsTUFBTSxDQUFDRSxZQUFELENBQWU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsQ0FKK0IsQ0FBeEI7QUFNUCxPQUFPLE1BQU1jLGNBQWMsNkJBQUdoQixNQUFNLENBQUNTLEdBQUk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FoQjJCLENBQXBCO0FBa0JQLE9BQU8sTUFBTVEsUUFBUSw2QkFBR2pCLE1BQU0sQ0FBQ2tCLEdBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBOUJxQixDQUFkO0FBK0JQLE9BQU8sTUFBTUMsUUFBUSw2QkFBR25CLE1BQU0sQ0FBQ2tCLEdBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBcENxQixDQUFkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IGJhY2tncm91bmRJbWFnZSBmcm9tIFwiLi4vLi4vYXNzZXRzL2VsbGlwc2UucG5nXCI7XG5pbXBvcnQgQ3VzdG9tQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2N1c3RvbS1idXR0b24vY3VzdG9tLWJ1dHRvblwiO1xuXG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIEhlYWRpbmcxLFxuICBQYXJhZ3JhcGgsXG59IGZyb20gXCIuLi8uLi9vdmVyYWxsLXN0eWxlcy9vdmVyYWxsLXN0eWxlcy5zdHlsZXNcIjtcblxuZXhwb3J0IGNvbnN0IEZpcnN0U2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICBoZWlnaHQ6IDExMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtiYWNrZ3JvdW5kSW1hZ2V9KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luLXRvcDogLTE0LjdyZW07XG4gIG1hcmdpbi1ib3R0b206IDE1cmVtO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEZpcnN0U2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmctdG9wOiAxNC43cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTAwJTtcblxuICAke0NvbnRhaW5lcn1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNy41ZW0pIHtcbiAgICBwYWRkaW5nOiAxNC43cmVtIDRyZW0gMCA0cmVtO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zNzVlbSkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTWFpbkhlYWRpbmcgPSBzdHlsZWQuaDFgXG4gICR7SGVhZGluZzF9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQuMzc1ZW0pIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTZWN0aW9uUGFyYWdyYXBoID0gc3R5bGVkLnBgXG4gICR7UGFyYWdyYXBofVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3NWVtKSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVGV4dENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDI4LjRyZW07XG4gIG1hcmdpbi1ib3R0b206IDM0cmVtO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQuMzc1ZW0pIHtcbiAgICBtYXJnaW46IDEwcmVtIGF1dG87XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBGaXJzdFNlY3Rpb25CdXR0b24gPSBzdHlsZWQoQ3VzdG9tQnV0dG9uKWBcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zNzVlbSkge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1zZWxmOiBzdGFydDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3NWVtKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTByZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4LjEyNWVtKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTRyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBJbWFnZU9uZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiA0NXJlbTtcbiAgaGVpZ2h0OiA2Ni42cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDEwcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgYm94LXNoYWRvdzogMCAxLjVyZW0gMi41cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgei1pbmRleDogMTAwO1xuXG4gICY6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcbiAgICB3aWR0aDogNDByZW07XG4gICAgaGVpZ2h0OiA1N3JlbTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAgIHdpZHRoOiAzNHJlbTtcbiAgICBoZWlnaHQ6IDUxcmVtO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zNzVlbSkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgSW1hZ2VUd28gPSBzdHlsZWQuaW1nYFxuICB3aWR0aDogNDkuNnJlbTtcbiAgaGVpZ2h0OiAzMy41cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMi42cmVtO1xuICB0b3A6IDUzLjhlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIGJveC1zaGFkb3c6IDAgMS41cmVtIDIuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHotaW5kZXg6IDEwMTtcblxuICAmOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1Ni4yNWVtKSB7XG4gICAgd2lkdGg6IDQ0cmVtO1xuICAgIGhlaWdodDogMzByZW07XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcbiAgICB3aWR0aDogMzhyZW07XG4gICAgaGVpZ2h0OiAyNHJlbTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQuMzc1ZW0pIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjguMTI1ZW0pIHtcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICB9XG5gO1xuIl19