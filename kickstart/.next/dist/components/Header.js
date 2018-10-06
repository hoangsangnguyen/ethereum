'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Workspace\\Blockchain\\Ethereum-kickstarter\\ethereum\\kickstart\\components\\Header.js';


var HeaderComponent = function (_Component) {
    (0, _inherits3.default)(HeaderComponent, _Component);

    function HeaderComponent() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, HeaderComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HeaderComponent.__proto__ || (0, _getPrototypeOf2.default)(HeaderComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            currentUrl: ''
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(HeaderComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ currentUrl: window.location.pathname });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('Current Url : ', this.state.currentUrl);
            return _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, { relaxed: true, style: { marginTop: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }, _react2.default.createElement('a', { className: 'item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                }
            }, 'Explore')), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement('a', { className: 'item', style: { marginLeft: '20px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, 'Start a project'))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, style: { textAlign: 'center' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'teal', textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, 'KICKSTARER'))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, style: { textAlign: 'right' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_routes.Link, { route: '/author/login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('a', { className: 'item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Login')))), _react2.default.createElement(_semanticUiReact.Divider, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }));
        }
    }]);

    return HeaderComponent;
}(_react.Component);

exports.default = HeaderComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJDb250YWluZXIiLCJTZWFyY2giLCJHcmlkIiwiU2VnbWVudCIsIkRpdmlkZXIiLCJCdXR0b24iLCJIZWFkZXIiLCJMaW5rIiwiSGVhZGVyQ29tcG9uZW50Iiwic3RhdGUiLCJjdXJyZW50VXJsIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyIsIm1hcmdpblRvcCIsIm1hcmdpbkxlZnQiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUFNLEFBQVcsQUFBUSxBQUFNLEFBQVMsQUFBUyxBQUFROztBQUNsRSxBQUFTLEFBQVk7Ozs7Ozs7SUFFZixBOzs7Ozs7Ozs7Ozs7OztrT0FFRixBO3dCQUFRLEFBQ1MsQTtBQURULEFBQ0o7Ozs7OzRDQUdnQixBQUNoQjtpQkFBQSxBQUFLLFNBQVMsRUFBQyxZQUFhLE9BQUEsQUFBTyxTQUFuQyxBQUFjLEFBQThCLEFBRS9DOzs7O2lDQUVPLEFBQ0o7b0JBQUEsQUFBUSxJQUFSLEFBQVksa0JBQW1CLEtBQUEsQUFBSyxNQUFwQyxBQUEwQyxBQUMxQzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMsdUNBQUssU0FBTixNQUFjLE9BQU8sRUFBRSxXQUF2QixBQUFxQixBQUFhOzhCQUFsQztnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLE9BQUcsV0FBSCxBQUFhOzhCQUFiO2dDQUFBO0FBQUE7ZUFGUixBQUNJLEFBQ0ksQUFHSiw2QkFBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTs4QkFBWjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxPQUFHLFdBQUgsQUFBYSxRQUFPLE9BQU8sRUFBQyxZQUE1QixBQUEyQixBQUFjOzhCQUF6QztnQ0FBQTtBQUFBO2VBUFosQUFDSSxBQUtJLEFBQ0ksQUFLUixzQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CLElBQUksT0FBTyxFQUFFLFdBQWpDLEFBQStCLEFBQWE7OEJBQTVDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLDhCQUFLLE9BQU4sQUFBWTs4QkFBWjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxPQUFoQixBQUFzQixRQUFPLFdBQTdCLEFBQXVDOzhCQUF2QztnQ0FBQTtBQUFBO2VBZFosQUFZSSxBQUNJLEFBQ0ksQUFNUixpQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CLEdBQUcsT0FBTyxFQUFDLFdBQS9CLEFBQThCLEFBQWE7OEJBQTNDO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxBQUFDLDhCQUFLLE9BQU47OEJBQUE7Z0NBQUEsQUFDUTtBQURSOytCQUNRLGNBQUEsT0FBRyxXQUFILEFBQWE7OEJBQWI7Z0NBQUE7QUFBQTtlQXZCaEIsQUFDSSxBQW9CSSxBQUNBLEFBQ1EsQUFLWiw2QkFBQSxBQUFDOzs4QkFBRDtnQ0E3QlIsQUFDSSxBQTRCSSxBQUlYO0FBSlc7QUFBQTs7Ozs7QUExQ2MsQSxBQWlEOUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IkQ6L1dvcmtzcGFjZS9CbG9ja2NoYWluL0V0aGVyZXVtLWtpY2tzdGFydGVyL2V0aGVyZXVtL2tpY2tzdGFydCJ9