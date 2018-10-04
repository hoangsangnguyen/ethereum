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

var _TabCampaignDetail = require('./TabCampaignDetail');

var _TabCampaignDetail2 = _interopRequireDefault(_TabCampaignDetail);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Workspace\\Blockchain\\Ethereum-kickstarter\\ethereum\\kickstart\\components\\Detail\\TabCampaign.js';


var panes = function panes(description, investmentIntroduction, address) {
  return [{ menuItem: 'Description', value: 'description', render: function render() {
      return _react2.default.createElement(_TabCampaignDetail2.default, { info: description, __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      });
    } }, { menuItem: 'Invesment Introduction', value: 'investment-introduction', render: function render() {
      return _react2.default.createElement(_TabCampaignDetail2.default, { info: investmentIntroduction, __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      });
    } }, { menuItem: 'Q & A', value: 'q&a', render: function render() {
      return _react2.default.createElement(_TabCampaignDetail2.default, { info: address, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      });
    } }];
};

var TabCampaign = function (_Component) {
  (0, _inherits3.default)(TabCampaign, _Component);

  function TabCampaign() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TabCampaign);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TabCampaign.__proto__ || (0, _getPrototypeOf2.default)(TabCampaign)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      description: '',
      investmentIntroduction: ''
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  // handleChange = async (e, data) => {
  //     let category = data.panes[data.activeIndex].value;
  //     const campaigns = await factory.methods.getDeployedCampaign(category.toLowerCase()).call();
  //     this.setState({campaigns : campaigns, activeIndex : data.activeIndex});
  //     // localStorage.setItem("activeIndex") = data.activeIndex;
  // };

  (0, _createClass3.default)(TabCampaign, [{
    key: 'componentDidMount',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var campaign, description, investmentIntroduction;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(this.props.address);
                _context.next = 3;
                return campaign.methods.mDescription().call();

              case 3:
                description = _context.sent;
                _context.next = 6;
                return campaign.methods.mInvestmentDescription().call();

              case 6:
                investmentIntroduction = _context.sent;

                this.setState({ description: description, investmentIntroduction: investmentIntroduction });

              case 8:
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
      var _this2 = this;

      console.log('Des : ', this.state.description);
      console.log('Inves : ', this.state.investmentIntroduction);

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement(_semanticUiReact.Tab, { ref: function ref(tab) {
          return _this2.tab = tab;
        }, panes: panes(this.state.description, this.state.investmentIntroduction, this.props.address), renderActiveOnly: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }));
    }
  }]);

  return TabCampaign;
}(_react.Component);

exports.default = TabCampaign;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXERldGFpbFxcVGFiQ2FtcGFpZ24uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWIiLCJTZWdtZW50IiwiVGFiQ2FtcGFpZ25EZXRhaWwiLCJDYW1wYWlnbiIsInBhbmVzIiwiZGVzY3JpcHRpb24iLCJpbnZlc3RtZW50SW50cm9kdWN0aW9uIiwiYWRkcmVzcyIsIm1lbnVJdGVtIiwidmFsdWUiLCJyZW5kZXIiLCJUYWJDYW1wYWlnbiIsInN0YXRlIiwiY2FtcGFpZ24iLCJwcm9wcyIsIm1ldGhvZHMiLCJtRGVzY3JpcHRpb24iLCJjYWxsIiwibUludmVzdG1lbnREZXNjcmlwdGlvbiIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInRhYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQUs7O0FBQ2QsQUFBTyxBQUF1Qjs7OztBQUM5QixBQUFPLEFBQWM7Ozs7Ozs7OztBQUVyQixJQUFNLFFBQVEsU0FBUixBQUFRLE1BQUEsQUFBQyxhQUFELEFBQWMsd0JBQWQsQUFBc0MsU0FBdEM7WUFDUixVQUFGLEFBQVksZUFBZSxPQUEzQixBQUFrQyxlQUFnQixRQUFRLGtCQUFBOzZCQUFNLEFBQUMsNkNBQW1CLE1BQXBCLEFBQTRCO29CQUE1QjtzQkFBTixBQUFNO0FBQUE7T0FBQTtBQURKLEFBQzVELEtBQUEsRUFENEQsSUFFMUQsVUFBRixBQUFZLDBCQUF5QixPQUFyQyxBQUEyQywyQkFBNkIsUUFBUSxrQkFBQTs2QkFBTSxBQUFDLDZDQUFtQixNQUFwQixBQUE0QjtvQkFBNUI7c0JBQU4sQUFBTTtBQUFBO09BQUE7QUFGMUIsQUFFNUQsS0FBQSxNQUNFLFVBQUYsQUFBWSxTQUFTLE9BQXJCLEFBQTRCLE9BQVEsUUFBUSxrQkFBQTs2QkFBTSxBQUFDLDZDQUFtQixNQUFwQixBQUE0QjtvQkFBNUI7c0JBQU4sQUFBTTtBQUFBO09BQUE7QUFIeEMsQUFBa0QsQUFHNUQsS0FBQTtBQUhKOztJLEFBTU07Ozs7Ozs7Ozs7Ozs7O3NOLEFBUUY7bUJBQVEsQUFDUSxBQUNkOzhCQUZNLEFBRW1CLEE7QUFGbkIsQUFDTjtBQVJGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7bUJBUVE7QSwyQkFBVyx3QkFBUyxLQUFBLEFBQUssTUFBZCxBQUFvQixBOzt1QkFFWCxTQUFBLEFBQVMsUUFBVCxBQUFpQixlQUFqQixBLEFBQWdDOzttQkFBcEQ7QTs7dUJBQytCLFNBQUEsQUFBUyxRQUFULEFBQWlCLHlCQUFqQixBQUEwQyxBOzttQkFBekU7QSxrREFDTjs7cUJBQUEsQUFBSyxTQUFTLEVBQUMsYUFBRCxhQUFjLHdCQUE1QixBQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBSVA7bUJBQ0w7O2NBQUEsQUFBUSxJQUFSLEFBQVksVUFBVSxLQUFBLEFBQUssTUFBM0IsQUFBaUMsQUFDakM7Y0FBQSxBQUFRLElBQVIsQUFBWSxZQUFZLEtBQUEsQUFBSyxNQUE3QixBQUFtQyxBQUVuQzs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLHNDQUFJLEtBQUssYUFBQSxBQUFDLEtBQUQ7aUJBQVMsT0FBQSxBQUFLLE1BQWQsQUFBb0I7QUFBOUIsV0FBbUMsT0FBTyxNQUFNLEtBQUEsQUFBSyxNQUFYLEFBQWlCLGFBQWEsS0FBQSxBQUFLLE1BQW5DLEFBQXlDLHdCQUF3QixLQUFBLEFBQUssTUFBaEgsQUFBMEMsQUFBNEUsVUFBVyxrQkFBakksQUFBbUo7b0JBQW5KO3NCQUZKLEFBQ0UsQUFDRSxBQUdMO0FBSEs7Ozs7OztBQTVCYyxBLEFBa0MxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJUYWJDYW1wYWlnbi5qcyIsInNvdXJjZVJvb3QiOiJEOi9Xb3Jrc3BhY2UvQmxvY2tjaGFpbi9FdGhlcmV1bS1raWNrc3RhcnRlci9ldGhlcmV1bS9raWNrc3RhcnQifQ==