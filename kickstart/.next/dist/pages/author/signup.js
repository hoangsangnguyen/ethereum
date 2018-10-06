'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _user = require('../../ethereum/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Workspace\\Blockchain\\Ethereum-kickstarter\\ethereum\\kickstart\\pages\\author\\signup.js?entry';


var SignUp = function (_Component) {
    (0, _inherits3.default)(SignUp, _Component);

    function SignUp() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, SignUp);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SignUp.__proto__ || (0, _getPrototypeOf2.default)(SignUp)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            errorMessage: '',
            loading: '',
            email: '',
            userName: '',
            password: '',
            confirmPassword: '',
            walletAddress: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMessage: '' });

                                if (!(_this.state.password != _this.state.confirmPassword)) {
                                    _context.next = 5;
                                    break;
                                }

                                console.log('Password confirm wrong');
                                return _context.abrupt('return');

                            case 5:

                                console.log('State ', _this.state);
                                console.log('Email : ', _this.state.email);
                                console.log('userName : ', _this.state.userName);
                                console.log('Password : ', _this.state.password);
                                console.log('Wallet address : ', _this.state.walletAddress);

                                _context.prev = 10;
                                _context.next = 13;
                                return _user2.default.methods.createUser(_this.state.email, _this.state.userName, _this.state.password, _this.state.walletAddress).send({
                                    from: _this.state.walletAddress
                                });

                            case 13:
                                console.log('Sign up success');

                                _context.next = 20;
                                break;

                            case 16:
                                _context.prev = 16;
                                _context.t0 = _context['catch'](10);

                                console.log('Error sign up ', _context.t0.message);
                                _this.setState({ errorMessage: _context.t0.message });

                            case 20:

                                _this.setState({ loading: false });

                            case 21:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[10, 16]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(SignUp, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, { textAlign: 'center', style: { height: '100%' }, verticalAlign: 'middle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'teal', textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'SignUp your account'), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Input, { fluid: true, icon: 'envelope', iconPosition: 'left', placeholder: 'E-mail address',
                value: this.state.email,
                onChange: function onChange(event) {
                    return _this3.setState({ email: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), _react2.default.createElement(_semanticUiReact.Form.Input, { fluid: true, icon: 'user', iconPosition: 'left', placeholder: 'User name',
                value: this.state.userName,
                onChange: function onChange(event) {
                    return _this3.setState({ userName: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }), _react2.default.createElement(_semanticUiReact.Form.Input, {
                fluid: true,
                icon: 'lock',
                iconPosition: 'left',
                placeholder: 'Password',
                type: 'password',
                value: this.state.password,
                onChange: function onChange(event) {
                    return _this3.setState({ password: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }), _react2.default.createElement(_semanticUiReact.Form.Input, {
                fluid: true,
                icon: 'lock',
                iconPosition: 'left',
                placeholder: 'Confirm password',
                type: 'password',
                value: this.state.confirmPassword,
                onChange: function onChange(event) {
                    return _this3.setState({ confirmPassword: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }), _react2.default.createElement(_semanticUiReact.Form.Input, {
                fluid: true,
                icon: 'lock',
                iconPosition: 'left',
                placeholder: 'Wallet address',
                value: this.state.walletAddress,
                onChange: function onChange(event) {
                    return _this3.setState({ walletAddress: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', fluid: true, size: 'large', loading: this.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, 'SignUp'))), _react2.default.createElement(_semanticUiReact.Message, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }, 'Back to login ? ', _react2.default.createElement('a', { href: '/author/login', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }, 'Login'))))));
        }
    }]);

    return SignUp;
}(_react.Component);

exports.default = SignUp;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhdXRob3JcXHNpZ251cC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkZvcm0iLCJHcmlkIiwiSGVhZGVyIiwiSW1hZ2UiLCJNZXNzYWdlIiwiU2VnbWVudCIsIkljb24iLCJMYXlvdXQiLCJ1c2VyRmFjdG9yeSIsIlNpZ25VcCIsInN0YXRlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsImVtYWlsIiwidXNlck5hbWUiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsIndhbGxldEFkZHJlc3MiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwiY3JlYXRlVXNlciIsInNlbmQiLCJmcm9tIiwibWVzc2FnZSIsImhlaWdodCIsIm1heFdpZHRoIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFRLEFBQU0sQUFBTSxBQUFRLEFBQU8sQUFBUyxBQUFTOztBQUM5RCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFpQjs7Ozs7Ozs7O0lBRWxCLEE7Ozs7Ozs7Ozs7Ozs7OztnTixBQUNGOzBCQUFRLEFBQ1UsQUFDZDtxQkFGSSxBQUVLLEFBQ1Q7bUJBSEksQUFHRyxBQUNQO3NCQUpJLEFBSU0sQUFDVjtzQkFMSSxBQUtNLEFBQ1Y7NkJBTkksQUFNYSxBQUNqQjsyQixBQVBJLEFBT1c7QUFQWCxBQUNKLGlCLEFBU0o7aUdBQVcsaUJBQUEsQUFBTyxPQUFQOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFDTjtzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUZ4QixBQUVQLEFBQWMsQUFBK0I7O3NDQUV6QyxNQUFBLEFBQUssTUFBTCxBQUFXLFlBQVksTUFBQSxBQUFL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QUNMOzhCQUhKLEFBR2lCLEFBQ2I7NkJBSkosQUFJZ0IsQUFDWjtzQkFMSixBQUtTLEFBQ0w7dUJBQU8sS0FBQSxBQUFLLE1BTmhCLEFBTXNCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsVUFBVSxNQUFBLEFBQU0sT0FBekMsQUFBUyxBQUFjLEFBQXlCO0FBUDlEOzs4QkFBQTtnQ0FUSixBQVNJLEFBVUE7QUFWQTtBQUNJLDhDQVNKLEFBQUMsc0JBQUQsQUFBTTt1QkFBTixBQUVJO3NCQUZKLEFBRVMsQUFDTDs4QkFISixBQUdpQixBQUNiOzZCQUpKLEFBSWdCLEFBQ1o7c0JBTEosQUFLUyxBQUNMO3VCQUFPLEtBQUEsQUFBSyxNQU5oQixBQU1zQixBQUNsQjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLGlCQUFpQixNQUFBLEFBQU0sT0FBaEQsQUFBUyxBQUFjLEFBQWdDO0FBUHJFOzs4QkFBQTtnQ0FuQkosQUFtQkksQUFVQTtBQVZBO0FBQ0ksOENBU0osQUFBQyxzQkFBRCxBQUFNO3VCQUFOLEFBRUk7c0JBRkosQUFFUyxBQUNMOzhCQUhKLEFBR2lCLEFBQ2I7NkJBSkosQUFJZ0IsQUFDWjt1QkFBTyxLQUFBLEFBQUssTUFMaEIsQUFLc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxlQUFlLE1BQUEsQUFBTSxPQUE5QyxBQUFTLEFBQWMsQUFBOEI7QUFObkU7OzhCQUFBO2dDQTdCSixBQTZCSSxBQVNBO0FBVEE7QUFDSSxnQ0FRSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7OEJBQWxEO2dDQXRDSixBQXNDSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsUUFBTyxPQUFyQixNQUEyQixNQUEzQixBQUFnQyxTQUFRLFNBQVMsS0FBakQsQUFBc0Q7OEJBQXREO2dDQUFBO0FBQUE7ZUE1Q1osQUFJSSxBQUNJLEFBdUNJLEFBS1IsNkJBQUEsQUFBQzs7OEJBQUQ7Z0NBQUE7QUFBQTtBQUFBLGVBQ29CLG9DQUFBLGNBQUEsT0FBRyxNQUFILEFBQVE7OEJBQVI7Z0NBQUE7QUFBQTtlQTNEeEMsQUFDSSxBQUNJLEFBTUksQUFDSSxBQWlESSxBQUNvQixBQU8zQzs7Ozs7QUE3R2dCLEEsQUFnSHJCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNpZ251cC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9Xb3Jrc3BhY2UvQmxvY2tjaGFpbi9FdGhlcmV1bS1raWNrc3RhcnRlci9ldGhlcmV1bS9raWNrc3RhcnQifQ==