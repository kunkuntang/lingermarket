/**
 * Created by Administrator on 2016/11/21.
 */

var mysql = require('mysql');
var connection = require('../util/connetDB');

var sqlMovie = "SELECT * FROM movies limit 12";

var sqlSoftware = "SELECT * FROM production limit 12";

function init(cb) {
    connection.connect();

    var movieResult,
        softwareResult;
    var couter = 0;
    connection.query(sqlMovie, function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        console.log('-------------------------------------------------------------');
        movieResult = result;
        ready(couter++);
    });
    connection.query(sqlSoftware, function (err, result) {
        if(err){
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        console.log('-------------------------------------------------------------');
        softwareResult = result;
        ready(couter++);
    });
    function ready(cout) {
        if(cout == 1){
            cb(movieResult,softwareResult);
        }
    }
}

module.exports = {
    init: init
};