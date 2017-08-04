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
