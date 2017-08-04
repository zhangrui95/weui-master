
var routes = [
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
    }
];

module.exports = routes;
