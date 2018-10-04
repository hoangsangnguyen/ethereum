'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _ContributeFrom = require('../../components/ContributeFrom');

var _ContributeFrom2 = _interopRequireDefault(_ContributeFrom);

var _routes = require('../../routes');

var _TabCampaign = require('../../components/Detail/TabCampaign');

var _TabCampaign2 = _interopRequireDefault(_TabCampaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Workspace\\Blockchain\\Ethereum-kickstarter\\ethereum\\kickstart\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        var _ref, _this$state;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignShow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = (_this$state = {
            manager: '',
            title: '',
            description: '',
            videoUrl: ''
        }, (0, _defineProperty3.default)(_this$state, 'videoUrl', ''), (0, _defineProperty3.default)(_this$state, 'minimumContribution', ''), (0, _defineProperty3.default)(_this$state, 'goal', ''), (0, _defineProperty3.default)(_this$state, 'campaign', ''), (0, _defineProperty3.default)(_this$state, 'address', ''), _this$state), _this.backProject = function () {
            console.log('address');
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'componentDidMount',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaign, info, videoId;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(this.props.url.query.address);
                                _context.next = 3;
                                return campaign.methods.getCampaignInfo().call();

                            case 3:
                                info = _context.sent;
                                videoId = this.YouTubeGetID(info['videoFile']);

                                this.setState({
                                    manager: info['manager'],
                                    title: info['title'],
                                    description: info['description'],
                                    videoFile: info['videoFile'],
                                    videoUrl: 'https://www.youtube.com/embed/' + videoId,
                                    minimumContribution: info['minimumContribution'],
                                    goal: info['goal']
                                });

                            case 6:
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
        key: 'YouTubeGetID',
        value: function YouTubeGetID(url) {
            var ID = '';
            url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
            if (url[2] !== undefined) {
                ID = url[2].split(/[^0-9a-z_\-]/i);
                ID = ID[0];
            } else {
                ID = url;
            }
            return ID;
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('Manager : ', this.state.manager);
            console.log('description : ', this.state.description);
            console.log('title : ', this.state.title);
            console.log('videoUrl : ', this.state.videoUrl);
            console.log('minimumContribution : ', this.state.minimumContribution);
            console.log('Goal : ', this.state.goal);

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, this.state.title), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement('div', { className: 'video-detail col-md-8', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement('div', { className: 'embed-responsive embed-responsive-16by9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement('iframe', { width: '800',
                height: '450',
                src: this.state.videoUrl, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            })))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement(_semanticUiReact.Divider, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }), _react2.default.createElement('div', { className: 'details', style: { marginTop: '40px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement('div', { style: { color: 'green', 'font-size': '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, '$44,753'), _react2.default.createElement('div', { style: { marginTop: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, 'pledged of $50,000 goal'), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }), _react2.default.createElement('div', { style: { color: 'black', 'font-size': '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, '507'), _react2.default.createElement('div', { style: { marginTop: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, 'backers'), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, onClick: this.backProject, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, 'Back this project'), _react2.default.createElement('div', { style: { marginTop: '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { circular: true, color: 'facebook', icon: 'facebook', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { circular: true, color: 'twitter', icon: 'twitter', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { circular: true, color: 'linkedin', icon: 'linkedin', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { circular: true, color: 'google plus', icon: 'google plus', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            })))))), _react2.default.createElement('br', { style: { marginTop: '40px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }), _react2.default.createElement(_TabCampaign2.default, { address: this.props.url.query.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 107
                }
            }));
        }
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiRW1iZWQiLCJEaXZpZGVyIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiTGluayIsIlRhYkNhbXBhaWduIiwiQ2FtcGFpZ25TaG93Iiwic3RhdGUiLCJtYW5hZ2VyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInZpZGVvVXJsIiwiYmFja1Byb2plY3QiLCJjb25zb2xlIiwibG9nIiwiY2FtcGFpZ24iLCJwcm9wcyIsInVybCIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRDYW1wYWlnbkluZm8iLCJjYWxsIiwiaW5mbyIsInZpZGVvSWQiLCJZb3VUdWJlR2V0SUQiLCJzZXRTdGF0ZSIsInZpZGVvRmlsZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJnb2FsIiwiSUQiLCJyZXBsYWNlIiwic3BsaXQiLCJ1bmRlZmluZWQiLCJtYXJnaW5Ub3AiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQU0sQUFBTSxBQUFRLEFBQU87O0FBQ3BDLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFpQjs7Ozs7Ozs7O0lBR2xCLEE7Ozs7Ozs7Ozs7Ozs7OzROLEFBQ0Y7cUJBQ2EsQSxBQUNUO21CQUFPLEFBQ1AsQTt5QixBQUFhLEFBQ2I7c0JBQVU7QUFIVixrRSxBQUlXLHVFQUNVLEEsd0RBQ2YsQSw0RCxBQUNJLDJEQUNELEEseUJBcUJiLEEsY0FBYyxZQUFNLEFBQ2hCO29CQUFBLEFBQVEsSUFBUixBQUFZLEFBQ2Y7QTs7Ozs7Ozs7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QXpCO2dDQUFBO0FBQUE7ZUFGSixBQUVJLEFBQ0E7OzhCQUFBO2dDQUhKLEFBR0ksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQSxTQUFLLE9BQU8sRUFBRSxPQUFGLEFBQVMsU0FBUyxhQUE5QixBQUFZLEFBQStCOzhCQUEzQztnQ0FBQTtBQUFBO2VBSkosQUFJSSxBQUNBLHdCQUFBLGNBQUEsU0FBSyxPQUFPLEVBQUUsV0FBZCxBQUFZLEFBQWE7OEJBQXpCO2dDQUFBO0FBQUE7ZUFMSixBQUtJLEFBQ0E7OzhCQUFBO2dDQU5KLEFBTUksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBekIsQUFBOEI7OEJBQTlCO2dDQUFBO0FBQUE7ZUFQSixBQU9JLEFBRUEsc0NBQUEsY0FBQSxTQUFLLE9BQU8sRUFBRSxXQUFkLEFBQVksQUFBYTs4QkFBekI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMseUNBQU8sVUFBUixNQUFpQixPQUFqQixBQUF1QixZQUFXLE1BQWxDLEFBQXVDOzhCQUF2QztnQ0FESixBQUNJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFVBQVIsTUFBaUIsT0FBakIsQUFBdUIsV0FBVSxNQUFqQyxBQUFzQzs4QkFBdEM7Z0NBRkosQUFFSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLE9BQWpCLEFBQXVCLFlBQVcsTUFBbEMsQUFBdUM7OEJBQXZDO2dDQUhKLEFBR0ksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sVUFBUixNQUFpQixPQUFqQixBQUF1QixlQUFjLE1BQXJDLEFBQTBDOzhCQUExQztnQ0EvQnhCLEFBRUksQUFDSSxBQWFJLEFBRUksQUFTSSxBQUlJLEFBT3BCO0FBUG9COzJEQU9oQixPQUFPLEVBQUUsV0FBYixBQUFXLEFBQWE7OEJBQXhCO2dDQXRDSixBQXNDSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx1Q0FBWSxTQUFXLEtBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE1BQXZDLEFBQTZDOzhCQUE3QztnQ0F4Q1IsQUFDSSxBQXVDSSxBQTRCWDtBQTVCVzs7Ozs7O0FBaEdXLEEsQUErSDNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovV29ya3NwYWNlL0Jsb2NrY2hhaW4vRXRoZXJldW0ta2lja3N0YXJ0ZXIvZXRoZXJldW0va2lja3N0YXJ0In0=