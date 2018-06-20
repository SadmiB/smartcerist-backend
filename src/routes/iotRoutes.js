const coap = require('coap');


const iotRoutes = (app) => {

  app.route('/api/core')
  .get(ressourcesDiscovery)

  app.route('/api/:path1/:path2')
  .get(getObjectValue)
  .put(updateObjectValue)
  
}

const ressourcesDiscovery = (req, res) => {
  var coapConnection = {
    host: req.param('ip'),
    pathname: '/.well-known/core',
    method: 'GET',
    confirmable: true
  }

  try {
      console.log('GET core...');  
      const requ = coap.request(coapConnection);
      
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
}

const getObjectValue = (req, res) => {
  console.log("ip: ", req.param('ip'))
  var coapConnection = {
    host: req.param('ip'),
    pathname: '/'+ req.params.path1 +'/'+req.params.path2,
    method: 'GET',
    confirmable: true
  }

  try {
    console.log('GET ', req.params.path2);  
    const requ = coap.request(coapConnection);
   
    requ.on('response', function(resp) {
      resp.pipe(process.stdout);
      var textResp = resp.payload.toString('utf8');
      res.send(textResp);
    });
    requ.end();
  } catch (error) {
    console.log(error);
  }
}

const updateObjectValue = (req, res) => {
  var coapConnection = {
    host: req.param('ip'),
    pathname: '/'+ req.params.path1 +'/'+req.params.path2,
    method: 'PUT',
    confirmable: true
  }

  try {
    console.log('GET ', req.params.path2);  
    const requ = coap.request(coapConnection)
   requ.write(new Buffer(req.body.payload))
    requ.on('response', function(resp) {
      resp.pipe(process.stdout);
      var textResp = resp.payload.toString('utf8');
      res.send(textResp);
    });
    requ.end();
  } catch (error) {
    console.log(error);
  }
}

export default iotRoutes;
