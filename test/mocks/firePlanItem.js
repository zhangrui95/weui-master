
var routes = [
    {
        route: "/example/api/firePlanItem.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify({
                    undo:34,
                    done:71,
                    list:[
                        {company:{name:'九转小磨',type:{name:'饭店'},police:{name:'于谦'}}, startTime:1482214046832, endTime:1482214046832, createTime:1482214046832, fcid:'', uid:'', id:'p0'},
                        {company:{name:'九转小磨',type:{name:'饭店'},police:{name:'于谦'}}, startTime:1482214046832, endTime:1482214046832, createTime:1482214046832, fcid:'', uid:'', id:'p1'},
                        {company:{name:'九转小磨',type:{name:'饭店'},police:{name:'于谦'}}, startTime:1482214046832, endTime:1482214046832, createTime:1482214046832, fcid:'', uid:'', id:'p2'},
                        {company:{name:'九转小磨',type:{name:'饭店'},police:{name:'于谦'}}, startTime:1482214046832, endTime:1482214046832, createTime:1482214046832, fcid:'', uid:'', id:'p3'},
                        {company:{name:'九转小磨',type:{name:'饭店'},police:{name:'于谦'}}, startTime:1482214046832, endTime:1482214046832, createTime:1482214046832, fcid:'', uid:'', id:'p4'},
                        {company:{name:'九转小磨',type:{name:'饭店'},police:{name:'于谦'}}, startTime:1482214046832, endTime:1482214046832, createTime:1482214046832, fcid:'', uid:'', id:'p5'},
                        {company:{name:'九转小磨',type:{name:'饭店'},police:{name:'于谦'}}, startTime:1482214046832, endTime:1482214046832, createTime:1482214046832, fcid:'', uid:'', id:'p6'},
                        {company:{name:'八府香鸭',type:{name:'饭店'},police:{name:'于谦'}}, startTime:1502428601837, endTime:1502438661837, createTime:1482214046832, fcid:'', uid:'', id:'p7'},
                        {company:{name:'八府香鸭',type:{name:'饭店'},police:{name:'于谦'}}, startTime:1502428601837, endTime:1502438661837, createTime:1482214046832, fcid:'', uid:'', id:'p8'}
                    ]
                }
            ));
        }
    },
    {
        route: "/example/api/firePlanItem/groupByUser.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                {
                    done:87,
                    undo:99,
                    list:[
                        {id:'k1',name:'张三',pointNum:23,checkNums:{num:106,undo:86},avatar:'images/icon1.png?'},
                        {id:'k2',name:'李四',pointNum:23,checkNums:{num:230,undo:86},avatar:'images/icon1.png?'},
                        {id:'k3',name:'余兴安',pointNum:23,checkNums:{num:27,undo:3},avatar:'images/icon1.png?'},
                        {id:'k4',name:'于新刚',pointNum:23,checkNums:{num:96,undo:86},avatar:'images/icon1.png?'},
                        {id:'k5',name:'李阳',pointNum:23,checkNums:{num:86,undo:46},avatar:'images/icon1.png?'},
                        {id:'k6',name:'张飞',pointNum:23,checkNums:{num:76,undo:6},avatar:'images/icon1.png?'},
                        {id:'k7',name:'王二',pointNum:23,checkNums:{num:36,undo:9},avatar:'images/icon1.png?'},
                        {id:'k8',name:'孙七',pointNum:23,checkNums:{num:76,undo:56},avatar:'images/icon1.png?'},
                        {id:'k9',name:'赵武',pointNum:23,checkNums:{num:92,undo:82},avatar:'images/icon1.png?'},
                        {id:'k10',name:'王二',pointNum:23,checkNums:{num:36,undo:9},avatar:'images/icon1.png?'},
                        {id:'k11',name:'孙七',pointNum:23,checkNums:{num:76,undo:56},avatar:'images/icon1.png?'},
                        {id:'k12',name:'赵武',pointNum:23,checkNums:{num:92,undo:82},avatar:'images/icon1.png?'}
                    ]
                }
            ));
        }
    },
    {
        route: "/example/api/firePlanItem/listWithNumber.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            res.end(JSON.stringify(
                [
                    {id:'k1',company:{name:'九转小磨',police:{name:'于新刚'},type:{name:'饭店'}},checkNum:9},
                    {id:'k2',company:{name:'九转小磨',police:{name:'于新刚'},type:{name:'饭店'}},checkNum:5},
                    {id:'k3',company:{name:'九转小磨',police:{name:'于新刚'},type:{name:'饭店'}},checkNum:6},
                    {id:'k4',company:{name:'九转小磨',police:{name:'于新刚'},type:{name:'饭店'}},checkNum:97},
                    {id:'k5',company:{name:'九转小磨',police:{name:'于新刚'},type:{name:'饭店'}},checkNum:8},
                    {id:'k6',company:{name:'九转小磨',police:{name:'于新刚'},type:{name:'饭店'}},checkNum:39}
                ]
            ));
        }
    }
];

module.exports = routes;
