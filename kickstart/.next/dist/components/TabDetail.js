'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Workspace\\Blockchain\\Ethereum-kickstarter\\ethereum\\kickstart\\components\\TabDetail.js';


var TabDetail = function (_Component) {
    (0, _inherits3.default)(TabDetail, _Component);

    function TabDetail() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TabDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TabDetail.__proto__ || (0, _getPrototypeOf2.default)(TabDetail)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            campaigns: []
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(TabDetail, [{
        key: 'componentWillReceiveProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(nextProps) {
                var _this2 = this;

                var campaigns;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                console.log("recei", this.props, nextProps.campaigns);

                                if (!(this.props.campaigns !== nextProps.campaigns)) {
                                    _context2.next = 7;
                                    break;
                                }

                                console.log(this.props !== nextProps);

                                _context2.next = 5;
                                return nextProps.campaigns.campaigns.map(function () {
                                    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address, i) {
                                        var campaign, title, imageUrl;
                                        return _regenerator2.default.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        campaign = (0, _campaign2.default)(address);
                                                        _context.next = 3;
                                                        return campaign.methods.mTitle().call();

                                                    case 3:
                                                        title = _context.sent;
                                                        _context.next = 6;
                                                        return campaign.methods.mImageFile().call();

                                                    case 6:
                                                        imageUrl = _context.sent;
                                                        return _context.abrupt('return', {
                                                            title: title,
                                                            imageUrl: imageUrl,
                                                            address: address
                                                        });

                                                    case 8:
                                                    case 'end':
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee, _this2);
                                    }));

                                    return function (_x2, _x3) {
                                        return _ref3.apply(this, arguments);
                                    };
                                }());

                            case 5:
                                campaigns = _context2.sent;

                                // console.log("4444444444444444444444", campaigns)
                                _promise2.default.all(campaigns).then(function (completed) {
                                    // console.log('After run didMount : ', completed)
                                    _this2.setState({ campaigns: completed });
                                });

                            case 7:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function componentWillReceiveProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return componentWillReceiveProps;
        }()
    }, {
        key: 'renderCampaigns',
        value: function renderCampaigns() {
            // console.log(this.state.campaigns);
            var items = this.state.campaigns.map(function (campaign, i) {
                return {
                    header: campaign.title,
                    description:
                    // <Link route={`/campaigns/${address}`}>
                    _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 48
                        }
                    }, campaign.address)
                    // </Link>

                    , fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            console.log("111111111111111111111111111", this.state.campaigns);
            return _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: '29px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('a', { style: { fontSize: '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }), _react2.default.createElement(_routes.Link, { route: '/', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement('a', { style: { marginLeft: '20px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'View all')), _react2.default.createElement('i', { 'aria-hidden': 'true', 'class': 'arrow right disabled icon', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }), _react2.default.createElement('br', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }), _react2.default.createElement('h5', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, 'FEATURED PROJECT'), this.renderCampaigns());
        }
    }]);

    return TabDetail;
}(_react.Component);

// const TabDetail = (props) => {
//     const main = props.campaigns[props.campaigns.length - 1];
//     return (

//         <Container style={{ marginTop: '29px' }}>
//             <a style={{ fontSize: '30px' }}>{main}</a>

//             <Link route={`/`}>
//                 <a style={{ marginLeft: '20px' }}>View all</a>
//             </Link>
//             <i aria-hidden='true' class='arrow right disabled icon' />

//             <br />

//             <h5>FEATURED PROJECT</h5>

//             <Grid>
//                 <Grid.Row>
//                     <Grid.Column width={8}>
//                         <OverviewCampaign address={main} />
//                     </Grid.Column>
//                     <Grid.Column width={8}>
//                         <CampaignList />
//                     </Grid.Column>
//                 </Grid.Row>
//             </Grid>


//         </Container>
//     );
// }

// class TabDetail extends Component {

//     state = {
//         campaigns : [],
//         mainCampaign : ''

//     };


//     render() {
//         console.log('Reender campaign');
//         console.log('Index : ', this.props.campaigns);
//         let main = this.props.campaigns[this.props.campaigns.length-1];
//         console.log('Main : ', main);

//         return (

//             <Container style={{ marginTop: '29px' }}>
//                 <a style={{ fontSize: '30px' }}>{main}</a>

//                 <Link route={`/`}>
//                     <a style={{ marginLeft: '20px' }}>View all</a>
//                 </Link>
//                 <i aria-hidden='true' class='arrow right disabled icon' />

//                 <br />

//                 <h5>FEATURED PROJECT</h5>

//                 <Grid>
//                     <Grid.Row>
//                         <Grid.Column width={8}>
//                             <OverviewCampaign address = {main}/>
//                         </Grid.Column>
//                         <Grid.Column width={8}>
//                             <CampaignList />
//                         </Grid.Column>
//                     </Grid.Row>
//                 </Grid>


//             </Container>
//         );
//     }
// }

