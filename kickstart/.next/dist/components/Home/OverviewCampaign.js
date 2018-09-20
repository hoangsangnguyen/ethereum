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

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Workspace\\Blockchain\\kickstart\\components\\Home\\OverviewCampaign.js';


var OverviewCampaign = function (_Component) {
    (0, _inherits3.default)(OverviewCampaign, _Component);

    function OverviewCampaign() {
        (0, _classCallCheck3.default)(this, OverviewCampaign);

        return (0, _possibleConstructorReturn3.default)(this, (OverviewCampaign.__proto__ || (0, _getPrototypeOf2.default)(OverviewCampaign)).apply(this, arguments));
    }

    (0, _createClass3.default)(OverviewCampaign, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement(_semanticUiReact.Image, {
                src: 'https://ethereum.org/images/wallpaper-homestead.jpg',
                as: 'a',
                size: 'big',
                href: 'http://google.com',
                target: '_blank',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }), _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, 'An American Requiem')), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }), _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, 'BY KAREEN M.LUCAS')), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }), _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, '37%')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var address, campaign;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.address.address;
                                campaign = (0, _campaign2.default)(address);
                                return _context.abrupt('return', { campaign: campaign });

                            case 3:
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

    return OverviewCampaign;
}(_react.Component);

exports.default = OverviewCampaign;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhvbWVcXE92ZXJ2aWV3Q2FtcGFpZ24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJJbWFnZSIsIkNvbnRhaW5lciIsIkNhbXBhaWduIiwid2ViMyIsIkxpbmsiLCJPdmVydmlld0NhbXBhaWduIiwiYWRkcmVzcyIsInByb3BzIiwiY2FtcGFpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPOztBQUNoQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBWTs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7O2lDQVFPLEFBQ0w7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDO3FCQUFELEFBQ1EsQUFDSjtvQkFGSixBQUVPLEFBQ0g7c0JBSEosQUFHUyxBQUNMO3NCQUpKLEFBSVMsQUFDTDt3QkFMSixBQUtXOzs4QkFMWDtnQ0FESixBQUNJLEFBUUE7QUFSQTtBQUNJOzs4QkFPSjtnQ0FUSixBQVNJLEFBRUE7QUFGQTtBQUFBLGdDQUVBLEFBQUMsOEJBQUssT0FBTjs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBWlIsQUFXSSxBQUNJLEFBR0o7OzhCQUFBO2dDQWZKLEFBZUksQUFFQTtBQUZBO0FBQUEsZ0NBRUEsQUFBQyw4QkFBSyxPQUFOOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFsQlIsQUFpQkksQUFDSSxBQUdKOzs4QkFBQTtnQ0FyQkosQUFxQkksQUFFQTtBQUZBO0FBQUEsZ0NBRUEsQUFBQyw4QkFBSyxPQUFOOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUF6QlosQUFDSSxBQXVCSSxBQUNJLEFBT2Y7Ozs7Ozs7Ozs7aUNBdkNXO0EsMENBQVksTUFBTSxBLFFBQWxCLEEsQUFDRjtBLDJDQUFXLHdCLEFBQUEsQUFBUztpRUFDbkIsRUFBRSxVQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKZ0IsQSxBQStDL0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiT3ZlcnZpZXdDYW1wYWlnbi5qcyIsInNvdXJjZVJvb3QiOiJEOi9Xb3Jrc3BhY2UvQmxvY2tjaGFpbi9raWNrc3RhcnQifQ==