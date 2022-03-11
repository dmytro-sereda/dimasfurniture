function cov_1jmwjvf0et() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/components/footer/footer.styles.jsx";
  var hash = "b07a72c88a5299e8cf8e9caec96c4be292c76e7b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/components/footer/footer.styles.jsx",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 31
        },
        end: {
          line: 12,
          column: 1
        }
      },
      "1": {
        start: {
          line: 14,
          column: 36
        },
        end: {
          line: 24,
          column: 1
        }
      },
      "2": {
        start: {
          line: 26,
          column: 31
        },
        end: {
          line: 35,
          column: 1
        }
      },
      "3": {
        start: {
          line: 37,
          column: 20
        },
        end: {
          line: 44,
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
      "3": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "b07a72c88a5299e8cf8e9caec96c4be292c76e7b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1jmwjvf0et = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1jmwjvf0et();
import styled from "styled-components";
import { Container } from "../../overall-styles/overall-styles.styles";
import { ReactComponent as Icon } from "../../assets/logo-light.svg";
export const FooterContainer = (cov_1jmwjvf0et().s[0]++, styled.footer`
  background-color: #515151;
  display: flex;
  justify-content: space-between;
  padding: 6rem;
`);
export const FooterItemsContainer = (cov_1jmwjvf0et().s[1]++, styled.div`
  width: 100%;
  ${Container}
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 34.375em) {
    flex-direction: column;
  }
`);
export const FooterCopyright = (cov_1jmwjvf0et().s[2]++, styled.p`
  font-weight: 300;
  color: white;
  font-size: 1.8rem;

  @media only screen and (max-width: 34.375em) {
    margin-top: 4rem;
    font-size: 4rem;
  }
`);
export const Logo = (cov_1jmwjvf0et().s[3]++, styled(Icon)`
  width: 6rem;
  height: 6rem;

  @media only screen and (max-width: 34.375em) {
    margin-bottom: 4rem;
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsIkNvbnRhaW5lciIsIlJlYWN0Q29tcG9uZW50IiwiSWNvbiIsIkZvb3RlckNvbnRhaW5lciIsImZvb3RlciIsIkZvb3Rlckl0ZW1zQ29udGFpbmVyIiwiZGl2IiwiRm9vdGVyQ29weXJpZ2h0IiwicCIsIkxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFFQSxTQUFTQyxTQUFULFFBQTBCLDRDQUExQjtBQUVBLFNBQVNDLGNBQWMsSUFBSUMsSUFBM0IsUUFBdUMsNkJBQXZDO0FBRUEsT0FBTyxNQUFNQyxlQUFlLDZCQUFHSixNQUFNLENBQUNLLE1BQU87QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUw0QixDQUFyQjtBQU9QLE9BQU8sTUFBTUMsb0JBQW9CLDZCQUFHTixNQUFNLENBQUNPLEdBQUk7QUFDL0M7QUFDQSxJQUFJTixTQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVZpQyxDQUExQjtBQVlQLE9BQU8sTUFBTU8sZUFBZSw2QkFBR1IsTUFBTSxDQUFDUyxDQUFFO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVQ0QixDQUFyQjtBQVdQLE9BQU8sTUFBTUMsSUFBSSw2QkFBR1YsTUFBTSxDQUFDRyxJQUFELENBQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQaUIsQ0FBViIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi8uLi9vdmVyYWxsLXN0eWxlcy9vdmVyYWxsLXN0eWxlcy5zdHlsZXNcIjtcblxuaW1wb3J0IHsgUmVhY3RDb21wb25lbnQgYXMgSWNvbiB9IGZyb20gXCIuLi8uLi9hc3NldHMvbG9nby1saWdodC5zdmdcIjtcblxuZXhwb3J0IGNvbnN0IEZvb3RlckNvbnRhaW5lciA9IHN0eWxlZC5mb290ZXJgXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTUxNTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogNnJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBGb290ZXJJdGVtc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICAke0NvbnRhaW5lcn1cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQuMzc1ZW0pIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyQ29weXJpZ2h0ID0gc3R5bGVkLnBgXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjhyZW07XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zNzVlbSkge1xuICAgIG1hcmdpbi10b3A6IDRyZW07XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTG9nbyA9IHN0eWxlZChJY29uKWBcbiAgd2lkdGg6IDZyZW07XG4gIGhlaWdodDogNnJlbTtcblxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3NWVtKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgfVxuYDtcbiJdfQ==