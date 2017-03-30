var fs = require('fs');

var leaderMenu = {
    menu:[
        {name:"企业底数清",hash:"clear_data",icon:"images/icon6.png"},
        {name:"设置值班民警",hash:"Set_up",icon:"images/icon1.png","data":{rota:[{id:'r1',user:{id:'key3',name:"傅志强"}}]}},
        {name:"未带身份证入住",hash:"hotel_news",icon:"images/icon2.png","num":7},
        {name:"从业人员上报",hash:"employee",icon:"images/icon3.png"},
        {name:"消防安全",hash:"fire",icon:"images/icon10.png"},
        {name:"出租房管理",hash:"rent",icon:"images/icon7.png"},
        {name:"散装油交易登记",hash:"station",icon:"images/icon12.png"},
        {name:"所内工作",hash:"work",icon:"images/icon11.png"}
    ]
};

var getPoliceMenu= function (buf) {
    var menu = [
        {name:"未带身份证入住",hash:"tab",icon:"images/icon2.png","num":10},
        {name:"从业人员上报",hash:"company-list",icon:"images/icon3.png","num":31},
        {name:"从业人员统计",hash:"police-employee",icon:"images/icon8.png"},
        {name:"消防安全",hash:"fire",icon:"images/icon10.png"},
        {name:"出租房管理",hash:"rent",icon:"images/icon7.png"},
        {name:"所内工作",hash:"police-dynamic",icon:"images/icon11.png"}
    ],data;
    if(buf.indexOf('target=policeCAdmin') != -1){
        menu = [{name:"企业管理",href:"leader.html",hash:"clear_data",icon:"images/icon9.png"}].concat(menu)
        data = {policeId:'xx',name:'苏素素',avatar:'images/head.jpg?'};
    }else if(buf.indexOf('target=policeRAdmin') != -1){
        menu = [
            {name:"企业统计",hash:"police-clear-company",icon:"images/icon9.png"},
            {name:"设置值班民警",href:"leader.html",hash:"Set_up",icon:"images/icon1.png","data":{rota:[{id:'r1',user:{id:'key3',name:"傅志强"}}]}}
        ].concat(menu)
    }else{
        menu = [{name:"企业统计",hash:"police-clear-company",icon:"images/icon9.png"}].concat(menu)
        data = {policeId:'xx',name:'苏素素',avatar:'images/head.jpg?'};
    }
    return {data:data,menu:menu};
};



var routes = [
    {
        route: "/example/api/menu.json",
        handle: function (req, res, next) {
            var buf = '';
            req.setEncoding('utf8');
            req.on('data', function(chunk){ buf += chunk });
            req.on('end', function(){
                res.setHeader('Content-Type','application/json; charset=UTF-8');
                var menu;
                if(buf.indexOf('target=leader') != -1){
                    menu = leaderMenu;
                }else if(buf.indexOf('target=police') != -1){
                    menu = getPoliceMenu(buf);
                }else{
                    menu = {}
                }
                res.end(JSON.stringify(menu));
            });
        }
    }
];

module.exports = routes;