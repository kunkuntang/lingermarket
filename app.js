/**
 * Created by Administrator on 2016/11/16.
 */

var express = require('express');
var path = require('path');
//var mongoose = require('mongoose');
//var _ = require('underscore');

//var serveStatic = require('serve-static');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

app.set('views', './pages/views');
app.set('view engine', 'jade');
//app.use(serveStatic('bower_components'))
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use('/img', express.static(path.join(__dirname, 'pages/img')));
app.use('/css', express.static(path.join(__dirname, 'pages/css')));


app.listen(port);

console.log('imooc started on port ' + port);

// admin addMovie
app.post('/v1/add', function (req, res) {
    var movie = req.body;
    Movie.addMovie(movie, function (id) {
        res.redirect('/about/' + id);
    });
});

// admin update about
app.post('/v1/update', function (req, res) {
    var movie = req.body;

    Movie.upadteMovie(movie, function (id) {
        res.redirect('/about/' + id);
    })

});

// admin delete about
app.get('/v1/delete', function (req, res) {
    var id = req.params.id;

    Movie.deletMovie(id, function () {
        res.redirect('/about/admin/list');
    });
});

//index page
app.get('/:page', function (req, res) {
    var page = req.params.page;
    res.render(page, {
        page: page
    })
});

app.get('/', function (req, res) {
    res.render('index', {
        page: 'index'
    })
});


app.get('/download/', function (req, res) {
    res.download('./videos/' + req.query.movieName);
})
