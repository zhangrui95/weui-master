module.exports = [
    {
        route: "/example/api/task.json",
        handle: function (req, res, next) {
            res.setHeader('Content-Type','text/json; charset=UTF-8');
            res.end(JSON.stringify({status:'123123'}));
        }
    }
];