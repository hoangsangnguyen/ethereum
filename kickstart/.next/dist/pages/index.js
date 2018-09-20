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

var _TabCampaign = require('../components/TabCampaign');

var _TabCampaign2 = _interopRequireDefault(_TabCampaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Workspace\\Blockchain\\kickstart\\pages\\index.js?entry';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'renderCampaigns',
        value: function renderCampaigns() {
            var items = this.props.campaigns.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 19
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    }, 'View Campaign')),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            });
        }
    }, {
        key: 'render',
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
            }), this.renderCampaigns()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaign().call();

                            case 2:
                                campaigns = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJTZWdtZW50IiwiR3JpZCIsIkltYWdlIiwiTGFiZWwiLCJMaXN0IiwiRGl2aWRlciIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwiVGFiQ2FtcGFpZ24iLCJDYW1wYWlnbkluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ24iLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQVMsQUFBTSxBQUFPLEFBQU8sQUFBTTs7QUFDMUQsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBaUI7Ozs7Ozs7OztJQUVsQixBOzs7Ozs7Ozs7OzswQ0FNZ0IsQUFDZDtnQkFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUM5Qzs7NEJBQU8sQUFDSyxBQUNSO2lEQUNJLEFBQUMsOEJBQUssdUJBQU4sQUFBMkI7c0NBQTNCO3dDQUFBLEFBQ0k7QUFESjtxQkFBQSxrQkFDSSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEsdUJBSkwsQUFHQyxBQUNJLEFBR1I7MkJBUEosQUFBTyxBQU9JLEFBRWQ7QUFUVSxBQUNIO0FBRlIsQUFBYyxBQVlkLGFBWmM7O2lEQVlQLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0YsQUFDTDttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsdUNBQUssU0FBTixBQUFjLFNBQVEsU0FBdEI7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUdBLHVDQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUE7QUFBQTtBQUFBLGVBTlosQUFDSSxBQUNJLEFBSUksQUFNUiwwREFBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBR0Esa0NBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQTtBQUFBO0FBQUEsZUFqQlosQUFZSSxBQUNJLEFBSUksQUFNUixpQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBR0Esb0NBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQTtBQUFBO0FBQUEsZUE1QlosQUF1QkksQUFDSSxBQUlJLEFBTVIsOEJBQUMsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUdBLGtDQUFDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUE7QUFBQTtBQUFBLGVBekNwQixBQUNJLEFBQ0ksQUFrQ0ksQUFDSSxBQUlJLEFBUWhCLDhCQUFBLEFBQUM7OzhCQUFEO2dDQWpESixBQWlESSxBQUVBO0FBRkE7QUFBQSxnQ0FFQSxBQUFDOzs4QkFBRDtnQ0FuREosQUFtREksQUFZQztBQVpEO0FBQUEscUJBckRaLEFBQ0ksQUFDSSxBQStESyxBQUFLLEFBS3JCOzs7Ozs7Ozs7Ozs7dUNBM0YyQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0Isc0JBQWhCLEFBQXNDLEE7O2lDQUF4RDtBO2lFQUNDLEVBQUUsV0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSGEsQSxBQWdHNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovV29ya3NwYWNlL0Jsb2NrY2hhaW4va2lja3N0YXJ0In0=