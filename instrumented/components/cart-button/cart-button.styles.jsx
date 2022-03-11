function cov_23ouv5r21v() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/components/cart-button/cart-button.styles.jsx";
  var hash = "e5ba899b920f35d92ff84561f0596c91f412fcfd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/components/cart-button/cart-button.styles.jsx",
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
    hash: "e5ba899b920f35d92ff84561f0596c91f412fcfd"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_23ouv5r21v = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_23ouv5r21v();
import styled from "styled-components";
import { ReactComponent as Icon } from "../../assets/cart.svg";
export const CartButtonContainer = (cov_23ouv5r21v().s[0]++, styled.button`
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
export const CartIcon = (cov_23ouv5r21v().s[1]++, styled(Icon)`
  width: 2.3rem;
  height: 2.3rem;
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtYnV0dG9uLnN0eWxlcy5qc3giXSwibmFtZXMiOlsic3R5bGVkIiwiUmVhY3RDb21wb25lbnQiLCJJY29uIiwiQ2FydEJ1dHRvbkNvbnRhaW5lciIsImJ1dHRvbiIsIkNhcnRJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFFQSxTQUFTQyxjQUFjLElBQUlDLElBQTNCLFFBQXVDLHVCQUF2QztBQUVBLE9BQU8sTUFBTUMsbUJBQW1CLDZCQUFHSCxNQUFNLENBQUNJLE1BQU87QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBbEJnQyxDQUF6QjtBQW9CUCxPQUFPLE1BQU1DLFFBQVEsNkJBQUdMLE1BQU0sQ0FBQ0UsSUFBRCxDQUFPO0FBQ3JDO0FBQ0E7QUFDQSxDQUhxQixDQUFkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW1wb3J0IHsgUmVhY3RDb21wb25lbnQgYXMgSWNvbiB9IGZyb20gXCIuLi8uLi9hc3NldHMvY2FydC5zdmdcIjtcblxuZXhwb3J0IGNvbnN0IENhcnRCdXR0b25Db250YWluZXIgPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogNHJlbTtcbiAgaGVpZ2h0OiA0cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDIuOHJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIHBhZGRpbmctdG9wOiAwLjZyZW07XG5cbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDIuNXJlbSByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4LjEyNWVtKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNXJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IENhcnRJY29uID0gc3R5bGVkKEljb24pYFxuICB3aWR0aDogMi4zcmVtO1xuICBoZWlnaHQ6IDIuM3JlbTtcbmA7XG4iXX0=