
var routes = [
    {
        route: "/example/api/apiRequest/reload.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:1}));
        }
    },
    {
        route: "/example/api/apiRequest/reset.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:1}));
        }
    }
];

module.exports = routes;
