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

var _TabCategoryDetail = require('./TabCategoryDetail');

var _TabCategoryDetail2 = _interopRequireDefault(_TabCategoryDetail);

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Workspace\\Blockchain\\Ethereum-kickstarter\\ethereum\\kickstart\\components\\Home\\TabCategory.js';


var panes = function panes(campaigns) {
  return [{ menuItem: 'Art', value: 'art', render: function render() {
      return _react2.default.createElement(_TabCategoryDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      });
    } }, { menuItem: 'Design $ Tech', value: 'design-tech', render: function render() {
      return _react2.default.createElement(_TabCategoryDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      });
    } }, { menuItem: 'Comics & illustration', value: 'comics-illustration', render: function render() {
      return _react2.default.createElement(_TabCategoryDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      });
    } }, { menuItem: 'Games', value: 'games', render: function render() {
      return _react2.default.createElement(_TabCategoryDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      });
    } }, { menuItem: 'Food & Craft', value: 'food-craft', render: function render() {
      return _react2.default.createElement(_TabCategoryDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      });
    } }, { menuItem: 'Music', value: 'music', render: function render() {
      return _react2.default.createElement(_TabCategoryDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      });
    } }, { menuItem: 'Publishing', value: 'publishing', render: function render() {
      return _react2.default.createElement(_TabCategoryDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      });
    } }, { menuItem: 'Film', value: 'film', render: function render() {
      return _react2.default.createElement(_TabCategoryDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      });
    } }];
};

