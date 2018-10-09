'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Workspace\\Blockchain\\Ethereum-kickstarter\\ethereum\\kickstart\\pages\\author\\login.js?entry';


var Login = function (_Component) {
    (0, _inherits3.default)(Login, _Component);

    function Login() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Login);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            returnUrl: '',
            email: '',
            password: '',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var result;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMessage: '' });
                                console.log('Email : ', _this.state.email);
                                console.log('Password : ', _this.state.password);

                                _context.prev = 4;
                                _context.next = 7;
                                return _user2.default.methods.login(_this.state.email, _this.state.password).call();

                            case 7:
                                result = _context.sent;

                                if (result["userName"].trim() == "") {
                                    _this.setState({ errorMessage: "Username or password wrong" });
                                } else {
                                    localStorage.setItem("user", (0, _stringify2.default)(result));
                                    _routes.Router.pushRoute('/');
                                }

                                _context.next = 15;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](4);

                                console.log('Error login', _context.t0.message);
                                _this.setState({ errorMessage: _context.t0.message });

                            case 15:

                                _this.setState({ loading: false });

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Login, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            })), _react2.default.createElement('div', { className: 'login-form', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, { textAlign: 'center', style: { height: '100%', marginTop: '20px' }, verticalAlign: 'middle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'teal', textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Log-in to your account'), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Input, { fluid: true, icon: 'envelope', iconPosition: 'left', placeholder: 'E-mail address',
                value: this.state.email,
                onChange: function onChange(event) {
                    return _this3.setState({ email: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
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
                    lineNumber: 59
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', fluid: true, size: 'large', loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'Login'))), _react2.default.createElement(_semanticUiReact.Message, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, 'New to us? ', _react2.default.createElement('a', { href: '/author/signup', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, 'Sign Up'))))));
        }
    }]);

    return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhdXRob3JcXGxvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiRm9ybSIsIkdyaWQiLCJIZWFkZXIiLCJJbWFnZSIsIk1lc3NhZ2UiLCJTZWdtZW50IiwiQ29udGFpbmVyIiwiTGF5b3V0IiwidXNlckZhY3RvcnkiLCJIZWFkIiwiUm91dGVyIiwiTG9naW4iLCJzdGF0ZSIsInJldHVyblVybCIsImVtYWlsIiwicGFzc3dvcmQiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImxvZ2luIiwiY2FsbCIsInJlc3VsdCIsInRyaW0iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsImhlaWdodCIsIm1hcmdpblRvcCIsIm1heFdpZHRoIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUSxBQUFNLEFBQU0sQUFBUSxBQUFPLEFBQVMsQUFBUzs7QUFDOUQsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTzs7OztBQUNQLEFBQVMsQUFBYzs7Ozs7OztJLEFBRWpCOzs7Ozs7Ozs7Ozs7Ozs7OE1BQ0YsQTt1QkFBUSxBQUNPLEFBQ1g7bUJBRkksQUFFRyxBQUNQO3NCQUhJLEFBR00sQUFDVjswQkFKSSxBQUlVLEFBQ2Q7cUIsQUFMSSxBQUtLO0FBTEwsQUFDSixpQkFPSixBO2lHQUFXLGlCQUFBLEFBQU8sT0FBUDtvQkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FBQSxBQUFNLEFBQ047c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FBL0IsQUFBYyxBQUErQixB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O0FBVkE7QUFDSSxnQ0FTSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7OEJBQWxEO2dDQWZKLEFBZUksQUFFQTtBQUZBO2dDQUVBLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsTUFBM0IsQUFBZ0MsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUF0RCxBQUE0RDs4QkFBNUQ7Z0NBQUE7QUFBQTtlQXRCWixBQUlJLEFBQ0ksQUFpQkksQUFLUiw0QkFBQSxBQUFDOzs4QkFBRDtnQ0FBQTtBQUFBO0FBQUEsZUFDZSwrQkFBQSxjQUFBLE9BQUcsTUFBSCxBQUFROzhCQUFSO2dDQUFBO0FBQUE7ZUFwQ25DLEFBQ0ksQUFLSSxBQUNJLEFBQ0ksQUEyQkksQUFDZSxBQVF0Qzs7Ozs7QUE3RWUsQSxBQWdGcEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibG9naW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovV29ya3NwYWNlL0Jsb2NrY2hhaW4vRXRoZXJldW0ta2lja3N0YXJ0ZXIvZXRoZXJldW0va2lja3N0YXJ0In0=