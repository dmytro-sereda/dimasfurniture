function cov_2fh5jugtyt() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\components\\collection-preview\\collection-preview.styles.jsx";
  var hash = "8ed8a1fbd4ab15f817186e53f2b9f99291721b52";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\components\\collection-preview\\collection-preview.styles.jsx",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 42
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "1": {
        start: {
          line: 18,
          column: 40
        },
        end: {
          line: 28,
          column: 1
        }
      },
      "2": {
        start: {
          line: 30,
          column: 30
        },
        end: {
          line: 47,
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
    hash: "8ed8a1fbd4ab15f817186e53f2b9f99291721b52"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2fh5jugtyt = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2fh5jugtyt();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Heading2 } from "../../overall-styles/overall-styles.styles";
export const CollectionPreviewContainer = (cov_2fh5jugtyt().s[0]++, styled.section`
  ${Container}

  @media only screen and (max-width: 107.5em) {
    padding: 0 2rem;
  }
`);
export const CollectionPreviewHeading = (cov_2fh5jugtyt().s[1]++, styled(Link)`
  ${Heading2}
  text-decoration: none;
  color: #515151;

  @media only screen and (max-width: 43.75em) {
    font-size: 7rem;
    display: block;
    text-align: center;
  }
`);
export const ItemsContainer = (cov_2fh5jugtyt().s[2]++, styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 7.8rem;

  @media only screen and (max-width: 43.75em) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    grid-gap: 5rem;
  }

  @media only screen and (max-width: 28.125em) {
    grid-template-columns: 1fr;
    grid-gap: 8rem;
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24tcHJldmlldy5zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsIkxpbmsiLCJDb250YWluZXIiLCJIZWFkaW5nMiIsIkNvbGxlY3Rpb25QcmV2aWV3Q29udGFpbmVyIiwic2VjdGlvbiIsIkNvbGxlY3Rpb25QcmV2aWV3SGVhZGluZyIsIkl0ZW1zQ29udGFpbmVyIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUVBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBRUEsU0FDRUMsU0FERixFQUVFQyxRQUZGLFFBR08sNENBSFA7QUFLQSxPQUFPLE1BQU1DLDBCQUEwQiw2QkFBR0osTUFBTSxDQUFDSyxPQUFRO0FBQ3pELElBQUlILFNBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTnVDLENBQWhDO0FBUVAsT0FBTyxNQUFNSSx3QkFBd0IsNkJBQUdOLE1BQU0sQ0FBQ0MsSUFBRCxDQUFPO0FBQ3JELElBQUlFLFFBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWcUMsQ0FBOUI7QUFZUCxPQUFPLE1BQU1JLGNBQWMsNkJBQUdQLE1BQU0sQ0FBQ1EsR0FBSTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBakIyQixDQUFwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIEhlYWRpbmcyLFxyXG59IGZyb20gXCIuLi8uLi9vdmVyYWxsLXN0eWxlcy9vdmVyYWxsLXN0eWxlcy5zdHlsZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb2xsZWN0aW9uUHJldmlld0NvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICR7Q29udGFpbmVyfVxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNy41ZW0pIHtcclxuICAgIHBhZGRpbmc6IDAgMnJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29sbGVjdGlvblByZXZpZXdIZWFkaW5nID0gc3R5bGVkKExpbmspYFxyXG4gICR7SGVhZGluZzJ9XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjNTE1MTUxO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQzLjc1ZW0pIHtcclxuICAgIGZvbnQtc2l6ZTogN3JlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tYm90dG9tOiA3LjhyZW07XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDMuNzVlbSkge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLWdhcDogNXJlbTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjguMTI1ZW0pIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDhyZW07XHJcbiAgfVxyXG5gO1xyXG4iXX0=