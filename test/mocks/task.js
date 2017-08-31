var fs = require('fs');
var routes = [{
        /**
         * 民警列表
         * @param state 状态 未核查0 已核查1
         * @param cid 企业id
         */
        route: "/example/api/task.json",
        handle: function(req, res, next) {
            res.setHeader('Content-Type', 'application/json; charset=UTF-8');
            res.end(JSON.stringify({
                list: [
                    { id: 'key1', card: '230105199603022201', company: '禧龙宾馆1', createTime: 1482214046832 },
                    { id: 'key2', card: '230105199603022202', company: '旅店2', createTime: 1482214046832 },
                    { id: 'key3', card: '230105199603022203', company: '旅店3', createTime: 1482214046832 },
                    { id: 'key4', card: '230105199603022204', company: '旅店4', createTime: 1482214046832 },
                    { id: 'key1', card: '230105199603022201', company: '禧龙宾馆1', createTime: 1482214046832 },
                    { id: 'key2', card: '230105199603022202', company: '旅店2', createTime: 1482214046832 },
                    { id: 'key3', card: '230105199603022203', company: '旅店3', createTime: 1482214046832 },
                    { id: 'key4', card: '230105199603022204', company: '旅店4', createTime: 1482214046832 },
                    { id: 'key1', card: '230105199603022201', company: '禧龙宾馆1', createTime: 1482214046832 },
                    { id: 'key2', card: '230105199603022202', company: '旅店2', createTime: 1482214046832 },
                    { id: 'key3', card: '230105199603022203', company: '旅店3', createTime: 1482214046832 },
                    { id: 'key4', card: '230105199603022204', company: '旅店4', createTime: 1482214046832 }
                ],
                undo: 55,
                done: 1020
            }));
        }
    },
    {
        route: "/example/api/task/save.json",
        handle: function(req, res, next) {
            res.setHeader('Content-Type', 'application/json; charset=UTF-8');
            res.end(JSON.stringify({ state: 0 }));
        }
    },
    {
        /**
         * 所领导列表
         * @param state 状态 未核查0 已核查1id
         * @param cid 企业id
         */
        route: "/example/api/task/leader.json",
        handle: function(req, res, next) {
            res.setHeader('Content-Type', 'application/json; charset=UTF-8');
            res.end(JSON.stringify({
                list: [
                    { id: 'key1', card: '230105199603022201', company: '禧龙宾馆1', createTime: 1482214046832 },
                    { id: 'key2', card: '230105199603022202', company: '旅店2', createTime: 1482214046832 },
                    { id: 'key3', card: '230105199603022203', company: '旅店3', createTime: 1482214046832 },
                    { id: 'key4', card: '230105199603022204', company: '旅店4', createTime: 1482214046832 },
                    { id: 'key1', card: '230105199603022201', company: '禧龙宾馆1', createTime: 1482214046832 },
                    { id: 'key2', card: '230105199603022202', company: '旅店2', createTime: 1482214046832 },
                    { id: 'key3', card: '230105199603022203', company: '旅店3', createTime: 1482214046832 },
                    { id: 'key4', card: '230105199603022204', company: '旅店4', createTime: 1482214046832 },
                    { id: 'key1', card: '230105199603022201', company: '禧龙宾馆1', createTime: 1482214046832 },
                    { id: 'key2', card: '230105199603022202', company: '旅店2', createTime: 1482214046832 },
                    { id: 'key3', card: '230105199603022203', company: '旅店3', createTime: 1482214046832 },
                    { id: 'key4', card: '230105199603022204', company: '旅店4', createTime: 1482214046832 }
                ],
                undo: 100,
                done: 955
            }));
        }
    },
    {
        /**
         * 按企业统计列表
         * @param state 状态 未核查0 已核查1id
         * @param cid 企业id
         * @return nums 统计
         *              num 总数
         *              done 已完成
         *              undo 未完成
         *          total 企业总数
         *          list 企业信息列表
         *              item  企业信息
         *              nums 统计项 nullable
         *                  num 项总数
         *                  done 项已核查
         */
        route: "/example/api/task/companies.json",
        handle: function(req, res, next) {
            res.setHeader('Content-Type', 'application/json; charset=UTF-8');
            res.end(JSON.stringify({
                nums: { num: 31, done: 7, undo: 24 },
                "total": 94,
                "list": [
                    { "item": { "id": "4028b881594edc0301594edc20730093", "police": { "id": "4028b881592a5e4401592a5e5a270006", "name": "张佳宁", "phonetic": "zhangjianing" }, "groupType": 0, "name": "爱上阳光旅馆", "type": { "id": "4028b881594e226901594e22834a0000", "name": "旅店", "wxDeptId": 6, "state": 0 } }, nums: { num: 98, done: 21 } },
                    { "item": { "id": "4028b881594edc0301594edc211800b8", "police": { "id": "4028b881592a5e4401592a5e5a090003", "name": "彭宇飞", "phonetic": "pengyufei" }, "groupType": 0, "name": "爱尚时钟旅馆", "type": { "id": "4028b881594e226901594e22834a0000", "name": "旅店", "wxDeptId": 6, "state": 0 } }, nums: { num: 98, done: 21 } },
                    { "item": { "id": "4028b8815996ce95015996cf06a10176", "police": { "id": "4028b881592a5e4401592a5e5b2c002a", "name": "刘胜", "phonetic": "liusheng" }, "groupType": 0, "name": "百合清心水汇", "type": { "id": "4028b881594e226901594e22836d0003", "name": "洗浴", "wxDeptId": 9, "state": 0 } }, nums: { num: 98, done: 21 } },
                    { "item": { "id": "4028b881594edc0301594edc200b007a", "police": { "id": "4028b881592a5e4401592a5e5aba001b", "name": "于新钢", "phonetic": "yuxingang" }, "groupType": 0, "name": "春天连锁酒店会展三店", "type": { "id": "4028b881594e226901594e22834a0000", "name": "旅店", "wxDeptId": 6, "state": 0 } }, nums: { num: 98, done: 21 } },
                    { "item": { "id": "4028b881594edc0301594edc1ed3002d", "police": { "id": "4028b881592a5e4401592a5e5b2c002a", "name": "刘胜", "phonetic": "liusheng" }, "groupType": 0, "name": "大华精品宾馆", "type": { "id": "4028b881594e226901594e22834a0000", "name": "旅店", "wxDeptId": 6, "state": 0 } }, nums: { num: 98, done: 21 } },
                    { "item": { "id": "4028b881594edc0301594edc212600bb", "police": { "id": "4028b881592a5e4401592a5e5b540032", "name": "唐娆", "phonetic": "tangrao" }, "groupType": 0, "name": "大吉旅店", "type": { "id": "4028b881594e226901594e22834a0000", "name": "旅店", "wxDeptId": 6, "state": 0 } }, nums: { num: 98, done: 21 } },
                    { "item": { "id": "4028b881594edc0301594edc21f600e6", "police": { "id": "4028b881592a5e4401592a5e5b590033", "name": "付博涵", "phonetic": "fubohan" }, "groupType": 0, "name": "东安旅店", "type": { "id": "4028b881594e226901594e22834a0000", "name": "旅店", "wxDeptId": 6, "state": 0 } }, nums: { num: 98, done: 21 } },
                    { "item": { "id": "4028b881594edc0301594edc1ef90038", "police": { "id": "4028b881592a5e4401592a5e5a780010", "name": "姚生颖", "phonetic": "yaoshengying" }, "groupType": 0, "name": "东方世家养生沐浴", "type": { "id": "4028b881594e226901594e22836d0003", "name": "洗浴", "wxDeptId": 9, "state": 0 } }, nums: { num: 98, done: 21 } },
                    { "item": { "id": "4028b881594edc0301594edc1ffa0076", "police": { "id": "4028b881592a5e4401592a5e5a090003", "name": "彭宇飞", "phonetic": "pengyufei" }, "groupType": 0, "name": "都顺睡眠宾馆", "type": { "id": "4028b881594e226901594e22834a0000", "name": "旅店", "wxDeptId": 6, "state": 0 } }, nums: { num: 98, done: 21 } }
                ]
            }));
        }
    },
    {
        route: "/example/api/task/detail.json",
        handle: function(req, res, next) {
            res.setHeader('Content-Type', 'application/json; charset=UTF-8');
            var ret = { id: 'key1', card: '230105199603022201', user: { uid: '100', company: '', address: '', name: '张三', mobile: '13012345678' }, photo: 'images/header.jpg', state: '0', createTime: 1482214046832, doneUser: null, doneTime: null };
            ret.state = '1';
            ret.doneUser = { uid: '2301', name: '民警1' };
            ret.doneTime = 1482214046832;
            res.end(JSON.stringify(ret));
        }
    },
    {
        route: "/example/api/task/leaderDetail.json",
        handle: function(req, res, next) {
            res.setHeader('Content-Type', 'application/json; charset=UTF-8');
            var ret = { id: 'key1', card: '230105199603022201', user: { uid: '100', name: '张三', mobile: '13012345678' }, company: { name: '禧龙宾馆1', address: 'xx路yy号' }, photo: 'images/header.jpg', state: '0', createTime: 1482214046832, doneUser: null, doneTime: null };
            ret.state = '1';
            ret.doneUser = { uid: '2301', name: '民警1' };
            ret.doneTime = 1482214046832;
            res.end(JSON.stringify({ task: ret, rota: [{ id: 'r1', user: { name: '民警2' } }] }));
        }
    },
    {
        route: "/example/api/task/doneTask.json",
        handle: function(req, res, next) {
            res.setHeader('Content-Type', 'application/json; charset=UTF-8');
            res.end(JSON.stringify({ state: '1' }));
        }
    },
    {
        route: "/example/api/task/photo",
        handle: function(req, res, next) {
            res.setHeader('Content-Type', 'image/png');
            res.end(fs.readFileSync(__dirname + '/../../dist/example/images/header.jpg'));
        }
    }
];

module.exports = routes;