var TabCategory = function (_Component) {
  (0, _inherits3.default)(TabCategory, _Component);

  function TabCategory() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TabCategory);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TabCategory.__proto__ || (0, _getPrototypeOf2.default)(TabCategory)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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

  (0, _createClass3.default)(TabCategory, [{
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

  return TabCategory;
}(_react.Component);

// const TabCampaign = () => (
//   <Tab panes={panes} />
// )

exports.default = TabCategory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhvbWVcXFRhYkNhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiVGFiIiwiU2VnbWVudCIsIlRhYkNhdGVnb3J5RGV0YWlsIiwiZmFjdG9yeSIsInBhbmVzIiwiY2FtcGFpZ25zIiwibWVudUl0ZW0iLCJ2YWx1ZSIsInJlbmRlciIsIlRhYkNhdGVnb3J5Iiwic3RhdGUiLCJhY3RpdmVJbmRleCIsImhhbmRsZUNoYW5nZSIsImUiLCJkYXRhIiwiY2F0ZWdvcnkiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbiIsInRvTG93ZXJDYXNlIiwiY2FsbCIsInNldFN0YXRlIiwidGFiIiwicHJvcHMiLCJwYXJzZUludCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBSzs7QUFDZCxBQUFPLEFBQXVCOzs7O0FBQzlCLEFBQU8sQUFBYTs7Ozs7Ozs7O0FBRXBCLElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLFdBQUQ7WUFDVixVQUFGLEFBQVksT0FBTyxPQUFuQixBQUEwQixPQUFRLFFBQVEsa0JBQUE7NkJBQU0sQUFBQyw2Q0FBbUIsV0FBcEIsQUFBaUM7b0JBQWpDO3NCQUFOLEFBQU07QUFBQTtPQUFBO0FBRHJCLEFBQzNCLEtBQUEsRUFEMkIsSUFFekIsVUFBRixBQUFZLGlCQUFnQixPQUE1QixBQUFtQyxlQUFnQixRQUFRLGtCQUFBOzZCQUFNLEFBQUMsNkNBQW1CLFdBQXBCLEFBQWlDO29CQUFqQztzQkFBTixBQUFNO0FBQUE7T0FBQTtBQUZ0QyxBQUUzQixLQUFBLE1BQ0UsVUFBRixBQUFZLHlCQUF5QixPQUFyQyxBQUE0Qyx1QkFBd0IsUUFBUSxrQkFBQTs2QkFBTSxBQUFDLDZDQUFtQixXQUFwQixBQUFpQztvQkFBakM7c0JBQU4sQUFBTTtBQUFBO09BQUE7QUFIdkQsQUFHM0IsS0FBQSxNQUNFLFVBQUYsQUFBWSxTQUFTLE9BQXJCLEFBQTRCLFNBQVUsUUFBUSxrQkFBQTs2QkFBTSxBQUFDLDZDQUFtQixXQUFwQixBQUFpQztvQkFBakM7c0JBQU4sQUFBTTtBQUFBO09BQUE7QUFKekIsQUFJM0IsS0FBQSxNQUNFLFVBQUYsQUFBWSxnQkFBZ0IsT0FBNUIsQUFBbUMsY0FBZSxRQUFRLGtCQUFBOzZCQUFNLEFBQUMsNkNBQW1CLFdBQXBCLEFBQWlDO29CQUFqQztzQkFBTixBQUFNO0FBQUE7T0FBQTtBQUxyQyxBQUszQixLQUFBLE1BQ0UsVUFBRixBQUFZLFNBQVMsT0FBckIsQUFBNEIsU0FBVSxRQUFRLGtCQUFBOzZCQUFNLEFBQUMsNkNBQW1CLFdBQXBCLEFBQWlDO29CQUFqQztzQkFBTixBQUFNO0FBQUE7T0FBQTtBQU56QixBQU0zQixLQUFBLE1BQ0UsVUFBRixBQUFZLGNBQWMsT0FBMUIsQUFBaUMsY0FBZSxRQUFRLGtCQUFBOzZCQUFNLEFBQUMsNkNBQW1CLFdBQXBCLEFBQWlDO29CQUFqQztzQkFBTixBQUFNO0FBQUE7T0FBQTtBQVBuQyxBQU8zQixLQUFBLE1BQ0UsVUFBRixBQUFZLFFBQVEsT0FBcEIsQUFBMkIsUUFBUyxRQUFRLGtCQUFBOzZCQUFNLEFBQUMsNkNBQW1CLFdBQXBCLEFBQWlDO29CQUFqQztzQkFBTixBQUFNO0FBQUE7T0FBQTtBQVJ0QyxBQUFlLEFBUTNCLEtBQUE7QUFSRjs7SUFXTSxBOzs7Ozs7Ozs7Ozs7Ozs7c05BRUosQTtpQkFBUSxBQUNNLEFBQ1o7bUIsQUFGTSxBQUVRO0FBRlIsQUFDTixhLEFBSUY7MkZBQWUsaUJBQUEsQUFBTyxHQUFQLEFBQVUsTUFBVjtzQkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtBQURTLDJCQUNFLEtBQUEsQUFBSyxNQUFNLEtBQVgsQUFBZ0IsYUFEbEIsQUFDK0I7Z0NBRC9CO3VCQUVXLGtCQUFBLEFBQVEsUUFBUixBQUFnQixvQkFBb0IsU0FBcEMsQUFBb0MsQUFBUyxlQUZ4RCxBQUVXLEFBQTREOzttQkFBOUU7QUFGTyxxQ0FHYjs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsV0FBRCxBQUFhLFdBQVcsYUFBYyxLQUFwRCxBQUFjLEFBQTJDLEFBQ3pEO0FBSmE7O21CQUFBO21CQUFBO2dDQUFBOztBQUFBO29CQUFBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBUVQ7QSwyQkFBVyxLQUFBLEFBQUssSUFBTCxBQUFTLE1BQVQsQUFBZSxNQUFmLEFBQXFCLEcsQUFBRyxBQUNuQztBLDhCQUFjLFNBQVMsYUFBQSxBQUFhLFFBQXRCLEFBQVMsQUFBcUIsbUJBQW1CLEE7O3VCQUMzQyxrQkFBQSxBQUFRLFFBQVIsQUFBZ0Isb0JBQW9CLFNBQXBDLEFBQW9DLEFBQVMsZSxBQUE3QyxBQUE0RDs7bUJBQTlFO0Esc0NBQ047O3FCQUFBLEFBQUssU0FBUyxFQUFDLFdBQUQsQUFBYSxXQUFXLGFBQXRDLEFBQWMsQUFBc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHN0M7bUJBQ1A7O2NBQUEsQUFBUSxJQUFSLEFBQVksVUFBVSxLQUF0QixBQUEyQixBQUMzQjs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsc0NBQUksS0FBSyxhQUFBLEFBQUMsS0FBRDtpQkFBUyxPQUFBLEFBQUssTUFBZCxBQUFvQjtBQUE5QixXQUFtQyxPQUFPLE1BQU0sS0FBaEQsQUFBMEMsQUFBVyxRQUFRLGFBQWEsS0FBMUUsQUFBK0UsY0FBYyxrQkFBN0YsQUFBK0c7b0JBQS9HO3NCQUZKLEFBQ0UsQUFDRSxBQUdMO0FBSEs7Ozs7OztBQXpCa0IsQTs7QUFnQzFCO0FBQ0E7QUFDQSxBQUVBOztrQkFBQSxBQUFlIiwiZmlsZSI6IlRhYkNhdGVnb3J5LmpzIiwic291cmNlUm9vdCI6IkQ6L1dvcmtzcGFjZS9CbG9ja2NoYWluL0V0aGVyZXVtLWtpY2tzdGFydGVyL2V0aGVyZXVtL2tpY2tzdGFydCJ9