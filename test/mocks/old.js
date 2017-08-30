var routes = [
    {
        route: "/example/api/rota/allot.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({state:'1'}));
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
    }
];

module.exports = routes;
