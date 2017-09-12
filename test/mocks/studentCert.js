var fs = require('fs');

var routes = [
    /**
     * @param name like name
     * @param type eq type 1身份证2居住证
     * @param state eq state 0申请1完成2通知
     * @return studentCert list pageable
     */
    {
        route: "/example/api/studentCert.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            var ret = {"state":0,"count":9,"list":[
                {"id":"1","aid":"4028b881594edc0301594edc1ec20030","createTime":1502175965000,"info":null,"name":"test三1","photos":null,"state":0,"type":1,"user":null,result:1},
                {"id":"2","aid":"4028b881594edc0301594edc1ec20030","createTime":1502175985000,"info":null,"name":"test三2","photos":null,"state":0,"type":1,"user":null,result:1},
                {"id":"3","aid":"4028b881594edc0301594edc1ec20030","createTime":1502175985000,"info":null,"name":"test三3","photos":null,"state":0,"type":1,"user":null,result:-1},
                {"id":"4","aid":"4028b881594edc0301594edc1ec20030","createTime":1502175985000,"info":null,"name":"test三4","photos":null,"state":0,"type":1,"user":null,result:1},
                {"id":"5","aid":"4028b881594edc0301594edc1ec20030","createTime":1492175985000,"info":null,"name":"test三5","photos":null,"state":0,"type":1,"user":null,result:1},
                {"id":"6","aid":"4028b881594edc0301594edc1ec20030","createTime":1492175985000,"info":null,"name":"test三6","photos":null,"state":0,"type":1,"user":null,result:-1},
                {"id":"7","aid":"4028b881594edc0301594edc1ec20030","createTime":1492175985000,"info":null,"name":"test三7","photos":null,"state":0,"type":1,"user":null,result:-1},
                {"id":"8","aid":"4028b881594edc0301594edc1ec20030","createTime":1482175985000,"info":null,"name":"test三8","photos":null,"state":0,"type":1,"user":null,result:1},
                {"id":"9","aid":"4028b881594edc0301594edc1ec20030","createTime":1482175985000,"info":null,"name":"test三9","photos":null,"state":0,"type":1,"user":null,result:-1}
                ]};
            res.end(JSON.stringify(ret));
        }
    },
    /**
     * @param name like name
     * @param type eq type 1身份证2居住证
     * @param state eq state 0申请1完成2通知
     * @return studentCert list
     */
    {
        route: "/example/api/studentCert/all.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            var ret = {"state":0,"list":[
                {"id":"1","aid":"4028b881594edc0301594edc1ec20030","createTime":1502175965000,"info":null,"name":"test三1","photos":null,"state":0,"type":1,"user":null},
                {"id":"2","aid":"4028b881594edc0301594edc1ec20030","createTime":1502175985000,"info":null,"name":"test三2","photos":null,"state":0,"type":1,"user":null}
            ]};
            res.end(JSON.stringify(ret));
        }
    },
    /**
     * @param id studentCert's id
     * @return data -> studentCert
     *          info -> studentCertInfo
     *              blood 1A2B3O4AB5其他6不详
     *              education 1本科2本科以上
     *              marray 1未婚2已婚3离异4其他
     *              military 1未服兵役2退出现役3国防生4服现役
     *              religion 1佛教2道教3天主教4基督教5伊斯兰教6喇嘛教7其他8无宗教信仰
     *          photos -> studentCertPhoto
     *              type 1正面照2学生证3在读证明
     */
    {
        route: "/example/api/studentCert/detail.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            var ret = {"state":0,"data":{"id":"1","aid":"4028b881594edc0301594edc1ec20030","createTime":1502175965000,"remark":'学生证照片不清晰',"result":-1,"mobile":"13012345678",
                "info":{"id":"1","blood":1,"card":"230123199603210753","cert":null,"createTime":1502176380000,"education":1,"enterSchoolTime":1273248000000,"faculty":"文学院","height":170,"marray":1,"military":1,"mobile":"13012345678","religion":1,"specialty":"古代史","weight":100},
                "name":"test三",
                "photos":[
                    {"id":"2","cert":null,"createTime":1502121600000,"name":"22","path":"/dd","type":2},
                    {"id":"2","cert":null,"createTime":1502121600000,"name":"22","path":"/dd","type":2},
                    {"id":"2","cert":null,"createTime":1502121600000,"name":"22","path":"/dd","type":2},
                    {"id":"1","cert":null,"createTime":1502121600000,"name":"d的","path":"/sd","type":1},
                    {"id":"3","cert":null,"createTime":1502121600000,"name":"33","path":"/w","type":3}
                    ],
                "state":0,"type":1,
                "user":{"id":"8a238ae15be7400b015be7419f580000","aid":"4028b881594edc0301594edc1ec20030","avatar":"","createTime":1494233489256,"name":"(｀?ω?′)","openId":"oLb11wQ2gzM8dDO51rsul7oEB8X8","role":"dev","state":1,"updateStamp":1494233489334}
            }};
            res.end(JSON.stringify(ret));
        }
    },
    /**
     * @param id photo's id
     * @return img or 404
     */
    {
        route: "/example/api/studentCert/photo",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','image/png');
            res.end(fs.readFileSync(__dirname+'/../resources/header.jpg'));
        }
    },
    /**
     * @param selfIds 正面照id 逗号分割
     * @param cardIds 学生证id 逗号分割
     * @param proveIds 在读证明id 逗号分割
     * @param name
     * @param type
     * @param info.{blood,card,...}
     * @return result
     */
    {
        route: "/example/api/studentCert/save.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            var ret = {"state":0,"data":{"id":"1","aid":"4028b881594edc0301594edc1ec20030","createTime":1502175965000,
                "info":{"id":"1","blood":1,"card":"230123199603210753","cert":null,"createTime":1502176380000,"education":1,"enterSchoolTime":1273248000000,"faculty":"文学院","height":170,"marray":1,"military":1,"mobile":"13012345678","religion":1,"specialty":"古代史","weight":100},
                "name":"test三",
                "photos":[
                    {"id":"2","cert":null,"createTime":1502121600000,"name":"22","path":"/dd","type":2},
                    {"id":"1","cert":null,"createTime":1502121600000,"name":"d的","path":"/sd","type":1},
                    {"id":"3","cert":null,"createTime":1502121600000,"name":"33","path":"/w","type":3}
                ],
                "state":0,"type":1,
                "user":{"id":"8a238ae15be7400b015be7419f580000","aid":"4028b881594edc0301594edc1ec20030","avatar":"","createTime":1494233489256,"name":"(｀?ω?′)","openId":"oLb11wQ2gzM8dDO51rsul7oEB8X8","role":"dev","state":1,"updateStamp":1494233489334}
            }};
            res.end(JSON.stringify(ret));
        }
    },
    /**
     * @param type eq type 1身份证2居住证
     * @return init 未办理
     *          done 未通知
     *          notify 已完成
     */
    {
        route: "/example/api/studentCert/groupByState.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            var ret = {"init":1,"done":0,"notify":0};
            res.end(JSON.stringify(ret));
        }
    },
    /**
     * @param id studentCert's id
     * @return state 0 or -1
     */
    {
        route: "/example/api/studentCert/done.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            var ret = {"state":0};
            res.end(JSON.stringify(ret));
        }
    },
    /**
     * @param id studentCert's id
     * @param items fail checks
     * @param remark remark text
     * @return state 0 or -1
     */
    {
        route: "/example/api/studentCert/fail.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            var ret = {"state":0};
            res.end(JSON.stringify(ret));
        }
    },
    /**
     * @param id studentCert's ids sep ,
     * @param time send time yyyy-MM-dd
     * @param address address text
     * @return state 0 or -1
     */
    {
        route: "/example/api/studentCert/notifyUsers.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','application/json; charset=UTF-8');
            var ret = {"state":0};
            res.end(JSON.stringify(ret));
        }
    }
];

module.exports = routes;