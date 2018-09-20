'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _TabDetail = require('./TabDetail');

var _TabDetail2 = _interopRequireDefault(_TabDetail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Workspace\\Blockchain\\kickstart\\components\\TabCampaign.js';


var panes = [{ menuItem: 'Arts', render: function render() {
    return _react2.default.createElement(_TabDetail2.default, { category: 'Art', type: '1', __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    });
  } }, { menuItem: 'Design $ Tech', render: function render() {
    return _react2.default.createElement(_TabDetail2.default, { category: 'Design $ Tech', type: 2, __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    });
  } }, { menuItem: 'Comics & illustration', render: function render() {
    return _react2.default.createElement(_TabDetail2.default, { category: 'Comics & illustration', __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    });
  } }, { menuItem: 'Games', render: function render() {
    return _react2.default.createElement(_TabDetail2.default, { category: 'Games', __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    });
  } }, { menuItem: 'Food & Craft', render: function render() {
    return _react2.default.createElement(_TabDetail2.default, { category: 'Food & Craft', __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    });
  } }, { menuItem: 'Music', render: function render() {
    return _react2.default.createElement(_TabDetail2.default, { category: 'Music', __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    });
  } }, { menuItem: 'Publishing', render: function render() {
    return _react2.default.createElement(_TabDetail2.default, { category: 'Publishing', __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    });
  } }, { menuItem: 'Film', render: function render() {
    return _react2.default.createElement(_TabDetail2.default, { category: 'Film', __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    });
  } }];

var TabCampaign = function TabCampaign() {
  return _react2.default.createElement(_semanticUiReact.Tab, { panes: panes, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  });
};

exports.default = TabCampaign;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFRhYkNhbXBhaWduLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGFiIiwiVGFiRGV0YWlsIiwicGFuZXMiLCJtZW51SXRlbSIsInJlbmRlciIsIlRhYkNhbXBhaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPLEFBQWU7Ozs7Ozs7OztBQUV0QixJQUFNLFdBQ0YsVUFBRixBQUFZLFFBQVEsUUFBUSxrQkFBQTsyQkFBTSxBQUFDLHFDQUFVLFVBQVgsQUFBcUIsT0FBTyxNQUE1QixBQUFrQztrQkFBbEM7b0JBQU4sQUFBTTtBQUFBO0tBQUE7QUFEdEIsQUFDWixHQUFBLEVBRFksSUFFVixVQUFGLEFBQVksaUJBQWlCLFFBQVEsa0JBQUE7MkJBQU0sQUFBQyxxQ0FBVSxVQUFYLEFBQXFCLGlCQUFpQixNQUF0QyxBQUE0QztrQkFBNUM7b0JBQU4sQUFBTTtBQUFBO0tBQUE7QUFGL0IsQUFFWixHQUFBLE1BQ0UsVUFBRixBQUFZLHlCQUF5QixRQUFRLGtCQUFBOzJCQUFNLEFBQUMscUNBQVUsVUFBWCxBQUFxQjtrQkFBckI7b0JBQU4sQUFBTTtBQUFBO0tBQUE7QUFIdkMsQUFHWixHQUFBLE1BQ0UsVUFBRixBQUFZLFNBQVMsUUFBUSxrQkFBQTsyQkFBTSxBQUFDLHFDQUFVLFVBQVgsQUFBcUI7a0JBQXJCO29CQUFOLEFBQU07QUFBQTtLQUFBO0FBSnZCLEFBSVosR0FBQSxNQUNFLFVBQUYsQUFBWSxnQkFBZ0IsUUFBUSxrQkFBQTsyQkFBTSxBQUFDLHFDQUFVLFVBQVgsQUFBcUI7a0JBQXJCO29CQUFOLEFBQU07QUFBQTtLQUFBO0FBTDlCLEFBS1osR0FBQSxNQUNFLFVBQUYsQUFBWSxTQUFTLFFBQVEsa0JBQUE7MkJBQU0sQUFBQyxxQ0FBVSxVQUFYLEFBQXFCO2tCQUFyQjtvQkFBTixBQUFNO0FBQUE7S0FBQTtBQU52QixBQU1aLEdBQUEsTUFDRSxVQUFGLEFBQVksY0FBYyxRQUFRLGtCQUFBOzJCQUFNLEFBQUMscUNBQVUsVUFBWCxBQUFxQjtrQkFBckI7b0JBQU4sQUFBTTtBQUFBO0tBQUE7QUFQNUIsQUFPWixHQUFBLE1BQ0UsVUFBRixBQUFZLFFBQVEsUUFBUSxrQkFBQTsyQkFBTSxBQUFDLHFDQUFVLFVBQVgsQUFBcUI7a0JBQXJCO29CQUFOLEFBQU07QUFBQTtLQUFBO0FBUnBDLEFBQWMsQUFRWixHQUFBOztBQUlGLElBQU0sY0FBYyxTQUFkLEFBQWMsY0FBQTt5QkFDbEIsQUFBQyxzQ0FBSSxPQUFMLEFBQVk7Z0JBQVo7a0JBRGtCLEFBQ2xCO0FBQUE7R0FBQTtBQURGLEFBSUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiVGFiQ2FtcGFpZ24uanMiLCJzb3VyY2VSb290IjoiRDovV29ya3NwYWNlL0Jsb2NrY2hhaW4va2lja3N0YXJ0In0=