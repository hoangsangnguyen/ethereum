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
            }, 'Campaign Description'), _react2.default.createElement(_semanticUiReact.Input, {
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
                    lineNumber: 243
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 244
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
                    lineNumber: 245
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 265
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 266
                }
            }, 'Investment Description'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.investmentDescription,
                onChange: function onChange(event) {
                    return _this5.setState({ investmentDescription: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 267
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 274
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 275
                }
            }, 'Image'), _react2.default.createElement('input', { className: 'fileInput',
                type: 'file',
                onChange: function onChange(e) {
                    return _this5._handleImageChange(e);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 276
                }
            }), _react2.default.createElement('div', { className: 'imgPreview', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 280
                }
            }, $imagePreview)), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 285
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 286
                }
            }, 'Video'), _react2.default.createElement('input', { className: 'fileInput',
                type: 'file',
                onChange: function onChange(e) {
                    return _this5._handleVideoChange(e);
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 287
                }
            }), _react2.default.createElement('div', { className: 'videoPreview', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 291
                }
            }, $videoPreview)), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 296
                }
            }, _react2.default.createElement(_semanticUiReact.Checkbox, { label: 'I agree to the Terms and Conditions', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 297
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 300
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 303
                }
            }, 'Create')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJDaGVja2JveCIsIkZvcm1Hcm91cCIsIkRyb3Bkb3duIiwiQ29udGFpbmVyIiwiRW1iZWQiLCJQbGF5ZXIiLCJMYXlvdXQiLCJmYWN0b3J5Iiwid2ViMyIsIlJvdXRlciIsIkNvbW1vbiIsImF4aW9zIiwiUmVhY3RQbGF5ZXIiLCJEYXRlSW5wdXQiLCJUaW1lSW5wdXQiLCJEYXRlVGltZUlucHV0IiwiRGF0ZXNSYW5nZUlucHV0IiwiQ2FtcGFpZ25OZXciLCJzdGF0ZSIsImVycm9yTWVzc2FnZSIsImxvYWRpbmciLCJuYW1lIiwiY2F0ZWdvcnkiLCJkZXNjcmlwdGlvbiIsIm1pbmltdW1Db250cmlidXRpb24iLCJnb2FsIiwiaW52ZXN0bWVudERlc2NyaXB0aW9uIiwiaW1hZ2VGaWxlIiwiaW1hZ2VQcmV2aWV3VXJsIiwidmlkZW9GaWxlIiwidmlkZW9QcmV2aWV3VXJsIiwiY2F0ZWdvcmllcyIsInRleHQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwiaGFzT3duUHJvcGVydHkiLCJzZXRTdGF0ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCIkaW1hZ2VQcmV2aWV3IiwiX2hhbmRsZURlbGV0ZUltYWdlIiwiJHZpZGVvUHJldmlldyIsIl9oYW5kbGVEZWxldGVWaWRlbyIsIl9oYW5kbGVJbWFn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SixBQUNTLEFBQ0w7MEJBQVUsa0JBQUEsQUFBQyxHQUFEOzJCQUFPLE9BQUEsQUFBSyxtQkFBWixBQUFPLEFBQXdCO0FBRjdDOzhCQUFBO2dDQUZKLEFBRUksQUFJQTtBQUpBO2dDQUlBLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSztBQURMO2VBeEZSLEFBa0ZJLEFBTUksQUFLSixpQ0FBQyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsMkNBQVMsT0FBVixBQUFnQjs4QkFBaEI7Z0NBOUZSLEFBNkZJLEFBQ0ksQUFHSjtBQUhJO2lDQUdKLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDs4QkFBbEQ7Z0NBakdKLEFBaUdJLEFBR0E7QUFIQTtnQ0FHQSxBQUFDLHlDQUFPLFNBQVI7OEJBQUE7Z0NBQUE7QUFBQTtlQXhHWixBQUNJLEFBR0ksQUFvR0ksQUFJZjs7Ozs7QUFoU3FCLEEsQUFtUzFCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9Xb3Jrc3BhY2UvQmxvY2tjaGFpbi9FdGhlcmV1bS1raWNrc3RhcnRlci9ldGhlcmV1bS9raWNrc3RhcnQifQ==