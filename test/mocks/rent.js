var fs = require('fs');

var routes = [
    {
        route: "/example/api/rentNew.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {
                    list:[
                        {card:'231105199503232227',createTime:1482214046832,state:'0',community:{name:'建设社区',advisor:'张三'},id:'r1'},
                        {card:'232105199503232226',createTime:1482214046832,state:'1',community:{name:'建设社区',advisor:'张三'},id:'r2'},
                        {card:'233105199503232226',createTime:1482214046832,state:'0',community:{name:'建设社区',advisor:'张三'},id:'r3'},
                        {card:'234105199503232226',createTime:1482214046832,state:'0',community:{name:'建设社区',advisor:'张三'},id:'r4'},
                        {card:'235105199503232226',createTime:1482214046832,state:'1',community:{name:'建设社区',advisor:'张三'},id:'r5'},
                        {card:'236105199503232226',createTime:1482214046832,state:'0',community:{name:'建设社区',advisor:'张三'},id:'r6'},
                        {card:'230105199503232226',createTime:1482214046832,state:'0',community:{name:'建设社区',advisor:'张三'},id:'r7'},
                        {card:'230105199503232226',createTime:1482214046832,state:'1',community:{name:'建设社区',advisor:'张三'},id:'r8'},
                        {card:'230105199503232226',createTime:1482214046832,state:'0',community:{name:'建设社区',advisor:'张三'},id:'r9'},
                        {card:'238105199503232226',createTime:1482214046832,state:'0',community:{name:'建设社区',advisor:'张三'},id:'r10'},
                        {card:'230105199503232226',createTime:1482214046832,state:'1',community:{name:'建设社区',advisor:'张三'},id:'r11'},
                        {card:'230105199503232226',createTime:1482214046832,state:'0',community:{name:'建设社区',advisor:'张三'},id:'r12'},
                        {card:'230105199503232226',createTime:1482214046832,state:'0',community:{name:'建设社区',advisor:'张三'},id:'r13'},
                        {card:'230105199503232226',createTime:1482214046832,state:'1',community:{name:'建设社区',advisor:'张三'},id:'r14'},
                        {card:'230105199503232226',createTime:1482214046832,state:'0',community:{name:'建设社区',advisor:'张三'},id:'r15'},
                        {card:'230105199503232226',createTime:1482214046832,state:'0',community:{name:'建设社区',advisor:'张三'},id:'r16'},
                        {card:'230105199503232226',createTime:1482214046832,state:'1',community:{name:'建设社区',advisor:'张三'},id:'r17'},
                        {card:'230105199503232226',createTime:1482214046832,state:'0',community:{name:'建设社区',advisor:'张三'},id:'r18'}
                    ],

                }
            ));
        }
    },
    {
        route: "/example/api/rent/person.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({
                person:[
                    {name:'李春凤',id:'k1',num:9},
                    {name:'张德静',id:'k2',num:4},
                    {name:'王金花',id:'k3',num:10},
                    {name:'单战',id:'k4',num:19},
                    {name:'张三',id:'k5',num:21},
                    {name:'李四',id:'k6',num:17},
                    {name:'赵丽',id:'k7',num:5},
                    {name:'王五',id:'k8',num:8},
                    {name:'孙权',id:'k9',num:13}
                ],
            }));
        }
    },
    {
        route: "/example/api/community.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                [
                    {name:'建设社区',id:'s1'},
                    {name:'传奇社区',id:'s2'},
                    {name:'红旗社区',id:'s3'},
                    {name:'泰海社区',id:'s4'},
                    {name:'天木社区',id:'s5'}
                ]
            ));
        }
    },
    {
        route: "/example/api/floor/save.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:'1',floorid:'id1'}));
        }
    },
    {
        route: "/example/api/floor/list.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                [
                    {id:'r1',street:'红旗大街',num:'389',ridgepole:3,unit:2,door:402,tenants:[]},
                    {id:'r2',street:'嵩山路',num:'21-19',ridgepole:4,unit:5,door:712,tenants:[]},
                    {id:'r3',street:'香江路',num:'3',ridgepole:1,unit:1,door:323,tenants:[]},
                    {id:'r4',street:'珠江路',num:'119',ridgepole:6,unit:2,door:212,tenants:[]},
                    {id:'r5',street:'中山路',num:'84',ridgepole:5,unit:4,door:506,tenants:[]},
                    {id:'r6',street:'华山路',num:'59',ridgepole:'',unit:6,door:721,tenants:[]},
                    {id:'r1',street:'红旗大街',num:'389',ridgepole:3,unit:2,door:402,tenants:[]},
                    {id:'r2',street:'嵩山路',num:'21-19',ridgepole:4,unit:5,door:712,tenants:[]},
                    {id:'r3',street:'香江路',num:'3',ridgepole:1,unit:1,door:323,tenants:[]},
                    {id:'r4',street:'珠江路',num:'119',ridgepole:6,unit:2,door:212,tenants:[]},
                    {id:'r5',street:'中山路',num:'84',ridgepole:5,unit:4,door:506,tenants:[]},
                    {id:'r6',street:'华山路',num:'59',ridgepole:'',unit:6,door:721,tenants:[]}
                ]
            ));
        }
    },
    {
        route: "/example/api/tenant/list.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                [
                    {sfzh: "230105199632020201",date:1489551285959,id:'re1'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re2'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re3'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re4'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re5'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re6'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re7'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re1'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re2'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re3'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re4'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re5'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re6'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re7'}
                ]
            ));
        }
    },
    {
        route: "/example/api/tenant/count.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {count:'7'}
            ));
        }
    },
    {
        route: "/example/api/floor/count.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {count:'6'}
            ));
        }
    },
    {
        route: "/example/api/tenant/find.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {id:'re1',date:1489551285959,tenants:[],floor:{user:{name:'王春芳'},master:{name:'王春芳',mobile:'15663641658'},police:{name:'李洋'},id:'f1',community:{name:'红旗社区'},street:'嵩山路',num:18,ridgepole:4,unit:1,door:402},photo:'images/header.jpg',sfzh:'230105199804262325'}
            ));
        }
    },
    {
        route: "/example/api/tenant/cancel.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {state:'1'}
            ));
        }
    },
    {
        route: "/example/api/tenant/search.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {state:'1'}
            ));
        }
    },
    {
        route: "/example/api/tenant/save.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {state:'1'}
            ));
        }
    },
    {
        route: "/example/api/police/list.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {
                    'rrer': ['张三', '25', '9', '30'],
                    'userfs': ['李四', '25', '9', '30'],
                    'userIds': ['王二', '25', '9', '30'],
                    'rrerss': ['张三', '25', '9', '30'],
                    'userfss': ['李四', '25', '9', '30'],
                    'userIdss': ['王二', '25', '9', '30'],
                    'rrer222': ['张三', '25', '9', '30'],
                    'userf333': ['李四', '25', '9', '30'],
                    'userId444': ['王二', '25', '9', '30'],
                    'rrer55': ['张三', '25', '9', '30'],
                    'userf66': ['李四', '25', '9', '30'],
                    'userId77': ['王二', '25', '9', '30'],
                    'rrer000': ['张三', '25', '9', '30'],
                    'userft56': ['李四', '25', '9', '30'],
                    'userId99ee': ['王二', '25', '9', '30']
                }
            ));
        }
    },
    {
        route: "/example/api/police/total.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {
                    'floor':'96',
                    'uncheck':'15',
                    'total':'192',
                }
            ));
        }
    },
    {
        route: "/example/api/police/listfloor.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                [
                    {id:'r1',street:'红旗大街',num:'389',ridgepole:3,unit:2,door:402,tenants:[]},
                    {id:'r2',street:'嵩山路',num:'21-19',ridgepole:4,unit:5,door:712,tenants:[]},
                    {id:'r3',street:'香江路',num:'3',ridgepole:1,unit:1,door:323,tenants:[]},
                    {id:'r4',street:'珠江路',num:'119',ridgepole:6,unit:2,door:212,tenants:[]},
                    {id:'r5',street:'中山路',num:'84',ridgepole:5,unit:4,door:506,tenants:[]},
                    {id:'r6',street:'华山路',num:'59',ridgepole:'',unit:6,door:721,tenants:[]},
                    {id:'r1',street:'红旗大街',num:'389',ridgepole:3,unit:2,door:402,tenants:[]},
                    {id:'r2',street:'嵩山路',num:'21-19',ridgepole:4,unit:5,door:712,tenants:[]},
                    {id:'r3',street:'香江路',num:'3',ridgepole:1,unit:1,door:323,tenants:[]},
                    {id:'r4',street:'珠江路',num:'119',ridgepole:6,unit:2,door:212,tenants:[]},
                    {id:'r5',street:'中山路',num:'84',ridgepole:5,unit:4,door:506,tenants:[]},
                    {id:'r6',street:'华山路',num:'59',ridgepole:'',unit:6,door:721,tenants:[]}
                ]
            ));
        }
    },
    {
        route: "/example/api/police/countfloor.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {count:'33'}
            ));
        }
    },
    {
        route: "/example/api/police/listtenant.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                [
                    {uncheck:'1',sfzh: "230105199632020201",date:1489551285959,id:'re1',floor:{user:{name:'王春芳'},master:{name:'王春芳',mobile:'15663641658'},id:'f1',community:{name:'红旗社区'}}},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re2',floor:{user:{name:'王春芳'},master:{name:'王春芳',mobile:'15663641658'},id:'f1',community:{name:'红旗社区'}}},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re3',floor:{user:{name:'王春芳'},master:{name:'王春芳',mobile:'15663641658'},id:'f1',community:{name:'红旗社区'}}},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re4',floor:{user:{name:'王春芳'},master:{name:'王春芳',mobile:'15663641658'},id:'f1',community:{name:'红旗社区'}}},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re5',floor:{user:{name:'王春芳'},master:{name:'王春芳',mobile:'15663641658'},id:'f1',community:{name:'红旗社区'}}},
                    {uncheck:'1',sfzh: "230105199632020201",date:1489551285959,id:'re6',floor:{user:{name:'王春芳'},master:{name:'王春芳',mobile:'15663641658'},id:'f1',community:{name:'红旗社区'}}},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re7',floor:{user:{name:'王春芳'},master:{name:'王春芳',mobile:'15663641658'},id:'f1',community:{name:'红旗社区'}}},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re1',floor:{user:{name:'王春芳'},master:{name:'王春芳',mobile:'15663641658'},id:'f1',community:{name:'红旗社区'}}},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re2',floor:{user:{name:'王春芳'},master:{name:'王春芳',mobile:'15663641658'},id:'f1',community:{name:'红旗社区'}}},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re3',floor:{user:{name:'王春芳'},master:{name:'王春芳',mobile:'15663641658'},id:'f1',community:{name:'红旗社区'}}},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re4',floor:{user:{name:'王春芳'},master:{name:'王春芳',mobile:'15663641658'},id:'f1',community:{name:'红旗社区'}}},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re5',floor:{user:{name:'王春芳'},master:{name:'王春芳',mobile:'15663641658'},id:'f1',community:{name:'红旗社区'}}},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re6',floor:{user:{name:'王春芳'},master:{name:'王春芳',mobile:'15663641658'},id:'f1',community:{name:'红旗社区'}}},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re7',floor:{user:{name:'王春芳'},master:{name:'王春芳',mobile:'15663641658'},id:'f1',community:{name:'红旗社区'}}}
                ]
            ));
        }
    },
    {
        route: "/example/api/police/counttenant.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {count:'3'}
            ));
        }
    },
    {
        route: "/example/api/police/cancel.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {state:'1'}
            ));
        }
    },
    {
        route: "/example/api/tenant/counttenant.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {count:'3'}
            ));
        }
    },
    {
        route: "/example/api/tenant/listtenant.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                [
                    {sfzh: "230105199632020201",date:1489551285959,id:'re1'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re2'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re3'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re4'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re5'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re6'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re7'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re1'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re2'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re3'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re4'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re5'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re6'},
                    {sfzh: "230105199632020201",date:1489551285959,id:'re7'}
                ]
            ));
        }
    },
];

module.exports = routes;
