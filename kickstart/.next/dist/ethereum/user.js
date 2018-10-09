'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _UserFactory = require('./build/UserFactory.json');

var _UserFactory2 = _interopRequireDefault(_UserFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_UserFactory2.default.interface), '0x9390f4b942B8c1D7a9dB782B9c94e18AcAC294e5');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx1c2VyLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJVc2VyRmFjdG9yeSIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUF3QixBQUF4Qjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNiLEtBQUssQUFBTCxNQUFXLHNCQUFZLEFBQXZCLEFBRGEsWUFFYixBQUZhLEFBQWpCLEFBS0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiJEOi9Xb3Jrc3BhY2UvQmxvY2tjaGFpbi9FdGhlcmV1bS1raWNrc3RhcnRlci9ldGhlcmV1bS9raWNrc3RhcnQifQ==