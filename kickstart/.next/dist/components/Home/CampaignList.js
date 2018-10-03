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

var _jsxFileName = 'D:\\Workspace\\Blockchain\\Ethereum-kickstarter\\ethereum\\kickstart\\components\\Home\\CampaignList.js';


var CampaignList = function CampaignList(props) {
    var list = [];
    for (var i = 0; i < 4; i++) {
        var campaign = { url: 'abc', name: 'def' };
        list.push(campaign);
    }

    var campaignItems = list.map(function (campaign) {
        return _react2.default.createElement(_CampaignListItem2.default, {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 17
            }
        });
    });

    return _react2.default.createElement('ul', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, campaignItems, _react2.default.createElement(_routes.Link, { route: '/', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, _react2.default.createElement('a', { className: 'text-link', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, 'View all')));
};

exports.default = CampaignList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhvbWVcXENhbXBhaWduTGlzdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkltYWdlIiwiQ29udGFpbmVyIiwiQnV0dG9uIiwiTGFiZWwiLCJmYWN0b3J5Iiwid2ViMyIsIkxpbmsiLCJDYW1wYWlnbkxpc3RJdGVtIiwiQ2FtcGFpZ25MaXN0IiwicHJvcHMiLCJsaXN0IiwiaSIsImNhbXBhaWduIiwidXJsIiwibmFtZSIsInB1c2giLCJjYW1wYWlnbkl0ZW1zIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPLEFBQVcsQUFBUTs7QUFDbkMsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBc0I7Ozs7Ozs7OztBQUU3QixJQUFNLGVBQWUsU0FBZixBQUFlLGFBQUEsQUFBQyxPQUFVLEFBQzVCO1FBQUksT0FBSixBQUFXLEFBQ1g7U0FBSyxJQUFJLElBQVQsQUFBYSxHQUFHLElBQWhCLEFBQW9CLEdBQXBCLEFBQXVCLEtBQUssQUFDeEI7WUFBSSxXQUFXLEVBQUUsS0FBRixBQUFPLE9BQU8sTUFBN0IsQUFBZSxBQUFvQixBQUNuQzthQUFBLEFBQUssS0FBTCxBQUFVLEFBQ2I7QUFFRDs7UUFBTSxxQkFBZ0IsQUFBSyxJQUFJLFVBQUEsQUFBQyxVQUFhLEFBQ3pDOytCQUNJLEFBQUM7OzBCQUFEOzRCQURKLEFBQ0ksQUFFUDtBQUZPO0FBQUEsU0FBQTtBQUZSLEFBQXNCLEFBTXRCLEtBTnNCOzsyQkFPbEIsY0FBQTs7c0JBQUE7d0JBQUEsQUFDSztBQURMO0FBQUEsS0FBQSxFQUFBLEFBRUksK0JBQUEsQUFBQyw4QkFBSyxPQUFOO3NCQUFBO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLE9BQUcsV0FBSCxBQUFhO3NCQUFiO3dCQUFBO0FBQUE7T0FKWixBQUNJLEFBRUksQUFDSSxBQUtmO0FBdEJELEFBd0JBOztrQkFBQSxBQUFlIiwiZmlsZSI6IkNhbXBhaWduTGlzdC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Xb3Jrc3BhY2UvQmxvY2tjaGFpbi9FdGhlcmV1bS1raWNrc3RhcnRlci9ldGhlcmV1bS9raWNrc3RhcnQifQ==