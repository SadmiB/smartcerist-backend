import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import path from 'path';
import Stream from 'node-rtsp-stream';


import usersRoutes from './src/routes/usersRoutes';
import homesRoutes from './src/routes/homesRoutes';
import beaconsRoutes from './src/routes/beaconsRoutes';
import measuresRoutes from './src/routes/measuresRoutes';
import notificationsRoutes from './src/routes/notificationsRoutes';
import objectsRoutes from './src/routes/objectsRoutes';
import serversRoutes from './src/routes/serversRoutes';
import { UserSchema } from './src/models/usersModel';
import eventsRoutes from './src/routes/eventsRoutes';
import iotRoutes from './src/routes/iotRoutes';
import camerasRoutes from './src/routes/camerasRoutes';
import authRoutes from './src/routes/authRoutes';
import rulesRoutes from './src/routes/rulesRoutes'
import appRoutes  from './src/routes/uploadRoutes';




const cluster = require('cluster');

if (cluster.isMaster) {
  
  cluster.fork();
  cluster.fork();

  cluster.on('disconnect', (worker) => {
    console.error('disconnect!');
    cluster.fork();
  });

   ///////////////////////// Streaming //////////////////////////////
   let stream = new Stream({
        name: 'name',
        streamUrl: 'rtsp://admin:smartBuilding2017@10.0.88.122:554/cam/realmonitor?channel=1&subtype=0',
        wsPort: 9999
    });

} else {
    const domain = require('domain');
   
    const d = domain.create();
    d.on('error', (er) => {
      console.error(`error ${er.stack}`);
    try {
        const killtimer = setTimeout(() => {
          process.exit(1);
        }, 30000);
        killtimer.unref();

        // server.close();

        cluster.worker.disconnect();

        // res.statusCode = 500;
        // res.setHeader('content-type', 'text/plain');
        // res.end('Oops, there was a problem!\n');
      } catch (er2) {
        console.error(`Error sending 500! ${er2.stack}`);
      }
    });
    
    const PORT = 3000;
    
    d.run(() => {
        // your code here
        let app = express();
        const User = mongoose.model('User', UserSchema)

        // json parsing
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: true}));


        // to allow angular client
        app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Credentials', true);
            res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization,Accept');
            res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS, PUT');
            next();
        });

        // mongodb connection
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://smart:smart@localhost/scdb');

        usersRoutes(app);
        homesRoutes(app);
        serversRoutes(app);
        beaconsRoutes(app);
        measuresRoutes(app);
        notificationsRoutes(app);
        objectsRoutes(app);
        eventsRoutes(app);
        camerasRoutes(app);
        iotRoutes(app);
        authRoutes(app);
        rulesRoutes(app);


        // const getObjectValue = (ip, path, _ip, _path, cb) => {
        //     console.log("ip: ", ip)
        //     var coapConnection = {
        //       host: ip,
        //       pathname: '/'+ path,
        //       method: 'GET',
        //       confirmable: true
        //     }
          
        //     try {
        //       console.log('GET ', path)
        //       const requ = coap.request(coapConnection)
        //       requ.setOption('Block2', new Buffer([0x2]))
        //       requ.on('response', function(resp) {
        //         resp.pipe(process.stdout);
        //         var textResp = resp.payload.toString('utf8');
        //         if (textResp > "500") {
        //             cb(_ip, _path, "0")
        //         } else {
        //             cb(_ip, _path, "1")
        //         }
        //       });
        //       requ.end();
        //     } catch (error) {
        //       console.log(error);
        //     }
        // }

        // const updateObjectValue = (ip, path, val) => {
        //     var coapConnection = {
        //         host: ip,
        //         pathname: '/'+ path,
        //         method: 'PUT',
        //         confirmable: true
        //     }
            
        //     try {
        //         console.log('GET ', path);  
        //         const requ = coap.request(coapConnection)
        //         requ.write(new Buffer(val))
        //         requ.setOption('Block2', new Buffer([0x2]))
        //         requ.on('response', function(resp) {
        //         resp.pipe(process.stdout);
        //         var textResp = resp.payload.toString('utf8');
        //         res.send(textResp);
        //         });
        //         requ.end();
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }

        // const getObjectValue = (ip, path) => {
        //     console.log("ip: ", ip)
        //     var coapConnection = {
        //       host: ip,
        //       pathname: '/'+ path,
        //       method: 'GET',
        //       confirmable: true
        //     }
          
        //     try {
        //       console.log('GET ', path)
        //       const requ = coap.request(coapConnection)
        //       requ.setOption('Block2', new Buffer([0x2]))
        //       requ.on('response', function(resp) {
        //         resp.pipe(process.stdout);
        //         var textResp = resp.payload.toString('utf8');

        //       });
        //       requ.end();
        //     } catch (error) {
        //       console.log(error);
        //     }
        // }

        app.use('/', appRoutes);

        //serving static files
        app.use(express.static('public'));

        // Angular DIST output folder
        app.use(express.static(path.join(__dirname, 'dist')));


        app.get('/', (req, res) => 
            res.send(`server is running in port: ${PORT}`)
        );

        /******* Socket.IO *******************/
        let http = require('http');
        let server = http.Server(app);

        let socketIO = require('socket.io');
        let io = socketIO(server);
        io.on('connection', (socket) => {
            console.log('user connected');

            socket.on('new-message', (message) => {
                console.log(message)
                io.broadcast('new-message', message)
            });

            socket.on('add-room', (roomId)=>{
                console.log("add-room event : " + roomId)
                io.emit('add-room', "a new add notification")
                console.log("event sent")
            });
        });

        server.listen(PORT, () =>
            console.log(`server is running in port: ${PORT}`)
        );
    });
}


