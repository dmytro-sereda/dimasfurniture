function cov_2g71jrxd9o() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\pages\\homepage\\homepage.styles.jsx";
  var hash = "7258c1ff27010400550a50b1bc3223a0b5a067f7";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\pages\\homepage\\homepage.styles.jsx",
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
    hash: "7258c1ff27010400550a50b1bc3223a0b5a067f7"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2g71jrxd9o = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2g71jrxd9o();
import styled from "styled-components";
import backgroundImage from "../../assets/ellipse.png";
import CustomButton from "../../components/custom-button/custom-button";
import { Container, Heading1, Paragraph } from "../../overall-styles/overall-styles.styles";
export const FirstSection = (cov_2g71jrxd9o().s[0]++, styled.section`
  height: 110vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  margin-top: -14.7rem;
  margin-bottom: 15rem;

  @media only screen and (max-width: 56.25em) {
    height: 100%;
  }
`);
export const FirstSectionContainer = (cov_2g71jrxd9o().s[1]++, styled.div`
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
export const MainHeading = (cov_2g71jrxd9o().s[2]++, styled.h1`
  ${Heading1}
  @media only screen and (max-width: 34.375em) {
    text-align: center;
    margin: 0 auto;
  }
`);
export const SectionParagraph = (cov_2g71jrxd9o().s[3]++, styled.p`
  ${Paragraph}
  @media only screen and (max-width: 34.375em) {
    text-align: center;
  }
`);
export const TextContainer = (cov_2g71jrxd9o().s[4]++, styled.div`
  margin-top: 28.4rem;
  margin-bottom: 34rem;

  @media only screen and (max-width: 34.375em) {
    margin: 10rem auto;
  }
`);
export const FirstSectionButton = (cov_2g71jrxd9o().s[5]++, styled(CustomButton)`
  @media only screen and (max-width: 34.375em) {
    margin: 0 auto;
  }
`);
export const ImageContainer = (cov_2g71jrxd9o().s[6]++, styled.div`
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
export const ImageOne = (cov_2g71jrxd9o().s[7]++, styled.img`
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
export const ImageTwo = (cov_2g71jrxd9o().s[8]++, styled.img`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLnN0eWxlcy5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiYmFja2dyb3VuZEltYWdlIiwiQ3VzdG9tQnV0dG9uIiwiQ29udGFpbmVyIiwiSGVhZGluZzEiLCJQYXJhZ3JhcGgiLCJGaXJzdFNlY3Rpb24iLCJzZWN0aW9uIiwiRmlyc3RTZWN0aW9uQ29udGFpbmVyIiwiZGl2IiwiTWFpbkhlYWRpbmciLCJoMSIsIlNlY3Rpb25QYXJhZ3JhcGgiLCJwIiwiVGV4dENvbnRhaW5lciIsIkZpcnN0U2VjdGlvbkJ1dHRvbiIsIkltYWdlQ29udGFpbmVyIiwiSW1hZ2VPbmUiLCJpbWciLCJJbWFnZVR3byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFFQSxPQUFPQyxlQUFQLE1BQTRCLDBCQUE1QjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsOENBQXpCO0FBRUEsU0FDRUMsU0FERixFQUVFQyxRQUZGLEVBR0VDLFNBSEYsUUFJTyw0Q0FKUDtBQU1BLE9BQU8sTUFBTUMsWUFBWSw2QkFBR04sTUFBTSxDQUFDTyxPQUFRO0FBQzNDO0FBQ0EsMEJBQTBCTixlQUFnQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBVnlCLENBQWxCO0FBWVAsT0FBTyxNQUFNTyxxQkFBcUIsNkJBQUdSLE1BQU0sQ0FBQ1MsR0FBSTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSU4sU0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWZrQyxDQUEzQjtBQWlCUCxPQUFPLE1BQU1PLFdBQVcsNkJBQUdWLE1BQU0sQ0FBQ1csRUFBRztBQUNyQyxJQUFJUCxRQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU53QixDQUFqQjtBQVFQLE9BQU8sTUFBTVEsZ0JBQWdCLDZCQUFHWixNQUFNLENBQUNhLENBQUU7QUFDekMsSUFBSVIsU0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBLENBTDZCLENBQXRCO0FBT1AsT0FBTyxNQUFNUyxhQUFhLDZCQUFHZCxNQUFNLENBQUNTLEdBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQMEIsQ0FBbkI7QUFTUCxPQUFPLE1BQU1NLGtCQUFrQiw2QkFBR2YsTUFBTSxDQUFDRSxZQUFELENBQWU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsQ0FKK0IsQ0FBeEI7QUFNUCxPQUFPLE1BQU1jLGNBQWMsNkJBQUdoQixNQUFNLENBQUNTLEdBQUk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FoQjJCLENBQXBCO0FBa0JQLE9BQU8sTUFBTVEsUUFBUSw2QkFBR2pCLE1BQU0sQ0FBQ2tCLEdBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBOUJxQixDQUFkO0FBK0JQLE9BQU8sTUFBTUMsUUFBUSw2QkFBR25CLE1BQU0sQ0FBQ2tCLEdBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBcENxQixDQUFkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCBiYWNrZ3JvdW5kSW1hZ2UgZnJvbSBcIi4uLy4uL2Fzc2V0cy9lbGxpcHNlLnBuZ1wiO1xyXG5pbXBvcnQgQ3VzdG9tQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2N1c3RvbS1idXR0b24vY3VzdG9tLWJ1dHRvblwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBDb250YWluZXIsXHJcbiAgSGVhZGluZzEsXHJcbiAgUGFyYWdyYXBoLFxyXG59IGZyb20gXCIuLi8uLi9vdmVyYWxsLXN0eWxlcy9vdmVyYWxsLXN0eWxlcy5zdHlsZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGaXJzdFNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmBcclxuICBoZWlnaHQ6IDExMHZoO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2JhY2tncm91bmRJbWFnZX0pO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWFyZ2luLXRvcDogLTE0LjdyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVyZW07XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTYuMjVlbSkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGaXJzdFNlY3Rpb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBhZGRpbmctdG9wOiAxNC43cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgJHtDb250YWluZXJ9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA3LjVlbSkge1xyXG4gICAgcGFkZGluZzogMTQuN3JlbSA0cmVtIDAgNHJlbTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQuMzc1ZW0pIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluSGVhZGluZyA9IHN0eWxlZC5oMWBcclxuICAke0hlYWRpbmcxfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQuMzc1ZW0pIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uUGFyYWdyYXBoID0gc3R5bGVkLnBgXHJcbiAgJHtQYXJhZ3JhcGh9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zNzVlbSkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiAyOC40cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDM0cmVtO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3NWVtKSB7XHJcbiAgICBtYXJnaW46IDEwcmVtIGF1dG87XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZpcnN0U2VjdGlvbkJ1dHRvbiA9IHN0eWxlZChDdXN0b21CdXR0b24pYFxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQuMzc1ZW0pIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3NWVtKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyOC4xMjVlbSkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTRyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlT25lID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogNDVyZW07XHJcbiAgaGVpZ2h0OiA2Ni42cmVtO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDEwcmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIGJveC1zaGFkb3c6IDAgMS41cmVtIDIuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgei1pbmRleDogMTAwO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcclxuICAgIHdpZHRoOiA0MHJlbTtcclxuICAgIGhlaWdodDogNTdyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcclxuICAgIHdpZHRoOiAzNHJlbTtcclxuICAgIGhlaWdodDogNTFyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3NWVtKSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IEltYWdlVHdvID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogNDkuNnJlbTtcclxuICBoZWlnaHQ6IDMzLjVyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyMi42cmVtO1xyXG4gIHRvcDogNTMuOGVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gIGJveC1zaGFkb3c6IDAgMS41cmVtIDIuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgei1pbmRleDogMTAxO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU2LjI1ZW0pIHtcclxuICAgIHdpZHRoOiA0NHJlbTtcclxuICAgIGhlaWdodDogMzByZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcclxuICAgIHdpZHRoOiAzOHJlbTtcclxuICAgIGhlaWdodDogMjRyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3NWVtKSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4LjEyNWVtKSB7XHJcbiAgICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIH1cclxuYDtcclxuIl19