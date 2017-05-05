var fs = require('fs');

var appMenus = [
    {id:'1' ,mmid:'1' },
    {id:'2' ,mmid:'2' },
    {id:'3' ,mmid:'3' },
    {id:'4' ,mmid:'4' },
    {id:'5' ,mmid:'5' },
    {id:'6' ,mmid:'6' },
    {id:'7' ,mmid:'7' },
    {id:'8' ,mmid:'8' },
    {id:'9' ,mmid:'9' },
    {id:'10',mmid:'10'},
    {id:'11',mmid:'11'},
    {id:'12',mmid:'12'},
    {id:'13',mmid:'13'},
    {id:'14',mmid:'14'},
    {id:'15',mmid:'15'},
    {id:'16',mmid:'16'},
    {id:'17',mmid:'17'},
    {id:'18',mmid:'18'},
    {id:'19',mmid:'19'},
    {id:'20',mmid:'20'}
];

var routes = [
    {
        route: "/example/api/appMenu/mine.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(appMenus));
        }
    },
    {
        route: "/example/api/appMenu/update.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    }
];

module.exports = routes;
