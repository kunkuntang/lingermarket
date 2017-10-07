/**
 * Created by Administrator on 2016/11/16.
 */

var express = require('express');
var path = require('path');
var fs = require('fs')
//var mongoose = require('mongoose');
//var _ = require('underscore');

//var serveStatic = require('serve-static');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var port = process.env.PORT || 80;
var app = express();

app.set('views', './pages/views');
app.set('view engine', 'jade');
//app.use(serveStatic('bower_components'))
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use('/img', express.static(path.join(__dirname, 'pages/img')));
app.use('/css', express.static(path.join(__dirname, 'pages/css')));
app.use('/js', express.static(path.join(__dirname, 'pages/js')));

// app.get('/favicon.ico', function(req, res) {
//     res.send('')
// })

app.use(favicon(path.join(__dirname, 'pages/views', 'favicon.ico')))

app.listen(port);

console.log('imooc started on port ' + port);

app.get('/pro/:page', function(req, res) {
    var page = req.params.page;
    console.log('pro/' + page)
    // var infoFile, info;
    // infoFile = path.join(__dirname, 'pages/data/' + page + '.json');
    // console.log(infoFile)
    // try {
    //     // info = fs.readFileSync(infoFile)
    // } catch (error) {
    //     console.log(error)
    //     info = 'something wrong happened..'
    // }
    res.render('pro/' + page, {
        page: 'pro/common'
    })
})

//index page
app.get('/:page', function (req, res) {
    var page = req.params.page;
    console.log('page: ' + page)
    res.render(page, {
        page: page
    });
});

app.get('/', function (req, res) {
    res.render('index', {
        page: 'index'
    });
});
