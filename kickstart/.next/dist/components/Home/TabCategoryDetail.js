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

var _routes = require('../../routes');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Workspace\\Blockchain\\Ethereum-kickstarter\\ethereum\\kickstart\\components\\Home\\TabCategoryDetail.js';


var TabCategoryDetail = function (_Component) {
    (0, _inherits3.default)(TabCategoryDetail, _Component);

    function TabCategoryDetail() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, TabCategoryDetail);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TabCategoryDetail.__proto__ || (0, _getPrototypeOf2.default)(TabCategoryDetail)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            campaigns: []
        }, _this.handleClick = function (e) {
            console.log('Click ', e);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(TabCategoryDetail, [{
        key: 'componentWillReceiveProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(nextProps) {
                var _this2 = this;

                var campaigns;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (!(this.props.campaigns !== nextProps.campaigns)) {
                                    _context2.next = 6;
                                    break;
                                }

                                console.log(this.props !== nextProps);

                                _context2.next = 4;
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

                            case 4:
                                campaigns = _context2.sent;

                                _promise2.default.all(campaigns).then(function (completed) {
                                    _this2.setState({ campaigns: completed });
                                });

                            case 6:
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
            var items = [];
            this.state.campaigns.map(function (campaign, i) {
                items.push({
                    image: { src: campaign.imageUrl, width: '100%', height: '200px' },
                    header: campaign.title,
                    description: campaign.address,
                    href: '/campaigns/' + campaign.address
                });
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, itemsPerRow: 3, centered: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_semanticUiReact.Container, { style: { marginTop: '29px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, this.renderCampaigns());
        }
    }]);

    return TabCategoryDetail;
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

exports.default = TabCategoryDetail;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhvbWVcXFRhYkNhdGVnb3J5RGV0YWlsLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ29udGFpbmVyIiwiSW1hZ2UiLCJHcmlkIiwiQ2FyZCIsIkljb24iLCJMaW5rIiwiZmFjdG9yeSIsIkNhbXBhaWduIiwiVGFiQ2F0ZWdvcnlEZXRhaWwiLCJzdGF0ZSIsImNhbXBhaWducyIsImhhbmRsZUNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJuZXh0UHJvcHMiLCJwcm9wcyIsIm1hcCIsImFkZHJlc3MiLCJpIiwiY2FtcGFpZ24iLCJtZXRob2RzIiwibVRpdGxlIiwiY2FsbCIsInRpdGxlIiwibUltYWdlRmlsZSIsImltYWdlVXJsIiwiYWxsIiwidGhlbiIsImNvbXBsZXRlZCIsInNldFN0YXRlIiwiaXRlbXMiLCJwdXNoIiwiaW1hZ2UiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwiaHJlZiIsIm1hcmdpblRvcCIsInJlbmRlckNhbXBhaWducyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFXLEFBQU8sQUFBTSxBQUFNOztBQUN2QyxBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQWM7Ozs7Ozs7OztJQUVmLEE7Ozs7Ozs7Ozs7Ozs7O3NPQUNGLEE7dUJBQVEsQSxBQUNPO0FBRFAsQUFDSixpQixBQXlCSixjQUFjLFVBQUEsQUFBQyxHQUFNLEFBQ2pCO29CQUFBLEFBQVEsSUFBUixBQUFZLFVBQVosQUFBc0IsQUFDekI7QTs7Ozs7O21IQXhCK0IsQTs7Ozs7Ozs7c0NBQ3hCLEtBQUEsQUFBSyxNQUFMLEFBQVcsY0FBYyxVQUFVLEE7OztBQUNuQzs7d0NBQUEsQUFBUSxJQUFJLEtBQUEsQUFBSyxVQUFqQixBQUEyQjs7O2lEQUVMLEFBQVUsVUFBVixBQUFvQixVQUFwQixBQUE4QixnQkFBOUI7eUhBQWtDLGlCQUFBLEFBQU8sU0FBUCxBQUFnQixHQUFoQjs2REFBQTtzR0FBQTtzREFBQTtpRkFBQTt5REFDOUM7QUFEOEMsbUVBQ25DLHdCQURtQyxBQUNuQyxBQUFTO3dFQUQwQjsrREFFbEMsU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FGaUIsQUFFbEMsQUFBMEI7O3lEQUF4QztBQUZnRCx5RUFBQTt3RUFBQTsrREFHL0IsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYUFIYyxBQUcvQixBQUE4Qjs7eURBQS9DO0FBSGdELDRFQUFBOzttRUFJN0MsQUFDSSxBQUNQO3NFQUZHLEFBRU8sQUFDVjtxRUFQZ0QsQUFJN0MsQUFHTTtBQUhOLEFBQ0g7O3lEQUxnRDt5REFBQTt3RUFBQTs7QUFBQTtvREFBQTtBQUFsQzs7K0RBQUE7aUVBQUE7QUFBQTtBLG1DQUFBOztpQ0FBbEI7QSxzREFXSjs7a0RBQUEsQUFBUSxJQUFSLEFBQVksV0FBWixBQUF1QixLQUFLLFVBQUEsQUFBQyxXQUFjLEFBQ3ZDOzJDQUFBLEFBQUssU0FBUyxFQUFFLFdBQWhCLEFBQWMsQUFBYSxBQUM5QjtBQUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBV1UsQUFDZDtnQkFBSSxRQUFKLEFBQVksQUFDWjtpQkFBQSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksVUFBQSxBQUFDLFVBQUQsQUFBVyxHQUFNLEFBQ3RDO3NCQUFBLEFBQU07MkJBQ0ssRUFBRSxLQUFLLFNBQVAsQUFBZ0IsVUFBVSxPQUExQixBQUFpQyxRQUFRLFFBRHpDLEFBQ0EsQUFBaUQsQUFDeEQ7NEJBQVEsU0FGRCxBQUVVLEFBQ2pCO2lDQUNJLFNBSkcsQUFJTSxBQUViOzBDQUFxQixTQU56QixBQUFXLEFBTXVCLEFBRXJDO0FBUmMsQUFDUDtBQUZSLEFBV0E7O2lEQUFPLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUIsT0FBTyxhQUExQixBQUF1QyxHQUFHLFVBQTFDOzhCQUFBO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBS0YsQUFDTDttQ0FDSSxBQUFDLDRDQUFVLE9BQU8sRUFBRSxXQUFwQixBQUFrQixBQUFhOzhCQUEvQjtnQ0FBQSxBQUNLO0FBREw7YUFBQSxPQURKLEFBQ0ksQUFDSyxBQUFLLEFBR2pCOzs7OztBQXZEMkIsQTs7QUEwRGhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEFBRUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiVGFiQ2F0ZWdvcnlEZXRhaWwuanMiLCJzb3VyY2VSb290IjoiRDovV29ya3NwYWNlL0Jsb2NrY2hhaW4vRXRoZXJldW0ta2lja3N0YXJ0ZXIvZXRoZXJldW0va2lja3N0YXJ0In0=