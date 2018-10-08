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
        }, (0, _defineProperty3.default)(_this$state, 'videoUrl', ''), (0, _defineProperty3.default)(_this$state, 'minimumContribution', ''), (0, _defineProperty3.default)(_this$state, 'goal', ''), (0, _defineProperty3.default)(_this$state, 'campaign', ''), (0, _defineProperty3.default)(_this$state, 'address', ''), (0, _defineProperty3.default)(_this$state, 'backed', ''), (0, _defineProperty3.default)(_this$state, 'investorCount', ''), (0, _defineProperty3.default)(_this$state, 'userWalletAddress', ''), (0, _defineProperty3.default)(_this$state, 'isBacker', false), _this$state), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'componentDidMount',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaign, info, user, isBacker, videoId;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(this.props.url.query.address);
                                _context.next = 3;
                                return campaign.methods.getCampaignInfo().call();

                            case 3:
                                info = _context.sent;
                                user = JSON.parse(localStorage.getItem("user"));

                                if (!(user != null)) {
                                    _context.next = 10;
                                    break;
                                }

                                _context.next = 8;
                                return campaign.methods.mInvestors(user.walletAddress).call();

                            case 8:
                                isBacker = _context.sent;

                                this.setState({ userWalletAddress: user.walletAddress, isBacker: isBacker != 0 });

                            case 10:
                                videoId = this.YouTubeGetID(info['videoFile']);

                                this.setState({
                                    manager: info['manager'],
                                    title: info['title'],
                                    description: info['description'],
                                    videoFile: info['videoFile'],
                                    videoUrl: 'https://www.youtube.com/embed/' + videoId,
                                    minimumContribution: info['minimumContribution'],
                                    goal: _web2.default.utils.fromWei(info['goal'], 'ether'),
                                    backed: _web2.default.utils.fromWei(info['backed'], 'ether'),
                                    investorCount: info['investorCount']
                                });

                            case 12:
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
            console.log('Investor Count : ', this.state.investorCount);

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, this.state.title), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement('div', { className: 'video-detail col-md-8', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement('div', { className: 'embed-responsive embed-responsive-16by9', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement('iframe', { width: '800',
                height: '450',
                src: this.state.videoUrl, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            })))), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement(_semanticUiReact.Divider, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }), _react2.default.createElement('div', { className: 'details', style: { marginTop: '40px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, _react2.default.createElement('div', { style: { color: 'green', 'font-size': '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            }, this.state.backed, ' Eth'), _react2.default.createElement('div', { style: { marginTop: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 99
                }
            }, 'pledged of ', this.state.goal, ' Eth goal'), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }), _react2.default.createElement('div', { style: { color: 'black', 'font-size': '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, this.state.investorCount), _react2.default.createElement('div', { style: { marginTop: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, 'backers'), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 103
                }
            }), _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.url.query.address + '/back', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            }, 'Back this project'))), _react2.default.createElement('div', { style: { marginTop: '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { circular: true, color: 'facebook', icon: 'facebook', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { circular: true, color: 'twitter', icon: 'twitter', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { circular: true, color: 'linkedin', icon: 'linkedin', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { circular: true, color: 'google plus', icon: 'google plus', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            })), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }), this.state.isBacker ? _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.url.query.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { secondary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, 'Request'))) : null)))), _react2.default.createElement('br', { style: { marginTop: '40px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            }), _react2.default.createElement(_TabCampaign2.default, { address: this.props.url.query.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 131
                }
            }));
        }
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiRW1iZWQiLCJEaXZpZGVyIiwid2ViMyIsIkNvbnRyaWJ1dGVGb3JtIiwiVGFiQ2FtcGFpZ24iLCJMaW5rIiwiUm91dGVyIiwiQ2FtcGFpZ25TaG93Iiwic3RhdGUiLCJtYW5hZ2VyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInZpZGVvVXJsIiwiY2FtcGFpZ24iLCJwcm9wcyIsInVybCIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRDYW1wYWlnbkluZm8iLCJjYWxsIiwiaW5mbyIsInVzZXIiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibUludmVzdG9ycyIsIndhbGxldEFkZHJlc3MiLCJpc0JhY2tlciIsInNldFN0YXRlIiwidXNlcldhbGxldEFkZHJlc3MiLCJ2aWRlb0lkIiwiWW91VHViZUdldElEIiwidmlkZW9GaWxlIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImdvYWwiLCJ1dGlscyIsImZyb21XZWkiLCJiYWNrZWQiLCJpbnZlc3RvckNvdW50IiwiSUQiLCJyZXBsYWNlIiwic3BsaXQiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luVG9wIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNLEFBQU0sQUFBUSxBQUFPOztBQUNwQyxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFvQjs7OztBQUMzQixBQUFPLEFBQWlCOzs7O0FBQ3hCLEFBQVMsQUFBTSxBQUFjOzs7Ozs7O0ksQUFHdkI7Ozs7Ozs7Ozs7Ozs7OzROQUNGLEE7cUJBQ2EsQUFDVCxBO21CLEFBQU8sQUFDUDt5QixBQUFhLEFBQ2I7c0JBQVU7QUFIVixrRSxBQUlVLHVFQUNXLEEsd0RBQ2YsQSw0RCxBQUNJLDJEQUNELEEsMEQsQUFDRCxpRSxBQUNPLHFFQUNJLEEsNEQsQUFDUjs7Ozs7Ozs7Ozs7aUNBSUw7QSwyQ0FBVyx3QkFBUyxLQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxNQUF4QixBQUE4QixBOzt1Q0FDNUIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsa0JBQWpCLEEsQUFBbUM7O2lDQUFoRDtBLGdEQUVBO0EsdUNBQU8sS0FBQSxBQUFLLE1BQU0sYUFBQSxBQUFhLFFBQWIsQSxBQUFYLEFBQWdDOztzQ0FDekMsUUFBUSxBOzs7Ozs7dUNBQ2EsU0FBQSxBQUFTLFFBQVQsQUFBaUIsV0FBVyxLQUE1QixBQUFpQyxlQUFqQyxBQUFnRCxBOztpQ0FBakU7QSxvREFDSjs7cUNBQUEsQUFBSyxTQUFTLEVBQUMsbUJBQW9CLEtBQXJCLEFBQTBCLGVBQWUsVUFBVyxZQUFsRSxBQUFjLEFBQWdFOztpQ0FJNUU7QSwwQ0FBVSxLQUFBLEFBQUssYUFBYSxLLEFBQWxCLEFBQWtCLEFBQUssQUFFdkM7O3FDQUFBLEFBQUs7NkNBQ1EsS0FEQyxBQUNELEFBQUssQUFDZDsyQ0FBTyxLQUZHLEFBRUgsQUFBSyxBQUNaO2lEQUFhLEtBSEgsQUFHRyxBQUFLLEFBQ2xCOytDQUFXLEtBSkQsQUFJQyxBQUFLLEFBQ2hCO2lGQUxVLEFBS2lDLEFBQzNDO3lEQUFxQixLQU5YLEFBTVcsQUFBSyxBQUMxQjswQ0FBTSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBbkIsQUFBbUIsQUFBSyxTQVBwQixBQU9KLEFBQWlDLEFBQ3ZDOzRDQUFRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxLQUFuQixBQUFtQixBQUFLLFdBUnRCLEFBUUYsQUFBbUMsQUFDM0M7bURBQWUsS0FUbkIsQUFBYyxBQVNLLEFBQUs7QUFUVixBQUNWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUMsQUFhSyxLQUFLLEFBQ2Q7Z0JBQUksS0FBSixBQUFTLEFBQ1Q7a0JBQU0sSUFBQSxBQUFJLFFBQUosQUFBWSxXQUFaLEFBQXVCLElBQXZCLEFBQTJCLE1BQWpDLEFBQU0sQUFBaUMsQUFDdkM7Z0JBQUksSUFBQSxBQUFJLE9BQVIsQUFBZSxXQUFXLEFBQ3RCO3FCQUFLLElBQUEsQUFBSSxHQUFKLEFBQU8sTUFBWixBQUFLLEFBQWEsQUFDbEI7cUJBQUssR0FBTCxBQUFLLEFBQUcsQUFDWDtBQUhELG1CQUlLLEFBQ0Q7cUJBQUEsQUFBSyxBQUNSO0FBQ0Q7bUJBQUEsQUFBTyxBQUNWOzs7O2lDQUVRLEFBQ0w7b0JBQUEsQUFBUSxJQUFSLEFBQVksY0FBYyxLQUFBLEFBQUssTUFBL0IsQUFBcUMsQUFDckM7b0JBQUEsQUFBUSxJQUFSLEFBQVksa0JBQWtCLEtBQUEsQUFBSyxNQUFuQyxBQUF5QyxBQUN6QztvQkFBQSxBQUFRLElBQVIsQUFBWSxZQUFZLEtBQUEsQUFBSyxNQUE3QixBQUFtQyxBQUNuQztvQkFBQSxBQUFRLElBQVIsQUFBWSxlQUFlLEtBQUEsQUFBSyxNQUFoQyxBQUFzQyxBQUN0QztvQkFBQSxBQUFRLElBQVIsQUFBWSwwQkFBMEIsS0FBQSxBQUFLLE1BQTNDLEFBQWlELEFBQ2pEO29CQUFBLEFBQVEsSUFBUixBQUFZLFdBQVcsS0FBQSxBQUFLLE1BQTVCLEFBQWtDLEFBQ2xDO29CQUFBLEFBQVEsSUFBUixBQUFZLGFBQWEsS0FBQSxBQUFLLE1BQTlCLEFBQW9DLEFBQ3BDO29CQUFBLEFBQVEsSUFBUixBQUFZLHFCQUFxQixLQUFBLEFBQUssTUFBdEMsQUFBNEMsQUFFNUM7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSztBQUFMO0FBQUEsb0JBQUssQUFBSyxNQURkLEFBQ0ksQUFBZ0IsQUFDaEIsd0JBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7eURBQ1ksT0FBUixBQUFjLEFBQ1Y7d0JBREosQUFDVyxBQUNQO3FCQUFLLEtBQUEsQUFBSyxNQUZkLEFBRW9COzhCQUZwQjtnQ0FKaEIsQUFDSSxBQUNJLEFBQ0ksQUFDSSxBQVNaO0FBVFk7bUNBU1gsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUM7OzhCQUFEO2dDQURKLEFBQ0ksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZSxXQUFVLE9BQU8sRUFBRSxXQUFsQyxBQUFnQyxBQUFhOzhCQUE3QztnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxTQUFLLE9BQU8sRUFBRSxPQUFGLEFBQVMsU0FBUyxhQUE5QixBQUFZLEFBQStCOzhCQUEzQztnQ0FBQSxBQUFzRDtBQUF0RDtvQkFBc0QsQUFBSyxNQUEzRCxBQUFpRSxRQURyRSxBQUNJLEFBQ0EseUJBQUEsY0FBQSxTQUFLLE9BQU8sRUFBRSxXQUFkLEFBQVksQUFBYTs4QkFBekI7Z0NBQUE7QUFBQTtlQUErQyxvQkFBQSxBQUFLLE1BQXBELEFBQTBELE1BRjlELEFBRUksQUFDQTs7OEJBQUE7Z0NBSEosQUFHSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxjQUFBLFNBQUssT0FBTyxFQUFFLE9BQUYsQUFBUyxTQUFTLGFBQTlCLEFBQVksQUFBK0I7OEJBQTNDO2dDQUFBLEFBQXNEO0FBQXREO29CQUFzRCxBQUFLLE1BSi9ELEFBSUksQUFBaUUsQUFDakUsZ0NBQUEsY0FBQSxTQUFLLE9BQU8sRUFBRSxXQUFkLEFBQVksQUFBYTs4QkFBekI7Z0NBQUE7QUFBQTtlQUxKLEFBS0ksQUFDQTs7OEJBQUE7Z0NBTkosQUFNSSxBQUNBO0FBREE7QUFBQSxnQ0FDQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxNQUFwQyxBQUEwQyxVQUFoRDs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxTQUFSOzhCQUFBO2dDQUFBO0FBQUE7ZUFUWixBQU9JLEFBQ0ksQUFDSSxBQUlSLHdDQUFBLGNBQUEsU0FBSyxPQUFPLEVBQUUsV0FBZCxBQUFZLEFBQWE7OEJBQXpCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLHlDQUFPLFVBQVIsTUFBaUIsT0FBakIsQUFBdUIsWUFBVyxNQUFsQyxBQUF1Qzs4QkFBdkM7Z0NBREosQUFDSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLE9BQWpCLEFBQXVCLFdBQVUsTUFBakMsQUFBc0M7OEJBQXRDO2dDQUZKLEFBRUksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sVUFBUixNQUFpQixPQUFqQixBQUF1QixZQUFXLE1BQWxDLEFBQXVDOzhCQUF2QztnQ0FISixBQUdJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFVBQVIsTUFBaUIsT0FBakIsQUFBdUIsZUFBYyxNQUFyQyxBQUEwQzs4QkFBMUM7Z0NBakJSLEFBYUksQUFJSSxBQUVKO0FBRkk7Ozs4QkFFSjtnQ0FuQkosQUFtQkksQUFFQztBQUZEO0FBQUEscUJBRUMsQUFBSyxNQUFMLEFBQVcsMkJBQVcsQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsTUFBcEMsQUFBMEMsVUFBaEQ7OEJBQUE7Z0NBQUEsQUFDbkI7QUFEbUI7YUFBQSxrQkFDbkIsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksQUFBQyx5Q0FBTyxXQUFSOzhCQUFBO2dDQUFBO0FBQUE7ZUFGUCxBQUFzQixBQUNuQixBQUNJLGVBekM1QixBQUVJLEFBQ0ksQUFhSSxBQUVJLEFBeUJjLEFBUTFCLGdEQUFJLE9BQU8sRUFBRSxXQUFiLEFBQVcsQUFBYTs4QkFBeEI7Z0NBbkRKLEFBbURJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHVDQUFZLFNBQVMsS0FBQSxBQUFLLE1BQUwsQUFBVyxJQUFYLEFBQWUsTUFBckMsQUFBMkM7OEJBQTNDO2dDQXJEUixBQUNJLEFBb0RJLEFBNEJYO0FBNUJXOzs7Ozs7QUF4SFcsQSxBQXVKM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9Xb3Jrc3BhY2UvQmxvY2tjaGFpbi9FdGhlcmV1bS1raWNrc3RhcnRlci9ldGhlcmV1bS9raWNrc3RhcnQifQ==