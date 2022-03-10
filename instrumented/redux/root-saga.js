function cov_29auwgd1rf() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\root-saga.js";
  var hash = "7a509f43f8101fb92667ac378952f6f8ac377792";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\root-saga.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 7,
          column: 48
        }
      }
    },
    fnMap: {
      "0": {
        name: "rootSaga",
        decl: {
          start: {
            line: 6,
            column: 25
          },
          end: {
            line: 6,
            column: 33
          }
        },
        loc: {
          start: {
            line: 6,
            column: 36
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 6
      }
    },
    branchMap: {},
    s: {
      "0": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7a509f43f8101fb92667ac378952f6f8ac377792"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_29auwgd1rf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_29auwgd1rf();
import { all, call } from "redux-saga/effects";
import { UserSagas } from "./user/user.sagas";
import { ShopSagas } from "./shop/shop.sagas";
export default function* rootSaga() {
  cov_29auwgd1rf().f[0]++;
  cov_29auwgd1rf().s[0]++;
  yield all([call(UserSagas), call(ShopSagas)]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb3Qtc2FnYS5qcyJdLCJuYW1lcyI6WyJhbGwiLCJjYWxsIiwiVXNlclNhZ2FzIiwiU2hvcFNhZ2FzIiwicm9vdFNhZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsR0FBVCxFQUFjQyxJQUFkLFFBQTBCLG9CQUExQjtBQUVBLFNBQVNDLFNBQVQsUUFBMEIsbUJBQTFCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixtQkFBMUI7QUFFQSxlQUFlLFVBQVVDLFFBQVYsR0FBcUI7QUFBQTtBQUFBO0FBQ2xDLFFBQU1KLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLFNBQUQsQ0FBTCxFQUFrQkQsSUFBSSxDQUFDRSxTQUFELENBQXRCLENBQUQsQ0FBVDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5cclxuaW1wb3J0IHsgVXNlclNhZ2FzIH0gZnJvbSBcIi4vdXNlci91c2VyLnNhZ2FzXCI7XHJcbmltcG9ydCB7IFNob3BTYWdhcyB9IGZyb20gXCIuL3Nob3Avc2hvcC5zYWdhc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbY2FsbChVc2VyU2FnYXMpLCBjYWxsKFNob3BTYWdhcyldKTtcclxufVxyXG4iXX0=