
const express = require('express')
const path = require('path')
const glob = require('glob')
const request = require('request')
const bodyParser = require('body-parser')
const proxy_port = require('../config/dev.env').MOCK_SERVER_PORT
const app = express()
const fs = require('fs')
app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(function (req, res, next) {
        var file = glob.sync(path.join(__dirname, '..' + req.path + '.js'))[0]
        if (file) {
            var data = require(file)
            res.json({
                code: 200,
                message: "",
                detail: data(req, res)
            })
        } else {
            res.send('error')
        }
    })

app.listen(proxy_port)
