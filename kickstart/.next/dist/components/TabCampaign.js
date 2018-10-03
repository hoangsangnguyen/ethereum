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

var _TabDetail = require('./TabDetail');

var _TabDetail2 = _interopRequireDefault(_TabDetail);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Workspace\\Blockchain\\Ethereum-kickstarter\\ethereum\\kickstart\\components\\TabCampaign.js';


var panes = function panes(campaigns) {
  return [{ menuItem: 'Art', value: 'art', render: function render() {
      return _react2.default.createElement(_TabDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      });
    } }, { menuItem: 'Design $ Tech', value: 'design-tech', render: function render() {
      return _react2.default.createElement(_TabDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      });
    } }, { menuItem: 'Comics & illustration', value: 'comics-illustration', render: function render() {
      return _react2.default.createElement(_TabDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      });
    } }, { menuItem: 'Games', value: 'games', render: function render() {
      return _react2.default.createElement(_TabDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      });
    } }, { menuItem: 'Food & Craft', value: 'food-craft', render: function render() {
      return _react2.default.createElement(_TabDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      });
    } }, { menuItem: 'Music', value: 'music', render: function render() {
      return _react2.default.createElement(_TabDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      });
    } }, { menuItem: 'Publishing', value: 'publishing', render: function render() {
      return _react2.default.createElement(_TabDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      });
    } }, { menuItem: 'Film', value: 'film', render: function render() {
      return _react2.default.createElement(_TabDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      });
    } }];
};

var TabCampaign = function (_Component) {
  (0, _inherits3.default)(TabCampaign, _Component);

  function TabCampaign() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TabCampaign);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TabCampaign.__proto__ || (0, _getPrototypeOf2.default)(TabCampaign)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      campaigns: [],
      activeIndex: '0'
    }, _this.handleChange = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e, data) {
        var category, campaigns;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                category = data.panes[data.activeIndex].value;
                _context.next = 3;
                return _factory2.default.methods.getDeployedCampaign(category.toLowerCase()).call();

              case 3:
                campaigns = _context.sent;

                _this.setState({ campaigns: campaigns, activeIndex: data.activeIndex });
              // localStorage.setItem("activeIndex") = data.activeIndex;

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TabCampaign, [{
    key: 'componentDidMount',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var category, activeIndex, campaigns;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                category = this.tab.props.panes[0].menuItem;
                activeIndex = parseInt(localStorage.getItem("activeIndex")) || 0;
                _context2.next = 4;
                return _factory2.default.methods.getDeployedCampaign(category.toLowerCase()).call();

              case 4:
                campaigns = _context2.sent;

                this.setState({ campaigns: campaigns, activeIndex: activeIndex });

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      console.log("render", this.state);
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement(_semanticUiReact.Tab, { ref: function ref(tab) {
          return _this3.tab = tab;
        }, panes: panes(this.state), onTabChange: this.handleChange, renderActiveOnly: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }));
    }
  }]);

  return TabCampaign;
}(_react.Component);

// const TabCampaign = () => (
//   <Tab panes={panes} />
// )

