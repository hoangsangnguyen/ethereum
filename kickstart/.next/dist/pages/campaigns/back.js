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
                var user, userWalletAddress, campaign;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 2;
                                user = JSON.parse(localStorage.getItem("user"));

                                if (!(user == null)) {
                                    _context.next = 7;
                                    break;
                                }

                                _routes.Router.pushRoute("/author/login");
                                return _context.abrupt('return');

                            case 7:
                                userWalletAddress = user.walletAddress;

                                console.log("User walletAdress : ", userWalletAddress);

                                campaign = (0, _campaign2.default)(_this.props.url.query.address);

                                console.log('campaign : ' + campaign);
                                console.log('Amount back : ', _this.state.amount);

                                _context.next = 14;
                                return campaign.methods.contribute().send({
                                    value: _web2.default.utils.toWei(_this.state.amount, 'ether'),
                                    from: userWalletAddress
                                });

                            case 14:

                                _routes.Router.pushRoute('/campaigns/' + _this.props.url.query.address);

                                _context.next = 21;
                                break;

                            case 17:
                                _context.prev = 17;
                                _context.t0 = _context['catch'](2);

                                console.log(_context.t0.message);
                                _this.setState({ errorMessage: _context.t0.message });

                            case 21:
                                _this.setState({ loading: false });

                            case 22:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 17]]);
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
        key: 'render',
        value: function render() {
            var _this3 = this;

            console.log('Address ', this.props.url.query.address);

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement(_semanticUiReact.GridRow, { columns: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_semanticUiReact.GridColumn, { width: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.url.query.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Return', icon: 'left arrow', labelPosition: 'left', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            })))), _react2.default.createElement(_semanticUiReact.GridColumn, { width: 7, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('h3', { style: { textAlign: 'center' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, this.state.title)))), _react2.default.createElement(_semanticUiReact.Form, { className: 'segment', onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
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
                    lineNumber: 90
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, 'Back to this campaign')));
        }
    }]);

    return BackCampaign;
}(_react.Component);

exports.default = BackCampaign;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXGJhY2suanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQ2hlY2tib3giLCJGb3JtR3JvdXAiLCJEcm9wZG93biIsIkNvbnRhaW5lciIsIkVtYmVkIiwiVGV4dEFyZWEiLCJHcmlkUm93IiwiR3JpZENvbHVtbiIsIkdyaWQiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIkxpbmsiLCJDYW1wYWlnbiIsIlJvdXRlciIsIkJhY2tDYW1wYWlnbiIsInN0YXRlIiwiYW1vdW50IiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsInRpdGxlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJ1c2VyIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2hSb3V0ZSIsInVzZXJXYWxsZXRBZGRyZXNzIiwid2FsbGV0QWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciLCJjYW1wYWlnbiIsInByb3BzIiwidXJsIiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwidmFsdWUiLCJ1dGlscyIsInRvV2VpIiwiZnJvbSIsIm1lc3NhZ2UiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibVRpdGxlIiwiY2FsbCIsInRleHRBbGlnbiIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVEsQUFBTSxBQUFPLEFBQVMsQUFBVSxBQUFXLEFBQVUsQUFBVyxBQUFPLEFBQVUsQUFBUyxBQUFZOztBQUN2SCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBYyxBQUNy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