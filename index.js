import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import path from 'path';
import Stream from 'node-rtsp-stream';
import bcryptjs from 'bcryptjs';

import usersRoutes from './src/routes/usersRoutes';
import homesRoutes from './src/routes/homesRoutes';
import beaconsRoutes from './src/routes/beaconsRoutes';
import measuresRoutes from './src/routes/measuresRoutes';
import notificationsRoutes from './src/routes/notificationsRoutes';
import objectsRoutes from './src/routes/objectsRoutes';
import serversRoutes from './src/routes/serversRoutes';
import { UserSchema } from './src/models/usersModel';
import eventsRoutes from './src/routes/eventsRoutes';
import iotRoutes from './src/routes/api';
import camerasRoutes from './src/routes/camerasRoutes';
import _router from './src/routes/uploadRoutes'
var appRoutes = require('./src/routes/uploadRoutes');




const cluster = require('cluster');

if (cluster.isMaster) {
  
  cluster.fork();
  cluster.fork();

  cluster.on('disconnect', (worker) => {
    console.error('disconnect!');
    cluster.fork();
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

        server.close();

        cluster.worker.disconnect();

        res.statusCode = 500;
        res.setHeader('content-type', 'text/plain');
        res.end('Oops, there was a problem!\n');
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

        app.use('/', appRoutes);

        //serving static files
        app.use(express.static('public'));

        // Angular DIST output folder
        app.use(express.static(path.join(__dirname, 'dist')));


        app.get('/', (req, res) => 
            res.send(`server is running in port: ${PORT}`)
        );


        app.post('/signup', async (req, res) => {
            console.log('signup...');
            let newUser = new User(req.body)
            const salt = bcryptjs.genSaltSync(10)
            let hashed_password =  bcryptjs.hashSync(newUser.password, salt)
            newUser.password = hashed_password
            newUser.socketRooms.push(newUser._id)
            console.log(newUser)
            let user = await newUser.save()
            sendToken(user, res)
        });



        app.post('/signin', async (req, res) => {
            console.log('signin...')

        try {
                let user = await User.findOne({email: req.body.email})

                console.log(req.body.email)
                console.log(req.body.password)
                
                if(!user) {
                    sendAuthError(res, "User don't exist!")
                    console.log("User don't exist!")
                }else if (bcryptjs.compareSync(req.body.password, user.password)) {
                    sendToken(user, res);
                    console.log("sign in successfully!")            
                }
                else {
                    sendAuthError(res, "Wrong password!")
                    console.log("Wrong password!")
                }
        } catch (error) {
            res.send(error)
        }   
        });

        function sendToken(user, res) {
            let token = jwt.sign(user.id, '123'); // in production dont hard code the second argument
            res.json({email: user.email, token: token});
        }


        function sendAuthError(res, msg) {
            return res.json({status: 401, message: msg});
        }

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

        ///////////////////////// Streaming //////////////////////////////
        let stream = new Stream({
            name: 'name',
            streamUrl: 'rtsp://admin:smartBuilding2017@192.168.8.102:554/cam/realmonitor?channel=1&subtype=0',
            wsPort: 9999
        });

        server.listen(PORT, () =>
            console.log(`server is running in port: ${PORT}`)
        );
    });
}


