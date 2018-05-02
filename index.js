import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
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
import iotRoutes from './src/routes/api';
import _router from './src/routes/uploadRoutes'
var appRoutes = require('./src/routes/uploadRoutes');

let app = express();
const User = mongoose.model('User', UserSchema)


// json parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const PORT = 3000;


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
mongoose.connect('mongodb://sadmi:bouhafs@localhost/scdb');

usersRoutes(app);
homesRoutes(app);
serversRoutes(app);
beaconsRoutes(app);
measuresRoutes(app);
notificationsRoutes(app);
objectsRoutes(app);
eventsRoutes(app);
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
    newUser.socketRooms.push(newUser._id);
    console.log(newUser);
    let user = await newUser.save();
    sendToken(user, res);
});

app.post('/signin', async (req, res) => {
    console.log('signin...');
    let user = await User.findOne({email: req.body.email});
    
    if(!user) 
        sendAuthError(res);
        console.log(res)
    if (user.password == req.body.password)
        sendToken(user, res);
    else
        // sendAuthError(res);
        console.log(res)
});

function sendToken(user, res) {
    let token = jwt.sign(user.id, '123'); // in production dont hard code the second argument
    res.json({firstName: user.firstName, token: token});
}


function sendAuthError(res) {
    return res.json({success: false, message: 'email or password incorrect'});
}

/******* Socket.IO *******************/
let http = require('http');
let server = http.Server(app);
let socketIO = require('socket.io');
let io = socketIO(server);
io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('new-message', (message) => {
        console.log(message);
        io.emit('new-message', message);
    });

    socket.on('add-room', (roomId)=>{
        console.log("add-room event : " + roomId)
        io.emit('add-room', "a new room is added");
        console.log("event sent")
    });
});

///////////////////////// Streaming //////////////////////////////
let stream = new Stream({
    name: 'name',
    streamUrl: 'rtsp://admin:smartBuilding2017@10.0.88.57:554/cam/realmonitor?channel=1&subtype=0',
    wsPort: 9999
});


server.listen(PORT, () =>
    console.log(`server is running in port: ${PORT}`)
);



    