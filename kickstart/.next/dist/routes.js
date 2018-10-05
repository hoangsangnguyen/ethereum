'use strict';

var routes = require('next-routes')();

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/back', '/campaigns/back').add('/campaigns/:address/test', '/campaigns/test').add('/campaigns/:address/requests/new', '/campaigns/requests/new').add('/fileupload/:filename', '/fileupload');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNLLEFBREwsSUFDUyxBQURULGtCQUMyQixBQUQzQixrQkFFSyxBQUZMLElBRVMsQUFGVCx1QkFFZ0MsQUFGaEMsbUJBR0ssQUFITCxJQUdTLEFBSFQsZ0NBR3lDLEFBSHpDLDZCQUlLLEFBSkwsSUFJUyxBQUpULDRCQUlxQyxBQUpyQyxtQkFLSyxBQUxMLElBS1MsQUFMVCw0QkFLcUMsQUFMckMsbUJBTUssQUFOTCxJQU1TLEFBTlQsb0NBTTZDLEFBTjdDLDJCQU9LLEFBUEwsSUFPUyxBQVBULHlCQU9rQyxBQVBsQzs7QUFVQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkQ6L1dvcmtzcGFjZS9CbG9ja2NoYWluL0V0aGVyZXVtLWtpY2tzdGFydGVyL2V0aGVyZXVtL2tpY2tzdGFydCJ9