const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const assert = require('assert');
const coap = require('coap');
const url = require('url');


// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

const iotRoutes = (app) => {

  /*********************Led***************************/

  app.route('/api/core')
  .get((req, res) => {

    var coapConnection = {
      host: '2001:4340:1010:22:2ca:29ff:fea2:9512',
      pathname: '/.well-known/core',
      method: 'GET',
      confirmable: true
    }

    try {
        console.log('GET core...');  
        const requ = coap.request(coapConnection);
        setTimeout(() => {
          console.log('This will still run.');
        }, 10000);
        requ.on('response', function(resp) {
          resp.pipe(process.stdout);          
          var textResp = resp.payload;
          console.log(' : ' + textResp);
          res.send(textResp);
          });
        requ.end();
      } catch (error) {
        console.log(error);        
      }
  })

  app.route('/api/lights/led3')

  // Get led3 2001:4340:1010:22:2ca:29ff:fea2:9512
  .get((req, res) => {
    var coapConnection = {
      host: '2001:4340:1010:22:2ca:29ff:fea2:9512',
      pathname: '/lights/led3',
      method: 'GET',
      confirmable: true
    }
    try {
        console.log('GET led3...');  
        const requ = coap.request(coapConnection);
        setTimeout(() => {
          console.log('This will still run.');
        }, 10000);
        requ.on('response', function(resp) {
          resp.pipe(process.stdout);          
          var textResp = resp.payload.toString('utf8');
          console.log('led3 : ' + textResp);
          res.send(textResp);
        });
        requ.end();
    } catch (error) {
      console.log(error);        
    }
  })





  // Put led3 2001:4340:1010:22:2ca:29ff:fea2:9512
  .put( (req, res) => {
    var coapConnection = {
      host: '2001:4340:1010:22:2ca:29ff:fea2:9512',
      pathname: '/lights/led3',
      method: 'PUT',
      confirmable: true
    }
    try {
      console.log('PUT led3...');
      var requ = coap.request(coapConnection);
      //var payload = url.parse(req.url, true).query.payload;
      setTimeout(() => {
        console.log('This will still run.');
      }, 10000);
      console.log("payload=" + req.body.payload);
      requ.write(new Buffer(req.body.payload));
      requ.on('response', function(resp) {
        resp.pipe(process.stdout);
        var textResp = resp.payload.toString('utf8');
        res.send(textResp);
      });
      requ.end();   
    } catch (error) {
      console.log(error);
    }
  });

  /***********************Light*************************/

  app.route('/api/lights/adc')
  // Get  ligth 2001:4340:1010:22:02a0:44ff:fe66:6b6e
  .get( (req, res) => {
    var coapConnection = {
      host: '2001:4340:1010:22:02a0:44ff:fe66:6b6e',
      pathname: '/lights/adc',
      method: 'GET',
      confirmable: true
    }    
    try {
      console.log('GET ligth...');  
      const requ = coap.request(coapConnection);
      setTimeout(() => {
        console.log('This will still run.');
      }, 10000);
      requ.on('response', function(resp) {
        resp.pipe(process.stdout);
          var textResp = resp.payload.toString('utf8');
          res.send(textResp);
      });
      requ.end();
    } catch (error) {
      console.log(error);
    }
  });

  // Get  presence 2001:4340:1010:22:02a0:44ff:fe66:6b6e
  app.route('/api/lights/presence')
  .get( (req, res) => {
    var coapConnection = {
      host: '2001:4340:1010:22:02a0:44ff:fe66:6b6e',
      pathname: '/lights/presence',
      method: 'GET',
      confirmable: true
    }    
    try {
      console.log('GET presence...');  
      const requ = coap.request(coapConnection);
      setTimeout(() => {
        console.log('This will still run.');
      }, 10000);
      requ.on('response', function(resp) {
        resp.pipe(process.stdout);
        var textResp = resp.payload.toString('utf8');
        res.send(textResp);
      });
      requ.end();
    } catch (error) {
      console.log(error);
    }
  });



  app.route('/api/lights/temperature')
  .get( (req, res) => {
    var coapConnection = {
      host: '2001:4340:1010:22:02f5:b6ff:fed2:8e61',
      pathname: '/lights/temperature',
      method: 'GET',
      confirmable: true
    }
    try {
      console.log('GET temperature...');  
      const requ = coap.request(coapConnection);
      setTimeout(() => {
        console.log('This will still run.');
      }, 10000);
      requ.on('response', function(resp) {
        resp.pipe(process.stdout);
        var textResp = resp.payload.toString('utf8');
        res.send(textResp);
      });
      requ.end();
    } catch (error) {
      console.log(error);
    }
  });

  app.route('/api/lights/power')
  .get( (req, res) => {
    var coapConnection = {
      host: '2001:4340:1010:22:027f:08ff:fec7:69b0',
      pathname: '/lights/power',
      method: 'GET',
      confirmable: true
    }
    try {
      console.log('GET power...');  
      const requ = coap.request(coapConnection);
      setTimeout(() => {
        console.log('This will still run.');
      }, 10000);
      requ.on('response', function(resp) {
        resp.pipe(process.stdout);
        var textResp = resp.payload.toString('utf8');
        res.send(textResp);
      });
      requ.end();
    } catch (error) {
      console.log(error);
    }
  });


}

export default iotRoutes;
