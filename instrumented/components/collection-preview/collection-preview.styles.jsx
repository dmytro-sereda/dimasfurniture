function cov_pk1sn4860() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/components/collection-preview/collection-preview.styles.jsx";
  var hash = "b1ee8e0c49efcd8411f88160068463b9af2984ca";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/components/collection-preview/collection-preview.styles.jsx",
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
    hash: "b1ee8e0c49efcd8411f88160068463b9af2984ca"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_pk1sn4860 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_pk1sn4860();
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Heading2 } from "../../overall-styles/overall-styles.styles";
export const CollectionPreviewContainer = (cov_pk1sn4860().s[0]++, styled.section`
  ${Container}

  @media only screen and (max-width: 107.5em) {
    padding: 0 2rem;
  }
`);
export const CollectionPreviewHeading = (cov_pk1sn4860().s[1]++, styled(Link)`
  ${Heading2}
  text-decoration: none;
  color: #515151;

  @media only screen and (max-width: 43.75em) {
    font-size: 7rem;
    display: block;
    text-align: center;
  }
`);
export const ItemsContainer = (cov_pk1sn4860().s[2]++, styled.div`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24tcHJldmlldy5zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsIkxpbmsiLCJDb250YWluZXIiLCJIZWFkaW5nMiIsIkNvbGxlY3Rpb25QcmV2aWV3Q29udGFpbmVyIiwic2VjdGlvbiIsIkNvbGxlY3Rpb25QcmV2aWV3SGVhZGluZyIsIkl0ZW1zQ29udGFpbmVyIiwiZGl2Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxNQUFQLE1BQW1CLG1CQUFuQjtBQUVBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBRUEsU0FDRUMsU0FERixFQUVFQyxRQUZGLFFBR08sNENBSFA7QUFLQSxPQUFPLE1BQU1DLDBCQUEwQiw0QkFBR0osTUFBTSxDQUFDSyxPQUFRO0FBQ3pELElBQUlILFNBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTnVDLENBQWhDO0FBUVAsT0FBTyxNQUFNSSx3QkFBd0IsNEJBQUdOLE1BQU0sQ0FBQ0MsSUFBRCxDQUFPO0FBQ3JELElBQUlFLFFBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FWcUMsQ0FBOUI7QUFZUCxPQUFPLE1BQU1JLGNBQWMsNEJBQUdQLE1BQU0sQ0FBQ1EsR0FBSTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBakIyQixDQUFwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5pbXBvcnQge1xuICBDb250YWluZXIsXG4gIEhlYWRpbmcyLFxufSBmcm9tIFwiLi4vLi4vb3ZlcmFsbC1zdHlsZXMvb3ZlcmFsbC1zdHlsZXMuc3R5bGVzXCI7XG5cbmV4cG9ydCBjb25zdCBDb2xsZWN0aW9uUHJldmlld0NvbnRhaW5lciA9IHN0eWxlZC5zZWN0aW9uYFxuICAke0NvbnRhaW5lcn1cblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNy41ZW0pIHtcbiAgICBwYWRkaW5nOiAwIDJyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDb2xsZWN0aW9uUHJldmlld0hlYWRpbmcgPSBzdHlsZWQoTGluaylgXG4gICR7SGVhZGluZzJ9XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM1MTUxNTE7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0My43NWVtKSB7XG4gICAgZm9udC1zaXplOiA3cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEl0ZW1zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA3LjhyZW07XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0My43NWVtKSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBncmlkLWdhcDogNXJlbTtcbiAgfVxuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjguMTI1ZW0pIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLWdhcDogOHJlbTtcbiAgfVxuYDtcbiJdfQ==