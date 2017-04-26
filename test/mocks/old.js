var fs = require('fs');

var routes = [
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
        route: "/example/api/task/photo",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','image/png');
            res.end(fs.readFileSync(__dirname+'/../../dist/example/images/header.jpg'));
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
        route: "/example/api/fireCheck/save.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
];

module.exports = routes;
