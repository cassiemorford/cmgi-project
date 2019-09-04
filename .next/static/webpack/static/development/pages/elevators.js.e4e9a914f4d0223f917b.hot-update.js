webpackHotUpdate("static/development/pages/elevators.js",{

/***/ "./components/elevator-page/elevator-system.tsx":
/*!******************************************************!*\
  !*** ./components/elevator-page/elevator-system.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _elevator_page_elevator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../elevator-page/elevator */ "./components/elevator-page/elevator.tsx");
/* harmony import */ var _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../elevator-page/elevator-types */ "./components/elevator-page/elevator-types.ts");








var _jsxFileName = "/Users/cassiemorford/Desktop/cassieM/components/elevator-page/elevator-system.tsx";




var ElevatorSystem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ElevatorSystem, _React$Component);

  function ElevatorSystem(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ElevatorSystem);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ElevatorSystem).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "elevatorStep", function () {
      var _this$state = _this.state,
          elevators = _this$state.elevators,
          users = _this$state.users,
          totalFloors = _this$state.totalFloors;
      elevators.forEach(function (el, i) {
        // MOVEMENT
        // if at top or bottom, turn around
        if (el.floor === totalFloors) {
          el.direction = _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_10__["ElevatorDirection"].Down;
        }

        if (el.floor === 1) {
          el.direction = _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_10__["ElevatorDirection"].Up;
        } // take next step


        el.floor = el.direction === _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_10__["ElevatorDirection"].Up ? el.floor++ : el.floor--; // USERS
        // let off users

        users.forEach(function (u) {
          //let riders off
          if (u.inElevator === i && el.floor === u.destination) {
            u.inElevator = null;
            u.onFloor = u.destination;
          } //let riders on


          if (u.onFloor === i && el.direction === u.direction) {
            u.onFloor = null;
            u.inElevator = i;
          }
        });
      });

      _this.setState({
        elevators: elevators,
        users: users
      });
    });

    _this.state = {
      elevators: [{
        floor: 1,
        direction: _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_10__["ElevatorDirection"].Up,
        stops: []
      }, {
        floor: 4,
        direction: _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_10__["ElevatorDirection"].Down,
        stops: []
      }],
      users: [{
        origin: 2,
        onFloor: 2,
        destination: 3,
        direction: _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_10__["ElevatorDirection"].Up
      }, {
        origin: 1,
        inElevator: 1,
        destination: 4,
        direction: _elevator_page_elevator_types__WEBPACK_IMPORTED_MODULE_10__["ElevatorDirection"].Up
      }],
      totalFloors: 5
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ElevatorSystem, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          elevators = _this$state2.elevators,
          users = _this$state2.users,
          totalFloors = _this$state2.totalFloors;
      var elevatorShaftStyles = {
        height: "".concat(100 * totalFloors, "px")
      };
      var floors = new Array(totalFloors).fill(0);
      var peopleInElevators = users.filter(function (u) {
        return u.inElevator;
      });
      var peopleWaiting = users.filter(function (u) {
        return u.onFloor;
      });
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "elevator-system",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.elevatorStep,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Next Step"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "elevator-system__elevators",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, elevators.map(function (el, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "elevator__shaft",
          style: elevatorShaftStyles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_elevator_page_elevator__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, el, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }), peopleInElevators.filter(function (p) {
          return p.inElevator === i;
        }).map(function (p) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            className: "elevator__rider",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 99
            },
            __self: this
          }, "".concat(p.origin, "\u21E2").concat(p.destination));
        })));
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "elevator-system__floors",
        style: elevatorShaftStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, floors.map(function (floor, i) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "elevator-system__floor",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, peopleWaiting.filter(function (p) {
          return p.onFloor === i;
        }).map(function (p) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
            className: "elevator__rider",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 112
            },
            __self: this
          }, "".concat(p.origin, "\u21E2").concat(p.destination));
        }));
      })));
    }
  }]);

  return ElevatorSystem;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ElevatorSystem);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

})
//# sourceMappingURL=elevators.js.e4e9a914f4d0223f917b.hot-update.js.map