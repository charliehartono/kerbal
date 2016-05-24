webpackJsonp([8,1],{

/***/ 514:
/*!************************************************************!*\
  !*** ../src/app/routes/routes/Frames/components/Frames.js ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _redboxReact2 = __webpack_require__(/*! redbox-react */ 40);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(/*! react-transform-catch-errors */ 37);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(/*! react */ 2);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(/*! react-transform-hmr */ 38);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  Frames: {\n    displayName: 'Frames'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: 'C:/Users/ColeChamberlain/cchamberlain/kerbal/src/app/routes/routes/Frames/components/Frames.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: 'C:/Users/ColeChamberlain/cchamberlain/kerbal/src/app/routes/routes/Frames/components/Frames.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar Frames = _wrapComponent('Frames')(function (_Component) {\n  _inherits(Frames, _Component);\n\n  function Frames(props) {\n    _classCallCheck(this, Frames);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Frames).call(this, props));\n\n    var initialLayout = props.initialLayout;\n\n    _this.state = { layout: initialLayout,\n      urlMap: {}\n    };\n    return _this;\n  }\n\n  _createClass(Frames, [{\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      var urlMap = this.state.urlMap;\n\n      var frameStyle = { width: '100%', height: '60%' };\n\n      return _react3.default.createElement(\n        'div',\n        null,\n        _react3.default.createElement('input', { type: 'text', onChange: function onChange(_ref) {\n            var target = _ref.target;\n            return _this2.setState({ urlMap: _extends({}, urlMap, _defineProperty({}, 0, value)) });\n          } }),\n        _react3.default.createElement('iframe', { src: urlMap[0], style: frameStyle })\n      );\n    }\n  }]);\n\n  return Frames;\n}(_react2.Component));\n\nexports.default = Frames;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../../../~/webpack/buildin/module.js */ 1)(module)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ../src/app/routes/routes/Frames/components/Frames.js\n ** module id = 514\n ** module chunks = 8\n **/\n//# sourceURL=webpack:///../src/app/routes/routes/Frames/components/Frames.js?");

/***/ }

});