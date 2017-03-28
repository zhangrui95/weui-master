var fs = require('fs');

var routes = [
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
    }
];

module.exports = routes;
