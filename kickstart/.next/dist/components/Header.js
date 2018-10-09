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


var options = [{ key: 'logout', text: 'Logout', value: 'logout' }, { key: 'profile', text: 'Profile', value: 'profile' }];

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
            currentUrl: '',
            userWalletAddress: '',
            userName: '',
            isLogin: false
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(HeaderComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ currentUrl: window.location.pathname });
            var user = JSON.parse(localStorage.getItem("user"));
            if (user == null) {
                this.setState({ userName: '', userWalletAddress: '', isLogin: '' });
            } else {
                this.setState({ userWalletAddress: user.walletAddress, userName: user.userName, isLogin: this.state.userName.trim() == "" });
            }
        }
    }, {
        key: 'renderUserUI',
        value: function renderUserUI() {
            return _react2.default.createElement(_semanticUiReact.Dropdown, { floating: true, options: options, text: this.state.userName,
                onChange: function onChange(event, _ref2) {
                    var value = _ref2.value;

                    if (value == 'logout') {
                        localStorage.clear();
                        _routes.Router.pushRoute('/author/login');
                    }
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var isLogin = this.state.isLogin;

            return _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, { relaxed: true, style: { marginTop: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, isLogin ? _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('a', { className: 'item', style: { marginLeft: '20px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Start a project')) : _react2.default.createElement(_routes.Link, { route: '/author/login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('a', { className: 'item', style: { marginLeft: '20px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, 'Start a project'))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, style: { textAlign: 'center' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'teal', textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'KICKSTARER'))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 3, style: { textAlign: 'right' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, isLogin ? this.renderUserUI() : _react2.default.createElement(_routes.Link, { route: '/author/login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement('a', { className: 'item', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, 'Login')))), _react2.default.createElement(_semanticUiReact.Divider, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }));
        }
    }]);

    return HeaderComponent;
}(_react.Component);

exports.default = HeaderComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1lbnUiLCJDb250YWluZXIiLCJTZWFyY2giLCJHcmlkIiwiU2VnbWVudCIsIkRpdmlkZXIiLCJCdXR0b24iLCJIZWFkZXIiLCJEcm9wZG93biIsIkljb24iLCJMaW5rIiwiUm91dGVyIiwib3B0aW9ucyIsImtleSIsInRleHQiLCJ2YWx1ZSIsIkhlYWRlckNvbXBvbmVudCIsInN0YXRlIiwiY3VycmVudFVybCIsInVzZXJXYWxsZXRBZGRyZXNzIiwidXNlck5hbWUiLCJpc0xvZ2luIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwidXNlciIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ3YWxsZXRBZGRyZXNzIiwidHJpbSIsImV2ZW50IiwiY2xlYXIiLCJwdXNoUm91dGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5MZWZ0IiwidGV4dEFsaWduIiwicmVuZGVyVXNlclVJIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBVyxBQUFRLEFBQU0sQUFBUyxBQUFTLEFBQVEsQUFBUSxBQUFVOztBQUNwRixBQUFTLEFBQVksQUFDckIsQUFBUyxBQUFjOzs7Ozs7O0FBRXZCLElBQU0sVUFBVSxDQUNaLEVBQUUsS0FBRixBQUFPLFVBQVUsTUFBakIsQUFBdUIsVUFBVSxPQURyQixBQUNaLEFBQXdDLFlBQ3hDLEVBQUUsS0FBRixBQUFPLFdBQVcsTUFBbEIsQUFBd0IsV0FBVyxPQUZ2QyxBQUFnQixBQUVaLEFBQTBDOztJLEFBR3hDOzs7Ozs7Ozs7Ozs7OztrTyxBQUVGO3dCQUFRLEFBQ1EsQUFDWjsrQkFGSSxBQUVlLEFBQ25CO3NCQUhJLEFBR00sQUFDVjtxQixBQUpJLEFBSUs7QUFKTCxBQUNKOzs7Ozs0Q0FNZ0IsQUFDaEI7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