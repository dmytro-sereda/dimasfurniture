function cov_119oqbh3wn() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\components\\subscribe\\subscribe.styles.jsx";
  var hash = "41d275f25379534a26986fcbaf7f0563395ea967";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\components\\subscribe\\subscribe.styles.jsx",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 34
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "1": {
        start: {
          line: 20,
          column: 32
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "2": {
        start: {
          line: 24,
          column: 34
        },
        end: {
          line: 28,
          column: 1
        }
      },
      "3": {
        start: {
          line: 30,
          column: 29
        },
        end: {
          line: 35,
          column: 1
        }
      },
      "4": {
        start: {
          line: 37,
          column: 31
        },
        end: {
          line: 43,
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
    hash: "41d275f25379534a26986fcbaf7f0563395ea967"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_119oqbh3wn = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_119oqbh3wn();
import styled from "styled-components";
import { Heading2, Paragraph } from "../../overall-styles/overall-styles.styles";
import CustomButton from "../custom-button/custom-button";
export const SubscribeContainer = (cov_119oqbh3wn().s[0]++, styled.section`
  background-image: linear-gradient(#a5f4d8, #e6ffdd);
  padding: 5.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`);
export const SubscribeHeading = (cov_119oqbh3wn().s[1]++, styled.h2`
  ${Heading2}
`);
export const SubscribeParagraph = (cov_119oqbh3wn().s[2]++, styled.p`
  ${Paragraph}
  margin: 0.5rem 0 2.5rem 0;
  text-align: center;
`);
export const SubscribeForm = (cov_119oqbh3wn().s[3]++, styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 0 2rem;
`);
export const SubscribeButton = (cov_119oqbh3wn().s[4]++, styled(CustomButton)`
  margin-left: 3rem;

  @media only screen and (max-width: 28.125em) {
    margin-left: 2rem;
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnNjcmliZS5zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsIkhlYWRpbmcyIiwiUGFyYWdyYXBoIiwiQ3VzdG9tQnV0dG9uIiwiU3Vic2NyaWJlQ29udGFpbmVyIiwic2VjdGlvbiIsIlN1YnNjcmliZUhlYWRpbmciLCJoMiIsIlN1YnNjcmliZVBhcmFncmFwaCIsInAiLCJTdWJzY3JpYmVGb3JtIiwiZm9ybSIsIlN1YnNjcmliZUJ1dHRvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5CO0FBRUEsU0FDRUMsUUFERixFQUVFQyxTQUZGLFFBR08sNENBSFA7QUFLQSxPQUFPQyxZQUFQLE1BQXlCLGdDQUF6QjtBQUVBLE9BQU8sTUFBTUMsa0JBQWtCLDZCQUFHSixNQUFNLENBQUNLLE9BQVE7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVIrQixDQUF4QjtBQVVQLE9BQU8sTUFBTUMsZ0JBQWdCLDZCQUFHTixNQUFNLENBQUNPLEVBQUc7QUFDMUMsSUFBSU4sUUFBUztBQUNiLENBRjZCLENBQXRCO0FBSVAsT0FBTyxNQUFNTyxrQkFBa0IsNkJBQUdSLE1BQU0sQ0FBQ1MsQ0FBRTtBQUMzQyxJQUFJUCxTQUFVO0FBQ2Q7QUFDQTtBQUNBLENBSitCLENBQXhCO0FBTVAsT0FBTyxNQUFNUSxhQUFhLDZCQUFHVixNQUFNLENBQUNXLElBQUs7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUwwQixDQUFuQjtBQU9QLE9BQU8sTUFBTUMsZUFBZSw2QkFBR1osTUFBTSxDQUFDRyxZQUFELENBQWU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTjRCLENBQXJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgSGVhZGluZzIsXHJcbiAgUGFyYWdyYXBoLFxyXG59IGZyb20gXCIuLi8uLi9vdmVyYWxsLXN0eWxlcy9vdmVyYWxsLXN0eWxlcy5zdHlsZXNcIjtcclxuXHJcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSBcIi4uL2N1c3RvbS1idXR0b24vY3VzdG9tLWJ1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN1YnNjcmliZUNvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjYTVmNGQ4LCAjZTZmZmRkKTtcclxuICBwYWRkaW5nOiA1LjRyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3Vic2NyaWJlSGVhZGluZyA9IHN0eWxlZC5oMmBcclxuICAke0hlYWRpbmcyfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN1YnNjcmliZVBhcmFncmFwaCA9IHN0eWxlZC5wYFxyXG4gICR7UGFyYWdyYXBofVxyXG4gIG1hcmdpbjogMC41cmVtIDAgMi41cmVtIDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN1YnNjcmliZUZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC8vIHBhZGRpbmc6IDAgMnJlbTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJzY3JpYmVCdXR0b24gPSBzdHlsZWQoQ3VzdG9tQnV0dG9uKWBcclxuICBtYXJnaW4tbGVmdDogM3JlbTtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyOC4xMjVlbSkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgfVxyXG5gO1xyXG4iXX0=