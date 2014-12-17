/**
 * Created by alehatsman on 12/3/14.
 */

var pg = require('pg'),
    conf = require('../config/db');

module.exports.withConnection = function withConnection(callback) {
  pg.connect(conf, function(err, client, done) {
    if(err) {
      console.error('error fetching client from pool', err);
    }
    callback(err, client, done);
  });
};

module.exports.executeSql =  function executeSql(sql, values, callback) {
  module.exports.withConnection(function(err, client, done) {
    if(typeof values === 'function') {
      callback = values;
    }

    if(err) {
      return callback(err);
    }

    function clientCallback(err, result) {
      done();
      if (err) {
        console.error('error running query', err);
        return callback(err);
      }
      callback(err, result);
    }

    console.log(sql);

    if(typeof values === 'function') {
      client.query(sql, clientCallback);
    } else {
      client.query(sql, values, callback);
    }
  });
};