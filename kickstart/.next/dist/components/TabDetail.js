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

var _routes = require('../routes');

var _OverviewCampaign = require('./Home/OverviewCampaign');

var _OverviewCampaign2 = _interopRequireDefault(_OverviewCampaign);

var _CampaignList = require('./Home/CampaignList');

var _CampaignList2 = _interopRequireDefault(_CampaignList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Workspace\\Blockchain\\kickstart\\components\\TabDetail.js';


var TabDetail = function (_Component) {
    (0, _inherits3.default)(TabDetail, _Component);

    function TabDetail() {
        (0, _classCallCheck3.default)(this, TabDetail);

        return (0, _possibleConstructorReturn3.default)(this, (TabDetail.__proto__ || (0, _getPrototypeOf2.default)(TabDetail)).apply(this, arguments));
    }

    (0, _createClass3.default)(TabDetail, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: '29px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement('a', { style: { fontSize: '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, this.props.category), _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement('a', { style: { marginLeft: '20px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, 'View all')), _react2.default.createElement('i', { 'aria-hidden': 'true', 'class': 'arrow right disabled icon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }), _react2.default.createElement('h5', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, 'FEATURED PROJECT'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement(_OverviewCampaign2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            })), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement(_CampaignList2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            })))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var category, type;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                category = props.category.category;
                                type = props.type.type;
                                return _context.abrupt('return', { category: category, type: type });

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return TabDetail;
}(_react.Component);

exports.default = TabDetail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFRhYkRldGFpbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRhaW5lciIsIkltYWdlIiwiR3JpZCIsIkxpbmsiLCJPdmVydmlld0NhbXBhaWduIiwiQ2FtcGFpZ25MaXN0IiwiVGFiRGV0YWlsIiwibWFyZ2luVG9wIiwiZm9udFNpemUiLCJwcm9wcyIsImNhdGVnb3J5IiwibWFyZ2luTGVmdCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFXLEFBQU87O0FBQzNCLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFzQjs7OztBQUM3QixBQUFPLEFBQWtCOzs7Ozs7Ozs7SSxBQUVuQjs7Ozs7Ozs7Ozs7aUNBT08sQUFDTDttQ0FDSSxBQUFDLDRDQUFVLE9BQU8sRUFBRSxXQUFwQixBQUFrQixBQUFhOzhCQUEvQjtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSSxjQUFBLE9BQUcsT0FBTyxFQUFFLFVBQVosQUFBVSxBQUFZOzhCQUF0QjtnQ0FBQSxBQUFpQztBQUFqQztvQkFBaUMsQUFBSyxNQUQxQyxBQUNJLEFBQTRDLEFBRTVDLDJCQUFBLEFBQUMsOEJBQUssT0FBTjs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxPQUFHLE9BQU8sRUFBRSxZQUFaLEFBQVUsQUFBYzs4QkFBeEI7Z0NBQUE7QUFBQTtlQUpSLEFBR0ksQUFDSSxBQUVKLG1EQUFHLGVBQUgsQUFBZSxRQUFPLFNBQXRCLEFBQTRCOzhCQUE1QjtnQ0FOSixBQU1JLEFBRUE7QUFGQTs7OzhCQUVBO2dDQVJKLEFBUUksQUFFQTtBQUZBO0FBQUEsZ0NBRUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBVkosQUFVSSxBQUVBLHFDQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQUZSLEFBQ0ksQUFDSSxBQUVKO0FBRkk7QUFBQSxpQ0FFSCxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBbkJwQixBQUNJLEFBWUksQUFDSSxBQUlJLEFBQ0ksQUFVdkI7QUFWdUI7QUFBQTs7Ozs7aUhBMUJLLEE7Ozs7O2lDQUNqQjtBLDJDQUFhLE1BQU0sQSxTQUFuQixBLEFBQ0E7QSx1Q0FBUyxNQUFNLEEsS0FBZixBO2lFQUNELEVBQUUsVUFBRixVQUFZLE1BQVosQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUpTLEEsQUF3Q3hCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlRhYkRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Xb3Jrc3BhY2UvQmxvY2tjaGFpbi9raWNrc3RhcnQifQ==