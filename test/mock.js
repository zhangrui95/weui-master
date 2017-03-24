var fs = require('fs');

var routes = [];
var mocks = fs.readdirSync(__dirname+'/mocks');
for(var i in mocks){
    routes = routes.concat(require('./mocks/' + mocks[i]))
}

module.exports = routes;