exports.default = TabCampaign;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFRhYkNhbXBhaWduLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiVGFiIiwiU2VnbWVudCIsIlRhYkRldGFpbCIsImZhY3RvcnkiLCJwYW5lcyIsImNhbXBhaWducyIsIm1lbnVJdGVtIiwidmFsdWUiLCJyZW5kZXIiLCJUYWJDYW1wYWlnbiIsInN0YXRlIiwiYWN0aXZlSW5kZXgiLCJoYW5kbGVDaGFuZ2UiLCJlIiwiZGF0YSIsImNhdGVnb3J5IiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ24iLCJ0b0xvd2VyQ2FzZSIsImNhbGwiLCJzZXRTdGF0ZSIsInRhYiIsInByb3BzIiwicGFyc2VJbnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQUs7O0FBQ2QsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBYTs7Ozs7Ozs7O0FBRXBCLElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLFdBQUQ7WUFDVixVQUFGLEFBQVksT0FBTyxPQUFuQixBQUEwQixPQUFRLFFBQVEsa0JBQUE7NkJBQU0sQUFBQyxxQ0FBVyxXQUFaLEFBQXlCO29CQUF6QjtzQkFBTixBQUFNO0FBQUE7T0FBQTtBQURyQixBQUMzQixLQUFBLEVBRDJCLElBRXpCLFVBQUYsQUFBWSxpQkFBZ0IsT0FBNUIsQUFBbUMsZUFBZ0IsUUFBUSxrQkFBQTs2QkFBTSxBQUFDLHFDQUFXLFdBQVosQUFBeUI7b0JBQXpCO3NCQUFOLEFBQU07QUFBQTtPQUFBO0FBRnRDLEFBRTNCLEtBQUEsTUFDRSxVQUFGLEFBQVkseUJBQXlCLE9BQXJDLEFBQTRDLHVCQUF3QixRQUFRLGtCQUFBOzZCQUFNLEFBQUMscUNBQVcsV0FBWixBQUF5QjtvQkFBekI7c0JBQU4sQUFBTTtBQUFBO09BQUE7QUFIdkQsQUFHM0IsS0FBQSxNQUNFLFVBQUYsQUFBWSxTQUFTLE9BQXJCLEFBQTRCLFNBQVUsUUFBUSxrQkFBQTs2QkFBTSxBQUFDLHFDQUFXLFdBQVosQUFBeUI7b0JBQXpCO3NCQUFOLEFBQU07QUFBQTtPQUFBO0FBSnpCLEFBSTNCLEtBQUEsTUFDRSxVQUFGLEFBQVksZ0JBQWdCLE9BQTVCLEFBQW1DLGNBQWUsUUFBUSxrQkFBQTs2QkFBTSxBQUFDLHFDQUFXLFdBQVosQUFBeUI7b0JBQXpCO3NCQUFOLEFBQU07QUFBQTtPQUFBO0FBTHJDLEFBSzNCLEtBQUEsTUFDRSxVQUFGLEFBQVksU0FBUyxPQUFyQixBQUE0QixTQUFVLFFBQVEsa0JBQUE7NkJBQU0sQUFBQyxxQ0FBVyxXQUFaLEFBQXlCO29CQUF6QjtzQkFBTixBQUFNO0FBQUE7T0FBQTtBQU56QixBQU0zQixLQUFBLE1BQ0UsVUFBRixBQUFZLGNBQWMsT0FBMUIsQUFBaUMsY0FBZSxRQUFRLGtCQUFBOzZCQUFNLEFBQUMscUNBQVcsV0FBWixBQUF5QjtvQkFBekI7c0JBQU4sQUFBTTtBQUFBO09BQUE7QUFQbkMsQUFPM0IsS0FBQSxNQUNFLFVBQUYsQUFBWSxRQUFRLE9BQXBCLEFBQTJCLFFBQVMsUUFBUSxrQkFBQTs2QkFBTSxBQUFDLHFDQUFXLFdBQVosQUFBeUI7b0JBQXpCO3NCQUFOLEFBQU07QUFBQTtPQUFBO0FBUnRDLEFBQWUsQUFRM0IsS0FBQTtBQVJGOztJQVdNLEE7Ozs7Ozs7Ozs7Ozs7OztzTkFFSixBO2lCQUFRLEFBQ00sQUFDWjttQixBQUZNLEFBRVE7QUFGUixBQUNOLGEsQUFJRjsyRkFBZSxpQkFBQSxBQUFPLEdBQVAsQUFBVSxNQUFWO3NCQUFBO3NFQUFBO29CQUFBOzZDQUFBO21CQUNUO0FBRFMsMkJBQ0UsS0FBQSxBQUFLLE1BQU0sS0FBWCxBQUFnQixhQURsQixBQUMrQjtnQ0FEL0I7dUJBRVcsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLG9CQUFvQixTQUFwQyxBQUFvQyxBQUFTLGVBRnhELEFBRVcsQUFBNEQ7O21CQUE5RTtBQUZPLHFDQUdiOztzQkFBQSxBQUFLLFNBQVMsRUFBQyxXQUFELEFBQWEsV0FBVyxhQUFjLEtBQXBELEFBQWMsQUFBMkMsQUFDekQ7QUFKYTs7bUJBQUE7bUJBQUE7Z0NBQUE7O0FBQUE7b0JBQUE7QTs7Ozs7Ozs7Ozs7Ozs7OzttQkFRVDtBLDJCQUFXLEtBQUEsQUFBSyxJQUFMLEFBQVMsTUFBVCxBQUFlLE1BQWYsQUFBcUIsRyxBQUFHLEFBQ25DO0EsOEJBQWMsU0FBUyxhQUFBLEFBQWEsUUFBdEIsQUFBUyxBQUFxQixtQkFBbUIsQTs7dUJBQzNDLGtCQUFBLEFBQVEsUUFBUixBQUFnQixvQkFBb0IsU0FBcEMsQUFBb0MsQUFBUyxlLEFBQTdDLEFBQTREOzttQkFBOUU7QSxzQ0FDTjs7cUJBQUEsQUFBSyxTQUFTLEVBQUMsV0FBRCxBQUFhLFdBQVcsYUFBdEMsQUFBYyxBQUFzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUc3QzttQkFDUDs7Y0FBQSxBQUFRLElBQVIsQUFBWSxVQUFVLEtBQXRCLEFBQTJCLEFBQzNCOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyxzQ0FBSSxLQUFLLGFBQUEsQUFBQyxLQUFEO2lCQUFTLE9BQUEsQUFBSyxNQUFkLEFBQW9CO0FBQTlCLFdBQW1DLE9BQU8sTUFBTSxLQUFoRCxBQUEwQyxBQUFXLFFBQVEsYUFBYSxLQUExRSxBQUErRSxjQUFjLGtCQUE3RixBQUErRztvQkFBL0c7c0JBRkosQUFDRSxBQUNFLEFBR0w7QUFISzs7Ozs7O0FBekJrQixBOztBQWdDMUI7QUFDQTtBQUNBLEFBRUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiVGFiQ2FtcGFpZ24uanMiLCJzb3VyY2VSb290IjoiRDovV29ya3NwYWNlL0Jsb2NrY2hhaW4vRXRoZXJldW0ta2lja3N0YXJ0ZXIvZXRoZXJldW0va2lja3N0YXJ0In0=