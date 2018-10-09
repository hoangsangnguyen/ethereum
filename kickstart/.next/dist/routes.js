'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/back', '/campaigns/back').add('/campaigns/:address/test', '/campaigns/test').add('/campaigns/:address/requests/new', '/campaigns/requests/new').add('/fileupload/:filename', '/fileupload').add('/author/login', '/author/login').add('/author/signup', '/author/signup');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNLLEFBREwsSUFDUyxBQURULGtCQUMyQixBQUQzQixrQkFFSyxBQUZMLElBRVMsQUFGVCx1QkFFZ0MsQUFGaEMsbUJBR0ssQUFITCxJQUdTLEFBSFQsZ0NBR3lDLEFBSHpDLDZCQUlLLEFBSkwsSUFJUyxBQUpULDRCQUlxQyxBQUpyQyxtQkFLSyxBQUxMLElBS1MsQUFMVCw0QkFLcUMsQUFMckMsbUJBTUssQUFOTCxJQU1TLEFBTlQsb0NBTTZDLEFBTjdDLDJCQU9LLEFBUEwsSUFPUyxBQVBULHlCQU9rQyxBQVBsQyxlQVFLLEFBUkwsSUFRUyxBQVJULGlCQVEwQixBQVIxQixpQkFTSyxBQVRMLElBU1MsQUFUVCxrQkFTMkIsQUFUM0I7O0FBY0EsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJEOi9Xb3Jrc3BhY2UvQmxvY2tjaGFpbi9FdGhlcmV1bS1raWNrc3RhcnRlci9ldGhlcmV1bS9raWNrc3RhcnQifQ==