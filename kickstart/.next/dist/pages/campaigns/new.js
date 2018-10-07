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

var _semanticUiReact = require('semantic-ui-react');

var _videoReact = require('video-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

var _common = require('../../utils/common');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactPlayer = require('react-player');

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

var _semanticUiCalendarReact = require('semantic-ui-calendar-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Workspace\\Blockchain\\Ethereum-kickstarter\\ethereum\\kickstart\\pages\\campaigns\\new.js?entry';


var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            errorMessage: '',
            loading: false,
            name: '',
            category: '',
            description: '',
            minimumContribution: '',
            goal: '',
            investmentDescription: '',
            imageFile: '',
            imagePreviewUrl: '',
            videoFile: '',
            videoPreviewUrl: ''
        }, _this.categories = [{
            text: 'Art',
            value: 'art'
        }, {
            text: 'Design & Tech',
            value: 'design-tech'
        }, {
            text: 'Comics & Illustration',
            value: 'comics-illustration'
        }, {
            text: 'Games',
            value: 'games'
        }, {
            text: 'Food & Craft',
            value: 'food-craft'
        }, {
            text: 'Music',
            value: 'music'
        }, {
            text: 'Publishing',
            value: 'publishing'
        }, {
            text: 'Film',
            value: 'film'
        }], _this.handleChange = function (event, _ref2) {
            var name = _ref2.name,
                value = _ref2.value;

            if (_this.state.hasOwnProperty(name)) {
                _this.setState((0, _defineProperty3.default)({}, name, value));
            }
        }, _this.onSubmit = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true, errorMessage: '' });
                                console.log('name ' + _this.state.name + ' \ncategory : ' + _this.state.category + '\nMinimum : ' + _this.state.minimumContribution + '\nDes : ' + _this.state.description + '\nGoal : ' + _this.state.goal + '\nInvestDes : ' + _this.state.investmentDescription) + '\nImageFile : ' + _this.state.imagePreviewUrl + '\nVideoFile : ' + _this.state.videoPreviewUrl;

                                _context.prev = 3;
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                accounts = _context.sent;

                                console.log('account : ' + accounts);
                                _context.next = 10;
                                return _factory2.default.methods.createCampaign(_this.state.name, _this.state.category, _web2.default.utils.toWei(_this.state.minimumContribution, 'ether'), _this.state.description, 'https://pbs.twimg.com/profile_images/626149701189042177/LWpxKEv3_400x400.png', 'https://www.youtube.com/watch?v=1njYc9ZO6WQ', _web2.default.utils.toWei(_this.state.goal, 'ether'), _this.state.investmentDescription).send({
                                    from: accounts[0]
                                });

                            case 10:

                                _routes.Router.pushRoute('/');
                                _context.next = 17;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](3);

                                console.log(_context.t0.message);
                                _this.setState({ errorMessage: _context.t0.message });

                            case 17:
                                _this.setState({ loading: false });

                            case 18:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 13]]);
            }));

            return function (_x) {
                return _ref3.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: '_handleDeleteImage',
        value: function _handleDeleteImage(e) {
            e.preventDefault();
            this.setState({ imageFile: '', imagePreviewUrl: '' });
        }
    }, {
        key: '_handleDeleteVideo',
        value: function _handleDeleteVideo(e) {
            e.preventDefault();
            this.setState({ videoFile: '', videoPreviewUrl: '' });
        }
    }, {
        key: '_handleImageChange',
        value: function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(e) {
                var _this3 = this;

                var reader, file;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                e.preventDefault();

                                reader = new FileReader();
                                file = e.target.files[0];

                                reader.onloadend = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                                    return _regenerator2.default.wrap(function _callee2$(_context2) {
                                        while (1) {
                                            switch (_context2.prev = _context2.next) {
                                                case 0:
                                                    _context2.next = 2;
                                                    return _this3.setState({
                                                        imageFile: file,
                                                        imagePreviewUrl: reader.result
                                                    });

                                                case 2:
                                                case 'end':
                                                    return _context2.stop();
                                            }
                                        }
                                    }, _callee2, _this3);
                                }));

                                reader.readAsDataURL(file);

                            case 5:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function _handleImageChange(_x2) {
                return _ref4.apply(this, arguments);
            }

            return _handleImageChange;
        }()
    }, {
        key: '_handleVideoChange',
        value: function _handleVideoChange(e) {
            var _this4 = this;

            e.preventDefault();

            var reader = new FileReader();
            var file = e.target.files[0];

            reader.onloadend = function () {
                _this4.setState({
                    videoFile: file,
                    videoPreviewUrl: reader.result
                });
            };

            reader.readAsDataURL(file);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            console.log('image file : ', this.state.imagePreviewUrl);
            console.log('video file : ', this.state.videoPreviewUrl);

            var imagePreviewUrl = this.state.imagePreviewUrl;

            var $imagePreview = null;
            if (imagePreviewUrl) {
                $imagePreview = _react2.default.createElement(_semanticUiReact.Container, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 166
                    }
                }, _react2.default.createElement('img', {
                    src: imagePreviewUrl,
                    height: '300px',
                    width: '300px', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 167
                    }
                }), _react2.default.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 171
                    }
                }), _react2.default.createElement(_semanticUiReact.Button, {
                    basic: true, color: 'red',
                    onClick: function onClick(e) {
                        return _this5._handleDeleteImage(e);
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 172
                    }
                }, 'Delete Image'));
            } else {
                //$imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
            }

            var videoPreviewUrl = this.state.videoPreviewUrl;

            var $videoPreview = null;
            if (videoPreviewUrl) {
                $videoPreview = _react2.default.createElement(_semanticUiReact.Container, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 186
                    }
                }, _react2.default.createElement(_reactPlayer2.default, { url: videoPreviewUrl, controls: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 187
                    }
                }), _react2.default.createElement('br', {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 188
                    }
                }), _react2.default.createElement(_semanticUiReact.Button, {
                    basic: true, color: 'red',
                    onClick: function onClick(e) {
                        return _this5._handleDeleteVideo(e);
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 189
                    }
                }, 'Delete Video'));
            } else {
                //$imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
            }

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 200
                }
            }, _react2.default.createElement('h5', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 201
                }
            }, 'Create new campaign'), _react2.default.createElement(_semanticUiReact.Form, { className: 'segment', onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 203
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 205
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 206
                }
            }, 'Category'), _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Select Friend',
                fluid: true, selection: true,
                options: this.categories,
                onChange: function onChange(event, _ref6) {
                    var value = _ref6.value;
                    return _this5.setState({ category: value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 207
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 214
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 215
                }
            }, 'Campaign name'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.name,
                onChange: function onChange(event) {
                    return _this5.setState({ name: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 216
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 223
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 224
                }
            }, 'Minimum Contribution'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei',
                labelPosition: 'right',
                value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    return _this5.setState({ minimumContribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 225
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 234
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 235
                }
            }, 'Campaign Description'), _react2.default.createElement(_semanticUiReact.TextArea, {
                autoHeight: true,
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this5.setState({ description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 236
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 244
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 245
                }
            }, 'Goal'), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'wei',
                labelPosition: 'right',
                value: this.state.goal,
                onChange: function onChange(event) {
                    return _this5.setState({ goal: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 246
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 266
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 267
                }
            }, 'Investment Description'), _react2.default.createElement(_semanticUiReact.TextArea, {
                autoHeight: true,
                value: this.state.investmentDescription,
                onChange: function onChange(event) {
                    return _this5.setState({ investmentDescription: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 268
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 276
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 277
                }
            }, 'Image'), _react2.default.createElement('input', { className: 'fileInput',
                type: 'file',
                onChange: function onChange(e) {
                    return _this5._handleImageChange(e);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 278
                }
            }), _react2.default.createElement('div', { className: 'imgPreview', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 282
                }
            }, $imagePreview)), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 287
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 288
                }
            }, 'Video'), _react2.default.createElement('input', { className: 'fileInput',
                type: 'file',
                onChange: function onChange(e) {
                    return _this5._handleVideoChange(e);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 289
                }
            }), _react2.default.createElement('div', { className: 'videoPreview', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 293
                }
            }, $videoPreview)), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 298
                }
            }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: 'I agree to the Terms and Conditions', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 299
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 302
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 305
                }
            }, 'Create')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJDaGVja2JveCIsIkZvcm1Hcm91cCIsIkRyb3Bkb3duIiwiQ29udGFpbmVyIiwiRW1iZWQiLCJUZXh0QXJlYSIsIlBsYXllciIsIkxheW91dCIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwiQ29tbW9uIiwiYXhpb3MiLCJSZWFjdFBsYXllciIsIkRhdGVJbnB1dCIsIlRpbWVJbnB1dCIsIkRhdGVUaW1lSW5wdXQiLCJEYXRlc1JhbmdlSW5wdXQiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm5hbWUiLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImdvYWwiLCJpbnZlc3RtZW50RGVzY3JpcHRpb24iLCJpbWFnZUZpbGUiLCJpbWFnZVByZXZpZXdVcmwiLCJ2aWRlb0ZpbGUiLCJ2aWRlb1ByZXZpZXdVcmwiLCJjYXRlZ29yaWVzIiwidGV4dCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJoYXNPd25Qcm9wZXJ0eSIsInNldFN0YXRlIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwidXRpbHMiLCJ0b1dlaSIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsImUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsIiRpbWFnZVByZXZpZXciLCJfaGFuZGxlRGVsZXRlSW1hZ2UiLCIkdmlkZW9QcmV2aWV3IiwiX2hhbmRsZURlbGV0ZVZpZGVvIiwiX2hhbmRsZUltYWdlQ2hhbmdlIiwiX2hhbmRsZVZpZGVvQ2hhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVEsQUFBTSxBQUFPLEFBQVMsQUFBVSxBQUFXLEFBQVUsQUFBVyxBQUFPOztBQUN4RixBQUFTOztBQUNULEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7QUFDdkIsQUFBUyxBQUFjOztBQUN2QixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUVQLEFBQ0ksQUFDQSxBQUNBLEFBQ0E7Ozs7Ozs7SSxBQUdFOzs7Ozs7Ozs7Ozs7Ozs7ME4sQUFDRjswQkFBUSxBQUNVLEFBQ2Q7cUJBRkksQUFFSyxBQUNUO2tCQUhJLEFBR0UsQUFDTjtzQkFKSSxBQUlNLEFBQ1Y7eUJBTEksQUFLUyxBQUNiO2lDQU5JLEFBTWlCLEFBQ3JCO2tCQVBJLEFBT0UsQUFDTjttQ0FSSSxBQVFtQixBQUN2Qjt1QkFUSSxBQVNPLEFBQ1g7NkJBVkksQUFVYSxBQUNqQjt1QkFYSSxBQVdPLEFBQ1g7NkIsQUFaSSxBQVlhO0FBWmIsQUFDSixpQkFjSixBO2tCQUNJLEFBQ1UsQUFDTjttQkFISyxBQUNULEFBRVc7QUFGWCxBQUNJLFNBRks7a0JBS1QsQUFDVSxBQUNOO21CQVBLLEFBS1QsQUFFVztBQUZYLEFBQ0k7a0JBR0osQUFDVSxBQUNOO21CQVhLLEFBU1QsQUFFVztBQUZYLEFBQ0k7a0JBR0osQUFDVSxBQUNOO21CQWZLLEFBYVQsQUFFVztBQUZYLEFBQ0k7a0JBR0osQUFDVSxBQUNOO21CQW5CSyxBQWlCVCxBQUVXO0FBRlgsQUFDSTtrQkFHSixBQUNVLEFBQ047bUJBdkJLLEFBcUJULEFBRVc7QUFGWCxBQUNJO2tCQUdKLEFBQ1UsQUFDTjttQkEzQkssQUF5QlQsQUFFVztBQUZYLEFBQ0k7a0JBR0osQUFDVSxBQUNOO21CQS9CSyxBQTZCVCxBQUVXLEE7QUFGWCxBQUNJLGtCQUtSLEEsZUFBZSxVQUFBLEFBQUMsY0FBMkI7Z0JBQWxCLEFBQWtCLGFBQWxCLEFBQWtCO2dCQUFaLEFBQVksY0FBWixBQUFZLEFBQ3ZDOztnQkFBSSxNQUFBLEFBQUssTUFBTCxBQUFXLGVBQWYsQUFBSSxBQUEwQixPQUFPLEFBQ2pDO3NCQUFBLEFBQUssMkNBQUwsQUFBaUIsTUFBakIsQUFBd0IsQUFDM0I7QUFDSjtBLGlCQUVELEE7aUdBQVcsaUJBQUEsQUFBTyxPQUFQO29CQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNQO3NDQUFBLEFBQU0sQUFDTjtzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQUEvQixBQUFjLEFBQStCLEFBQzdDO3dDQUFBLEFBQVEsSUFBSSxVQUFVLE1BQUEsQUFBSyxNQUFmLEFBQXFCLE9BQXJCLEFBQTRCLG1CQUFtQixNQUFBLEFBQUssTUFBcEQsQUFBMEQsV0FBMUQsQUFDTixpQkFBaUIsTUFBQSxBQUFLLE1BRGhCLEFBQ3NCLHNCQUR0QixBQUVOLGFBQWEsTUFBQSxBQUFLLE1BRlosQUFFa0IsY0FGbEIsQUFHTixjQUFjLE1BQUEsQUFBSyxNQUhiLEFBR21CLE9BSG5CLEFBSU4sbUJBQW1CLE1BQUEsQUFBSyxNQUo5QixBQUlvQyx5QkFKcEMsQUFLTSxtQkFBbUIsTUFBQSxBQUFLLE1BTDlCLEFBS29DLGtCQUxwQyxBQU1NLG1CQUFtQixNQUFBLEFBQUssTUFUdkIsQUFHUCxBQU1vQzs7Z0RBVDdCO2dEQUFBO3VDQVlvQixjQUFBLEFBQUssSUFaekIsQUFZb0IsQUFBUzs7aUNBQTFCO0FBWkgsb0RBYUg7O3dDQUFBLEFBQVEsSUFBSSxlQWJULEFBYUgsQUFBMkI7Z0RBYnhCO3lEQWNHLEFBQVEsUUFBUixBQUNELGVBQ0csTUFBQSxBQUFLLE1BRlAsQUFFYSxNQUNYLE1BQUEsQUFBSyxNQUhQLEFBR2EsVUFDWCxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLHFCQUo5QixBQUlFLEFBQWlELFVBQ2pELE1BQUEsQUFBSyxNQUxQLEFBS2EsYUFMYixBQU1FLGdGQU5GLEFBT0UsK0NBQ0EsY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixNQVI5QixBQVFFLEFBQWtDLFVBQ2xDLE1BQUEsQUFBSyxNQVRQLEFBU2EsdUJBVGIsQUFVRDswQ0FDUyxTQXpCWCxBQWNHLEFBVUksQUFDSSxBQUFTO0FBRGIsQUFDRixpQ0FYRjs7aUNBY047OytDQUFBLEFBQU8sVUE1QkosQUE0QkgsQUFBaUI7Z0RBNUJkO0FBQUE7O2lDQUFBO2dEQUFBO2dFQThCSDs7d0NBQUEsQUFBUSxJQUFJLFlBQVosQUFBZ0IsQUFDaEI7c0NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQS9CM0IsQUErQkgsQUFBYyxBQUFvQjs7aUNBRXRDO3NDQUFBLEFBQUssU0FBUyxFQUFFLFNBakNULEFBaUNQLEFBQWMsQUFBVzs7aUNBakNsQjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7OzJDQXVDUSxBLEdBQUcsQUFDbEI7Y0FBQSxBQUFFLEFBQ0Y7aUJBQUEsQUFBSyxTQUFTLEVBQUUsV0FBRixBQUFhLElBQUksaUJBQS9CLEFBQWMsQUFBa0MsQUFDbkQ7Ozs7MkMsQUFFa0IsR0FBRyxBQUNsQjtjQUFBLEFBQUUsQUFDRjtpQkFBQSxBQUFLLFNBQVMsRUFBRSxXQUFGLEFBQWEsSUFBSSxpQkFBL0IsQUFBYyxBQUFrQyxBQUNuRDs7Ozs7bUhBRXdCLEE7Ozs7Ozs7aUNBQ3JCO2tDQUFBLEFBQUUsQUFFRTs7QSx5Q0FBUyxJQUFBLEEsQUFBSSxBQUNiO0EsdUNBQU8sRUFBQSxBQUFFLE9BQUYsQUFBUyxNQUFNLEFBRTFCLEEsQUFGVzs7dUNBRVgsQUFBTyxxRkFBWSxvQkFBQTtvR0FBQTtrREFBQTsrRUFBQTtxREFBQTtxRUFBQTtrRUFDVCxBQUFLO21FQUFTLEFBQ0wsQUFDWDt5RUFBaUIsT0FITixBQUNULEFBQWMsQUFFUTtBQUZSLEFBQ2hCLHFEQURFOztxREFEUztxREFBQTtxRUFBQTs7QUFBQTtpREFBQTtBQUFuQixBQU9BOzt1Q0FBQSxBQUFPLGNBQVAsQUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQ0FHTixBLEdBQUc7eUJBQ2xCOztjQUFBLEFBQUUsQUFFRjs7Z0JBQUksU0FBUyxJQUFiLEFBQWEsQUFBSSxBQUNqQjtnQkFBSSxPQUFPLEVBQUEsQUFBRSxPQUFGLEFBQVMsTUFBcEIsQUFBVyxBQUFlLEFBRTFCOzttQkFBQSxBQUFPLFlBQVksWUFBTSxBQUNyQjt1QkFBQSxBQUFLOytCQUFTLEFBQ0MsQUFDWDtxQ0FBaUIsT0FGckIsQUFBYyxBQUVjLEFBRS9CO0FBSmlCLEFBQ1Y7QUFGUixBQVFBOzttQkFBQSxBQUFPLGNBQVAsQUFBcUIsQUFDeEI7Ozs7aUNBRVE7eUJBQ0w7O29CQUFBLEFBQVEsSUFBUixBQUFZLGlCQUFpQixLQUFBLEFBQUssTUFBbEMsQUFBd0MsQUFDeEM7b0JBQUEsQUFBUSxJQUFSLEFBQVksaUJBQWlCLEtBQUEsQUFBSyxNQUY3QixBQUVMLEFBQXdDOztnQkFGbkMsQUFJQyxrQkFBb0IsS0FKckIsQUFJMEIsTUFKMUIsQUFJQyxBQUNOOztnQkFBSSxnQkFBSixBQUFvQixBQUNwQjtnQkFBQSxBQUFJLGlCQUFpQixBQUNqQjtnREFDSSxBQUFDOztrQ0FBRDtvQ0FBQSxBQUNJO0FBREo7QUFBQSxpQkFBQTt5QkFDSSxBQUNTLEFBQ0w7NEJBRkosQUFFVyxBQUNQOzJCQUhKLEFBR1U7a0NBSFY7b0NBREosQUFDSSxBQUlBO0FBSkE7QUFDSTs7a0NBR0o7b0NBTEosQUFLSSxBQUNBO0FBREE7QUFBQSxvQ0FDQSxBQUFDOzJCQUFELE1BQ1UsT0FEVixBQUNnQixBQUNaOzZCQUFTLGlCQUFBLEFBQUMsR0FBRDsrQkFBTyxPQUFBLEFBQUssbUJBQVosQUFBTyxBQUF3QjtBQUY1QztrQ0FBQTtvQ0FBQTtBQUFBO0FBQ0ksbUJBUlosQUFDSSxBQU1JLEFBTVg7QUFkRCxtQkFjTyxBQUNIO0FBQ0g7QUF0Qkk7O2dCQUFBLEFBd0JDLGtCQUFvQixLQXhCckIsQUF3QjBCLE1BeEIxQixBQXdCQyxBQUNOOztnQkFBSSxnQkFBSixBQUFvQixBQUNwQjtnQkFBQSxBQUFJLGlCQUFpQixBQUNqQjtnREFDSSxBQUFDOztrQ0FBRDtvQ0FBQSxBQUNJO0FBREo7QUFBQSxpQkFBQSxrQkFDSSxBQUFDLHVDQUFZLEtBQWIsQUFBa0IsaUJBQWlCLFVBQW5DO2tDQUFBO29DQURKLEFBQ0ksQUFDQTtBQURBOzs7a0NBQ0E7b0NBRkosQUFFSSxBQUNBO0FBREE7QUFBQSxvQ0FDQSxBQUFDOzJCQUFELE1BQ1UsT0FEVixBQUNnQixBQUNaOzZCQUFTLGlCQUFBLEFBQUMsR0FBRDsrQkFBTyxPQUFBLEFBQUssbUJBQVosQUFBTyxBQUF3QjtBQUY1QztrQ0FBQTtvQ0FBQTtBQUFBO0FBQ0ksbUJBTFosQUFDSSxBQUdJLEFBTVg7QUFYRCxtQkFXTyxBQUNIO0FBQ0g7QUFFRDs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBRUEsd0NBQUEsQUFBQyx1Q0FBSyxXQUFOLEFBQWdCLFdBQVUsVUFBVSxLQUFwQyxBQUF5QyxVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUFqRSxBQUF1RTs4QkFBdkU7Z0NBQUEsQUFFSTtBQUZKOytCQUVLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDZCQUFBLEFBQUMsMkNBQVMsYUFBVixBQUFzQixBQUNsQjt1QkFESixNQUNVLFdBRFYsQUFFSTt5QkFBUyxLQUZiLEFBRWtCLEFBQ2Q7MEJBQVUsa0JBQUEsQUFBQyxjQUFEO3dCQUFBLEFBQVUsY0FBVixBQUFVOzJCQUNoQixPQUFBLEFBQUssU0FBUyxFQUFFLFVBRFYsQUFDTixBQUFjLEFBQVk7QUFKbEM7OEJBQUE7Z0NBSlIsQUFFSSxBQUVJLEFBT0o7QUFQSTtpQ0FPSCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxrQ0FBQSxBQUFDO3VCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNsQjswQkFBVSx5QkFBQTsyQkFDTixPQUFBLEFBQUssU0FBUyxFQUFFLE1BQU0sTUFBQSxBQUFNLE9BRHRCLEFBQ04sQUFBYyxBQUFxQjtBQUgzQzs7OEJBQUE7Z0NBYlIsQUFXSSxBQUVJLEFBT0o7QUFQSTtBQUNJLGlDQU1QLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHlDQUFBLEFBQUM7dUJBQUQsQUFDVSxBQUNOOytCQUZKLEFBRWtCLEFBQ2Q7dUJBQU8sS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUNOLE9BQUEsQUFBSyxTQUFTLEVBQUUscUJBQXFCLE1BQUEsQUFBTSxPQURyQyxBQUNOLEFBQWMsQUFBb0M7QUFMMUQ7OzhCQUFBO2dDQXRCUixBQW9CSSxBQUVJLEFBU0o7QUFUSTtBQUNJLGlDQVFQLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHlDQUFBLEFBQUM7NEJBQUQsQUFFSTt1QkFBTyxLQUFBLEFBQUssTUFGaEIsQUFFc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQ04sT0FBQSxBQUFLLFNBQVMsRUFBRSxhQUFhLE1BQUEsQUFBTSxPQUQ3QixBQUNOLEFBQWMsQUFBNEI7QUFKbEQ7OzhCQUFBO2dDQWpDUixBQStCSSxBQUVJLEFBUUo7QUFSSTtBQUNJLGlDQU9QLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHlCQUFBLEFBQUM7dUJBQUQsQUFDVSxBQUNOOytCQUZKLEFBRWtCLEFBQ2Q7dUJBQU8sS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUNOLE9BQUEsQUFBSyxTQUFTLEVBQUUsTUFBTSxNQUFBLEFBQU0sT0FEdEIsQUFDTixBQUFjLEFBQXFCO0FBTDNDOzs4QkFBQTtnQ0EzQ1IsQUF5Q0ksQUFFSSxBQW9CSjtBQXBCSTtBQUNJLGlDQW1CUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSwyQ0FBQSxBQUFDOzRCQUFELEFBRUk7dUJBQU8sS0FBQSxBQUFLLE1BRmhCLEFBRXNCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUNOLE9BQUEsQUFBSyxTQUFTLEVBQUUsdUJBQXVCLE1BQUEsQUFBTSxPQUR2QyxBQUNOLEFBQWMsQUFBc0M7QUFKNUQ7OzhCQUFBO2dDQWpFUixBQStESSxBQUVJLEFBUUo7QUFSSTtBQUNJLGlDQU9QLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLG1EQUFPLFdBQVAsQUFBaUIsQUFDYjtzQkFESixBQUNTLEFBQ0w7MEJBQVUsa0JBQUEsQUFBQyxHQUFEOzJCQUFPLE9BQUEsQUFBSyxtQkFBWixBQUFPLEFBQXdCO0FBRjdDOzhCQUFBO2dDQUZKLEFBRUksQUFJQTtBQUpBO2dDQUlBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSztBQURMO2VBL0VSLEFBeUVJLEFBTUksQUFLSixpQ0FBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxtREFBTyxXQUFQLEFBQWlCLEFBQ2I7c0JBREosQUFDUyxBQUNMOzBCQUFVLGtCQUFBLEFBQUMsR0FBRDsyQkFBTyxPQUFBLEFBQUssbUJBQVosQUFBTyxBQUF3QjtBQUY3Qzs4QkFBQTtnQ0FGSixBQUVJLEFBSUE7QUFKQTtnQ0FJQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0s7QUFETDtlQTFGUixBQW9GSSxBQU1JLEFBS0osaUNBQUMsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLDJDQUFTLE9BQVYsQUFBZ0I7OEJBQWhCO2dDQWhHUixBQStGSSxBQUNJLEFBR0o7QUFISTtpQ0FHSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7OEJBQWxEO2dDQW5HSixBQW1HSSxBQUdBO0FBSEE7Z0NBR0EsQUFBQyx5Q0FBTyxTQUFSOzhCQUFBO2dDQUFBO0FBQUE7ZUExR1osQUFDSSxBQUdJLEFBc0dJLEFBSWY7Ozs7O0FBbFNxQixBLEFBcVMxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovV29ya3NwYWNlL0Jsb2NrY2hhaW4vRXRoZXJldW0ta2lja3N0YXJ0ZXIvZXRoZXJldW0va2lja3N0YXJ0In0=