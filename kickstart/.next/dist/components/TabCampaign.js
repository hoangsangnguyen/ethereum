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
  return [{ menuItem: 'Art', render: function render() {
      return _react2.default.createElement(_TabDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      });
    } }, { menuItem: 'Design $ Tech', render: function render() {
      return _react2.default.createElement(_TabDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      });
    } }, { menuItem: 'Comics & illustration', render: function render() {
      return _react2.default.createElement(_TabDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      });
    } }, { menuItem: 'Games', render: function render() {
      return _react2.default.createElement(_TabDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      });
    } }, { menuItem: 'Food & Craft', render: function render() {
      return _react2.default.createElement(_TabDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      });
    } }, { menuItem: 'Music', render: function render() {
      return _react2.default.createElement(_TabDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      });
    } }, { menuItem: 'Publishing', render: function render() {
      return _react2.default.createElement(_TabDetail2.default, { campaigns: campaigns, __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      });
    } }, { menuItem: 'Film', render: function render() {
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
                category = data.panes[data.activeIndex].menuItem;
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
                console.log("didmount");
                category = this.tab.props.panes[0].menuItem;
                activeIndex = parseInt(localStorage.getItem("activeIndex")) || 0;
                _context2.next = 5;
                return _factory2.default.methods.getDeployedCampaign(category.toLowerCase()).call();

              case 5:
                campaigns = _context2.sent;

                this.setState({ campaigns: campaigns, activeIndex: activeIndex });

              case 7:
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
          lineNumber: 45
        }
      }, _react2.default.createElement(_semanticUiReact.Tab, { ref: function ref(tab) {
          return _this3.tab = tab;
        }, panes: panes(this.state), onTabChange: this.handleChange, renderActiveOnly: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 46
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFRhYkNhbXBhaWduLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiVGFiIiwiU2VnbWVudCIsIlRhYkRldGFpbCIsImZhY3RvcnkiLCJwYW5lcyIsImNhbXBhaWducyIsIm1lbnVJdGVtIiwicmVuZGVyIiwiVGFiQ2FtcGFpZ24iLCJzdGF0ZSIsImFjdGl2ZUluZGV4IiwiaGFuZGxlQ2hhbmdlIiwiZSIsImRhdGEiLCJjYXRlZ29yeSIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWduIiwidG9Mb3dlckNhc2UiLCJjYWxsIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwidGFiIiwicHJvcHMiLCJwYXJzZUludCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFLOztBQUNkLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWE7Ozs7Ozs7OztBQUVwQixJQUFNLFFBQVEsU0FBUixBQUFRLE1BQUEsQUFBQyxXQUFEO1lBQ1YsVUFBRixBQUFZLE9BQU8sUUFBUSxrQkFBQTs2QkFBTSxBQUFDLHFDQUFXLFdBQVosQUFBeUI7b0JBQXpCO3NCQUFOLEFBQU07QUFBQTtPQUFBO0FBRE4sQUFDM0IsS0FBQSxFQUQyQixJQUV6QixVQUFGLEFBQVksaUJBQWlCLFFBQVEsa0JBQUE7NkJBQU0sQUFBQyxxQ0FBVyxXQUFaLEFBQXlCO29CQUF6QjtzQkFBTixBQUFNO0FBQUE7T0FBQTtBQUZoQixBQUUzQixLQUFBLE1BQ0UsVUFBRixBQUFZLHlCQUF5QixRQUFRLGtCQUFBOzZCQUFNLEFBQUMscUNBQVcsV0FBWixBQUF5QjtvQkFBekI7c0JBQU4sQUFBTTtBQUFBO09BQUE7QUFIeEIsQUFHM0IsS0FBQSxNQUNFLFVBQUYsQUFBWSxTQUFTLFFBQVEsa0JBQUE7NkJBQU0sQUFBQyxxQ0FBVyxXQUFaLEFBQXlCO29CQUF6QjtzQkFBTixBQUFNO0FBQUE7T0FBQTtBQUpSLEFBSTNCLEtBQUEsTUFDRSxVQUFGLEFBQVksZ0JBQWdCLFFBQVEsa0JBQUE7NkJBQU0sQUFBQyxxQ0FBVyxXQUFaLEFBQXlCO29CQUF6QjtzQkFBTixBQUFNO0FBQUE7T0FBQTtBQUxmLEFBSzNCLEtBQUEsTUFDRSxVQUFGLEFBQVksU0FBUyxRQUFRLGtCQUFBOzZCQUFNLEFBQUMscUNBQVcsV0FBWixBQUF5QjtvQkFBekI7c0JBQU4sQUFBTTtBQUFBO09BQUE7QUFOUixBQU0zQixLQUFBLE1BQ0UsVUFBRixBQUFZLGNBQWMsUUFBUSxrQkFBQTs2QkFBTSxBQUFDLHFDQUFXLFdBQVosQUFBeUI7b0JBQXpCO3NCQUFOLEFBQU07QUFBQTtPQUFBO0FBUGIsQUFPM0IsS0FBQSxNQUNFLFVBQUYsQUFBWSxRQUFRLFFBQVEsa0JBQUE7NkJBQU0sQUFBQyxxQ0FBVyxXQUFaLEFBQXlCO29CQUF6QjtzQkFBTixBQUFNO0FBQUE7T0FBQTtBQVJ0QixBQUFlLEFBUTNCLEtBQUE7QUFSRjs7SUFXTSxBOzs7Ozs7Ozs7Ozs7Ozs7c05BR0osQTtpQkFBUSxBQUNNLEFBQ1o7bUJBRk0sQUFFUSxBO0FBRlIsQUFDTixhLEFBSUY7MkZBQWUsaUJBQUEsQUFBTyxHQUFQLEFBQVUsTUFBVjtzQkFBQTtzRUFBQTtvQkFBQTs2Q0FBQTttQkFDVDtBQURTLDJCQUNFLEtBQUEsQUFBSyxNQUFNLEtBQVgsQUFBZ0IsYUFEbEIsQUFDK0I7Z0NBRC9CO3VCQUVXLGtCQUFBLEFBQVEsUUFBUixBQUFnQixvQkFBb0IsU0FBcEMsQUFBb0MsQUFBUyxlQUZ4RCxBQUVXLEFBQTREOzttQkFBOUU7QUFGTyxxQ0FHYjs7c0JBQUEsQUFBSyxTQUFTLEVBQUMsV0FBRCxBQUFhLFdBQVcsYUFBYyxLQUFwRCxBQUFjLEFBQTJDLEFBRXpEOztBQUxhOzttQkFBQTttQkFBQTtnQ0FBQTs7QUFBQTtvQkFBQTtBOzs7Ozs7Ozs7Ozs7Ozs7O21CQVNiO3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1I7QSwyQkFBVyxLQUFBLEFBQUssSUFBTCxBQUFTLE1BQVQsQUFBZSxNQUFmLEFBQXFCLEdBQUcsQUFDbkMsQTtBLDhCQUFjLFNBQVMsYUFBQSxBQUFhLFFBQXRCLEFBQVMsQUFBcUIsbUIsQUFBbUI7O3VCQUMzQyxrQkFBQSxBQUFRLFFBQVIsQUFBZ0Isb0JBQW9CLFNBQXBDLEFBQW9DLEFBQVMsZUFBN0MsQUFBNEQsQTs7bUJBQTlFO0Esc0NBQ047O3FCQUFBLEFBQUssU0FBUyxFQUFDLFdBQUQsQUFBYSxXQUFXLGFBQXRDLEFBQWMsQUFBc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFHN0M7bUJBQ1A7O2NBQUEsQUFBUSxJQUFSLEFBQVksVUFBVSxLQUF0QixBQUEyQixBQUUzQjs7NkJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLHNDQUFJLEtBQUssYUFBQSxBQUFDLEtBQUQ7aUJBQVMsT0FBQSxBQUFLLE1BQWQsQUFBb0I7QUFBOUIsV0FBbUMsT0FBTyxNQUFNLEtBQWhELEFBQTBDLEFBQVcsUUFBUSxhQUFhLEtBQTFFLEFBQStFLGNBQWMsa0JBQTdGLEFBQStHO29CQUEvRztzQkFGSixBQUNFLEFBQ0UsQUFHTDtBQUhLOzs7Ozs7QUE3QmtCLEE7O0FBb0MxQjtBQUNBO0FBQ0EsQUFFQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJUYWJDYW1wYWlnbi5qcyIsInNvdXJjZVJvb3QiOiJEOi9Xb3Jrc3BhY2UvQmxvY2tjaGFpbi9FdGhlcmV1bS1raWNrc3RhcnRlci9ldGhlcmV1bS9raWNrc3RhcnQifQ==