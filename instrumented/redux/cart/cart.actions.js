function cov_sp92l8dfi() {
  var path = "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\cart\\cart.actions.js";
  var hash = "2179f562bc106ea65092ad621b0d2e0af1a90062";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\Dima.Sereda\\OneDrive - Heart and Stroke Foundation of Canada\\Documents\\Files\\dimasfurniture\\src\\redux\\cart\\cart.actions.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 26
        },
        end: {
          line: 5,
          column: 2
        }
      },
      "1": {
        start: {
          line: 3,
          column: 33
        },
        end: {
          line: 5,
          column: 1
        }
      },
      "2": {
        start: {
          line: 7,
          column: 29
        },
        end: {
          line: 10,
          column: 2
        }
      },
      "3": {
        start: {
          line: 7,
          column: 40
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "4": {
        start: {
          line: 12,
          column: 33
        },
        end: {
          line: 15,
          column: 2
        }
      },
      "5": {
        start: {
          line: 12,
          column: 44
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "6": {
        start: {
          line: 17,
          column: 34
        },
        end: {
          line: 20,
          column: 2
        }
      },
      "7": {
        start: {
          line: 17,
          column: 45
        },
        end: {
          line: 20,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 26
          },
          end: {
            line: 3,
            column: 27
          }
        },
        loc: {
          start: {
            line: 3,
            column: 33
          },
          end: {
            line: 5,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 29
          },
          end: {
            line: 7,
            column: 30
          }
        },
        loc: {
          start: {
            line: 7,
            column: 40
          },
          end: {
            line: 10,
            column: 1
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 12,
            column: 33
          },
          end: {
            line: 12,
            column: 34
          }
        },
        loc: {
          start: {
            line: 12,
            column: 44
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 12
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 17,
            column: 34
          },
          end: {
            line: 17,
            column: 35
          }
        },
        loc: {
          start: {
            line: 17,
            column: 45
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 17
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2179f562bc106ea65092ad621b0d2e0af1a90062"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_sp92l8dfi = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_sp92l8dfi();
import CartActionTypes from "./cart.types";
cov_sp92l8dfi().s[0]++;
export const toggleCart = () => {
  cov_sp92l8dfi().f[0]++;
  cov_sp92l8dfi().s[1]++;
  return {
    type: CartActionTypes.TOGGLE_CART_HIDDEN
  };
};
cov_sp92l8dfi().s[2]++;
export const addItemToCart = item => {
  cov_sp92l8dfi().f[1]++;
  cov_sp92l8dfi().s[3]++;
  return {
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: item
  };
};
cov_sp92l8dfi().s[4]++;
export const decreaseItemCount = item => {
  cov_sp92l8dfi().f[2]++;
  cov_sp92l8dfi().s[5]++;
  return {
    type: CartActionTypes.DECREASE_ITEM_QUANTITY,
    payload: item
  };
};
cov_sp92l8dfi().s[6]++;
export const deleteItemFromCart = item => {
  cov_sp92l8dfi().f[3]++;
  cov_sp92l8dfi().s[7]++;
  return {
    type: CartActionTypes.DELETE_ITEM_FROM_CART,
    payload: item
  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuYWN0aW9ucy5qcyJdLCJuYW1lcyI6WyJDYXJ0QWN0aW9uVHlwZXMiLCJ0b2dnbGVDYXJ0IiwidHlwZSIsIlRPR0dMRV9DQVJUX0hJRERFTiIsImFkZEl0ZW1Ub0NhcnQiLCJpdGVtIiwiQUREX0lURU1fVE9fQ0FSVCIsInBheWxvYWQiLCJkZWNyZWFzZUl0ZW1Db3VudCIsIkRFQ1JFQVNFX0lURU1fUVVBTlRJVFkiLCJkZWxldGVJdGVtRnJvbUNhcnQiLCJERUxFVEVfSVRFTV9GUk9NX0NBUlQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxlQUFQLE1BQTRCLGNBQTVCOztBQUVBLE9BQU8sTUFBTUMsVUFBVSxHQUFHLE1BQU87QUFBQTtBQUFBO0FBQUE7QUFDL0JDLElBQUFBLElBQUksRUFBRUYsZUFBZSxDQUFDRztBQURTO0FBRWhDLENBRk07O0FBSVAsT0FBTyxNQUFNQyxhQUFhLEdBQUlDLElBQUQsSUFBVztBQUFBO0FBQUE7QUFBQTtBQUN0Q0gsSUFBQUEsSUFBSSxFQUFFRixlQUFlLENBQUNNLGdCQURnQjtBQUV0Q0MsSUFBQUEsT0FBTyxFQUFFRjtBQUY2QjtBQUd2QyxDQUhNOztBQUtQLE9BQU8sTUFBTUcsaUJBQWlCLEdBQUlILElBQUQsSUFBVztBQUFBO0FBQUE7QUFBQTtBQUMxQ0gsSUFBQUEsSUFBSSxFQUFFRixlQUFlLENBQUNTLHNCQURvQjtBQUUxQ0YsSUFBQUEsT0FBTyxFQUFFRjtBQUZpQztBQUczQyxDQUhNOztBQUtQLE9BQU8sTUFBTUssa0JBQWtCLEdBQUlMLElBQUQsSUFBVztBQUFBO0FBQUE7QUFBQTtBQUMzQ0gsSUFBQUEsSUFBSSxFQUFFRixlQUFlLENBQUNXLHFCQURxQjtBQUUzQ0osSUFBQUEsT0FBTyxFQUFFRjtBQUZrQztBQUc1QyxDQUhNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcnRBY3Rpb25UeXBlcyBmcm9tIFwiLi9jYXJ0LnR5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdG9nZ2xlQ2FydCA9ICgpID0+ICh7XHJcbiAgdHlwZTogQ2FydEFjdGlvblR5cGVzLlRPR0dMRV9DQVJUX0hJRERFTixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkSXRlbVRvQ2FydCA9IChpdGVtKSA9PiAoe1xyXG4gIHR5cGU6IENhcnRBY3Rpb25UeXBlcy5BRERfSVRFTV9UT19DQVJULFxyXG4gIHBheWxvYWQ6IGl0ZW0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlY3JlYXNlSXRlbUNvdW50ID0gKGl0ZW0pID0+ICh7XHJcbiAgdHlwZTogQ2FydEFjdGlvblR5cGVzLkRFQ1JFQVNFX0lURU1fUVVBTlRJVFksXHJcbiAgcGF5bG9hZDogaXRlbSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlSXRlbUZyb21DYXJ0ID0gKGl0ZW0pID0+ICh7XHJcbiAgdHlwZTogQ2FydEFjdGlvblR5cGVzLkRFTEVURV9JVEVNX0ZST01fQ0FSVCxcclxuICBwYXlsb2FkOiBpdGVtLFxyXG59KTtcclxuIl19