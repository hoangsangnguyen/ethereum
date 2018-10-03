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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _TabCampaign = require('../components/TabCampaign');

var _TabCampaign2 = _interopRequireDefault(_TabCampaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Workspace\\Blockchain\\Ethereum-kickstarter\\ethereum\\kickstart\\pages\\index.js?entry';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'render',

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

        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, { columns: 'three', divided: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_semanticUiReact.List, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, 'September 19, 2018'), _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, 'Bringing creative projects to life.'))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.List, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'TOTAL BACKERS'), _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, '15.199.786'))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement(_semanticUiReact.List, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'FUNDED PROJECTS'), _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, '150.551'))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement(_semanticUiReact.List, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'LIVE PROJECTS'), _react2.default.createElement(_semanticUiReact.List.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, '3.622'))))), _react2.default.createElement(_semanticUiReact.Divider, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }), _react2.default.createElement(_TabCampaign2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            })));
        }
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJTZWdtZW50IiwiR3JpZCIsIkltYWdlIiwiTGFiZWwiLCJMaXN0IiwiRGl2aWRlciIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwiVGFiQ2FtcGFpZ24iLCJDYW1wYWlnbkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFTLEFBQU0sQUFBTyxBQUFPLEFBQU07O0FBQzFELEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQWlCOzs7Ozs7Ozs7SUFFbEIsQTs7Ozs7Ozs7OzthQUNGOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7O2lDQUVTLEFBQ0w7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHVDQUFLLFNBQU4sQUFBYyxTQUFRLFNBQXRCOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFHQSx1Q0FBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBO0FBQUE7QUFBQSxlQU5aLEFBQ0ksQUFDSSxBQUlJLEFBTVIsMERBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUdBLGtDQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUE7QUFBQTtBQUFBLGVBakJaLEFBWUksQUFDSSxBQUlJLEFBTVIsaUNBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUdBLG9DQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUE7QUFBQTtBQUFBLGVBNUJaLEFBdUJJLEFBQ0ksQUFJSSxBQU1SLDhCQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFHQSxrQ0FBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBO0FBQUE7QUFBQSxlQXpDcEIsQUFDSSxBQUNJLEFBa0NJLEFBQ0ksQUFJSSxBQVFoQiw4QkFBQSxBQUFDOzs4QkFBRDtnQ0FqREosQUFpREksQUFFQTtBQUZBO0FBQUEsZ0NBRUEsQUFBQzs7OEJBQUQ7Z0NBckRaLEFBQ0ksQUFDSSxBQW1ESSxBQWlCZjtBQWpCZTtBQUFBOzs7OztBQTVFUSxBLEFBZ0c1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9Xb3Jrc3BhY2UvQmxvY2tjaGFpbi9FdGhlcmV1bS1raWNrc3RhcnRlci9ldGhlcmV1bS9raWNrc3RhcnQifQ==