var fs = require('fs');

var routes = [
    {
        route: "/example/api/user/role.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify([
                {name:'艾一一',avatar:'images/header.jpg?',id:'key1',phonetic:'AiYiYi'},
                {name:'陈二二',avatar:'',id:'key2',phonetic:'C'},
                {name:'傅志强',avatar:'images/header.jpg?',id:'key3',phonetic:'F'},
                {name:'关四四',avatar:'images/header.jpg?',id:'key4',phonetic:'G'},
                {name:'李一一',avatar:'images/header.jpg?',id:'key5',phonetic:'L'},
                {name:'李二二',avatar:'images/header.jpg?',id:'key6',phonetic:'L'},
                {name:'谭三三',avatar:'images/header.jpg?',id:'key7',phonetic:'T'},
                {name:'王四四',avatar:'images/header.jpg?',id:'key8',phonetic:'W'},
                {name:'王一一',avatar:'images/header.jpg?',id:'key9',phonetic:'W'},
                {name:'赵二二',avatar:'images/header.jpg?',id:'key10',phonetic:'Z'},
                {name:'张三三',avatar:'images/header.jpg?',id:'key11',phonetic:'Z'},
                {name:'张四四',avatar:'images/header.jpg?',id:'key12',phonetic:'ZhangSiSi'},
                {name:'钱鑫鑫',avatar:'images/header.jpg?',id:'key12',phonetic:'QianXinXin'}
            ]));
        }
    },
    {
        route: "/example/api/user/jsTicket.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({appid:'test_appid',timestamp:new Date().getTime(),nonceStr:'test_nonceStr',signature:'test_signature'}));
        }
    },
    {
        route: "/example/api/user/info.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({rota:[{id:'r1',user:{id:'key3',name:"傅志强"}}],count:7}));
        }
    },
    {
        route: "/example/api/user/policeInfo.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({count:10,employes:31,policeId:'xx',name:'苏素素',avatar:'images/head.jpg?'}));
        }
    },
    {
        route: "/example/api/user/me.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {id:'k1',name:'张三',avatar:'images/icon1.png?'}
            ));
        }
    },
    {
        route: "/example/api/user/detail.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {id:'k1',name:'张三',avatar:'images/icon1.png?'}
            ));
        }
    },
    {
        route: "/example/api/user/policeHadArea.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify( [
                {id:'t1',name:'张三'},
                {id:'t2',name:'王二'},
                {id:'t3',name:'李四'},
                {id:'t4',name:'孙七'},
                {id:'t5',name:'柳柳'},
                {id:'t6',name:'夏夏'},
                {id:'t7',name:'佳佳'}
            ]));
        }
    },
    {
        route: "/example/api/user/list.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify([
                {name:'艾一一',state:-1,id:'key1',role:'dept_dev'},
                {name:'陈二二',state:1,id:'key2',role:'dept_dev',post:'所长'},
                {name:'傅志强',state:2,id:'key3',role:'dept_dev',post:'副所长'},
                {name:'关四四',state:1,id:'key4',role:'dept_dev',post:'教导员'},
                {name:'李一一',state:4,id:'key5',role:'dept_dev',post:'民警'},
                {name:'李二二',state:1,id:'key6',role:'dept_dev',post:'企业管理员'},
                {name:'谭三三',state:1,id:'key7',role:'dept_dev',post:'值班管理员'},
                {name:'王四四',state:1,id:'key8',role:'dept_dev',post:'综合管理员'},
                {name:'王一一',state:1,id:'key9',role:'dept_dev',post:'民警'},
                {name:'赵二二',state:1,id:'key10',role:'dept_dev',post:'民警',policeArea:'0'},
                {name:'张三三',state:1,id:'key11',role:'dept_dev'},
                {name:'张四四',state:1,id:'key12',role:'dept_dev'},
                {name:'钱鑫鑫',state:1,id:'key12',role:'dept_dev'}
            ]));
        }
    },
    {
        route: "/example/api/user/save.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0,user:{id:'u1',name:'用户添加'}}));
        }
    },
    {
        route: "/example/api/user/update.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0,user:{id:'u2',name:'用户更新'}}));
        }
    },
    {
        route: "/example/api/user/close.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
    {
        route: "/example/api/user/delete.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
    {
        route: "/example/api/imports/save.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
    {
        route: "/example/api/user/checkMobile.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
    {
        /**
         * 用户解绑微信
         * @param id 用户id
         * @return state 0 成功, -1 失败
         *          error 信息
         */
        route: "/example/api/user/unbind.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
    {
        /**
         * 民警交接
         * @param oldPoliceId 旧民警id
         * @param newPoliceId 新民警id
         * @param isAll 是否包含非警区关联数据 目前只有值班数据
         * @return state 0 成功, -1 失败
         *          error 信息
         */
        route: "/example/api/user/changePolice.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    }
];

module.exports = routes;
