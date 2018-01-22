
var Mock = require('mockjs')
var Random = Mock.Random
module.exports = function (req, res) {
    return {
        "user": {
            "id": 1,
            "username": "admin",
            "nickname": "",
            "phone": "13488888888"
        }
    }
}