function cov_z989h6a6i() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\pages\\collection\\collection.styles.jsx";
  var hash = "ac60570242b6cba01584668ca3cad5ececc48fee";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\pages\\collection\\collection.styles.jsx",
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
    hash: "ac60570242b6cba01584668ca3cad5ececc48fee"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_z989h6a6i = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_z989h6a6i();
import styled from "styled-components";
import { Heading2, Container } from "../../overall-styles/overall-styles.styles";
export const CollectionPageContainer = (cov_z989h6a6i().s[0]++, styled.div`
  ${Container}
  padding: 4rem 0;

  @media only screen and (max-width: 107.5em) {
    padding: 4rem 2rem;
  }
`);
export const CollectionTitle = (cov_z989h6a6i().s[1]++, styled.h2`
  ${Heading2}
  margin-bottom: 4.3rem;
`);
export const ItemsContainer = (cov_z989h6a6i().s[2]++, styled.div`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24uc3R5bGVzLmpzeCJdLCJuYW1lcyI6WyJzdHlsZWQiLCJIZWFkaW5nMiIsIkNvbnRhaW5lciIsIkNvbGxlY3Rpb25QYWdlQ29udGFpbmVyIiwiZGl2IiwiQ29sbGVjdGlvblRpdGxlIiwiaDIiLCJJdGVtc0NvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFDQSxTQUNFQyxRQURGLEVBRUVDLFNBRkYsUUFHTyw0Q0FIUDtBQUtBLE9BQU8sTUFBTUMsdUJBQXVCLDRCQUFHSCxNQUFNLENBQUNJLEdBQUk7QUFDbEQsSUFBSUYsU0FBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVBvQyxDQUE3QjtBQVNQLE9BQU8sTUFBTUcsZUFBZSw0QkFBR0wsTUFBTSxDQUFDTSxFQUFHO0FBQ3pDLElBQUlMLFFBQVM7QUFDYjtBQUNBLENBSDRCLENBQXJCO0FBS1AsT0FBTyxNQUFNTSxjQUFjLDRCQUFHUCxNQUFNLENBQUNJLEdBQUk7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZjJCLENBQXBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtcclxuICBIZWFkaW5nMixcclxuICBDb250YWluZXIsXHJcbn0gZnJvbSBcIi4uLy4uL292ZXJhbGwtc3R5bGVzL292ZXJhbGwtc3R5bGVzLnN0eWxlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbGxlY3Rpb25QYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAke0NvbnRhaW5lcn1cclxuICBwYWRkaW5nOiA0cmVtIDA7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA3LjVlbSkge1xyXG4gICAgcGFkZGluZzogNHJlbSAycmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb2xsZWN0aW9uVGl0bGUgPSBzdHlsZWQuaDJgXHJcbiAgJHtIZWFkaW5nMn1cclxuICBtYXJnaW4tYm90dG9tOiA0LjNyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSXRlbXNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICBncmlkLXJvdy1nYXA6IDVyZW07XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBncmlkLWdhcDogNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI4LjEyNWVtKSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbmA7XHJcbiJdfQ==