exports.default = TabDetail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFRhYkRldGFpbC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNvbnRhaW5lciIsIkltYWdlIiwiR3JpZCIsIkNhcmQiLCJMaW5rIiwiT3ZlcnZpZXdDYW1wYWlnbiIsIkNhbXBhaWduTGlzdCIsImZhY3RvcnkiLCJDYW1wYWlnbiIsIlRhYkRldGFpbCIsInN0YXRlIiwiY2FtcGFpZ25zIiwibmV4dFByb3BzIiwiY29uc29sZSIsImxvZyIsInByb3BzIiwibWFwIiwiYWRkcmVzcyIsImkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJtVGl0bGUiLCJjYWxsIiwidGl0bGUiLCJtSW1hZ2VGaWxlIiwiaW1hZ2VVcmwiLCJhbGwiLCJ0aGVuIiwiY29tcGxldGVkIiwic2V0U3RhdGUiLCJpdGVtcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJtYXJnaW5Ub3AiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJyZW5kZXJDYW1wYWlnbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBVyxBQUFPLEFBQU07O0FBQ2pDLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFzQjs7OztBQUM3QixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWM7Ozs7Ozs7OztJLEFBRWY7Ozs7Ozs7Ozs7Ozs7O3NOLEFBQ0Y7dUJBQVEsQUFDUSxBO0FBRFIsQUFDSjs7Ozs7O21ILEFBRzRCOzs7Ozs7O2lDQUM1Qjt3Q0FBQSxBQUFRLElBQVIsQUFBWSxTQUFTLEtBQXJCLEFBQTBCLE9BQU8sVUFBakMsQUFBMkM7O3NDQUN0QyxLQUFBLEFBQUssTUFBTCxBQUFXLGNBQWMsVUFBVSxBOzs7QUFDeEM7O3dDQUFBLEFBQVEsSUFBSSxLQUFBLEFBQUssVUFBakIsQUFBMkI7OztpREFFRCxBQUFVLFVBQVYsQUFBb0IsVUFBcEIsQUFBOEIsZ0JBQTlCO3lIQUFtQyxpQkFBQSxBQUFPLFNBQVAsQUFBZ0IsR0FBaEI7NkRBQUE7c0dBQUE7c0RBQUE7aUZBQUE7eURBQy9DO0FBRCtDLG1FQUNwQyx3QkFEb0MsQUFDcEMsQUFBUzt3RUFEMkI7K0RBRW5DLFNBQUEsQUFBUyxRQUFULEFBQWlCLFNBRmtCLEFBRW5DLEFBQTBCOzt5REFBeEM7QUFGaUQseUVBQUE7d0VBQUE7K0RBR2hDLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBSGUsQUFHaEMsQUFBOEI7O3lEQUEvQztBQUhpRCw0RUFBQTs7bUVBSzlDLEFBQ0ssQUFDUjtzRUFGRyxBQUVRLEFBQ1g7cUVBUmlELEFBSzlDLEFBR087QUFIUCxBQUNIOzt5REFOaUQ7eURBQUE7d0VBQUE7O0FBQUE7b0RBQUE7QUFBbkM7OytEQUFBO2lFQUFBO0FBQUE7QSxtQ0FBQTs7aUNBQWxCO0Esc0RBWUo7O0FBQ0E7a0RBQUEsQUFBUSxJQUFSLEFBQVksV0FBWixBQUF1QixLQUFLLFVBQUEsQUFBQyxXQUFjLEFBQ3ZDO0FBQ0E7MkNBQUEsQUFBSyxTQUFTLEVBQUMsV0FBZixBQUFjLEFBQWEsQUFDOUI7QUFIRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQVNVLEFBQ2Q7QUFDSTtnQkFBSSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSyxVQUFBLEFBQUMsVUFBRCxBQUFXLEdBQU0sQUFDbkQ7OzRCQUNZLFNBREwsQUFDYyxBQUNqQjtBQUNJO0FBQ0k7b0NBQUEsY0FBQTs7c0NBQUE7d0NBQUEsQUFBSTtBQUFKO0FBQUEsZ0NBQUEsQUFBYSxBQUNqQjtBQUxELEFBT0g7O0FBUEcsQUFDSCw2QkFESixBQUFPLEFBT0ksQUFFZDs7QUFWRCxBQUFZLEFBWVosYUFaWTs7aURBWUwsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FHTixBQUNMO29CQUFBLEFBQVEsSUFBUixBQUFZLCtCQUErQixLQUFBLEFBQUssTUFBaEQsQUFBc0QsQUFDdEQ7bUNBRUksQUFBQyw0Q0FBVSxPQUFPLEVBQUUsV0FBcEIsQUFBa0IsQUFBYTs4QkFBL0I7Z0NBQUEsQUFDSTtBQURKO2FBQUEsdUNBQ08sT0FBTyxFQUFFLFVBQVosQUFBVSxBQUFZOzhCQUF0QjtnQ0FESixBQUNJLEFBRUE7QUFGQTtnQ0FFQSxBQUFDLDhCQUFLLE9BQU47OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsT0FBRyxPQUFPLEVBQUUsWUFBWixBQUFVLEFBQWM7OEJBQXhCO2dDQUFBO0FBQUE7ZUFKUixBQUdJLEFBQ0ksQUFFSixtREFBRyxlQUFILEFBQWUsUUFBTyxTQUF0QixBQUE0Qjs4QkFBNUI7Z0NBTkosQUFNSSxBQUVBO0FBRkE7Ozs4QkFFQTtnQ0FSSixBQVFJLEFBRUE7QUFGQTtBQUFBLGdDQUVBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQVZKLEFBVUksQUFZQywwQkF4QlQsQUFFSSxBQXNCSyxBQUFLLEFBS2pCOzs7OztBQWhGbUIsQTs7QUFtRnhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEFBRUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiVGFiRGV0YWlsLmpzIiwic291cmNlUm9vdCI6IkQ6L1dvcmtzcGFjZS9CbG9ja2NoYWluL0V0aGVyZXVtLWtpY2tzdGFydGVyL2V0aGVyZXVtL2tpY2tzdGFydCJ9