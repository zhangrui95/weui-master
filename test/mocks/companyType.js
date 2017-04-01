var fs = require('fs');

var routes = [
    {
        route: "/example/api/companyType.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify( [
                {id:'t1',name:'饭店'},
                {id:'t2',name:'幼儿园'},
                {id:'t3',name:'医疗'},
                {id:'t4',name:'洗浴'},
                {id:'t5',name:'旅店'},
                {id:'t6',name:'汽配'},
                {id:'t7',name:'律师事务所'}
            ]));
        }
    },
    {
        route: "/example/api/companyType/list.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify( [
                {id:'t1',name:'饭店',wxDeptId:1},
                {id:'t2',name:'幼儿园',wxDeptId:2},
                {id:'t3',name:'医疗',wxDeptId:3},
                {id:'t4',name:'洗浴',wxDeptId:4},
                {id:'t5',name:'旅店',wxDeptId:5},
                {id:'t6',name:'汽配',wxDeptId:6},
                {id:'t7',name:'律师事务所',wxDeptId:7}
            ]));
        }
    },
    {
        route: "/example/api/companyType/save.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({id:'t8',name:'饭店',wxDeptId:11}));
        }
    },
    {
        route: "/example/api/companyType/update.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({id:'t9',name:'饭店',wxDeptId:12}));
        }
    },
    {
        route: "/example/api/companyType/delete.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({id:'t10',name:'饭店',wxDeptId:13}));
        }
    }
];

module.exports = routes;
