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
        }, (0, _defineProperty3.default)(_this$state, 'videoUrl', ''), (0, _defineProperty3.default)(_this$state, 'minimumContribution', ''), (0, _defineProperty3.default)(_this$state, 'goal', ''), (0, _defineProperty3.default)(_this$state, 'campaign', ''), (0, _defineProperty3.default)(_this$state, 'address', ''), _this$state), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
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
                    lineNumber: 64
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, this.state.title), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement('div', { className: 'video-detail col-md-8', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement('div', { className: 'embed-responsive embed-responsive-16by9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('iframe', { width: '800',
                height: '450',
                src: this.state.videoUrl, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            })))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement(_semanticUiReact.Divider, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }), _react2.default.createElement('div', { className: 'details', style: { marginTop: '40px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, _react2.default.createElement('div', { style: { color: 'green', 'font-size': '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, '$44,753'), _react2.default.createElement('div', { style: { marginTop: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, 'pledged of $50,000 goal'), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }), _react2.default.createElement('div', { style: { color: 'black', 'font-size': '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, '507'), _react2.default.createElement('div', { style: { marginTop: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, 'backers'), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.url.query.address + '/back', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, 'Back this project'))), _react2.default.createElement('div', { style: { marginTop: '30px' }, __source: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiRW1iZWQiLCJEaXZpZGVyIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiVGFiQ2FtcGFpZ24iLCJMaW5rIiwiUm91dGVyIiwiQ2FtcGFpZ25TaG93Iiwic3RhdGUiLCJtYW5hZ2VyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInZpZGVvVXJsIiwiY2FtcGFpZ24iLCJwcm9wcyIsInVybCIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRDYW1wYWlnbkluZm8iLCJjYWxsIiwiaW5mbyIsInZpZGVvSWQiLCJZb3VUdWJlR2V0SUQiLCJzZXRTdGF0ZSIsInZpZGVvRmlsZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJnb2FsIiwiSUQiLCJyZXBsYWNlIiwic3BsaXQiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luVG9wIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNLEFBQU0sQUFBUSxBQUFPOztBQUNwQyxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQVEsQUFBTSxBQUFjOzs7Ozs7O0lBR3RCLEE7Ozs7Ozs7Ozs7Ozs7OzROLEFBQ0Y7cUIsQUFDYSxBQUNUO21CLEFBQU8sQUFDUDt5QixBQUFhLEFBQ2I7c0JBQVU7QUFIVixrRSxBQUlVLHVFQUNXLEEsd0RBQ2YsQSw0REFDSSxBLDJELEFBQ0Q7Ozs7Ozs7Ozs7O2lDQUlIO0EsMkNBQVcsd0JBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUs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QUFEQTtBQUFBLGdDQUNBLGNBQUEsU0FBSyxPQUFPLEVBQUUsT0FBRixBQUFTLFNBQVMsYUFBOUIsQUFBWSxBQUErQjs4QkFBM0M7Z0NBQUE7QUFBQTtlQUpKLEFBSUksQUFDQSx3QkFBQSxjQUFBLFNBQUssT0FBTyxFQUFFLFdBQWQsQUFBWSxBQUFhOzhCQUF6QjtnQ0FBQTtBQUFBO2VBTEosQUFLSSxBQUNBOzs4QkFBQTtnQ0FOSixBQU1JLEFBQ0E7QUFEQTtBQUFBLGdDQUNBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE1BQXBDLEFBQTBDLFVBQWhEOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQVRaLEFBT0ksQUFDSSxBQUNJLEFBSVIsd0NBQUEsY0FBQSxTQUFLLE9BQU8sRUFBRSxXQUFkLEFBQVksQUFBYTs4QkFBekI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMseUNBQU8sVUFBUixNQUFpQixPQUFqQixBQUF1QixZQUFXLE1BQWxDLEFBQXVDOzhCQUF2QztnQ0FESixBQUNJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFVBQVIsTUFBaUIsT0FBakIsQUFBdUIsV0FBVSxNQUFqQyxBQUFzQzs4QkFBdEM7Z0NBRkosQUFFSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLE9BQWpCLEFBQXVCLFlBQVcsTUFBbEMsQUFBdUM7OEJBQXZDO2dDQUhKLEFBR0ksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sVUFBUixNQUFpQixPQUFqQixBQUF1QixlQUFjLE1BQXJDLEFBQTBDOzhCQUExQztnQ0FuQ3hCLEFBRUksQUFDSSxBQWFJLEFBRUksQUFhSSxBQUlJLEFBT3BCO0FBUG9COzJEQU9oQixPQUFPLEVBQUUsV0FBYixBQUFXLEFBQWE7OEJBQXhCO2dDQTFDSixBQTBDSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx1Q0FBWSxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE1BQXJDLEFBQTJDOzhCQUEzQztnQ0E1Q1IsQUFDSSxBQTJDSSxBQTRCWDtBQTVCVzs7Ozs7O0FBaEdXLEEsQUErSDNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovV29ya3NwYWNlL0Jsb2NrY2hhaW4vRXRoZXJldW0ta2lja3N0YXJ0ZXIvZXRoZXJldW0va2lja3N0YXJ0In0=