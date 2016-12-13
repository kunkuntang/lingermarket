var mysql = require('mysql');
var connection = require('../util/connetDB');



function selectAll(cb) {
    connection.connect();
    var sql = 'SELECT * FROM production';

    console.log(sql)

    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        console.log('-------------------------------------------------------------');
        console.log(result.length)
        cb(result);
    });
}

function selectOne(id, cb) {
    var sql = 'SELECT * FROM production WHERE _id = ' + id;

    console.log(sql)

    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        console.log('--------------------------SELECT----------------------------');
        console.log(result);
        console.log('-------------------------------------------------------------');
        cb(result[0]);
    });
}

function addSoftware(software,cb) {
   var  sql = 'INSERT INTO production(title,company,year,summary,poster,downloadLink) VALUES(?,?,?,?,?,?)';
    //增
    connection.query(sql,software,function (err, result) {
        if(err){
            console.log('[INSERT ERROR] - ',err.message);
            return;
        }

        console.log('--------------------------INSERT----------------------------');

        //console.log('INSERT ID:',result.insertId);
        console.log('INSERT ID:',result);
        cb(result.insertId);
        console.log('------------------------------------------------------------');
    });
}

function updateSoftware(id ,software, cb) {
    var sql = 'UPDATE production SET title = ?,company = ?,year = ?,summary = ?,poster = ?,downloadLink = ? WHERE _id = ' + id;

    connection.query(sql,software,function (err, result) {
        if(err){
            console.log('[UPDATE ERROR] - ',err.message);
            return;
        }
        console.log('--------------------------UPDATE----------------------------');
        console.log('UPDATE affectedRows',result);
        console.log('------------------------------------------------------------');
        cb(id);
    });
}

function deletSoftware(id, cb) {
    var  sql = 'DELETE FROM production where _id = ' + id;

    connection.query(sql,function (err, result) {
        if(err){
            console.log('[DELETE ERROR] - ',err.message);
            return;
        }

        console.log('--------------------------DELETE----------------------------');
        console.log('DELETE affectedRows',result.affectedRows);
        console.log('------------------------------------------------------------');
        cb();
    });
}


module.exports = {
    selectAll: selectAll,
    selectOne: selectOne,
    addSoftware: addSoftware,
    updateSoftware: updateSoftware,
    deletSoftware: deletSoftware
}