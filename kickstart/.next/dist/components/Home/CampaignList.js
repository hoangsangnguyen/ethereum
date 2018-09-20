'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

var _CampaignListItem = require('../Home/CampaignListItem');

var _CampaignListItem2 = _interopRequireDefault(_CampaignListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\Workspace\\Blockchain\\kickstart\\components\\Home\\CampaignList.js';


var CampaignList = function CampaignList(props) {
    var list = [];
    for (var i = 0; i < 4; i++) {
        var campaign = { url: 'abc', name: 'def' };
        list.push(campaign);
    }
    console.log(list);

    var campaignItems = list.map(function (campaign) {
        return _react2.default.createElement(_CampaignListItem2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 18
            }
        });
    });

    return _react2.default.createElement('ul', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, campaignItems, _react2.default.createElement(_routes.Link, { route: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement('a', { className: 'text-link', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, 'View all')));
};

exports.default = CampaignList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhvbWVcXENhbXBhaWduTGlzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkltYWdlIiwiQ29udGFpbmVyIiwiQnV0dG9uIiwiTGFiZWwiLCJmYWN0b3J5Iiwid2ViMyIsIkxpbmsiLCJDYW1wYWlnbkxpc3RJdGVtIiwiQ2FtcGFpZ25MaXN0IiwicHJvcHMiLCJsaXN0IiwiaSIsImNhbXBhaWduIiwidXJsIiwibmFtZSIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiY2FtcGFpZ25JdGVtcyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTyxBQUFXLEFBQVE7O0FBQ25DLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQXNCOzs7Ozs7Ozs7QUFFN0IsSUFBTSxlQUFlLFNBQWYsQUFBZSxhQUFBLEFBQUMsT0FBVSxBQUM1QjtRQUFJLE9BQUosQUFBVyxBQUNYO1NBQUssSUFBSSxJQUFULEFBQWEsR0FBRyxJQUFoQixBQUFvQixHQUFwQixBQUF1QixLQUFLLEFBQ3hCO1lBQUksV0FBVyxFQUFFLEtBQUYsQUFBTyxPQUFPLE1BQTdCLEFBQWUsQUFBb0IsQUFDbkM7YUFBQSxBQUFLLEtBQUwsQUFBVSxBQUNiO0FBQ0Q7WUFBQSxBQUFRLElBQVIsQUFBWSxBQUVaOztRQUFNLHFCQUFnQixBQUFLLElBQUksVUFBQSxBQUFDLFVBQWEsQUFDekM7K0JBQ0ksQUFBQzs7MEJBQUQ7NEJBREosQUFDSSxBQUVQO0FBRk87QUFBQSxTQUFBO0FBRlIsQUFBc0IsQUFNdEIsS0FOc0I7OzJCQU9sQixjQUFBOztzQkFBQTt3QkFBQSxBQUNLO0FBREw7QUFBQSxLQUFBLEVBQUEsQUFFSSwrQkFBQSxBQUFDLDhCQUFLLE9BQU47c0JBQUE7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsT0FBRyxXQUFILEFBQWE7c0JBQWI7d0JBQUE7QUFBQTtPQUpaLEFBQ0ksQUFFSSxBQUNJLEFBS2Y7QUF2QkQsQUF5QkE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ2FtcGFpZ25MaXN0LmpzIiwic291cmNlUm9vdCI6IkQ6L1dvcmtzcGFjZS9CbG9ja2NoYWluL2tpY2tzdGFydCJ9