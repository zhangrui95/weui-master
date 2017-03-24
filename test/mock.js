var fs = require('fs');

module.exports = [
    {
        route: "/example/api/task.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {list:[
                    {id:'key1', card:'230105199603022201', company:'禧龙宾馆1', createTime:1482214046832},
                    {id:'key2', card:'230105199603022202', company:'旅店2', createTime:1482214046832},
                    {id:'key3', card:'230105199603022203', company:'旅店3', createTime:1482214046832},
                    {id:'key4', card:'230105199603022204', company:'旅店4', createTime:1482214046832},
                    {id:'key1', card:'230105199603022201', company:'禧龙宾馆1', createTime:1482214046832},
                    {id:'key2', card:'230105199603022202', company:'旅店2', createTime:1482214046832},
                    {id:'key3', card:'230105199603022203', company:'旅店3', createTime:1482214046832},
                    {id:'key4', card:'230105199603022204', company:'旅店4', createTime:1482214046832},
                    {id:'key1', card:'230105199603022201', company:'禧龙宾馆1', createTime:1482214046832},
                    {id:'key2', card:'230105199603022202', company:'旅店2', createTime:1482214046832},
                    {id:'key3', card:'230105199603022203', company:'旅店3', createTime:1482214046832},
                    {id:'key4', card:'230105199603022204', company:'旅店4', createTime:1482214046832}
                ],
                    undo:55,
                    done:1020
                }
            ));
        }
    },
    {
        route: "/example/api/task/save.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
    {
        route: "/example/api/task/leader.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({list:[
                {id:'key1', card:'230105199603022201', company:'禧龙宾馆1', createTime:1482214046832},
                {id:'key2', card:'230105199603022202', company:'旅店2', createTime:1482214046832},
                {id:'key3', card:'230105199603022203', company:'旅店3', createTime:1482214046832},
                {id:'key4', card:'230105199603022204', company:'旅店4', createTime:1482214046832},
                {id:'key1', card:'230105199603022201', company:'禧龙宾馆1', createTime:1482214046832},
                {id:'key2', card:'230105199603022202', company:'旅店2', createTime:1482214046832},
                {id:'key3', card:'230105199603022203', company:'旅店3', createTime:1482214046832},
                {id:'key4', card:'230105199603022204', company:'旅店4', createTime:1482214046832},
                {id:'key1', card:'230105199603022201', company:'禧龙宾馆1', createTime:1482214046832},
                {id:'key2', card:'230105199603022202', company:'旅店2', createTime:1482214046832},
                {id:'key3', card:'230105199603022203', company:'旅店3', createTime:1482214046832},
                {id:'key4', card:'230105199603022204', company:'旅店4', createTime:1482214046832}
            ],
                undo:100,
                done:955
            }));
        }
    },
    {
        route: "/example/api/task/detail.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            var ret = {id:'key1', card:'230105199603022201', user:{uid:'100',company:'',address:'', name:'张三', mobile:'13012345678'}, photo:'images/header.jpg', state:'0', createTime:1482214046832, doneUser:null, doneTime:null};
            ret.state = '1';
            ret.doneUser = {uid:'2301', name:'民警1'};
            ret.doneTime = 1482214046832;
            res.end(JSON.stringify(ret));
        }
    },
    {
        route: "/example/api/task/leaderDetail.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            var ret = {id:'key1', card:'230105199603022201', user:{uid:'100', name:'张三', mobile:'13012345678'},company:{name:'禧龙宾馆1',address:'xx路yy号'}, photo:'images/header.jpg', state:'0', createTime:1482214046832, doneUser:null, doneTime:null};
            ret.state = '1';
            ret.doneUser = {uid:'2301', name:'民警1'};
            ret.doneTime = 1482214046832;
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
        route: "/example/api/user/policeInfo.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({count:10,employes:31,policeId:'xx',name:'苏素素',avatar:'images/head.jpg?'}));
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
                groupTypes:{common:11,other:10},
                types:[
                    {name:'餐饮',num:12,id:'1'},
                    {name:'旅店',num:21,id:'2'},
                    {name:'汽配',num:7,id:'3'},
                    {name:'服务',num:81,id:'4'},
                    {name:'KTV',num:90,id:'5'},
                    {name:'维修',num:3,id:'6'},
                    {name:'家政',num:12,id:'7'},
                    {name:'教育',num:34,id:'8'},
                    {name:'餐饮',num:12,id:'9'},
                    {name:'旅店',num:21,id:'10'},
                    {name:'汽配',num:7,id:'11'},
                    {name:'律师事务所',num:81,id:'12'},
                    {name:'KTV',num:90,id:'13'},
                    {name:'维修',num:3,id:'14'},
                    {name:'家政',num:12,id:'15'},
                    {name:'教育',num:34,id:'16'},
                    {name:'维修',num:3,id:'17'},
                    {name:'家政',num:12,id:'18'},
                    {name:'教育',num:34,id:'19'},
                    {name:'餐饮',num:12,id:'20'},
                    {name:'旅店',num:21,id:'21'},
                    {name:'汽配',num:7,id:'22'},
                    {name:'律师事务所',num:81,id:'23'},
                    {name:'KTV',num:90,id:'24'},
                    {name:'维修',num:3,id:'25'},
                    {name:'家政',num:12,id:'26'},
                    {name:'其他',num:34,id:'27'}
                ],
                persons:[
                    {name:'A区',num:99,id:'k1'},
                    {name:'B区',num:34,id:'k2'},
                    {name:'C区',num:109,id:'k3'},
                    {name:'D区',num:71,id:'k4'},
                    {name:'E区',num:34,id:'k5'},
                    {name:'F区',num:71,id:'k6'},
                    {name:'G区',num:91,id:'k7'},
                    {name:'H区',num:50,id:'k8'},
                    {name:'I区',num:84,id:'k9'},
                    {name:'A区',num:99,id:'k10'},
                    {name:'B区',num:34,id:'k11'},
                    {name:'C区',num:109,id:'k12'},
                    {name:'D区',num:71,id:'k13'},
                    {name:'E区',num:34,id:'k14'},
                    {name:'F区',num:71,id:'k15'},
                    {name:'G区',num:91,id:'k16'},
                    {name:'H区',num:50,id:'k17'},
                    {name:'I区',num:84,id:'k18'},
                    {name:'C区',num:109,id:'k19'},
                ]
            }));
        }
    },
    {
        route: "/example/api/employee.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({
                list:[
                    {id:'key1', card:'230105199603022201', CompanyName:'九转小磨', photo:'images/header.jpg', state:'主键', company:{uid:'100',name:'九转小磨',mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2301', name:'民警1'}, doneTime:1482214046832},
                    {id:'key2', card:'230105199603022202', CompanyName:'七天宾馆', photo:'images/header.jpg', state:'主键2', company:{uid:'200',name:'七天宾馆', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2302', name:'民警2'}, doneTime:1482214046832},
                    {id:'key3', card:'230105199603022203', CompanyName:'奔马汽配', photo:'images/header.jpg', state:'主键', company:{uid:'300',name:'奔马汽配', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2303', name:'民警3'}, doneTime:1482214046832},
                    {id:'key4', card:'230105199603022204', CompanyName:'动岚健身', photo:'images/header.jpg', state:'主键2', company:{uid:'400',name:'动岚健身', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2304', name:'民警4'}, doneTime:1482214046832},
                    {id:'key1', card:'230105199603022201', CompanyName:'七星手机卖场', photo:'images/header.jpg', state:'主键', company:{uid:'100',name:'七星手机卖场',mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2301', name:'民警1'}, doneTime:1482214046832},
                    {id:'key1', card:'230105199603022201', CompanyName:'九转小磨', photo:'images/header.jpg', state:'主键', company:{uid:'100',name:'九转小磨',mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2301', name:'民警1'}, doneTime:1482214046832},
                    {id:'key2', card:'230105199603022202', CompanyName:'七天宾馆', photo:'images/header.jpg', state:'主键2', company:{uid:'200',name:'七天宾馆', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2302', name:'民警2'}, doneTime:1482214046832},
                    {id:'key3', card:'230105199603022203', CompanyName:'奔马汽配', photo:'images/header.jpg', state:'主键', company:{uid:'300',name:'奔马汽配', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2303', name:'民警3'}, doneTime:1482214046832},
                    {id:'key4', card:'230105199603022204', CompanyName:'动岚健身', photo:'images/header.jpg', state:'主键2', company:{uid:'400',name:'动岚健身', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2304', name:'民警4'}, doneTime:1482214046832},
                    {id:'key1', card:'230105199603022201', CompanyName:'七星手机卖场', photo:'images/header.jpg', state:'主键', company:{uid:'100',name:'七星手机卖场',mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2301', name:'民警1'}, doneTime:1482214046832},
            ],
                undo:9,
                done:58
            }));
        }
    },
    {
        route: "/example/api/employee/save.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
    {
        route: "/example/api/employee/detail.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            var ret = {id:'key1',personState:0, card:'230105199603022201',company:{name:'七星手机卖场', police:{name:'李丽丽'}} ,user:{uid:'100',company:'九转小磨',address:'xx路yy号', name:'李四', mobile:'13012345678'},doneUser:{name:'王曦'}, photo:'images/header.jpg', state:'0', createTime:1482214046832, doneTime:null};
            ret.state = '0';
            ret.doneUser = {uid:'2301', name:'民警1'};
            ret.doneTime = 1482214046832;
            res.end(JSON.stringify(ret));
        }
    },
    {
        route: "/example/api/employee/photo",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','image/png');
            res.end(fs.readFileSync(__dirname+'/../dist/example/images/header.jpg'));
        }
    },
    {
        route: "/example/api/employee/doneTask.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:'1'}));
        }
    },
    {
        route: "/example/api/employee/info.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({
                nums:{num:37,done:17},
                types:[
                    {name:'幼儿园',nums:{num:10},id:'k1'},
                    {name:'餐饮',id:'k2'},
                    {name:'旅店',nums:{},id:'k3'},
                    {name:'汽配',nums:{num:89,done:2},id:'k4'},
                    {name:'服务',nums:{num:18,done:9},id:'k5'},
                    {name:'KTV',nums:{num:89,done:2},id:'k6'},
                    {name:'律师事务所',nums:{num:37,done:5},id:'k7'},
                    {name:'幼儿园',nums:{num:10,done:9},id:'k8'},
                    {name:'餐饮',nums:{num:10,done:3},id:'k9'},
                    {name:'旅店',nums:{num:23,done:9},id:'k10'},
                    {name:'汽配',nums:{num:89,done:2},id:'k11'},
                    {name:'服务',nums:{num:180,done:95},id:'k12'},
                    {name:'KTV',nums:{num:89,done:2},id:'k13'},
                    {name:'律师事务所',nums:{num:37,done:5},id:'k14'},
                    {name:'幼儿园',nums:{num:10,done:9},id:'k15'},
                    {name:'餐饮',nums:{num:18,done:4},id:'k16'},
                    {name:'旅店',nums:{num:23,done:9},id:'k17'},
                    {name:'汽配',nums:{num:89},id:'k18'},
                    {name:'服务',nums:{num:90,done:55},id:'k19'},
                    {name:'KTV',nums:{num:89,done:2},id:'k20'},
                    {name:'律师事务所',nums:{num:37,done:5},id:'k21'}
                ],
                persons:[
                    {name:'Z区',id:'X0'},
                    {name:'A区',nums:{num:10,done:9},id:'X1'},
                    {name:'B区',nums:{num:10},id:'X2'},
                    {name:'C区',nums:{done:9},id:'X3'},
                    {name:'D区',nums:{num:10,done:9},id:'X4'},
                    {name:'E区',nums:{num:10,done:9},id:'X5'},
                    {name:'F区',nums:{num:10,done:9},id:'X6'},
                    {name:'G区',nums:{num:10,done:9},id:'X7'},
                    {name:'H区',nums:{num:10,done:9},id:'X8'},
                    {name:'I区',nums:{num:10,done:9},id:'X9'},
                    {name:'Z区',nums:{num:10,done:9},id:'X10'},
                    {name:'A区',nums:{num:10,done:9},id:'X11'},
                    {name:'B区',nums:{num:10,done:9},id:'X12'},
                    {name:'C区',nums:{num:10,done:9},id:'X13'},
                    {name:'D区',nums:{num:10,done:9},id:'X14'},
                    {name:'E区',nums:{num:10,done:9},id:'X15'},
                    {name:'F区',nums:{num:10,done:9},id:'X16'},
                    {name:'G区',nums:{num:10,done:9},id:'X17'},
                    {name:'H区',nums:{num:10,done:9},id:'X18'},
                    {name:'I区',nums:{num:10,done:9},id:'X19'},
                    {name:'Z区',nums:{num:10,done:9},id:'X20'},
                    {name:'A区',nums:{num:10,done:9},id:'X21'},
                    {name:'B区',nums:{num:10,done:9},id:'X22'},
                    {name:'C区',nums:{num:10,done:9},id:'X23'},
                ]
            }));
        }
    },
    {
        route: "/example/api/employee/companies.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({
                    nums:{num:31,done:7,undo:24},
                    list:[
                    {item:{id:'key1',name:'南京灌汤包',address:'嵩山路21-19号',type:{name:'饭店'},police:{name:'李迪迪'}},nums:{num:98,done:21}},
                    {item:{id:'key2',name:'九转小米',address:'嵩山路21-19号',type:{name:'饭店'},police:{name:'张三一'}},nums:{num:0,done:0}},
                    {item:{id:'key3',name:'律师事务所',address:'嵩山路21-19号',type:{name:'饭店'},police:{name:'张三'}},nums:{num:90,done:21}},
                    {item:{id:'key4',name:'八府宴',address:'嵩山路21-19号',type:{name:'饭店'},police:{name:'张三'}},nums:{num:0,done:0}},
                    {item:{id:'key5',name:'谭阁美酒店',address:'嵩山路21-19号',type:{name:'饭店'},police:{name:'张三'}},nums:{num:87,done:0}},
                    {item:{id:'key6',name:'喜家德',address:'嵩山路21-19号',type:{name:'饭店'},police:{name:'张三'}},nums:{num:0,done:0}},
                    {item:{id:'key7',name:'张亮麻辣烫',address:'嵩山路21-19号',type:{name:'饭店'},police:{name:'张三'}},nums:{num:34,done:21}},
                    {item:{id:'key8',name:'幸运旅店',address:'嵩山路21-19号',type:{name:'饭店'},police:{name:'张三'}},nums:{num:34,done:21}},
                    {item:{id:'key9',name:'杨国福麻辣烫',address:'嵩山路21-19号',type:{name:'饭店'},police:{name:'张三'}},nums:{num:34,done:21}},
                    {item:{id:'key10',name:'兰州拉面',address:'嵩山路21-19号',type:{name:'饭店'},police:{name:'张三'}},nums:{num:34,done:21}},
                    {item:{id:'key11',name:'七七麻辣烫',address:'嵩山路21-19号',type:{name:'饭店'},police:{name:'张三'}},nums:{num:34,done:21}},
                    {item:{id:'key12',name:'兰州拉面',address:'嵩山路21-19号',type:{name:'饭店'},police:{name:'张三'}},nums:{num:34,done:21}},
                    {item:{id:'key13',name:'八八麻辣烫',address:'嵩山路21-19号',type:{name:'饭店'},police:{name:'张三'}},nums:{num:34,done:21}}
                ]
                }
            ));
        }
    },
    {
        route: "/example/api/employee/listByCompany.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
            {
                company:{name:'九转小磨九转小磨九转小磨九转小磨九转小磨'},
                list:[
                    {card:'231105199503232227',createTime:1482214046832,state:'0'},
                    {card:'232105199503232226',createTime:1482214046832,state:'1'},
                    {card:'233105199503232226',createTime:1482214046832,state:'0'},
                    {card:'234105199503232226',createTime:1482214046832,state:'0'},
                    {card:'235105199503232226',createTime:1482214046832,state:'1'},
                    {card:'236105199503232226',createTime:1482214046832,state:'0'},
                    {card:'230105199503232226',createTime:1482214046832,state:'0'},
                    {card:'230105199503232226',createTime:1482214046832,state:'1'},
                    {card:'230105199503232226',createTime:1482214046832,state:'0'},
                    {card:'238105199503232226',createTime:1482214046832,state:'0'},
                    {card:'230105199503232226',createTime:1482214046832,state:'1'},
                    {card:'230105199503232226',createTime:1482214046832,state:'0'},
                    {card:'230105199503232226',createTime:1482214046832,state:'0'},
                    {card:'230105199503232226',createTime:1482214046832,state:'1'},
                    {card:'230105199503232226',createTime:1482214046832,state:'0'},
                    {card:'230105199503232226',createTime:1482214046832,state:'0'},
                    {card:'230105199503232226',createTime:1482214046832,state:'1'},
                    {card:'230105199503232226',createTime:1482214046832,state:'0'}
                ],
                    done:21,
                    undo:11,

            }
            ));
        }
    },
    {
        route: "/example/api/employee/policeInfo.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({
                nums:{num:37,done:17},
                types:[
                    {name:'幼儿园',nums:{num:10},id:'k1'},
                    {name:'餐饮',id:'k2'},
                    {name:'旅店',nums:{},id:'k3'},
                    {name:'汽配',nums:{num:89,done:2},id:'k4'},
                    {name:'服务',nums:{num:18,done:9},id:'k5'},
                    {name:'KTV',nums:{num:89,done:2},id:'k6'},
                    {name:'律师事务所',nums:{num:37,done:5},id:'k7'},
                    {name:'幼儿园',nums:{num:10,done:9},id:'k8'},
                    {name:'餐饮',nums:{num:10,done:3},id:'k9'},
                    {name:'旅店',nums:{num:23,done:9},id:'k10'},
                    {name:'汽配',nums:{num:89,done:2},id:'k11'},
                    {name:'服务',nums:{num:180,done:95},id:'k12'},
                    {name:'KTV',nums:{num:89,done:2},id:'k13'},
                    {name:'律师事务所',nums:{num:37,done:5},id:'k14'},
                    {name:'幼儿园',nums:{num:10,done:9},id:'k15'},
                    {name:'餐饮',nums:{num:18,done:4},id:'k16'},
                    {name:'旅店',nums:{num:23,done:9},id:'k17'},
                    {name:'汽配',nums:{num:89},id:'k18'},
                    {name:'服务',nums:{num:90,done:55},id:'k19'},
                    {name:'KTV',nums:{num:89,done:2},id:'k20'},
                    {name:'律师事务所',nums:{num:37,done:5},id:'k21'}
                ],
            }));
        }
    },
    {
        route: "/example/api/company.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
            {
                list:[
                    {id:'key1',name:'九转小磨',type:{name:'饭店'},police:{name:'张一一'},groupType:0},
                    {id:'key2',name:'南京灌汤包',type:{name:'饭店'},police:{name:'张二二'},groupType:1},
                    {id:'key3',name:'九转小磨九转小磨九转小磨九转小磨',type:{name:'饭店'},police:{name:'张一一'},groupType:0},
                    {id:'key4',name:'律师事务所',type:{name:'幼儿园'},police:{name:'张一一'},groupType:0},
                    {id:'key5',name:'九转小磨',type:{name:'饭店'},police:{name:'张六六'},groupType:0},
                    {id:'key6',name:'律师事务所',type:{name:'饭店'},police:{name:'张一一'},groupType:0},
                    {id:'key7',name:'九转小磨',type:{name:'维修'},police:{name:'张五五'},groupType:1},
                    {id:'key8',name:'九转小磨',type:{name:'饭店'},police:{name:'张一一'},groupType:1},
                    {id:'key9',name:'九转小磨',type:{name:'饭店'},police:{name:'张一'},groupType:0},
                    {id:'key10',name:'九转小磨',type:{name:'饭店'},police:{name:'张一一'},groupType:0},
                    {id:'key11',name:'律师事务所',type:{name:'饭店'},police:{name:'张一一'},groupType:0},
                    {id:'key12',name:'九转小磨',type:{name:'饭店'},police:{name:'张一一'},groupType:0}
                ],
                    count:90
            }

            ));
        }
    },
    {
        route: "/example/api/company/detail.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {
                    company:{name:'瓦力科技',address:'南岗区嵩山路19号',type:{name:"软件",id:'k1'},police:{name:'林琳',id:'p1'},groupType:0,fireState:0},
                    users:[{name:'苏三',mobile:'13936003636',id:'link1',wid:'122333'},{name:'西维维尔',mobile:'13936003636',id:'link2',email:'123@qq.ocm',post:'其他'},{name:'李希',mobile:'13936003636',id:'link3',email:'123@qq.ocm',post:''}]
                }

            ));
        }
    },
    {
        route: "/example/api/firePlanItem.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({
                    undo:34,
                    done:71,
                    list:[
                        {company:{name:'九转小磨',type:{name:'饭店'},police:{name:'于谦'}}, startTime:'1482214046832', endTime:'1482214046832', createTime:'1482214046832', fcid:'', uid:'', id:'p0'},
                        {company:{name:'九转小磨',type:{name:'饭店'},police:{name:'于谦'}}, startTime:'1482214046832', endTime:'1482214046832', createTime:'1482214046832', fcid:'', uid:'', id:'p1'},
                        {company:{name:'九转小磨',type:{name:'饭店'},police:{name:'于谦'}}, startTime:'1482214046832', endTime:'1482214046832', createTime:'1482214046832', fcid:'', uid:'', id:'p2'},
                        {company:{name:'九转小磨',type:{name:'饭店'},police:{name:'于谦'}}, startTime:'1482214046832', endTime:'1482214046832', createTime:'1482214046832', fcid:'', uid:'', id:'p3'},
                        {company:{name:'九转小磨',type:{name:'饭店'},police:{name:'于谦'}}, startTime:'1482214046832', endTime:'1482214046832', createTime:'1482214046832', fcid:'', uid:'', id:'p4'},
                        {company:{name:'九转小磨',type:{name:'饭店'},police:{name:'于谦'}}, startTime:'1482214046832', endTime:'1482214046832', createTime:'1482214046832', fcid:'', uid:'', id:'p5'},
                        {company:{name:'九转小磨',type:{name:'饭店'},police:{name:'于谦'}}, startTime:'1482214046832', endTime:'1482214046832', createTime:'1482214046832', fcid:'', uid:'', id:'p6'},
                        {company:{name:'八府香鸭',type:{name:'饭店'},police:{name:'于谦'}}, startTime:'1482214046832', endTime:'1482214046832', createTime:'1482214046832', fcid:'', uid:'', id:'p7'},
                        {company:{name:'八府香鸭',type:{name:'饭店'},police:{name:'于谦'}}, startTime:'1482214046832', endTime:'1482214046832', createTime:'1482214046832', fcid:'', uid:'', id:'p8'},
                    ]
                }
            ));
        }
    },
    {
        route: "/example/api/firePlan/info.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {
                    companyNums:{unpoint:362,point:94,num:12},
                    checkNums:{plan:10,extra:5},
                    policeId:'k2',
                    name:'于新刚',
                    avatar:'images/head.jpg?'
                }
            ));
        }
    },
    {
        route: "/example/api/fireCheck/listByCompany.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {
                    company:{name:'豪峰会汽车服务有限公司/豪车盛宴/汽车有限公司'},
                    list:[
                        {createTime:1485137757000},
                        {createTime:1485137757000},
                        {createTime:1484137757070},
                        {createTime:1483214046832},
                        {createTime:1482214046832},
                        {createTime:1482214046832},
                        {createTime:1482214046832},
                        {createTime:1485137757000},
                        {createTime:1485137757000},
                        {createTime:1484137757070},
                        {createTime:1483214046832},
                        {createTime:1482214046832},
                        {createTime:1482214046832},
                        {createTime:1482214046832}
                    ]
                }

            ));
        }
    },
    {
        route: "/example/api/fireCheck/detail.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {
                    id:'com1',
                    company:{name:'瓦力科技',address:'黑龙江省哈尔滨市南岗区嵩山路19号',createTime:1485137757000},
                    items:[
                        {type:'check',photo:'images/icon1.png'},
                        {type:'fire',photo:'images/icon2.png'},
                        {type:'legal',photo:'images/icon3.png'},
                        {type:'legal',photo:'images/icon4.png'},
                        {type:'legal',photo:'images/icon5.png'},
                        {type:'legal',photo:'images/icon7.png'},
                        {type:'legal',photo:'images/icon3.png'},
                        {type:'legal',photo:'images/icon4.png'},
                        {type:'legal',photo:'images/icon5.png'},
                        {type:'legal',photo:'images/icon7.png'},
                        {type:'legal',photo:'images/icon3.png'},
                        {type:'legal',photo:'images/icon3.png'},
                        {type:'legal',photo:'images/icon4.png'},
                        {type:'legal',photo:'images/icon5.png'},
                        {type:'legal',photo:'images/icon7.png'},
                        {type:'check',photo:'images/icon1.png'},
                        {type:'check',photo:'images/icon2.png'},
                        {type:'check',photo:'images/icon8.png'},
                        {type:'check',photo:'images/icon1.png'},
                    ]
                }

            ));
        }
    },
    {
        route: "/example/api/firePlanItem/groupByUser.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {
                    done:87,
                    undo:99,
                    list:[
                        {id:'k1',name:'张三',pointNum:23,checkNums:{num:106,undo:86},avatar:'images/icon1.png?'},
                        {id:'k2',name:'李四',pointNum:23,checkNums:{num:230,undo:86},avatar:'images/icon1.png?'},
                        {id:'k3',name:'余兴安',pointNum:23,checkNums:{num:27,undo:3},avatar:'images/icon1.png?'},
                        {id:'k4',name:'于新刚',pointNum:23,checkNums:{num:96,undo:86},avatar:'images/icon1.png?'},
                        {id:'k5',name:'李阳',pointNum:23,checkNums:{num:86,undo:46},avatar:'images/icon1.png?'},
                        {id:'k6',name:'张飞',pointNum:23,checkNums:{num:76,undo:6},avatar:'images/icon1.png?'},
                        {id:'k7',name:'王二',pointNum:23,checkNums:{num:36,undo:9},avatar:'images/icon1.png?'},
                        {id:'k8',name:'孙七',pointNum:23,checkNums:{num:76,undo:56},avatar:'images/icon1.png?'},
                        {id:'k9',name:'赵武',pointNum:23,checkNums:{num:92,undo:82},avatar:'images/icon1.png?'},
                        {id:'k10',name:'王二',pointNum:23,checkNums:{num:36,undo:9},avatar:'images/icon1.png?'},
                        {id:'k11',name:'孙七',pointNum:23,checkNums:{num:76,undo:56},avatar:'images/icon1.png?'},
                        {id:'k12',name:'赵武',pointNum:23,checkNums:{num:92,undo:82},avatar:'images/icon1.png?'}
                    ]
                }
            ));
        }
    },
    {
        route: "/example/api/firePlanItem/listWithNumber.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                [
                    {id:'k1',company:{name:'九转小磨',police:{name:'于新刚'},type:{name:'饭店'}},checkNum:9},
                    {id:'k2',company:{name:'九转小磨',police:{name:'于新刚'},type:{name:'饭店'}},checkNum:5},
                    {id:'k3',company:{name:'九转小磨',police:{name:'于新刚'},type:{name:'饭店'}},checkNum:6},
                    {id:'k4',company:{name:'九转小磨',police:{name:'于新刚'},type:{name:'饭店'}},checkNum:97},
                    {id:'k5',company:{name:'九转小磨',police:{name:'于新刚'},type:{name:'饭店'}},checkNum:8},
                    {id:'k6',company:{name:'九转小磨',police:{name:'于新刚'},type:{name:'饭店'}},checkNum:39}
                ]
            ));
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
        route: "/example/api/company/save.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
    {
        route: "/example/api/company/update.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
    {
        route: "/example/api/company/close.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
    {
        route: "/example/api/company/delete.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
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
                {id:'t7',name:'佳佳'},
            ]));
        }
    },
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
                {id:'t7',name:'律师事务所'},
            ]));
        }
    },
    {
        route: "/example/api/hotel.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
               [
                    {id:'key1',company:'禧龙宾馆1', address:'南岗区嵩山路19号'},
                    {id:'key2', company:'旅店2', address:'南岗区嵩山路20号'},
                    {id:'key3', company:'旅店3', address:'南岗区嵩山路21号'},
                    {id:'key4', company:'旅店4', address:'南岗区嵩山路22号'},
                    {id:'key5', company:'禧龙宾馆5',address:'南岗区嵩山路23号'},
                    {id:'key6', company:'旅店6', address:'南岗区嵩山路119号'},
                    {id:'key7', company:'旅店7', address:'南岗区嵩山路59号'},
                    {id:'key8', company:'旅店8',address:'南岗区嵩山路79号'},
                    {id:'key9', company:'禧龙宾馆9',address:'南岗区嵩山路111号'},
                    {id:'key10', company:'旅店10',address:'南岗区嵩山路34号'},
                    {id:'key11', company:'旅店11',address:'南岗区嵩山路57号'},
                    {id:'key12', company:'旅店12',address:'南岗区嵩山路110-89号'}
                ]

            ));
        }
    },
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
        route: "/example/api/workMain.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {
                    list:[
                        {id:'key1',state:1,readState:1,creator:{id:1,name:'张一一'},company:{id:'1',name:'南京灌汤包',police:{id:1,name:'张一一'}},createTime:1489721491677},
                        {id:'key2',state:1,readState:2,creator:{id:1,name:'张一一'},company:{id:'1',name:'南京灌汤包',police:{id:1,name:'张一一'}},createTime:1489721491677},
                        {id:'key3',state:1,readState:3,creator:{id:1,name:'张一一'},company:{id:'1',name:'南京灌汤包',police:{id:1,name:'张一一'}},createTime:1489721491677},
                        {id:'key4',state:1,readState:4,creator:{id:1,name:'张一一'},company:{id:'1',name:'南京灌汤包',police:{id:1,name:'张一一'}},createTime:1489721491677},
                        {id:'key5',state:1,readState:1,creator:{id:1,name:'张一一'},company:{id:'1',name:'南京灌汤包',police:{id:1,name:'张一一'}},createTime:1489721491677},
                        {id:'key6',state:1,readState:4,creator:{id:1,name:'张一一'},company:{id:'1',name:'南京灌汤包',police:{id:1,name:'张一一'}},createTime:1489721491677},
                        {id:'key7',state:1,readState:3,creator:{id:1,name:'张一一'},company:{id:'1',name:'南京灌汤包',police:{id:1,name:'张一一'}},createTime:1489721491677},
                        {id:'key8',state:1,readState:2,creator:{id:1,name:'张一一'},company:{id:'1',name:'南京灌汤包',police:{id:1,name:'张一一'}},createTime:1489721491677},
                        {id:'key9',state:1,readState:2,creator:{id:1,name:'张一一'},company:{id:'1',name:'南京灌汤包',police:{id:1,name:'张一一'}},createTime:1489721491677},
                        {id:'key10',state:1,readState:4,creator:{id:1,name:'张一一'},company:{id:'1',name:'南京灌汤包',police:{id:1,name:'张一一'}},createTime:1489721491677},
                        {id:'key11',state:1,readState:3,creator:{id:1,name:'张一一'},company:{id:'1',name:'南京灌汤包',police:{id:1,name:'张一一'}},createTime:1489721491677},
                        {id:'key12',state:1,readState:2,creator:{id:1,name:'张一一'},company:{id:'1',name:'南京灌汤包',police:{id:1,name:'张一一'}},createTime:1489721491677},
                        {id:'key13',state:1,readState:2,creator:{id:1,name:'张一一'},company:{id:'1',name:'南京灌汤包',police:{id:1,name:'张一一'}},createTime:1489721491677},
                    ],
                    count:90
                }

            ));
        }
    },
    {
        route: "/example/api/workMain/save.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
    {
        route: "/example/api/workMain/delete.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
    {
        route: "/example/api/workMain/policeIndex.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({
                "list":[{"id":"8af182f65aea91b3015aeb14fa0d001d","advice":"test","checks":[{"id":"8af182f65aea91b3015aeb14fa0e001f","createTime":1490002704917,"creator":"4028b881592a5e4401592a5e5a5b000d","photo":"serverTestFile#testServerImgId_61#work","type":1,"workMain":null,"workReply":null},{"id":"8af182f65aea91b3015aeb14fa0e0020","createTime":1490002704919,"creator":"4028b881592a5e4401592a5e5a5b000d","photo":"serverTestFile#testServerImgId_62#work","type":1,"workMain":null,"workReply":null},{"id":"8af182f65aea91b3015aeb14fa0e001e","createTime":1490002704915,"creator":"4028b881592a5e4401592a5e5a5b000d","photo":"serverTestFile#testServerImgId_63#work","type":1,"workMain":null,"workReply":null}],"company":{"id":"4028b881597222360159722280290039","address":"辽河路218号","createTime":1483678580764,"fireState":0,"groupType":0,"legalPersonCard":null,"legalPersonMobile":null,"legalPersonName":null,"legalPersonPhone":null,"name":"2008网络会馆","officeBuilding":null,"police":{"id":"4028b881592a5e4401592a5e5b1e0028","address":null,"avatar":"http://shp.qpic.cn/bizmp/kdMzzVpfw0aCvh2kMlVlxN1kcdIlOWpPAFtauUvQpECYZJLlyamlnQ/","cid":null,"company":null,"createTime":1482474793881,"email":null,"mobile":"13259260666","name":"李洋","phonetic":"liyang","policeArea":"0","post":"企业管理员","role":"4","state":1,"uid":"pcs_ly","updateStamp":1489474864152,"wid":null},"state":0,"type":{"id":"4028b881594e226901594e2283710004","createTime":1483074601840,"name":"网吧","state":0,"updateStamp":null,"wxDeptId":10},"updateStamp":1487829917194},"createTime":1490002704912,"creator":{"id":"4028b881592a5e4401592a5e5a5b000d","address":null,"avatar":"http://shp.qpic.cn/bizmp/kdMzzVpfw0Y48U1HwUr531kQFh8aSKgjdvK4OFY6py4cKjibB9Jz0eQ/","cid":null,"company":null,"createTime":1482474793684,"email":null,"mobile":"13304500939","name":"王胜国","phonetic":"wangshengguo","policeArea":null,"post":"所长","role":"17","state":1,"uid":"pcs_wsg","updateStamp":1489474864197,"wid":null},"deleteState":0,"employees":[{"id":"8af182f65aea91b3015aeb14fa0e0021","card":"230102199208192454","company":{"id":"4028b881597222360159722280290039","address":"辽河路218号","createTime":1483678580764,"fireState":0,"groupType":0,"legalPersonCard":null,"legalPersonMobile":null,"legalPersonName":null,"legalPersonPhone":null,"name":"2008网络会馆","officeBuilding":null,"police":{"id":"4028b881592a5e4401592a5e5b1e0028","address":null,"avatar":"http://shp.qpic.cn/bizmp/kdMzzVpfw0aCvh2kMlVlxN1kcdIlOWpPAFtauUvQpECYZJLlyamlnQ/","cid":null,"company":null,"createTime":1482474793881,"email":null,"mobile":"13259260666","name":"李洋","phonetic":"liyang","policeArea":"0","post":"企业管理员","role":"4","state":1,"uid":"pcs_ly","updateStamp":1489474864152,"wid":null},"state":0,"type":{"id":"4028b881594e226901594e2283710004","createTime":1483074601840,"name":"网吧","state":0,"updateStamp":null,"wxDeptId":10},"updateStamp":1487829917194},"createTime":1490002704907,"doneTime":null,"doneUser":{"id":"4028b881592a5e4401592a5e5b1e0028","address":null,"avatar":"http://shp.qpic.cn/bizmp/kdMzzVpfw0aCvh2kMlVlxN1kcdIlOWpPAFtauUvQpECYZJLlyamlnQ/","cid":null,"company":null,"createTime":1482474793881,"email":null,"mobile":"13259260666","name":"李洋","phonetic":"liyang","policeArea":"0","post":"企业管理员","role":"4","state":1,"uid":"pcs_ly","updateStamp":1489474864152,"wid":null},"personState":0,"photo":"serverTestFile#testServerImgId_64#company","state":"0","user":{"id":"4028b881592a5e4401592a5e5a5b000d","address":null,"avatar":"http://shp.qpic.cn/bizmp/kdMzzVpfw0Y48U1HwUr531kQFh8aSKgjdvK4OFY6py4cKjibB9Jz0eQ/","cid":null,"company":null,"createTime":1482474793684,"email":null,"mobile":"13304500939","name":"王胜国","phonetic":"wangshengguo","policeArea":null,"post":"所长","role":"17","state":1,"uid":"pcs_wsg","updateStamp":1489474864197,"wid":null},"workMain":null}],"endTime":null,"readState":2,"replys":[],"state":0,"tasks":[],"title":"2008网络会馆"}],"count":1}
            ));
        }
    },
    {
        route: "/example/work/undoDetail.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {   companyName:"十府香鸭",
                    id:'ke1',
                    leaderName:'张三',
                    address:"华山北路6号",
                    policeName:"固力果",
                    sceneImages:[
                        {id:"1",img:"../images/header1.jpg"},
                        {id:"1",img:"../images/header2.jpg"},
                        {id:"1",img:"../images/header3.jpg"},
                        {id:"1",img:"../images/header4.jpg"},
                        {id:"1",img:"../images/header5.jpg"}
                    ],
                    problem:{title:"未携带身份证入住",
                        people:[
                            {img:"../images/header0.jpg",idcard:"230200112233665544"},
                            {img:"../images/header9.jpg",idcard:"230200112233665544"},
                            {img:"../images/header8.jpg",idcard:"230200112233665544"},
                            {img:"../images/header7.jpg",idcard:"230200112233665544"}
                        ]
                    },
                    employee:[
                        {img:"../images/header6.jpg",idcard:"230200112233665544"},
                        {img:"../images/header5.jpg",idcard:"230200112233665544"},
                        {img:"../images/header4.jpg",idcard:"230200112233665544"}
                    ],
                    endTime:1482214046832,
                    opinion:"尽快清查",
                    addTime:1482212046866
                }
            ));
        }
    },
    {
        route: "/example/api/workMain/detail.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {
                    state : 0,
                    company:{ id:'key1',name:'南京灌汤包',address:'中山路',police:{name:'李迪迪'}},
                    replys :[{id:'key1',
                        creator:{name:'民警'},
                        reply:'现场检查3',
                        checks:[{id:'key11',type:1,photo:'images/icon1.png'},
                            {id:'key12',type:1,photo:'images/icon2.png'},
                            {id:'key13',type:1,photo:'images/icon3.png'},
                            {id:'key14',type:1,photo:'images/icon4.png'},
                            {id:'key15',type:1,photo:'images/icon5.png'},
                            {id:'key16',type:2,photo:'images/icon6.png'},
                            {id:'key17',type:2,photo:'images/icon7.png'},
                            {id:'key18',type:2,photo:'images/icon8.png'},
                            {id:'key19',type:2,photo:'images/icon9.png'},
                            {id:'key20',type:2,photo:'images/icon10.png'},
                            {id:'key21',type:3,photo:'images/icon6.png'},
                            {id:'key22',type:3,photo:'images/icon9.png'},
                            {id:'key23',type:3,photo:'images/icon10.png'},
                        ],
                        createTime:1489721491677
                    },
                        {id:'key2',
                            creator:{name:'所长'},
                            reply:'领导意见2',createTime:1489721491677},
                        {id:'key3',
                            creator:{name:'民警'},
                            reply:'现场检查2',
                            checks:[{id:'key11',photo:'images/icon1.png'},
                                {id:'key12',photo:'images/icon2.png'},
                                {id:'key13',photo:'images/icon3.png'},
                                {id:'key14',photo:'images/icon4.png'},
                                {id:'key15',photo:'images/icon5.png'},
                            ],
                            papers:[
                                {id:'key16',photo:'images/icon6.png'},
                                {id:'key17',photo:'images/icon7.png'},
                                {id:'key18',photo:'images/icon8.png'},
                                {id:'key19',photo:'images/icon9.png'},
                                {id:'key20',photo:'images/icon10.png'},
                            ],
                            charger:[
                                {id:'key21',photo:'images/icon6.png'},
                                {id:'key22',photo:'images/icon9.png'},
                                {id:'key23',photo:'images/icon10.png'},
                            ],
                            createTime:1489721491677
                        },
                        {id:'key4',
                            creator:{name:'所长'},
                            reply:'领导意见1',createTime:1489721491677},
                        {id:'key5',
                            creator:{name:'民警'},
                            reply:'现场检查1',
                            checks:[{id:'key11',photo:'images/icon1.png'},
                                {id:'key12',photo:'images/icon2.png'},
                                {id:'key15',photo:'images/icon5.png'},
                            ],
                            papers:[
                                {id:'key16',photo:'images/icon6.png'},
                                {id:'key19',photo:'images/icon9.png'},
                                {id:'key20',photo:'images/icon10.png'},
                            ],
                            charger:[
                                {id:'key21',photo:'images/icon6.png'},
                            ],
                            createTime:1489721491677
                        },],
                    checks:[{id:'key1',photo:'images/icon1.png'},
                        {id:'key2',photo:'images/icon2.png'},
                        {id:'key3',photo:'images/icon3.png'},
                        {id:'key4',photo:'images/icon4.png'},
                        {id:'key5',photo:'images/icon5.png'},],
                    employees:[{id:'key6',card:'230105199603022201',photo:'images/header.jpg'},
                        {id:'key7',card:'230105199603022202',photo:'images/header.jpg'},
                        {id:'key8',card:'230105199603022203',photo:'images/header.jpg'},
                        {id:'key9',card:'230105199603022204',photo:'images/header.jpg'},
                        {id:'key10',card:'230105199603022205',photo:'images/header.jpg'},
                    ],
                    tasks:[{id:'key11',card:'230105199603022201',photo:'images/header.jpg'},
                        {id:'key12',card:'230105199603022202',photo:'images/header.jpg'},
                        {id:'key13',card:'230105199603022203',photo:'images/header.jpg'},
                        {id:'key14',card:'230105199603022204',photo:'images/header.jpg'},
                        {id:'key15',card:'230105199603022205',photo:'images/header.jpg'},
                    ],
                    endTime:'2017-03-16',
                    createTime:1489721491677,
                    advice:'抓紧时间处理'
                }

            ));
        }
    },
    {
        route: "/example/api/workMain/save.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
    {
        route: "/example/api/workMain/statisticsCount.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {
                    all:100,
                    doing:10,
                    done:90,
                }

            ));
        }
    },
    {
        route: "/example/api/workMain/statisticsList.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {
                    list:[
                        {
                            id:'key1',
                            name:'所长1',
                            all:100,
                            doing:10,
                            done:90,
                        },
                        {
                            id:'key2',
                            name:'所长2',
                            all:200,
                            doing:20,
                            done:20,
                        },
                        {
                            id:'key3',
                            name:'所长3',
                            all:10,
                            doing:10,
                            done:10,
                        },
                        {
                            id:'key4',
                            name:'所长4',
                            all:100,
                            doing:10,
                            done:90,
                        },
                        {
                            id:'key5',
                            name:'所长5',
                            all:23,
                            doing:1,
                            done:74,
                        },
                        {
                            id:'key6',
                            name:'所长6',
                            all:66,
                            doing:21,
                            done:32,
                        },
                        {
                            id:'key7',
                            name:'所长7',
                            all:56,
                            doing:12,
                            done:63,
                        },{
                            id:'key8',
                            name:'所长8',
                            all:54,
                            doing:24,
                            done:32,
                        },
                        {
                            id:'key9',
                            name:'所长9',
                            all:30,
                            doing:11,
                            done:9,
                        },{
                            id:'key10',
                            name:'所长10',
                            all:10,
                            doing:20,
                            done:10,
                        },
                    ],
                    count:90
                }

            ));
        }
    },
    {
        route: "/example/api/workReply/save.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
    {
        route: "/example/api/workReply/updateReadState.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
    {
        route: "/example/api/workReply/updateFinishState.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },

];
