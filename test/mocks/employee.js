var fs = require('fs');

var routes = [
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
            res.end(fs.readFileSync(__dirname+'/../../dist/example/images/header.jpg'));
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
                        {card:'231105199503232227',createTime:1482214046832,state:'0',id:'e1'},
                        {card:'232105199503232226',createTime:1482214046832,state:'1',id:'e2'},
                        {card:'233105199503232226',createTime:1482214046832,state:'0',id:'e3'},
                        {card:'234105199503232226',createTime:1482214046832,state:'0',id:'e4'},
                        {card:'235105199503232226',createTime:1482214046832,state:'1',id:'e5'},
                        {card:'236105199503232226',createTime:1482214046832,state:'0',id:'e6'},
                        {card:'230105199503232226',createTime:1482214046832,state:'0',id:'e7'},
                        {card:'230105199503232226',createTime:1482214046832,state:'1',id:'e8'},
                        {card:'230105199503232226',createTime:1482214046832,state:'0',id:'e9'},
                        {card:'238105199503232226',createTime:1482214046832,state:'0',id:'e10'},
                        {card:'230105199503232226',createTime:1482214046832,state:'1',id:'e11'},
                        {card:'230105199503232226',createTime:1482214046832,state:'0',id:'e12'},
                        {card:'230105199503232226',createTime:1482214046832,state:'0',id:'e13'},
                        {card:'230105199503232226',createTime:1482214046832,state:'1',id:'e14'},
                        {card:'230105199503232226',createTime:1482214046832,state:'0',id:'e15'},
                        {card:'230105199503232226',createTime:1482214046832,state:'0',id:'e16'},
                        {card:'230105199503232226',createTime:1482214046832,state:'1',id:'e17'},
                        {card:'230105199503232226',createTime:1482214046832,state:'0',id:'e18'}
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
        route: "/example/api/employee/close.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:'1'}));
        }
    }
];

module.exports = routes;
