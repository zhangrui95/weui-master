var fs = require('fs');

var routes = [
    {
        route: "/example/api/policeCommunity/policesByCommunity.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify( [
                {id:'mj1',name:'于新刚'},
                {id:'mj2',name:'于谦'},
                {id:'mj3',name:'傅志强'}
            ]));
        }
    },
    {
        route: "/example/api/policeCommunity/communitiesByPolice.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify( [
                {id:'sq1',name:'金和社区'},
                {id:'sq2',name:'信定社区'},
                {id:'sq3',name:'红色社区'}
            ]));
        }
    },
    {
        route: "/example/api/policeCommunity/save.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({id:'sqp1',police:{name:'傅志强'},community:{name:'金和社区'}}));
        }
    },
    {
        route: "/example/api/policeCommunity/delete.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    }
];

module.exports = routes;
