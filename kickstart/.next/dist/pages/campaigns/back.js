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

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Workspace\\Blockchain\\Ethereum-kickstarter\\ethereum\\kickstart\\pages\\campaigns\\back.js?entry';


var BackCampaign = function (_Component) {
    (0, _inherits3.default)(BackCampaign, _Component);

    function BackCampaign() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, BackCampaign);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = BackCampaign.__proto__ || (0, _getPrototypeOf2.default)(BackCampaign)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            amount: '',
            loading: false,
            errorMessage: '',
            title: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts, campaign;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;

                                console.log('Account : ', accounts);

                                campaign = (0, _campaign2.default)(_this.props.url.query.address);

                                console.log('campaign : ' + campaign);

                                _context.next = 11;
                                return campaign.methods.contribute().send({
                                    value: '200',
                                    from: accounts[0]
                                });

                            case 11:

                                Router.pushRoute('/campaigns/' + _this.props.url.query.address);

                                _context.next = 18;
                                break;

                            case 14:
                                _context.prev = 14;
                                _context.t0 = _context['catch'](2);

                                console.log(_context.t0.message);
                                _this.setState({ errorMessage: _context.t0.message });

                            case 18:
                                _this.setState({ loading: false });

                            case 19:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 14]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(BackCampaign, [{
        key: 'componentDidMount',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var accounts, campaign, title;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _web2.default.eth.getAccounts();

                            case 2:
                                accounts = _context2.sent;

                                console.log('Account : ', accounts);

                                campaign = (0, _campaign2.default)(this.props.url.query.address);
                                _context2.next = 7;
                                return campaign.methods.mTitle().call();

                            case 7:
                                title = _context2.sent;

                                this.setState({ title: title });

                            case 9:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function componentDidMount() {
                return _ref3.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'createAccount',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
                var account;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                console.log('Before create account');
                                _context3.next = 3;
                                return _web2.default.eth.accounts.create();

                            case 3:
                                account = _context3.sent;

                                console.log('ACCOUNT ', account);

                            case 5:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function createAccount() {
                return _ref4.apply(this, arguments);
            }

            return createAccount;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            console.log('Address ', this.props.url.query.address);

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(_semanticUiReact.GridRow, { columns: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement(_semanticUiReact.GridColumn, { width: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.url.query.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Back', icon: 'left arrow', labelPosition: 'left', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            })))), _react2.default.createElement(_semanticUiReact.GridColumn, { width: 7, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement('h3', { style: { textAlign: 'center' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, this.state.title)))), _react2.default.createElement(_semanticUiReact.Form, { className: 'segment', onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, 'Amount'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'ether',
                labelPosition: 'right',
                value: this.state.amount,
                onChange: function onChange(event) {
                    return _this3.setState({ amount: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, 'Back to this campaign')), _react2.default.createElement(_semanticUiReact.Button, { onClick: this.createAccount, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, 'Create Account'));
        }
    }]);

    return BackCampaign;
}(_react.Component);

exports.default = BackCampaign;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXGJhY2suanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2hlY2tib3giLCJGb3JtR3JvdXAiLCJEcm9wZG93biIsIkNvbnRhaW5lciIsIkVtYmVkIiwiVGV4dEFyZWEiLCJHcmlkUm93IiwiR3JpZENvbHVtbiIsIkdyaWQiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIkxpbmsiLCJDYW1wYWlnbiIsIkJhY2tDYW1wYWlnbiIsInN0YXRlIiwiYW1vdW50IiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsInRpdGxlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY29uc29sZSIsImxvZyIsImNhbXBhaWduIiwicHJvcHMiLCJ1cmwiLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJ2YWx1ZSIsImZyb20iLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwibVRpdGxlIiwiY2FsbCIsImNyZWF0ZSIsImFjY291bnQiLCJ0ZXh0QWxpZ24iLCJ0YXJnZXQiLCJjcmVhdGVBY2NvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUSxBQUFNLEFBQU8sQUFBUyxBQUFVLEFBQVcsQUFBVSxBQUFXLEFBQU8sQUFBVSxBQUFTLEFBQVk7O0FBQ3ZILEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFjOzs7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7Ozs7Ozs7NE4sQUFDRjtvQkFBUSxBQUNJLEFBQ1I7cUJBRkksQUFFSyxBQUNU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O29CQUFxQyxBQUFLLE1BWjFELEFBQ0ksQUFDSSxBQVNJLEFBQ0ksQUFBZ0QsQUFPNUQsMkJBQUEsQUFBQyx1Q0FBSyxXQUFOLEFBQWdCLFdBQVUsVUFBVSxLQUFwQyxBQUF5QyxVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUFqRSxBQUF1RTs4QkFBdkU7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDJCQUFBLEFBQUM7dUJBQUQsQUFDVSxBQUNOOytCQUZKLEFBRWtCLEFBQ2Q7dUJBQU8sS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUNOLE9BQUEsQUFBSyxTQUFTLEVBQUUsUUFBUSxNQUFBLEFBQU0sT0FEeEIsQUFDTixBQUFjLEFBQXVCO0FBTDdDOzs4QkFBQTtnQ0FIUixBQUNJLEFBRUksQUFTSjtBQVRJO0FBQ0ksaUNBUVIsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEOzhCQUFsRDtnQ0FaSixBQVlJLEFBRUE7QUFGQTtnQ0FFQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7OEJBQXBDO2dDQUFBO0FBQUE7ZUFqQ1IsQUFtQkksQUFjSSxBQUdKLDJDQUFBLEFBQUMseUNBQU8sU0FBUyxLQUFqQixBQUFzQjs4QkFBdEI7Z0NBQUE7QUFBQTtlQXJDUixBQUNJLEFBb0NJLEFBR1g7Ozs7O0FBaEdzQixBLEFBbUczQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJiYWNrLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L1dvcmtzcGFjZS9CbG9ja2NoYWluL0V0aGVyZXVtLWtpY2tzdGFydGVyL2V0aGVyZXVtL2tpY2tzdGFydCJ9