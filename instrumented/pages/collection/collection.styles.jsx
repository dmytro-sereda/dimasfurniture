function cov_2feyj1iv6n() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/pages/collection/collection.styles.jsx";
  var hash = "6f93883451b6102cd879a15e106a5e83e64d6843";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/pages/collection/collection.styles.jsx",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 39
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 16,
          column: 31
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "2": {
        start: {
          line: 21,
          column: 30
        },
        end: {
          line: 36,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6f93883451b6102cd879a15e106a5e83e64d6843"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2feyj1iv6n = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2feyj1iv6n();
import styled from "styled-components";
import { Heading2, Container } from "../../overall-styles/overall-styles.styles";
export const CollectionPageContainer = (cov_2feyj1iv6n().s[0]++, styled.div`
  ${Container}
  padding: 4rem 0;

  @media only screen and (max-width: 107.5em) {
    padding: 4rem 2rem;
  }
`);
export const CollectionTitle = (cov_2feyj1iv6n().s[1]++, styled.h2`
  ${Heading2}
  margin-bottom: 4.3rem;
`);
export const ItemsContainer = (cov_2feyj1iv6n().s[2]++, styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 5rem;
  justify-items: center;

  @media only screen and (max-width: 43.75em) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5rem;
    margin-top: 4rem;
  }

  @media only screen and (max-width: 28.125em) {
    grid-template-columns: 1fr;
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24uc3R5bGVzLmpzeCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJIZWFkaW5nMiIsIkNvbnRhaW5lciIsIkNvbGxlY3Rpb25QYWdlQ29udGFpbmVyIiwiZGl2IiwiQ29sbGVjdGlvblRpdGxlIiwiaDIiLCJJdGVtc0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUNFQyxRQURGLEVBRUVDLFNBRkYsUUFHTyw0Q0FIUDtBQUtBLE9BQU8sTUFBTUMsdUJBQXVCLDZCQUFHSCxNQUFNLENBQUNJLEdBQUk7QUFDbEQsSUFBSUYsU0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBvQyxDQUE3QjtBQVNQLE9BQU8sTUFBTUcsZUFBZSw2QkFBR0wsTUFBTSxDQUFDTSxFQUFHO0FBQ3pDLElBQUlMLFFBQVM7QUFDYjtBQUNBLENBSDRCLENBQXJCO0FBS1AsT0FBTyxNQUFNTSxjQUFjLDZCQUFHUCxNQUFNLENBQUNJLEdBQUk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZjJCLENBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIEhlYWRpbmcyLFxuICBDb250YWluZXIsXG59IGZyb20gXCIuLi8uLi9vdmVyYWxsLXN0eWxlcy9vdmVyYWxsLXN0eWxlcy5zdHlsZXNcIjtcblxuZXhwb3J0IGNvbnN0IENvbGxlY3Rpb25QYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgJHtDb250YWluZXJ9XG4gIHBhZGRpbmc6IDRyZW0gMDtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNy41ZW0pIHtcbiAgICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb2xsZWN0aW9uVGl0bGUgPSBzdHlsZWQuaDJgXG4gICR7SGVhZGluZzJ9XG4gIG1hcmdpbi1ib3R0b206IDQuM3JlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBJdGVtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdyaWQtcm93LWdhcDogNXJlbTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMuNzVlbSkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC1nYXA6IDVyZW07XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjguMTI1ZW0pIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuYDtcbiJdfQ==