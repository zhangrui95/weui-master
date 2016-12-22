var fs = require('fs');

module.exports = [
    {
        route: "/example/api/task.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify([
                {id:'key1', card:'230105199603022201', hotelName:'禧龙宾馆1', photo:'images/header.jpg', state:'主键', user:{uid:'100',company:'禧龙宾馆1', name:'张三'}, createTime:1482214046832, doneUser:{uid:'2301', name:'民警1'}, doneTime:1482214046832},
                {id:'key2', card:'230105199603022202', hotelName:'禧龙宾馆2', photo:'images/header.jpg', state:'主键2', user:{uid:'200',company:'旅店2', name:'张三2'}, createTime:1482214046832, doneUser:{uid:'2302', name:'民警2'}, doneTime:1482214046832},
                {id:'key3', card:'230105199603022203', hotelName:'禧龙宾馆3', photo:'images/header.jpg', state:'主键', user:{uid:'300',company:'旅店3', name:'张三3'}, createTime:1482214046832, doneUser:{uid:'2303', name:'民警3'}, doneTime:1482214046832},
                {id:'key4', card:'230105199603022204', hotelName:'禧龙宾馆4', photo:'images/header.jpg', state:'主键2', user:{uid:'400',company:'旅店4', name:'张三4'}, createTime:1482214046832, doneUser:{uid:'2304', name:'民警4'}, doneTime:1482214046832},
                {id:'key1', card:'230105199603022201', hotelName:'禧龙宾馆1', photo:'images/header.jpg', state:'主键', user:{uid:'100',company:'禧龙宾馆1', name:'张三'}, createTime:1482214046832, doneUser:{uid:'2301', name:'民警1'}, doneTime:1482214046832},
                {id:'key2', card:'230105199603022202', hotelName:'禧龙宾馆2', photo:'images/header.jpg', state:'主键2', user:{uid:'200',company:'旅店2', name:'张三2'}, createTime:1482214046832, doneUser:{uid:'2302', name:'民警2'}, doneTime:1482214046832},
                {id:'key3', card:'230105199603022203', hotelName:'禧龙宾馆3', photo:'images/header.jpg', state:'主键', user:{uid:'300',company:'旅店3', name:'张三3'}, createTime:1482214046832, doneUser:{uid:'2303', name:'民警3'}, doneTime:1482214046832},
                {id:'key4', card:'230105199603022204', hotelName:'禧龙宾馆4', photo:'images/header.jpg', state:'主键2', user:{uid:'400',company:'旅店4', name:'张三4'}, createTime:1482214046832, doneUser:{uid:'2304', name:'民警4'}, doneTime:1482214046832},
                {id:'key1', card:'230105199603022201', hotelName:'禧龙宾馆1', photo:'images/header.jpg', state:'主键', user:{uid:'100',company:'禧龙宾馆1', name:'张三'}, createTime:1482214046832, doneUser:{uid:'2301', name:'民警1'}, doneTime:1482214046832},
                {id:'key2', card:'230105199603022202', hotelName:'禧龙宾馆2', photo:'images/header.jpg', state:'主键2', user:{uid:'200',company:'旅店2', name:'张三2'}, createTime:1482214046832, doneUser:{uid:'2302', name:'民警2'}, doneTime:1482214046832},
                {id:'key3', card:'230105199603022203', hotelName:'禧龙宾馆3', photo:'images/header.jpg', state:'主键', user:{uid:'300',company:'旅店3', name:'张三3'}, createTime:1482214046832, doneUser:{uid:'2303', name:'民警3'}, doneTime:1482214046832},
                {id:'key4', card:'230105199603022204', hotelName:'禧龙宾馆4', photo:'images/header.jpg', state:'主键2', user:{uid:'400',company:'旅店4', name:'张三4'}, createTime:1482214046832, doneUser:{uid:'2304', name:'民警4'}, doneTime:1482214046832}
            ]));
        }
    },
    {
        route: "/example/api/task/detail.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            var ret = {id:'key1', card:'230105199603022201', user:{uid:'100',company:'禧龙宾馆1',address:'xx路yy号', name:'张三'}, photo:'images/header.jpg', state:'0', createTime:1482214046832, doneUser:null, doneTime:null};
            // ret.state = '1';
            // ret.doneUser = {uid:'2301', name:'民警1'};
            // ret.doneTime = 1482214046832;
            res.end(JSON.stringify(ret));
        }
    },
    {
        route: "/example/api/task/doneTask.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:'1'}));
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
