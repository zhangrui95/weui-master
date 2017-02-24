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
                list:[{id:'key1', card:'230105199603022201', CompanyName:'九转小磨', photo:'images/header.jpg', state:'主键', user:{uid:'100',company:'九转小磨', name:'张三', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2301', name:'民警1'}, doneTime:1482214046832},
                {id:'key2', card:'230105199603022202', CompanyName:'七天宾馆', photo:'images/header.jpg', state:'主键2', user:{uid:'200',company:'七天宾馆', name:'张三2', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2302', name:'民警2'}, doneTime:1482214046832},
                {id:'key3', card:'230105199603022203', CompanyName:'奔马汽配', photo:'images/header.jpg', state:'主键', user:{uid:'300',company:'奔马汽配', name:'张三3', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2303', name:'民警3'}, doneTime:1482214046832},
                {id:'key4', card:'230105199603022204', CompanyName:'动岚健身', photo:'images/header.jpg', state:'主键2', user:{uid:'400',company:'动岚健身', name:'张三4', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2304', name:'民警4'}, doneTime:1482214046832},
                {id:'key1', card:'230105199603022201', CompanyName:'七星手机卖场', photo:'images/header.jpg', state:'主键', user:{uid:'100',company:'七星手机卖场', name:'张三', mobile:'13012345678'}, createTime:1482214046832, doneUser:{uid:'2301', name:'民警1'}, doneTime:1482214046832},
            ],
                undo:9,
                done:58
            }));
        }
    },
    {
        route: "/example/api/employee/detail.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            var ret = {id:'key1',personState:0, card:'230105199603022201',company:{name:'七星手机卖场', police:{name:'李丽丽'}} ,user:{uid:'100',company:'九转小磨',address:'xx路yy号', name:'李四', mobile:'13012345678'},doneUser:{name:'王曦'}, photo:'images/header.jpg', state:'0', createTime:1482214046832, doneTime:null};
            ret.state = '1';
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
                    {item:{id:'key1',name:'南京灌汤包',type:{name:'饭店'},police:{name:'李迪迪'}},nums:{num:98,done:21}},
                    {item:{id:'key1',name:'九转小米',type:{name:'饭店'},police:{name:'张三一'}},nums:{num:0,done:0}},
                    {item:{id:'key1',name:'律师事务所',type:{name:'饭店'},police:{name:'张三'}},nums:{num:90,done:21}},
                    {item:{id:'key1',name:'八府宴',type:{name:'饭店'},police:{name:'张三'}},nums:{num:0,done:0}},
                    {item:{id:'key1',name:'谭阁美酒店',type:{name:'饭店'},police:{name:'张三'}},nums:{num:87,done:0}},
                    {item:{id:'key1',name:'喜家德',type:{name:'饭店'},police:{name:'张三'}},nums:{num:0,done:0}},
                    {item:{id:'key1',name:'张亮麻辣烫',type:{name:'饭店'},police:{name:'张三'}},nums:{num:34,done:21}},
                    {item:{id:'key1',name:'幸运旅店',type:{name:'饭店'},police:{name:'张三'}},nums:{num:34,done:21}},
                    {item:{id:'key1',name:'杨国福麻辣烫',type:{name:'饭店'},police:{name:'张三'}},nums:{num:34,done:21}},
                    {item:{id:'key1',name:'兰州拉面',type:{name:'饭店'},police:{name:'张三'}},nums:{num:34,done:21}},
                    {item:{id:'key1',name:'七七麻辣烫',type:{name:'饭店'},police:{name:'张三'}},nums:{num:34,done:21}},
                    {item:{id:'key1',name:'兰州拉面',type:{name:'饭店'},police:{name:'张三'}},nums:{num:34,done:21}},
                    {item:{id:'key1',name:'八八麻辣烫',type:{name:'饭店'},police:{name:'张三'}},nums:{num:34,done:21}}
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
                    {id:'key1',name:'九转小磨',type:{name:'饭店'},police:{name:'张一一'}},
                    {id:'key2',name:'南京灌汤包',type:{name:'饭店'},police:{name:'张二二'}},
                    {id:'key3',name:'九转小磨九转小磨九转小磨九转小磨',type:{name:'饭店'},police:{name:'张一一'}},
                    {id:'key4',name:'律师事务所',type:{name:'幼儿园'},police:{name:'张一一'}},
                    {id:'key5',name:'九转小磨',type:{name:'饭店'},police:{name:'张六六'}},
                    {id:'key6',name:'律师事务所',type:{name:'饭店'},police:{name:'张一一'}},
                    {id:'key7',name:'九转小磨',type:{name:'维修'},police:{name:'张五五'}},
                    {id:'key8',name:'九转小磨',type:{name:'饭店'},police:{name:'张一一'}},
                    {id:'key9',name:'九转小磨',type:{name:'饭店'},police:{name:'张一'}},
                    {id:'key10',name:'九转小磨',type:{name:'饭店'},police:{name:'张一一'}},
                    {id:'key11',name:'律师事务所',type:{name:'饭店'},police:{name:'张一一'}},
                    {id:'key12',name:'九转小磨',type:{name:'饭店'},police:{name:'张一一'}}
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
                    company:{name:'瓦力科技',address:'南岗区嵩山路19号',type:{name:"软件",id:'k1'},police:{name:'林琳',id:'p1'},groupType:0,fireState:0,legalPersonName:'张三',legalPersonPhone:'13636003596',legalPersonCard:'230105199605223629'},
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
                        {type:'check',photo:'images/icon2.png'},
                        {type:'check',photo:'images/icon8.png'},
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
                        {id:'k9',name:'赵武',pointNum:23,checkNums:{num:92,undo:82},avatar:'images/icon1.png?'}
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

];
