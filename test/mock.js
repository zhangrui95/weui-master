module.exports = [
    {
        route: "/example/api/task.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify([
                {id:'key1', card:'2301051996030221', hotelName:'禧龙宾馆', photo:'images/icon_pho.jpg', state:'主键', name:'张三', uid:'100', createTime:1482214046832, doneUid:'230', doneTime:1482214046832},
                {id:'key1', card:'2301051996030222', hotelName:'禧龙宾馆2', photo:'images/icon_pho.jpg', state:'主键2', name:'张三2', uid:'200', createTime:1482214046832, doneUid:'232', doneTime:1482214046832}
            ]));
        }
    }
];