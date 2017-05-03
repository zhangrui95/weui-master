
var routes = [
    {
        route: "/example/api/company/save.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
    {
        route: "/example/api/company/saveSelf.json",
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
        route: "/example/api/company/updateSelf.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
    {
        route: "/example/api/company/closeSelf.json",
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
                    {name:'C区',num:109,id:'k19'}
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
    }
];

module.exports = routes;
