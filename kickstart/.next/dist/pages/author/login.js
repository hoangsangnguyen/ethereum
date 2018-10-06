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

                                console.log('Login success ', result);

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

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, { textAlign: 'center', style: { height: '100%' }, verticalAlign: 'middle', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'teal', textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Log-in to your account'), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_semanticUiReact.Segment, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Input, { fluid: true, icon: 'envelope', iconPosition: 'left', placeholder: 'E-mail address',
                value: this.state.email,
                onChange: function onChange(event) {
                    return _this3.setState({ email: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
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
                    lineNumber: 60
                }
            }), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', fluid: true, size: 'large', loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, 'Login'))), _react2.default.createElement(_semanticUiReact.Message, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, 'New to us? ', _react2.default.createElement('a', { href: '/author/signup', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, 'Sign Up'))))));
        }
    }]);

    return Login;
}(_react.Component);

exports.default = Login;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxhdXRob3JcXGxvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiRm9ybSIsIkdyaWQiLCJIZWFkZXIiLCJJbWFnZSIsIk1lc3NhZ2UiLCJTZWdtZW50IiwiTGF5b3V0IiwidXNlckZhY3RvcnkiLCJMb2dpbiIsInN0YXRlIiwicmV0dXJuVXJsIiwiZW1haWwiLCJwYXNzd29yZCIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwibG9naW4iLCJjYWxsIiwicmVzdWx0IiwibWVzc2FnZSIsImhlaWdodCIsIm1heFdpZHRoIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFRLEFBQU0sQUFBTSxBQUFRLEFBQU8sQUFBUzs7QUFDckQsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBaUI7Ozs7Ozs7OztJQUVsQixBOzs7Ozs7Ozs7Ozs7Ozs7OE0sQUFDRjt1QkFBUSxBQUNPLEFBQ1g7bUJBRkksQUFFRyxBQUNQO3NCQUhJLEFBR00sQUFDVjswQkFKSSxBQUlVLEFBQ2Q7cUJBTEksQUFLSyxBO0FBTEwsQUFDSixpQkFPSixBO2lHQUFXLGlCQUFBLEFBQU8sT0FBUDtvQkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FBQSxBQUFNLEFBQ047c0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FBL0IsQUFBYyxBQUErQixBQUM3Qzt3Q0FBQSxBQUFRLElBQVIsQUFBWSxZQUFZLE1BQUEsQUFBSyxNQUE3QixBQUFtQyxBQUNuQzt3Q0FBQSxBQUFRLElBQVIsQUFBWSxlQUFlLE1BQUEsQUFBSyxNQUp6QixBQUlQLEFBQXNDOztnREFKL0I7Z0RBQUE7dUNBT2dCLGVBQUEsQUFBWSxRQUFaLEFBQW9CLE1BQU0sTUFBQSxBQUFLLE1BQS9CLEFBQXFDLE9BQU8sTUFBQSxBQUFLLE1BQWpELEFBQXVELFVBUHZFLEFBT2dCLEFBQWlFOztpQ0FBaEY7QUFQRCxrREFRSDs7d0NBQUEsQUFBUSxJQUFSLEFBQVksa0JBUlQsQUFRSCxBQUE4Qjs7Z0RBUjNCO0FBQUE7O2lDQUFBO2dEQUFBO2dFQVdIOzt3Q0FBQSxBQUFRLElBQVIsQUFBWSxlQUFlLFlBQTNCLEFBQStCLEFBQy9CO3NDQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFaM0IsQUFZSCxBQUFjLEFBQW9COztpQ0FHdEM7O3NDQUFBLEFBQUssU0FBUyxFQUFFLFNBZlQsQUFlUCxBQUFjLEFBQVc7O2lDQWZsQjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQWtCRjt5QkFDTDs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQWFJO0FBYko7QUFBQSwrQkFhSSxBQUFDLHVDQUFLLFdBQU4sQUFBZ0IsVUFBUyxPQUFPLEVBQUUsUUFBbEMsQUFBZ0MsQUFBVSxVQUFVLGVBQXBELEFBQWtFOzhCQUFsRTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBTyxFQUFFLFVBQXRCLEFBQW9CLEFBQVk7OEJBQWhDO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLHlDQUFPLElBQVIsQUFBVyxNQUFLLE9BQWhCLEFBQXNCLFFBQU8sV0FBN0IsQUFBdUM7OEJBQXZDO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBR0EsMkNBQUEsQUFBQyx1Q0FBSyxNQUFOLEFBQVcsU0FBUSxVQUFVLEtBQTdCLEFBQWtDOzhCQUFsQztnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsNkNBQ0ksQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixNQUFrQixNQUFsQixBQUF1QixZQUFXLGNBQWxDLEFBQStDLFFBQU8sYUFBdEQsQUFBa0UsQUFDOUQ7dUJBQU8sS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxNQUFBLEFBQU0sT0FBdEMsQUFBUyxBQUFjLEFBQXNCO0FBRjNEOzhCQUFBO2dDQURKLEFBQ0ksQUFJQTtBQUpBOzhDQUlBLEFBQUMsc0JBQUQsQUFBTTt1QkFBTixBQUVJO3NCQUZKLEFBRVMsQUFDTDs4QkFISixBQUdpQixBQUNiOzZCQUpKLEFBSWdCLEFBQ1o7c0JBTEosQUFLUyxBQUNMO3VCQUFPLEtBQUEsQUFBSyxNQU5oQixBQU1zQixBQUNsQjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLFVBQVUsTUFBQSxBQUFNLE9BQXpDLEFBQVMsQUFBYyxBQUF5QjtBQVA5RDs7OEJBQUE7Z0NBTEosQUFLSSxBQVVBO0FBVkE7QUFDSSxnQ0FTSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7OEJBQWxEO2dDQWZKLEFBZUksQUFFQTtBQUZBO2dDQUVBLEFBQUMseUNBQU8sT0FBUixBQUFjLFFBQU8sT0FBckIsTUFBMkIsTUFBM0IsQUFBZ0MsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUF0RCxBQUE0RDs4QkFBNUQ7Z0NBQUE7QUFBQTtlQXRCWixBQUlJLEFBQ0ksQUFpQkksQUFLUiw0QkFBQSxBQUFDOzs4QkFBRDtnQ0FBQTtBQUFBO0FBQUEsZUFDZSwrQkFBQSxjQUFBLE9BQUcsTUFBSCxBQUFROzhCQUFSO2dDQUFBO0FBQUE7ZUE1Q25DLEFBQ0ksQUFDSSxBQWFJLEFBQ0ksQUEyQkksQUFDZSxBQVF0Qzs7Ozs7QUFoRmUsQSxBQW1GcEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibG9naW4uanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovV29ya3NwYWNlL0Jsb2NrY2hhaW4vRXRoZXJldW0ta2lja3N0YXJ0ZXIvZXRoZXJldW0va2lja3N0YXJ0In0=