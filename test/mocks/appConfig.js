
var routes = [
    {
        route: "/example/api/appConfig/valueAll.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({value:'6.11'}));
        }
    },
    {
        route: "/example/api/appConfig/configAll.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    }
];

module.exports = routes;
