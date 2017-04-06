var fs = require('fs');

var routes = [
    {
        route: "/example/api/community.json",
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
        route: "/example/api/community/save.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({id:'sq4',name:'新增社区'}));
        }
    },
    {
        route: "/example/api/community/update.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({id:'sq5',name:'修改社区'}));
        }
    },
    {
        route: "/example/api/community/delete.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({id:'sq6',name:'删除社区'}));
        }
    },
    {
        route: "/example/api/community/detail.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({id:'sq7',name:'详情社区'}));
        }
    }
];

module.exports = routes;
