var fs = require('fs');

module.exports = [
    {
        route: "/example/api/task.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify([
                {id:'key1', card:'230105199603022201', hotelName:'禧龙宾馆1', photo:'images/header.jpg', state:'主键', name:'张三', uid:'100', createTime:1482214046832, doneUid:'2301', doneTime:1482214046832},
                {id:'key2', card:'230105199603022202', hotelName:'禧龙宾馆2', photo:'images/header.jpg', state:'主键2', name:'张三2', uid:'200', createTime:1482214046832, doneUid:'2302', doneTime:1482214046832},
                {id:'key3', card:'230105199603022203', hotelName:'禧龙宾馆3', photo:'images/header.jpg', state:'主键', name:'张三3', uid:'300', createTime:1482214046832, doneUid:'2303', doneTime:1482214046832},
                {id:'key4', card:'230105199603022204', hotelName:'禧龙宾馆4', photo:'images/header.jpg', state:'主键2', name:'张三4', uid:'400', createTime:1482214046832, doneUid:'2304', doneTime:1482214046832},
                {id:'key1', card:'230105199603022201', hotelName:'禧龙宾馆1', photo:'images/header.jpg', state:'主键', name:'张三', uid:'100', createTime:1482214046832, doneUid:'2301', doneTime:1482214046832},
                {id:'key2', card:'230105199603022202', hotelName:'禧龙宾馆2', photo:'images/header.jpg', state:'主键2', name:'张三2', uid:'200', createTime:1482214046832, doneUid:'2302', doneTime:1482214046832},
                {id:'key3', card:'230105199603022203', hotelName:'禧龙宾馆3', photo:'images/header.jpg', state:'主键', name:'张三3', uid:'300', createTime:1482214046832, doneUid:'2303', doneTime:1482214046832},
                {id:'key4', card:'230105199603022204', hotelName:'禧龙宾馆4', photo:'images/header.jpg', state:'主键2', name:'张三4', uid:'400', createTime:1482214046832, doneUid:'2304', doneTime:1482214046832},
                {id:'key1', card:'230105199603022201', hotelName:'禧龙宾馆1', photo:'images/header.jpg', state:'主键', name:'张三', uid:'100', createTime:1482214046832, doneUid:'2301', doneTime:1482214046832},
                {id:'key2', card:'230105199603022202', hotelName:'禧龙宾馆2', photo:'images/header.jpg', state:'主键2', name:'张三2', uid:'200', createTime:1482214046832, doneUid:'2302', doneTime:1482214046832},
                {id:'key3', card:'230105199603022203', hotelName:'禧龙宾馆3', photo:'images/header.jpg', state:'主键', name:'张三3', uid:'300', createTime:1482214046832, doneUid:'2303', doneTime:1482214046832},
                {id:'key4', card:'230105199603022204', hotelName:'禧龙宾馆4', photo:'images/header.jpg', state:'主键2', name:'张三4', uid:'400', createTime:1482214046832, doneUid:'2304', doneTime:1482214046832}
            ]));
        }
    },
    {
        route: "/example/api/task/detail.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({id:'key1', card:'230105199603022201', hotelName:'禧龙宾馆1', photo:'images/header.jpg', state:'主键', name:'张三', uid:'100', createTime:1482214046832, doneUid:'2301', doneTime:1482214046832}));
        }
    },
    {
        route: "/example/api/rota/index.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify([
                {name:'张三1'},
                {name:'张三2'},
                {name:'张三3'},
                {name:'张三4'}
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
        route: "/example/api/task/photo",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','image/png');
            res.end(fs.readFileSync(__dirname+'/../dist/example/images/icon_tabbar.png'));
        }
    }
];