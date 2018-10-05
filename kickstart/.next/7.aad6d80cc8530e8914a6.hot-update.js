webpackHotUpdate(7,{

/***/ 1386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(432);

var _Layout = __webpack_require__(1166);

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = __webpack_require__(524);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(671);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(541);

var _campaign = __webpack_require__(1188);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\Workspace\\Blockchain\\Ethereum-kickstarter\\ethereum\\kickstart\\pages\\campaigns\\back.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\Workspace\\Blockchain\\Ethereum-kickstarter\\ethereum\\kickstart\\pages\\campaigns\\back.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\back")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5hYWQ2ZDgwY2M4NTMwZTg5MTRhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL2JhY2suanM/YjkzMjUzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBNZXNzYWdlLCBDaGVja2JveCwgRm9ybUdyb3VwLCBEcm9wZG93biwgQ29udGFpbmVyLCBFbWJlZCwgVGV4dEFyZWEsIEdyaWRSb3csIEdyaWRDb2x1bW4sIEdyaWQgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgZmFjdG9yeSBmcm9tICcuLi8uLi9ldGhlcmV1bS9mYWN0b3J5JztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xyXG5cclxuY2xhc3MgQmFja0NhbXBhaWduIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIGFtb3VudDogJycsXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgZXJyb3JNZXNzYWdlOiAnJyxcclxuICAgICAgICB0aXRsZSAgOiAnJyxcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FjY291bnQgOiAnLCBhY2NvdW50cylcclxuXHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLnVybC5xdWVyeS5hZGRyZXNzKVxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5tVGl0bGUoKS5jYWxsKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGl0bGV9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJycgfSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0FjY291bnQgOiAnLCBhY2NvdW50cylcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy51cmwucXVlcnkuYWRkcmVzcylcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjYW1wYWlnbiA6ICcgKyBjYW1wYWlnbik7XHJcblxyXG4gICAgICAgICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzXHJcbiAgICAgICAgICAgICAgICAuY29udHJpYnV0ZSgpXHJcbiAgICAgICAgICAgICAgICAuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcyMDAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9jYW1wYWlnbnMvJHt0aGlzLnByb3BzLnVybC5xdWVyeS5hZGRyZXNzfWApO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgYXN5bmMgY3JlYXRlQWNjb3VudCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCZWZvcmUgY3JlYXRlIGFjY291bnQnKVxyXG4gICAgICAgIGNvbnN0IGFjY291bnQgPSBhd2FpdCB3ZWIzLmV0aC5hY2NvdW50cy5jcmVhdGUoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBQ0NPVU5UICcsIGFjY291bnQpXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBZGRyZXNzICcsIHRoaXMucHJvcHMudXJsLnF1ZXJ5LmFkZHJlc3MpXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgICAgICA8R3JpZFJvdyBjb2x1bW5zPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRDb2x1bW4gd2lkdGg9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy51cmwucXVlcnkuYWRkcmVzc31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb250ZW50PSdCYWNrJyBpY29uPSdsZWZ0IGFycm93JyBsYWJlbFBvc2l0aW9uPSdsZWZ0JyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWRDb2x1bW4gd2lkdGg9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicgfX0+e3RoaXMuc3RhdGUudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZFJvdz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cInNlZ21lbnRcIiBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+QW1vdW50PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV0aGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYW1vdW50OiBldmVudC50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnkgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfT5CYWNrIHRvIHRoaXMgY2FtcGFpZ248L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY3JlYXRlQWNjb3VudH0+Q3JlYXRlIEFjY291bnQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFja0NhbXBhaWduO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9iYWNrLmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBSEE7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSEE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUxBO0FBQ0E7QUFLQTtBQUNBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFYQTtBQVlBO0FBSUE7QUFBQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQXBCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBc0JBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUExQkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFUQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBS0E7QUFMQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUxBOztBQUFBO0FBU0E7QUFUQTtBQUNBO0FBUUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==