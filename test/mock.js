var fs = require('fs');

module.exports = [
    {
        route: "/example/api/task.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify([
                {id:'key1', card:'230105199603022201', hotelName:'禧龙宾馆1', photo:'images/header.jpg', state:'主键', user:{uid:'100',company:'禧龙宾馆1', name:'张三', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2301', name:'民警1'}, doneTime:1482214046832},
                {id:'key2', card:'230105199603022202', hotelName:'禧龙宾馆2', photo:'images/header.jpg', state:'主键2', user:{uid:'200',company:'旅店2', name:'张三2', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2302', name:'民警2'}, doneTime:1482214046832},
                {id:'key3', card:'230105199603022203', hotelName:'禧龙宾馆3', photo:'images/header.jpg', state:'主键', user:{uid:'300',company:'旅店3', name:'张三3', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2303', name:'民警3'}, doneTime:1482214046832},
                {id:'key4', card:'230105199603022204', hotelName:'禧龙宾馆4', photo:'images/header.jpg', state:'主键2', user:{uid:'400',company:'旅店4', name:'张三4', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2304', name:'民警4'}, doneTime:1482214046832},
                {id:'key1', card:'230105199603022201', hotelName:'禧龙宾馆1', photo:'images/header.jpg', state:'主键', user:{uid:'100',company:'禧龙宾馆1', name:'张三', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2301', name:'民警1'}, doneTime:1482214046832},
                {id:'key2', card:'230105199603022202', hotelName:'禧龙宾馆2', photo:'images/header.jpg', state:'主键2', user:{uid:'200',company:'旅店2', name:'张三2', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2302', name:'民警2'}, doneTime:1482214046832},
                {id:'key3', card:'230105199603022203', hotelName:'禧龙宾馆3', photo:'images/header.jpg', state:'主键', user:{uid:'300',company:'旅店3', name:'张三3', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2303', name:'民警3'}, doneTime:1482214046832},
                {id:'key4', card:'230105199603022204', hotelName:'禧龙宾馆4', photo:'images/header.jpg', state:'主键2', user:{uid:'400',company:'旅店4', name:'张三4', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2304', name:'民警4'}, doneTime:1482214046832},
                {id:'key1', card:'230105199603022201', hotelName:'禧龙宾馆1', photo:'images/header.jpg', state:'主键', user:{uid:'100',company:'禧龙宾馆1', name:'张三', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2301', name:'民警1'}, doneTime:1482214046832},
                {id:'key2', card:'230105199603022202', hotelName:'禧龙宾馆2', photo:'images/header.jpg', state:'主键2', user:{uid:'200',company:'旅店2', name:'张三2', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2302', name:'民警2'}, doneTime:1482214046832},
                {id:'key3', card:'230105199603022203', hotelName:'禧龙宾馆3', photo:'images/header.jpg', state:'主键', user:{uid:'300',company:'旅店3', name:'张三3', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2303', name:'民警3'}, doneTime:1482214046832},
                {id:'key4', card:'230105199603022204', hotelName:'禧龙宾馆4', photo:'images/header.jpg', state:'主键2', user:{uid:'400',company:'旅店4', name:'张三4', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2304', name:'民警4'}, doneTime:1482214046832}
            ]));
        }
    },
    {
        route: "/example/api/task/leader.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify([
                {id:'key1', card:'230105199603022201', hotelName:'禧龙宾馆1', photo:'images/header.jpg', state:'主键', user:{uid:'100',company:'禧龙宾馆1', name:'张三', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2301', name:'民警1'}, doneTime:1482214046832},
                {id:'key2', card:'230105199603022202', hotelName:'禧龙宾馆2', photo:'images/header.jpg', state:'主键2', user:{uid:'200',company:'旅店2', name:'张三2', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2302', name:'民警2'}, doneTime:1482214046832},
                {id:'key3', card:'230105199603022203', hotelName:'禧龙宾馆3', photo:'images/header.jpg', state:'主键', user:{uid:'300',company:'旅店3', name:'张三3', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2303', name:'民警3'}, doneTime:1482214046832},
                {id:'key4', card:'230105199603022204', hotelName:'禧龙宾馆4', photo:'images/header.jpg', state:'主键2', user:{uid:'400',company:'旅店4', name:'张三4', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2304', name:'民警4'}, doneTime:1482214046832},
                {id:'key1', card:'230105199603022201', hotelName:'禧龙宾馆1', photo:'images/header.jpg', state:'主键', user:{uid:'100',company:'禧龙宾馆1', name:'张三', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2301', name:'民警1'}, doneTime:1482214046832},
                {id:'key2', card:'230105199603022202', hotelName:'禧龙宾馆2', photo:'images/header.jpg', state:'主键2', user:{uid:'200',company:'旅店2', name:'张三2', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2302', name:'民警2'}, doneTime:1482214046832},
                {id:'key3', card:'230105199603022203', hotelName:'禧龙宾馆3', photo:'images/header.jpg', state:'主键', user:{uid:'300',company:'旅店3', name:'张三3', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2303', name:'民警3'}, doneTime:1482214046832},
                {id:'key4', card:'230105199603022204', hotelName:'禧龙宾馆4', photo:'images/header.jpg', state:'主键2', user:{uid:'400',company:'旅店4', name:'张三4', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2304', name:'民警4'}, doneTime:1482214046832},
                {id:'key1', card:'230105199603022201', hotelName:'禧龙宾馆1', photo:'images/header.jpg', state:'主键', user:{uid:'100',company:'禧龙宾馆1', name:'张三', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2301', name:'民警1'}, doneTime:1482214046832},
                {id:'key2', card:'230105199603022202', hotelName:'禧龙宾馆2', photo:'images/header.jpg', state:'主键2', user:{uid:'200',company:'旅店2', name:'张三2', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2302', name:'民警2'}, doneTime:1482214046832},
                {id:'key3', card:'230105199603022203', hotelName:'禧龙宾馆3', photo:'images/header.jpg', state:'主键', user:{uid:'300',company:'旅店3', name:'张三3', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2303', name:'民警3'}, doneTime:1482214046832},
                {id:'key4', card:'230105199603022204', hotelName:'禧龙宾馆4', photo:'images/header.jpg', state:'主键2', user:{uid:'400',company:'旅店4', name:'张三4', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2304', name:'民警4'}, doneTime:1482214046832}
            ]));
        }
    },
    {
        route: "/example/api/task/detail.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            var ret = {id:'key1', card:'230105199603022201', user:{uid:'100',company:'禧龙宾馆1',address:'xx路yy号', name:'张三', mobile:'13012345678'}, photo:'images/header.jpg', state:'0', createTime:1482214046832, doneUser:null, doneTime:null};
            // ret.state = '1';
            // ret.doneUser = {uid:'2301', name:'民警1'};
            // ret.doneTime = 1482214046832;
            res.end(JSON.stringify(ret));
        }
    },
    {
        route: "/example/api/task/leaderDetail.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            var ret = {id:'key1', card:'230105199603022201', user:{uid:'100',company:'禧龙宾馆1',address:'xx路yy号', name:'张三', mobile:'13012345678'}, photo:'images/header.jpg', state:'0', createTime:1482214046832, doneUser:null, doneTime:null};
            // ret.state = '1';
            // ret.doneUser = {uid:'2301', name:'民警1'};
            // ret.doneTime = 1482214046832;
            res.end(JSON.stringify({task:ret,rota:[{id:'r1',user:{name:'民警2'}}]}));
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
                {name:'钱鑫鑫',avatar:'images/header.jpg?',id:'key12',phonetic:'QianXinXin'},
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
            res.end(fs.readFileSync(__dirname+'/../dist/example/images/header.jpg'));
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
        route: "/example/api/rota/allot.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:'1'}));
        }
    },
    {
        route: "/example/api/company/info.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({
                num:1350,
                types:[
                    {name:'全部',num:396},
                    {name:'餐饮',num:12},
                    {name:'旅店',num:21},
                    {name:'汽配',num:7},
                    {name:'服务',num:81},
                    {name:'KTV',num:90},
                    {name:'维修',num:3},
                    {name:'家政',num:12},
                    {name:'教育',num:34},
                    {name:'餐饮',num:12},
                    {name:'旅店',num:21},
                    {name:'汽配',num:7},
                    {name:'服务',num:81},
                    {name:'KTV',num:90},
                    {name:'维修',num:3},
                    {name:'家政',num:12},
                    {name:'教育',num:34}
                ],
                persons:[
                    {name:'全部',num:126},
                    {name:'A区',num:99},
                    {name:'B区',num:34},
                    {name:'C区',num:109},
                    {name:'D区',num:71},
                    {name:'E区',num:34},
                    {name:'F区',num:71},
                    {name:'G区',num:91},
                    {name:'H区',num:50},
                    {name:'I区',num:84},
                    {name:'A区',num:99},
                    {name:'B区',num:34},
                    {name:'C区',num:109},
                    {name:'D区',num:71},
                    {name:'E区',num:34},
                    {name:'F区',num:71},
                    {name:'G区',num:91},
                    {name:'H区',num:50},
                    {name:'I区',num:84}
                ]
            }));
        }
    },
    {
        route: "/example/api/employee.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify([
                {id:'key1', card:'230105199603022201', CompanyName:'九转小磨', photo:'images/header.jpg', state:'主键', user:{uid:'100',company:'九转小磨', name:'张三', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2301', name:'民警1'}, doneTime:1482214046832},
                {id:'key2', card:'230105199603022202', CompanyName:'七天宾馆', photo:'images/header.jpg', state:'主键2', user:{uid:'200',company:'七天宾馆', name:'张三2', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2302', name:'民警2'}, doneTime:1482214046832},
                {id:'key3', card:'230105199603022203', CompanyName:'奔马汽配', photo:'images/header.jpg', state:'主键', user:{uid:'300',company:'奔马汽配', name:'张三3', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2303', name:'民警3'}, doneTime:1482214046832},
                {id:'key4', card:'230105199603022204', CompanyName:'动岚健身', photo:'images/header.jpg', state:'主键2', user:{uid:'400',company:'动岚健身', name:'张三4', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2304', name:'民警4'}, doneTime:1482214046832},
                {id:'key1', card:'230105199603022201', CompanyName:'七星手机卖场', photo:'images/header.jpg', state:'主键', user:{uid:'100',company:'七星手机卖场', name:'张三', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2301', name:'民警1'}, doneTime:1482214046832},
            ]));
        }
    },
    {
        route: "/example/api/employee/detail.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            var ret = {id:'key1', card:'230105199603022201', user:{uid:'100',company:'九转小磨',address:'xx路yy号', name:'李四', mobile:'13012345678'}, photo:'images/header.jpg', state:'0', createTime:1482214046832, doneUser:null, doneTime:null};
            // ret.state = '1';
            // ret.doneUser = {uid:'2301', name:'民警1'};
            // ret.doneTime = 1482214046832;
            res.end(JSON.stringify(ret));
        }
    },
];
