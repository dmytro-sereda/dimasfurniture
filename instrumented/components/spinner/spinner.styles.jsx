function cov_5oawwqz28() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\components\\spinner\\spinner.styles.jsx";
  var hash = "799cbd96cc80a94a7942d7ee51d75d5354224f64";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\components\\spinner\\spinner.styles.jsx",
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
    hash: "799cbd96cc80a94a7942d7ee51d75d5354224f64"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_5oawwqz28 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_5oawwqz28();
import styled from "styled-components";
import { Container } from "../../overall-styles/overall-styles.styles";
export const SpinnerOverlay = (cov_5oawwqz28().s[0]++, styled.div`
  ${Container}
  height: 80vh;
  padding: 40rem 0;
`);
export const SpinnerContainer = (cov_5oawwqz28().s[1]++, styled.div`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIuc3R5bGVzLmpzeCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJDb250YWluZXIiLCJTcGlubmVyT3ZlcmxheSIsImRpdiIsIlNwaW5uZXJDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUVBLFNBQVNDLFNBQVQsUUFBMEIsNENBQTFCO0FBRUEsT0FBTyxNQUFNQyxjQUFjLDRCQUFHRixNQUFNLENBQUNHLEdBQUk7QUFDekMsSUFBSUYsU0FBVTtBQUNkO0FBQ0E7QUFDQSxDQUoyQixDQUFwQjtBQU1QLE9BQU8sTUFBTUcsZ0JBQWdCLDRCQUFHSixNQUFNLENBQUNHLEdBQUk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZjZCLENBQXRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi8uLi9vdmVyYWxsLXN0eWxlcy9vdmVyYWxsLXN0eWxlcy5zdHlsZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTcGlubmVyT3ZlcmxheSA9IHN0eWxlZC5kaXZgXHJcbiAgJHtDb250YWluZXJ9XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIHBhZGRpbmc6IDQwcmVtIDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgU3Bpbm5lckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudCgjMDAwMCAxMCUsICMyNWIwOWIpO1xyXG4gIG1hc2s6IHJhZGlhbC1ncmFkaWVudChmYXJ0aGVzdC1zaWRlLCAjMDAwMCBjYWxjKDEwMCUgLSA4cHgpLCAjMDAwIDApO1xyXG4gIC13ZWJraXQtbWFzazogcmFkaWFsLWdyYWRpZW50KGZhcnRoZXN0LXNpZGUsICMwMDAwIGNhbGMoMTAwJSAtIDhweCksICMwMDAgMCk7XHJcbiAgYW5pbWF0aW9uOiBzMyAxcyBpbmZpbml0ZSBsaW5lYXI7XHJcblxyXG4gIEBrZXlmcmFtZXMgczMge1xyXG4gICAgdG8ge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybik7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iXX0=