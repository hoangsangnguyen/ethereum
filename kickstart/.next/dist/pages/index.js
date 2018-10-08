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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

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
            totalBackers: ''
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
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var totalBackers;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _user2.default.methods.getTotalBackers().call();

                            case 2:
                                totalBackers = _context.sent;

                                this.setState({ totalBackers: totalBackers });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
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
                    lineNumber: 42
                }
            }, _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, { columns: 'three', divided: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_semanticUiReact.List, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }), _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, 'Bringing creative projects to life.'))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(_semanticUiReact.List, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'TOTAL BACKERS'), _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, this.state.totalBackers))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(_semanticUiReact.List, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'FUNDED PROJECTS'), _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, '150.551'))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, _react2.default.createElement(_semanticUiReact.List, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, 'LIVE PROJECTS'), _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, '3.622'))))), _react2.default.createElement(_semanticUiReact.Divider, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }), _react2.default.createElement(_TabCategory2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            })));
        }
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJTZWdtZW50IiwiR3JpZCIsIkltYWdlIiwiTGFiZWwiLCJMaXN0IiwiRGl2aWRlciIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwiVGFiQ2F0ZWdvcnkiLCJ1c2VyRmFjdG9yeSIsIkNhbXBhaWduSW5kZXgiLCJzdGF0ZSIsInRvdGFsQmFja2VycyIsIm1ldGhvZHMiLCJnZXRUb3RhbEJhY2tlcnMiLCJjYWxsIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBUyxBQUFNLEFBQU8sQUFBTyxBQUFNOztBQUMxRCxBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFpQjs7OztBQUN4QixBQUFPLEFBQWlCOzs7Ozs7Ozs7SSxBQUVsQjs7Ozs7Ozs7Ozs7Ozs7OE5Bc0JGLEE7MEJBQVEsQUFDVyxBO0FBRFgsQUFDSjtBQXRCSjtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozt1Q0FPNkIsZUFBQSxBQUFZLFFBQVosQUFBb0Isa0IsQUFBcEIsQUFBc0M7O2lDQUEzRDtBLHdEQUNKOztxQ0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFmLEFBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FHVCxBQUNMO21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx1Q0FBSyxTQUFOLEFBQWMsU0FBUSxTQUF0Qjs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsNkNBQ0ksQUFBQyxzQkFBRCxBQUFNOzs4QkFBTjtnQ0FESixBQUNJLEFBRUE7QUFGQTtBQUFBLGdDQUVDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUE7QUFBQTtBQUFBLGVBTFosQUFDSSxBQUNJLEFBR0ksQUFNUiwwREFBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBR0Esa0NBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNLO0FBREw7QUFBQSxvQkFDSyxBQUFLLE1BakJ0QixBQVdJLEFBQ0ksQUFJSSxBQUNnQixBQUt4QixpQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBR0Esb0NBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQTtBQUFBO0FBQUEsZUEzQlosQUFzQkksQUFDSSxBQUlJLEFBTVIsOEJBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUdBLGtDQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUE7QUFBQTtBQUFBLGVBeENwQixBQUNJLEFBQ0ksQUFpQ0ksQUFDSSxBQUlJLEFBUWhCLDhCQUFBLEFBQUM7OzhCQUFEO2dDQWhESixBQWdESSxBQUVBO0FBRkE7QUFBQSxnQ0FFQSxBQUFDOzs4QkFBRDtnQ0FwRFosQUFDSSxBQUNJLEFBa0RJLEFBaUJmO0FBakJlO0FBQUE7Ozs7O0FBcEZRLEEsQUF3RzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L1dvcmtzcGFjZS9CbG9ja2NoYWluL0V0aGVyZXVtLWtpY2tzdGFydGVyL2V0aGVyZXVtL2tpY2tzdGFydCJ9