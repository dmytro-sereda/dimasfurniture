function cov_2mqveswdth() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\components\\footer\\footer.styles.jsx";
  var hash = "8665ca50e21d72367fd142d8e896ec8e29257651";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\components\\footer\\footer.styles.jsx",
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
    hash: "8665ca50e21d72367fd142d8e896ec8e29257651"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2mqveswdth = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2mqveswdth();
import styled from "styled-components";
import { Container } from "../../overall-styles/overall-styles.styles";
import { ReactComponent as Icon } from "../../assets/logo-light.svg";
export const FooterContainer = (cov_2mqveswdth().s[0]++, styled.footer`
  background-color: #515151;
  display: flex;
  justify-content: space-between;
  padding: 6rem;
`);
export const FooterItemsContainer = (cov_2mqveswdth().s[1]++, styled.div`
  width: 100%;
  ${Container}
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 34.375em) {
    flex-direction: column;
  }
`);
export const FooterCopyright = (cov_2mqveswdth().s[2]++, styled.p`
  font-weight: 300;
  color: white;
  font-size: 1.8rem;

  @media only screen and (max-width: 34.375em) {
    margin-top: 4rem;
    font-size: 4rem;
  }
`);
export const Logo = (cov_2mqveswdth().s[3]++, styled(Icon)`
  width: 6rem;
  height: 6rem;

  @media only screen and (max-width: 34.375em) {
    margin-bottom: 4rem;
  }
`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5zdHlsZXMuanN4Il0sIm5hbWVzIjpbInN0eWxlZCIsIkNvbnRhaW5lciIsIlJlYWN0Q29tcG9uZW50IiwiSWNvbiIsIkZvb3RlckNvbnRhaW5lciIsImZvb3RlciIsIkZvb3Rlckl0ZW1zQ29udGFpbmVyIiwiZGl2IiwiRm9vdGVyQ29weXJpZ2h0IiwicCIsIkxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsTUFBUCxNQUFtQixtQkFBbkI7QUFFQSxTQUFTQyxTQUFULFFBQTBCLDRDQUExQjtBQUVBLFNBQVNDLGNBQWMsSUFBSUMsSUFBM0IsUUFBdUMsNkJBQXZDO0FBRUEsT0FBTyxNQUFNQyxlQUFlLDZCQUFHSixNQUFNLENBQUNLLE1BQU87QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUw0QixDQUFyQjtBQU9QLE9BQU8sTUFBTUMsb0JBQW9CLDZCQUFHTixNQUFNLENBQUNPLEdBQUk7QUFDL0M7QUFDQSxJQUFJTixTQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVZpQyxDQUExQjtBQVlQLE9BQU8sTUFBTU8sZUFBZSw2QkFBR1IsTUFBTSxDQUFDUyxDQUFFO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVQ0QixDQUFyQjtBQVdQLE9BQU8sTUFBTUMsSUFBSSw2QkFBR1YsTUFBTSxDQUFDRyxJQUFELENBQU87QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQaUIsQ0FBViIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vLi4vb3ZlcmFsbC1zdHlsZXMvb3ZlcmFsbC1zdHlsZXMuc3R5bGVzXCI7XHJcblxyXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudCBhcyBJY29uIH0gZnJvbSBcIi4uLy4uL2Fzc2V0cy9sb2dvLWxpZ2h0LnN2Z1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlckNvbnRhaW5lciA9IHN0eWxlZC5mb290ZXJgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxNTE1MTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiA2cmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3Rlckl0ZW1zQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICAke0NvbnRhaW5lcn1cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM0LjM3NWVtKSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBGb290ZXJDb3B5cmlnaHQgPSBzdHlsZWQucGBcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNC4zNzVlbSkge1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgTG9nbyA9IHN0eWxlZChJY29uKWBcclxuICB3aWR0aDogNnJlbTtcclxuICBoZWlnaHQ6IDZyZW07XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzQuMzc1ZW0pIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgfVxyXG5gO1xyXG4iXX0=