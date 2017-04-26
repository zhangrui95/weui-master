var fs = require('fs');

var routes = [
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
                        {id:'1',createTime:1485137757000,type:'check',photo:'images/icon1.png'},
                        {id:'2',createTime:1485137767000,type:'fire',photo:'images/icon2.png'},
                        {id:'3',createTime:1485137757000,type:'legal',photo:'images/icon3.png'},
                        {id:'4',createTime:1485137757001,type:'legal',photo:'images/icon4.png'},
                        {id:'5',createTime:1485137757002,type:'legal',photo:'images/icon5.png'},
                        {id:'6',createTime:1485137757003,type:'legal',photo:'images/icon7.png'},
                        {id:'7',createTime:1485137757005,type:'legal',photo:'images/icon3.png'},
                        {id:'8',createTime:1485137757004,type:'legal',photo:'images/icon4.png'},
                        {id:'9',createTime:1485137757000,type:'legal',photo:'images/icon5.png'},
                        {id:'10',createTime:1485137757000,type:'legal',photo:'images/icon7.png'},
                        {id:'11',createTime:1485137757000,type:'legal',photo:'images/icon3.png'},
                        {id:'12',createTime:1485137757000,type:'legal',photo:'images/icon3.png'},
                        {id:'13',createTime:1485137757000,type:'legal',photo:'images/icon4.png'},
                        {id:'14',createTime:1485137757000,type:'legal',photo:'images/icon5.png'},
                        {id:'15',createTime:1485137757000,type:'legal',photo:'images/icon7.png'},
                        {id:'16',createTime:1485137757000,type:'check',photo:'images/icon1.png'},
                        {id:'17',createTime:1485137756000,type:'check',photo:'images/icon2.png'},
                        {id:'18',createTime:1485137756000,type:'check',photo:'images/icon8.png'},
                        {id:'19',createTime:1485137757000,type:'check',photo:'images/icon1.png'}
                    ]
                }

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
    {
        route: "/example/api/fireCheck/photo",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','image/png');
            res.end(fs.readFileSync(__dirname+'/../../dist/example/images/header.jpg'));
        }
    }
];

module.exports = routes;
