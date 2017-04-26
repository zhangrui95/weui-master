var fs = require('fs');

var routes = [
    {
        route: "/example/api/bulkOil/save.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:0}));
        }
    },
    {
        route: "/example/api/bulkOil/indexCount.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({"count":7}));
        }
    },
    {
        route: "/example/api/bulkOil/indexList.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({list:[
                {id:"4028b881596ddc1c01596ddc46d3008e","name":"加油站1","num":7},
                {id:"4028b881596ddc1c01596ddc49e10100","name":"加油站2","num":4},
                {id:"4028b881596ddc1c01596ddc46d3008e","name":"加油站3","num":7},
                {id:"4028b881596ddc1c01596ddc49e10100","name":"加油站4","num":4},
                {id:"4028b881596ddc1c01596ddc46d3008e","name":"加油站5","num":7},
                {id:"4028b881596ddc1c01596ddc49e10100","name":"加油站6","num":4},
                {id:"4028b881596ddc1c01596ddc46d3008e","name":"加油站7","num":7},
                {id:"4028b881596ddc1c01596ddc49e10100","name":"加油站8","num":4},
                {id:"4028b881596ddc1c01596ddc46d3008e","name":"加油站9","num":7},
                {id:"4028b881596ddc1c01596ddc49e10100","name":"加油站10","num":4},
                {id:"4028b881596ddc1c01596ddc46d3008e","name":"加油站11","num":7},
                {id:"4028b881596ddc1c01596ddc49e10100","name":"加油站12","num":4},
                {id:"4028b881596ddc1c01596ddc46d3008e","name":"加油站13","num":7},
                {id:"4028b881596ddc1c01596ddc49e10100","name":"加油站14","num":4},
                {id:"4028b881596ddc1c01596ddc46d3008e","name":"加油站15","num":7},
                {id:"4028b881596ddc1c01596ddc49e10100","name":"加油站16","num":4}
            ]}));
        }
    },
    {
        route: "/example/api/bulkOil/page.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({list:[
                {id:"4028b881596ddc1c01596ddc46d3008e","card":"23000000000000000001",createTime:1489721491677},
                {id:"4028b881596ddc1c01596ddc46d3008e","card":"23000000000000000002",createTime:1489721491677},
                {id:"4028b881596ddc1c01596ddc46d3008e","card":"23000000000000000003",createTime:1489721491677},
                {id:"4028b881596ddc1c01596ddc46d3008e","card":"23000000000000000004",createTime:1489721491677},
                {id:"4028b881596ddc1c01596ddc46d3008e","card":"23000000000000000005",createTime:1489721491677},
                {id:"4028b881596ddc1c01596ddc46d3008e","card":"23000000000000000006",createTime:1489721491677},
                {id:"4028b881596ddc1c01596ddc46d3008e","card":"23000000000000000007",createTime:1489721491677},
                {id:"4028b881596ddc1c01596ddc46d3008e","card":"23000000000000000008",createTime:1489721491677},
                {id:"4028b881596ddc1c01596ddc46d3008e","card":"23000000000000000009",createTime:1489721491677},
                {id:"4028b881596ddc1c01596ddc46d3008e","card":"23000000000000000010",createTime:1489721491677},
                {id:"4028b881596ddc1c01596ddc46d3008e","card":"23000000000000000011",createTime:1489721491677},
                {id:"4028b881596ddc1c01596ddc46d3008e","card":"23000000000000000012",createTime:1489721491677},
                {id:"4028b881596ddc1c01596ddc46d3008e","card":"23000000000000000013",createTime:1489721491677},
                {id:"4028b881596ddc1c01596ddc46d3008e","card":"23000000000000000014",createTime:1489721491677},
                {id:"4028b881596ddc1c01596ddc46d3008e","card":"23000000000000000015",createTime:1489721491677}

            ]}));
        }
    },
    {
        route: "/example/api/bulkOil/detail.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {
                    company:{ id:'key1',name:'南京灌汤包',address:'中山路',police:{name:'李迪迪'}},
                    photo:'images/icon1.png',
                    card:'1111111111111111111',
                    mobile:'',
                    purpose:'维修、装修、清洗',
                    amount:100.2,
                    type:'汽油',
                    cat:'单位',
                    creator:{name:'张三',mobile:'13000000000'},
                    createTime:1489721491677
                }

            ));
        }
    }
];

module.exports = routes;
