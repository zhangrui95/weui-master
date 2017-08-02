var fs = require('fs');

var menus = [
    {id:'1',name:"企业底数清",hash:"clear_data",icon:"images/icon6.png",state:1,orderNum:1},
    {id:'2',name:"设置值班民警",hash:"Set_up",icon:"images/icon1.png",state:1,orderNum:2,"data":{rota:[{id:'r1',user:{id:'key3',name:"傅志强"}}]}},
    {id:'3',name:"未带身份证入住",hash:"hotel_news",icon:"images/icon2.png",state:1,orderNum:3,"num":7},
    {id:'4',name:"从业人员上报",hash:"employee",icon:"images/icon3.png",state:1,orderNum:4},
    {id:'5',name:"消防安全",hash:"fire",icon:"images/icon10.png",state:1,orderNum:5},
    {id:'6',name:"出租房管理",hash:"rent",icon:"images/icon7.png",state:1,orderNum:6},
    {id:'7',name:"散装油交易登记",hash:"station",icon:"images/icon12.png",state:1,orderNum:7},
    {id:'8',name:"所内管理",hash:"work",icon:"images/icon11.png",state:1,orderNum:8},

    {id:'9',name:"企业统计",hash:"police-clear-company",icon:"images/icon9.png",state:1,orderNum:1},
    {id:'10',name:"企业管理",href:"leader.html",hash:"clear_data",icon:"images/icon9.png",state:1,orderNum:1},
    {id:'11',name:"设置值班民警",href:"leader.html",hash:"Set_up",icon:"images/icon1.png",state:1,orderNum:2,"data":{rota:[{id:'r1',user:{id:'key3',name:"傅志强"}}]}},
    {id:'12',name:"未带身份证入住",hash:"tab",icon:"images/icon2.png",state:1,orderNum:3,"num":10},
    {id:'13',name:"从业人员上报",hash:"company-list",icon:"images/icon3.png",state:1,orderNum:4,"num":31},
    {id:'14',name:"从业人员统计",hash:"police-employee",icon:"images/icon8.png",state:1,orderNum:5},
    {id:'15',name:"消防安全",hash:"fire",icon:"images/icon10.png",state:1,orderNum:6},
    {id:'16',name:"出租房管理",hash:"rent",icon:"images/icon7.png",state:1,orderNum:7},
    {id:'17',name:"所内管理",hash:"police-dynamic",icon:"images/icon11.png",state:1,orderNum:8},

    {id:'18',name:"未带身份证入住",href:"hotel.html",icon:"images/icon2.png",state:1,orderNum:1},
    {id:'19',name:"从业人员上报",hash:"employee-report",icon:"images/icon3.png",state:1,orderNum:2},
    {id:'20',name:"散装油交易登记",href:"station.html",icon:"images/icon12.png",state:1,orderNum:3}

].reduce(function(ret,it){
    ret[it.id] = it;
    return ret;
},{});

var menuIds = {
    leader: function(){return ['1','2','3','4','5','6','7','8'];},
    police: function(buf){
        var menu = ['12','13','14','15','16','17'];
        if(buf.indexOf('target=dept_police-CAdmin') !== -1){
            menu = ['10'].concat(menu)
        }else if(buf.indexOf('target=dept_police-PAdmin') !== -1){
            menu = ['10','11'].concat(menu)
        }else if(buf.indexOf('target=dept_police-RAdmin') !== -1){
            menu = ['9','11'].concat(menu)
        }else{
            menu = ['9'].concat(menu)
        }
        return menu;
    },
    company: function(buf){
        var menu = ['19'];
        if(buf.indexOf('target=dept_company-Hotel') !== -1){
            menu = ['18'].concat(menu)
        }else if(buf.indexOf('target=dept_company-Oil') !== -1){
            menu = menu.concat(['20'])
        }
        return menu;
    }
};

var getMenuByKey = function (buf,key) {
    var ids = menuIds[key](buf);
    var ret = [];
    for(var i in ids){
        ret.push(menus[ids[i]])
    }
    return ret;
};

var getMenu = function (buf) {
    var menu;
    if(buf.indexOf('target=dept_leader') !== -1){
        menu = getMenuByKey(buf,'leader');
    }else if(buf.indexOf('target=dept_police') !== -1){
        menu = getMenuByKey(buf,'police');
    }else if(buf.indexOf('target=dept_company') !== -1){
        menu = getMenuByKey(buf,'company');
    }else if(buf.indexOf('target=dept_community') !== -1){
        menu = []
    }else{
        menu = []
    }
    return menu;
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
                var menu = getMenu(buf),data;
                if(buf.indexOf('target=dept_police') !== -1){
                    data = {policeId:'xx',name:'苏素素',avatar:'images/head.jpg?'};
                }
                res.end(JSON.stringify({data:data,menu:menu}));
            });
        }
    },
    {
        route: "/example/api/menu/app.json",
        handle: function (req, res, next) {
            var buf = '';
            req.setEncoding('utf8');
            req.on('data', function(chunk){ buf += chunk });
            req.on('end', function(){
                res.setHeader('Content-Type','application/json; charset=UTF-8');
                res.end(JSON.stringify({menu:getMenu(buf)}));
            });
        }
    },
    {
        route: "/example/api/menu/reload.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:1}));
        }
    }
];

module.exports = routes;
