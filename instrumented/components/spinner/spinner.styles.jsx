function cov_1hyewegrc9() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/components/spinner/spinner.styles.jsx";
  var hash = "1abdaf7735650750668289e16a8cf4d7fd53dc38";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/components/spinner/spinner.styles.jsx",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 30
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "1": {
        start: {
          line: 11,
          column: 32
        },
        end: {
          line: 26,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1abdaf7735650750668289e16a8cf4d7fd53dc38"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1hyewegrc9 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1hyewegrc9();
import styled from "styled-components";
import { Container } from "../../overall-styles/overall-styles.styles";
export const SpinnerOverlay = (cov_1hyewegrc9().s[0]++, styled.div`
  ${Container}
  height: 80vh;
  padding: 40rem 0;
`);
export const SpinnerContainer = (cov_1hyewegrc9().s[1]++, styled.div`
  margin: 0 auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(#0000 10%, #25b09b);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
  animation: s3 1s infinite linear;

  @keyframes s3 {
    to {
      transform: rotate(1turn);
    }
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuc3R5bGVzLmpzeCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb250YWluZXIiLCJTcGlubmVyT3ZlcmxheSIsImRpdiIsIlNwaW5uZXJDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUVBLFNBQVNDLFNBQVQsUUFBMEIsNENBQTFCO0FBRUEsT0FBTyxNQUFNQyxjQUFjLDZCQUFHRixNQUFNLENBQUNHLEdBQUk7QUFDekMsSUFBSUYsU0FBVTtBQUNkO0FBQ0E7QUFDQSxDQUoyQixDQUFwQjtBQU1QLE9BQU8sTUFBTUcsZ0JBQWdCLDZCQUFHSixNQUFNLENBQUNHLEdBQUk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZjZCLENBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uLy4uL292ZXJhbGwtc3R5bGVzL292ZXJhbGwtc3R5bGVzLnN0eWxlc1wiO1xuXG5leHBvcnQgY29uc3QgU3Bpbm5lck92ZXJsYXkgPSBzdHlsZWQuZGl2YFxuICAke0NvbnRhaW5lcn1cbiAgaGVpZ2h0OiA4MHZoO1xuICBwYWRkaW5nOiA0MHJlbSAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNwaW5uZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudCgjMDAwMCAxMCUsICMyNWIwOWIpO1xuICBtYXNrOiByYWRpYWwtZ3JhZGllbnQoZmFydGhlc3Qtc2lkZSwgIzAwMDAgY2FsYygxMDAlIC0gOHB4KSwgIzAwMCAwKTtcbiAgLXdlYmtpdC1tYXNrOiByYWRpYWwtZ3JhZGllbnQoZmFydGhlc3Qtc2lkZSwgIzAwMDAgY2FsYygxMDAlIC0gOHB4KSwgIzAwMCAwKTtcbiAgYW5pbWF0aW9uOiBzMyAxcyBpbmZpbml0ZSBsaW5lYXI7XG5cbiAgQGtleWZyYW1lcyBzMyB7XG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xuICAgIH1cbiAgfVxuYDtcbiJdfQ==