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

var _jsxFileName = 'D:\\Workspace\\Blockchain\\Ethereum-kickstarter\\ethereum\\kickstart\\components\\Home\\OverviewCampaign.js';


// const OverviewCampaign = (props) => {
//     const campaign = Campaign(props.address);
//     console.log('Campaign in detail : ', campaign);
//     if (campaign.options.address == null)
//         return null;
//     const imageFile = campaign.methods.mImageFile().call();
//     console.log('Campaign in detail : ', imageFile);
//     return (
//         <Container>
//             <Image
//                 src={imageFile}
//                 as='a'
//                 size='big'
//                 href='http://google.com'
//                 target='_blank'
//             />

//             <br />

//             <Link route={`/`}>
//                 <a>An American Requiem</a>
//             </Link>

//             <br />

//             <Link route={`/`}>
//                 <a>BY KAREEN M.LUCAS</a>
//             </Link>

//             <br />

//             <Link route={`/`}>
//                 <a>37%</a>
//             </Link>

//         </Container>

//     );

// }

var OverviewCampaign = function (_Component) {
    (0, _inherits3.default)(OverviewCampaign, _Component);

    function OverviewCampaign() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, OverviewCampaign);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = OverviewCampaign.__proto__ || (0, _getPrototypeOf2.default)(OverviewCampaign)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            imageUrl: ''
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(OverviewCampaign, [{
        key: 'componentDidMount',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaign, imageUrl;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(this.props.address);
                                _context.next = 3;
                                return campaign.methods.mImageFile().call();

                            case 3:
                                imageUrl = _context.sent;

                                this.setState({ imageUrl: imageUrl });

                            case 5:
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
            console.log('Image url : ', this.state.imageUrl);

            return _react2.default.createElement(_semanticUiReact.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement(_semanticUiReact.Image, {
                src: this.state.imageUrl,
                as: 'a',
                size: 'big',
                href: 'http://google.com',
                target: '_blank',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }), _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'An American Requiem')), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }), _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, 'BY KAREEN M.LUCAS')), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }), _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, '37%')));
        }
    }]);

    return OverviewCampaign;
}(_react.Component);

exports.default = OverviewCampaign;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhvbWVcXE92ZXJ2aWV3Q2FtcGFpZ24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJJbWFnZSIsIkNvbnRhaW5lciIsIkNhbXBhaWduIiwid2ViMyIsIkxpbmsiLCJPdmVydmlld0NhbXBhaWduIiwic3RhdGUiLCJpbWFnZVVybCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwibWV0aG9kcyIsIm1JbWFnZUZpbGUiLCJjYWxsIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTzs7QUFDaEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVk7Ozs7Ozs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0lBRU0sQTs7Ozs7Ozs7Ozs7Ozs7b08sQUFDRjtzQkFBUSxBLEFBQ087QUFEUCxBQUNKOzs7Ozs7Ozs7OztpQ0FJTTtBLDJDQUFXLHdCQUFTLEtBQUEsQUFBSyxNQUFkLEEsQUFBb0I7O3VDQUNkLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWEsQSxBQUE5Qjs7aUNBQWpCO0Esb0RBQ047O3FDQUFBLEFBQUssU0FBUyxFQUFDLFVBQWYsQUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUdULEFBQ0w7b0JBQUEsQUFBUSxJQUFSLEFBQVksZ0JBQWdCLEtBQUEsQUFBSyxNQUFqQyxBQUF1QyxBQUV2Qzs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDO3FCQUNRLEtBQUEsQUFBSyxNQURkLEFBQ29CLEFBQ2hCO29CQUZKLEFBRU8sQUFDSDtzQkFISixBQUdTLEFBQ0w7c0JBSkosQUFJUyxBQUNMO3dCQUxKLEFBS1c7OzhCQUxYO2dDQURKLEFBQ0ksQUFRQTtBQVJBO0FBQ0k7OzhCQU9KO2dDQVRKLEFBU0ksQUFFQTtBQUZBO0FBQUEsZ0NBRUEsQUFBQyw4QkFBSyxPQUFOOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFaUixBQVdJLEFBQ0ksQUFHSjs7OEJBQUE7Z0NBZkosQUFlSSxBQUVBO0FBRkE7QUFBQSxnQ0FFQSxBQUFDLDhCQUFLLE9BQU47OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQWxCUixBQWlCSSxBQUNJLEFBR0o7OzhCQUFBO2dDQXJCSixBQXFCSSxBQUVBO0FBRkE7QUFBQSxnQ0FFQSxBQUFDLDhCQUFLLE9BQU47OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQXpCWixBQUNJLEFBdUJJLEFBQ0ksQUFPZjs7Ozs7QUE5QzBCLEEsQUFvRC9COztrQkFBQSxBQUFlIiwiZmlsZSI6Ik92ZXJ2aWV3Q2FtcGFpZ24uanMiLCJzb3VyY2VSb290IjoiRDovV29ya3NwYWNlL0Jsb2NrY2hhaW4vRXRoZXJldW0ta2lja3N0YXJ0ZXIvZXRoZXJldW0va2lja3N0YXJ0In0=