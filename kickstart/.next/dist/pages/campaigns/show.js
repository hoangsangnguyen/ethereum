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

var _TabCampaign = require('../../components/Detail/TabCampaign');

var _TabCampaign2 = _interopRequireDefault(_TabCampaign);

var _routes = require('../../routes');

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
        }, (0, _defineProperty3.default)(_this$state, 'videoUrl', ''), (0, _defineProperty3.default)(_this$state, 'minimumContribution', ''), (0, _defineProperty3.default)(_this$state, 'goal', ''), (0, _defineProperty3.default)(_this$state, 'campaign', ''), (0, _defineProperty3.default)(_this$state, 'address', ''), (0, _defineProperty3.default)(_this$state, 'backed', ''), _this$state), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
                                    goal: _web2.default.utils.fromWei(info['goal'], 'ether'),
                                    backed: _web2.default.utils.fromWei(info['backed'], 'ether')
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
            console.log('Backed : ', this.state.backed);

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
            }, this.state.backed, ' Eth'), _react2.default.createElement('div', { style: { marginTop: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, 'pledged of ', this.state.goal, ' Eth goal'), _react2.default.createElement('br', {
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
            }), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.url.query.address + '/back', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, 'Back this project'))), _react2.default.createElement('div', { style: { marginTop: '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { circular: true, color: 'facebook', icon: 'facebook', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { circular: true, color: 'twitter', icon: 'twitter', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { circular: true, color: 'linkedin', icon: 'linkedin', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { circular: true, color: 'google plus', icon: 'google plus', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            })))))), _react2.default.createElement('br', { style: { marginTop: '40px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }), _react2.default.createElement(_TabCampaign2.default, { address: this.props.url.query.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }));
        }
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiRW1iZWQiLCJEaXZpZGVyIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiVGFiQ2FtcGFpZ24iLCJMaW5rIiwiUm91dGVyIiwiQ2FtcGFpZ25TaG93Iiwic3RhdGUiLCJtYW5hZ2VyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInZpZGVvVXJsIiwiY2FtcGFpZ24iLCJwcm9wcyIsInVybCIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRDYW1wYWlnbkluZm8iLCJjYWxsIiwiaW5mbyIsInZpZGVvSWQiLCJZb3VUdWJlR2V0SUQiLCJzZXRTdGF0ZSIsInZpZGVvRmlsZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJnb2FsIiwidXRpbHMiLCJmcm9tV2VpIiwiYmFja2VkIiwiSUQiLCJyZXBsYWNlIiwic3BsaXQiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luVG9wIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNLEFBQU0sQUFBUSxBQUFPOztBQUNwQyxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQVEsQUFBTSxBQUFjOzs7Ozs7O0lBR3RCLEE7Ozs7Ozs7Ozs7Ozs7OzROLEFBQ0Y7cUIsQUFDYSxBQUNUO21CLEFBQU8sQUFDUDt5QixBQUFhLEFBQ2I7c0JBQVU7QUFIVixrRSxBQUlVLHVFLEFBQ1csd0QsQUFDZiw0REFDSSxBLDJEQUNELEEsMEQsQUFDQTs7Ozs7Ozs7Ozs7aUNBSUg7QSwyQ0FBVyx3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O0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLE9BQWpCLEFBQXVCLFlBQVcsTUFBbEMsQUFBdUM7OEJBQXZDO2dDQUhKLEFBR0ksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sVUFBUixNQUFpQixPQUFqQixBQUF1QixlQUFjLE1BQXJDLEFBQTBDOzhCQUExQztnQ0FuQ3hCLEFBRUksQUFDSSxBQWFJLEFBRUksQUFhSSxBQUlJLEFBT3BCO0FBUG9COzJEQU9oQixPQUFPLEVBQUUsV0FBYixBQUFXLEFBQWE7OEJBQXhCO2dDQTFDSixBQTBDSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx1Q0FBWSxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE1BQXJDLEFBQTJDOzhCQUEzQztnQ0E1Q1IsQUFDSSxBQTJDSSxBQTRCWDtBQTVCVzs7Ozs7O0FBcEdXLEEsQUFtSTNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovV29ya3NwYWNlL0Jsb2NrY2hhaW4vRXRoZXJldW0ta2lja3N0YXJ0ZXIvZXRoZXJldW0va2lja3N0YXJ0In0=