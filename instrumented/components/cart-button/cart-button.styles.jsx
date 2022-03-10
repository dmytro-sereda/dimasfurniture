function cov_31qx91m1() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\components\\cart-button\\cart-button.styles.jsx";
  var hash = "3746798df3d0352c868699af04811bc8f71a529b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\components\\cart-button\\cart-button.styles.jsx",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 35
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "1": {
        start: {
          line: 25,
          column: 24
        },
        end: {
          line: 28,
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
    hash: "3746798df3d0352c868699af04811bc8f71a529b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_31qx91m1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_31qx91m1();
import styled from "styled-components";
import { ReactComponent as Icon } from "../../assets/cart.svg";
export const CartButtonContainer = (cov_31qx91m1().s[0]++, styled.button`
  background-color: white;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  border: none;
  cursor: pointer;
  margin-left: 2.8rem;
  transition: all 0.4s;
  padding-top: 0.6rem;

  &:hover {
    box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.1);
  }

  @media only screen and (max-width: 28.125em) {
    margin-left: 1.5rem;
  }
`);
export const CartIcon = (cov_31qx91m1().s[1]++, styled(Icon)`
  width: 2.3rem;
  height: 2.3rem;
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtYnV0dG9uLnN0eWxlcy5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiUmVhY3RDb21wb25lbnQiLCJJY29uIiwiQ2FydEJ1dHRvbkNvbnRhaW5lciIsImJ1dHRvbiIsIkNhcnRJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFFQSxTQUFTQyxjQUFjLElBQUlDLElBQTNCLFFBQXVDLHVCQUF2QztBQUVBLE9BQU8sTUFBTUMsbUJBQW1CLDJCQUFHSCxNQUFNLENBQUNJLE1BQU87QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBbEJnQyxDQUF6QjtBQW9CUCxPQUFPLE1BQU1DLFFBQVEsMkJBQUdMLE1BQU0sQ0FBQ0UsSUFBRCxDQUFPO0FBQ3JDO0FBQ0E7QUFDQSxDQUhxQixDQUFkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50IGFzIEljb24gfSBmcm9tIFwiLi4vLi4vYXNzZXRzL2NhcnQuc3ZnXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5idXR0b25gXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA0cmVtO1xyXG4gIGhlaWdodDogNHJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAyLjhyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgcGFkZGluZy10b3A6IDAuNnJlbTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMi41cmVtIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjguMTI1ZW0pIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRJY29uID0gc3R5bGVkKEljb24pYFxyXG4gIHdpZHRoOiAyLjNyZW07XHJcbiAgaGVpZ2h0OiAyLjNyZW07XHJcbmA7XHJcbiJdfQ==