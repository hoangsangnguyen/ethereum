'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _TabCategory = require('../components/Home/TabCategory');

var _TabCategory2 = _interopRequireDefault(_TabCategory);

var _user = require('../ethereum/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Workspace\\Blockchain\\Ethereum-kickstarter\\ethereum\\kickstart\\pages\\index.js?entry';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            totalBackers: '',
            totalCampaigns: '',
            funded: '',
            lived: ''
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
    // static async getInitialProps() {
    //     const campaigns = await factory.methods.getDeployedCampaign('art').call();
    //     return { campaigns };
    // }

    // renderCampaigns() {
    //     const items = this.props.campaigns.map((address, i) => {
    //         return {
    //             header: address,
    //             description: (
    //                 <Link route={`/campaigns/${address}`}>
    //                     <a>{this.props.campaigns[i].methods}</a>
    //                 </Link>
    //             ),
    //             fluid: true
    //         }
    //     });

    //     return <Card.Group items={items} />;
    // }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'componentDidMount',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var _this2 = this;

                var totalBackers, totalCampaigns, funded, lived;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _user2.default.methods.getTotalBackers().call();

                            case 2:
                                totalBackers = _context2.sent;
                                _context2.next = 5;
                                return _factory2.default.methods.campaignsCount().call();

                            case 5:
                                totalCampaigns = _context2.sent;
                                funded = 0;
                                _context2.next = 9;
                                return _promise2.default.all(Array(parseInt(totalCampaigns)).fill().map(function () {
                                    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(element, index) {
                                        var address, campaign, isFunded;
                                        return _regenerator2.default.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        _context.next = 2;
                                                        return _factory2.default.methods.campaignsAddress(index).call();

                                                    case 2:
                                                        address = _context.sent;
                                                        campaign = (0, _campaign2.default)(address);
                                                        _context.next = 6;
                                                        return campaign.methods.isFunded().call();

                                                    case 6:
                                                        isFunded = _context.sent;

                                                        if (isFunded == true) {
                                                            funded++;
                                                        }

                                                    case 8:
                                                    case 'end':
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee, _this2);
                                    }));

                                    return function (_x, _x2) {
                                        return _ref3.apply(this, arguments);
                                    };
                                }()));

                            case 9:
                                lived = totalCampaigns - funded;

                                this.setState({ totalBackers: totalBackers, totalCampaigns: totalCampaigns, funded: funded, lived: lived });

                            case 11:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function componentDidMount() {
                return _ref2.apply(this, arguments);
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, { columns: 'three', divided: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_semanticUiReact.List, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }), _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, 'Bringing creative projects to life.'))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement(_semanticUiReact.List, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, 'TOTAL BACKERS'), _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, this.state.totalBackers))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement(_semanticUiReact.List, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, 'FUNDED PROJECTS'), _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, this.state.funded))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, _react2.default.createElement(_semanticUiReact.List, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, 'LIVE PROJECTS'), _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }, this.state.lived))))), _react2.default.createElement(_semanticUiReact.Divider, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }), _react2.default.createElement(_TabCategory2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            })));
        }
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJTZWdtZW50IiwiR3JpZCIsIkltYWdlIiwiTGFiZWwiLCJMaXN0IiwiRGl2aWRlciIsImZhY3RvcnkiLCJDYW1wYWlnbiIsIkxheW91dCIsIkxpbmsiLCJUYWJDYXRlZ29yeSIsInVzZXJGYWN0b3J5IiwiQ2FtcGFpZ25JbmRleCIsInN0YXRlIiwidG90YWxCYWNrZXJzIiwidG90YWxDYW1wYWlnbnMiLCJmdW5kZWQiLCJsaXZlZCIsIm1ldGhvZHMiLCJnZXRUb3RhbEJhY2tlcnMiLCJjYWxsIiwiY2FtcGFpZ25zQ291bnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsIm1hcCIsImVsZW1lbnQiLCJpbmRleCIsImNhbXBhaWduc0FkZHJlc3MiLCJhZGRyZXNzIiwiY2FtcGFpZ24iLCJpc0Z1bmRlZCIsInNldFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFTLEFBQU0sQUFBTyxBQUFPLEFBQU07O0FBQzFELEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWlCOzs7Ozs7Ozs7SSxBQUVsQjs7Ozs7Ozs7Ozs7Ozs7OE4sQUFzQkY7MEJBQVEsQUFDVyxBQUNmOzRCQUZJLEFBRWEsQUFDakI7b0JBSEksQUFHSyxBQUNUO21CQUpJLEEsQUFJSTtBQUpKLEFBQ0o7QUF0Qko7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FVNkIsZUFBQSxBQUFZLFFBQVosQUFBb0Isa0JBQXBCLEFBQXNDLEE7O2lDQUEzRDtBOzt1Q0FDdUIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLGlCQUFoQixBLEFBQWlDOztpQ0FBeEQ7QSwyREFFQTtBLHlDLEFBQVM7O3lEQUVQLEFBQVEsVUFDSixTQUFOLEFBQU0sQUFBUyxpQkFBZixBQUFnQyxPQUFoQyxBQUF1QyxnQkFBdkM7eUhBQTRDLGlCQUFBLEFBQU0sU0FBTixBQUFlLE9BQWY7K0RBQUE7c0dBQUE7c0RBQUE7aUZBQUE7eURBQUE7d0VBQUE7K0RBQ3BCLGtCQUFBLEFBQVEsUUFBUixBQUFnQixpQkFBaEIsQUFBaUMsT0FEYixBQUNwQixBQUF3Qzs7eURBQXhEO0FBRG9DLDJFQUVwQztBQUZvQyxtRUFFekIsd0JBRnlCLEFBRXpCLEFBQVM7d0VBRmdCOytEQUduQixTQUFBLEFBQVMsUUFBVCxBQUFpQixXQUhFLEFBR25CLEFBQTRCOzt5REFBN0M7QUFIb0MsNEVBSXhDOzs0REFBSSxZQUFKLEFBQWdCLE1BQU0sQUFDbEI7QUFDSDtBQU51Qzs7eURBQUE7eURBQUE7d0VBQUE7O0FBQUE7b0RBQUE7QUFBNUM7OzhEQUFBO2lFQUFBO0FBQUE7QUFERSxBLG1DQUNGLENBREU7O2lDQVdGO0Esd0NBQVEsaUIsQUFBaUIsQUFDN0I7O3FDQUFBLEFBQUssU0FBUyxFQUFDLGNBQUQsY0FBZSxnQkFBZixnQkFBK0IsUUFBL0IsUUFBdUMsT0FBckQsQUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUdULEFBQ0w7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHVDQUFLLFNBQU4sQUFBYyxTQUFRLFNBQXRCOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSw2Q0FDSSxBQUFDLHNCQUFELEFBQU07OzhCQUFOO2dDQURKLEFBQ0ksQUFFQTtBQUZBO0FBQUEsZ0NBRUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQTtBQUFBO0FBQUEsZUFMWixBQUNJLEFBQ0ksQUFHSSxBQU1SLDBEQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFHQSxrQ0FBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQUNLLEFBQUssTUFqQnRCLEFBV0ksQUFDSSxBQUlJLEFBQ2dCLEFBS3hCLGlDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFHQSxvQ0FBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQUNLLEFBQUssTUE1QnRCLEFBc0JJLEFBQ0ksQUFJSSxBQUNnQixBQUt4QiwyQkFBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBR0Esa0NBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkFDSyxBQUFLLE1BekM5QixBQUNJLEFBQ0ksQUFpQ0ksQUFDSSxBQUlJLEFBQ2dCLEFBT2hDLDRCQUFBLEFBQUM7OzhCQUFEO2dDQWhESixBQWdESSxBQUVBO0FBRkE7QUFBQSxnQ0FFQSxBQUFDOzs4QkFBRDtnQ0FwRFosQUFDSSxBQUNJLEFBa0RJLEFBaUJmO0FBakJlO0FBQUE7Ozs7O0FBdkdRLEEsQUEySDVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L1dvcmtzcGFjZS9CbG9ja2NoYWluL0V0aGVyZXVtLWtpY2tzdGFydGVyL2V0aGVyZXVtL2tpY2tzdGFydCJ9