function cov_148tdzeh27() {
  var path = "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/cart/cart.reducer.js";
  var hash = "ad579b857da91a705d66f9cbb34dfa3644bb74fd";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/dmitrijsereda/Documents/Work/dimasfurniture/src/redux/cart/cart.reducer.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 22
        },
        end: {
          line: 7,
          column: 1
        }
      },
      "1": {
        start: {
          line: 9,
          column: 20
        },
        end: {
          line: 33,
          column: 1
        }
      },
      "2": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 32,
          column: 3
        }
      },
      "3": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 79
        }
      },
      "4": {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 17,
          column: 8
        }
      },
      "5": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 24,
          column: 8
        }
      },
      "6": {
        start: {
          line: 22,
          column: 20
        },
        end: {
          line: 22,
          column: 49
        }
      },
      "7": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 29,
          column: 8
        }
      },
      "8": {
        start: {
          line: 31,
          column: 6
        },
        end: {
          line: 31,
          column: 26
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 20
          },
          end: {
            line: 9,
            column: 21
          }
        },
        loc: {
          start: {
            line: 9,
            column: 55
          },
          end: {
            line: 33,
            column: 1
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 22,
            column: 10
          },
          end: {
            line: 22,
            column: 11
          }
        },
        loc: {
          start: {
            line: 22,
            column: 20
          },
          end: {
            line: 22,
            column: 49
          }
        },
        line: 22
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 9,
            column: 21
          },
          end: {
            line: 9,
            column: 42
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 9,
            column: 29
          },
          end: {
            line: 9,
            column: 42
          }
        }],
        line: 9
      },
      "1": {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 32,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 12,
            column: 79
          }
        }, {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 17,
            column: 8
          }
        }, {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 24,
            column: 8
          }
        }, {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 29,
            column: 8
          }
        }, {
          start: {
            line: 30,
            column: 4
          },
          end: {
            line: 31,
            column: 26
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ad579b857da91a705d66f9cbb34dfa3644bb74fd"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_148tdzeh27 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_148tdzeh27();
import CartActionTypes from "./cart.types";
import { addItem, decreaseItemCount } from "./cart.utils";
const INITIAL_STATE = (cov_148tdzeh27().s[0]++, {
  isHidden: true,
  cartItems: []
});
cov_148tdzeh27().s[1]++;

const CartReducer = (state = (cov_148tdzeh27().b[0][0]++, INITIAL_STATE), action) => {
  cov_148tdzeh27().f[0]++;
  cov_148tdzeh27().s[2]++;

  switch (action.type) {
    case CartActionTypes.ADD_ITEM_TO_CART:
      cov_148tdzeh27().b[1][0]++;
      cov_148tdzeh27().s[3]++;
      return { ...state,
        cartItems: addItem(action.payload, state.cartItems)
      };

    case CartActionTypes.DECREASE_ITEM_QUANTITY:
      cov_148tdzeh27().b[1][1]++;
      cov_148tdzeh27().s[4]++;
      return { ...state,
        cartItems: decreaseItemCount(action.payload, state.cartItems)
      };

    case CartActionTypes.DELETE_ITEM_FROM_CART:
      cov_148tdzeh27().b[1][2]++;
      cov_148tdzeh27().s[5]++;
      return { ...state,
        cartItems: state.cartItems.filter(item => {
          cov_148tdzeh27().f[1]++;
          cov_148tdzeh27().s[6]++;
          return item.id !== action.payload.id;
        })
      };

    case CartActionTypes.TOGGLE_CART_HIDDEN:
      cov_148tdzeh27().b[1][3]++;
      cov_148tdzeh27().s[7]++;
      return { ...state,
        isHidden: !state.isHidden
      };

    default:
      cov_148tdzeh27().b[1][4]++;
      cov_148tdzeh27().s[8]++;
      return { ...state
      };
  }
};

export default CartReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQucmVkdWNlci5qcyJdLCJuYW1lcyI6WyJDYXJ0QWN0aW9uVHlwZXMiLCJhZGRJdGVtIiwiZGVjcmVhc2VJdGVtQ291bnQiLCJJTklUSUFMX1NUQVRFIiwiaXNIaWRkZW4iLCJjYXJ0SXRlbXMiLCJDYXJ0UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkFERF9JVEVNX1RPX0NBUlQiLCJwYXlsb2FkIiwiREVDUkVBU0VfSVRFTV9RVUFOVElUWSIsIkRFTEVURV9JVEVNX0ZST01fQ0FSVCIsImZpbHRlciIsIml0ZW0iLCJpZCIsIlRPR0dMRV9DQVJUX0hJRERFTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxlQUFQLE1BQTRCLGNBQTVCO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsaUJBQWxCLFFBQTJDLGNBQTNDO0FBRUEsTUFBTUMsYUFBYSw2QkFBRztBQUNwQkMsRUFBQUEsUUFBUSxFQUFFLElBRFU7QUFFcEJDLEVBQUFBLFNBQVMsRUFBRTtBQUZTLENBQUgsQ0FBbkI7OztBQUtBLE1BQU1DLFdBQVcsR0FBRyxDQUFDQyxLQUFLLGdDQUFHSixhQUFILENBQU4sRUFBd0JLLE1BQXhCLEtBQW1DO0FBQUE7QUFBQTs7QUFDckQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS1QsZUFBZSxDQUFDVSxnQkFBckI7QUFBQTtBQUFBO0FBQ0UsYUFBTyxFQUFFLEdBQUdILEtBQUw7QUFBWUYsUUFBQUEsU0FBUyxFQUFFSixPQUFPLENBQUNPLE1BQU0sQ0FBQ0csT0FBUixFQUFpQkosS0FBSyxDQUFDRixTQUF2QjtBQUE5QixPQUFQOztBQUNGLFNBQUtMLGVBQWUsQ0FBQ1ksc0JBQXJCO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFDTCxHQUFHTCxLQURFO0FBRUxGLFFBQUFBLFNBQVMsRUFBRUgsaUJBQWlCLENBQUNNLE1BQU0sQ0FBQ0csT0FBUixFQUFpQkosS0FBSyxDQUFDRixTQUF2QjtBQUZ2QixPQUFQOztBQUlGLFNBQUtMLGVBQWUsQ0FBQ2EscUJBQXJCO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFDTCxHQUFHTixLQURFO0FBRUxGLFFBQUFBLFNBQVMsRUFBRUUsS0FBSyxDQUFDRixTQUFOLENBQWdCUyxNQUFoQixDQUNSQyxJQUFELElBQVU7QUFBQTtBQUFBO0FBQUEsaUJBQUFBLElBQUksQ0FBQ0MsRUFBTCxLQUFZUixNQUFNLENBQUNHLE9BQVAsQ0FBZUssRUFBM0I7QUFBNkIsU0FEOUI7QUFGTixPQUFQOztBQU1GLFNBQUtoQixlQUFlLENBQUNpQixrQkFBckI7QUFBQTtBQUFBO0FBQ0UsYUFBTyxFQUNMLEdBQUdWLEtBREU7QUFFTEgsUUFBQUEsUUFBUSxFQUFFLENBQUNHLEtBQUssQ0FBQ0g7QUFGWixPQUFQOztBQUlGO0FBQUE7QUFBQTtBQUNFLGFBQU8sRUFBRSxHQUFHRztBQUFMLE9BQVA7QUFyQko7QUF1QkQsQ0F4QkQ7O0FBMEJBLGVBQWVELFdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FydEFjdGlvblR5cGVzIGZyb20gXCIuL2NhcnQudHlwZXNcIjtcbmltcG9ydCB7IGFkZEl0ZW0sIGRlY3JlYXNlSXRlbUNvdW50IH0gZnJvbSBcIi4vY2FydC51dGlsc1wiO1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICBpc0hpZGRlbjogdHJ1ZSxcbiAgY2FydEl0ZW1zOiBbXSxcbn07XG5cbmNvbnN0IENhcnRSZWR1Y2VyID0gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIENhcnRBY3Rpb25UeXBlcy5BRERfSVRFTV9UT19DQVJUOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnRJdGVtczogYWRkSXRlbShhY3Rpb24ucGF5bG9hZCwgc3RhdGUuY2FydEl0ZW1zKSB9O1xuICAgIGNhc2UgQ2FydEFjdGlvblR5cGVzLkRFQ1JFQVNFX0lURU1fUVVBTlRJVFk6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydEl0ZW1zOiBkZWNyZWFzZUl0ZW1Db3VudChhY3Rpb24ucGF5bG9hZCwgc3RhdGUuY2FydEl0ZW1zKSxcbiAgICAgIH07XG4gICAgY2FzZSBDYXJ0QWN0aW9uVHlwZXMuREVMRVRFX0lURU1fRlJPTV9DQVJUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnRJdGVtczogc3RhdGUuY2FydEl0ZW1zLmZpbHRlcihcbiAgICAgICAgICAoaXRlbSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQuaWRcbiAgICAgICAgKSxcbiAgICAgIH07XG4gICAgY2FzZSBDYXJ0QWN0aW9uVHlwZXMuVE9HR0xFX0NBUlRfSElEREVOOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzSGlkZGVuOiAhc3RhdGUuaXNIaWRkZW4sXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJ0UmVkdWNlcjtcbiJdfQ==