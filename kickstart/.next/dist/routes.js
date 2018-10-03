'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new').add('/fileupload/:filename', '/fileupload');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNLLEFBREwsSUFDUyxBQURULGtCQUMyQixBQUQzQixrQkFFSyxBQUZMLElBRVMsQUFGVCx1QkFFZ0MsQUFGaEMsbUJBR0ssQUFITCxJQUdTLEFBSFQsZ0NBR3lDLEFBSHpDLDZCQUlLLEFBSkwsSUFJUyxBQUpULG9DQUk2QyxBQUo3QywyQkFLSyxBQUxMLElBS1MsQUFMVCx5QkFLa0MsQUFMbEM7O0FBUUEsT0FBTyxBQUFQLFVBQWlCLEFBQWpCIiwiZmlsZSI6InJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiJEOi9Xb3Jrc3BhY2UvQmxvY2tjaGFpbi9FdGhlcmV1bS1raWNrc3RhcnRlci9ldGhlcmV1bS9raWNrc3RhcnQifQ==