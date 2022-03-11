function cov_3rkxfljdh() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/root-saga.js";
  var hash = "3b0ec105c1371083976bcb2dd13365a3cbbb9c16";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/root-saga.js",
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
    hash: "3b0ec105c1371083976bcb2dd13365a3cbbb9c16"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_3rkxfljdh = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_3rkxfljdh();
import { all, call } from "redux-saga/effects";
import { UserSagas } from "./user/user.sagas";
import { ShopSagas } from "./shop/shop.sagas";
export default function* rootSaga() {
  cov_3rkxfljdh().f[0]++;
  cov_3rkxfljdh().s[0]++;
  yield all([call(UserSagas), call(ShopSagas)]);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb3Qtc2FnYS5qcyJdLCJuYW1lcyI6WyJhbGwiLCJjYWxsIiwiVXNlclNhZ2FzIiwiU2hvcFNhZ2FzIiwicm9vdFNhZ2EiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosU0FBU0EsR0FBVCxFQUFjQyxJQUFkLFFBQTBCLG9CQUExQjtBQUVBLFNBQVNDLFNBQVQsUUFBMEIsbUJBQTFCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixtQkFBMUI7QUFFQSxlQUFlLFVBQVVDLFFBQVYsR0FBcUI7QUFBQTtBQUFBO0FBQ2xDLFFBQU1KLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLFNBQUQsQ0FBTCxFQUFrQkQsSUFBSSxDQUFDRSxTQUFELENBQXRCLENBQUQsQ0FBVDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBjYWxsIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuXG5pbXBvcnQgeyBVc2VyU2FnYXMgfSBmcm9tIFwiLi91c2VyL3VzZXIuc2FnYXNcIjtcbmltcG9ydCB7IFNob3BTYWdhcyB9IGZyb20gXCIuL3Nob3Avc2hvcC5zYWdhc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbY2FsbChVc2VyU2FnYXMpLCBjYWxsKFNob3BTYWdhcyldKTtcbn1cbiJdfQ==