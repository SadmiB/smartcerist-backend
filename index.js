import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

import usersRoutes from './src/routes/usersRoutes';
import homesRoutes from './src/routes/homesRoutes';
import beaconsRoutes from './src/routes/beaconsRoutes';
import measuresRoutes from './src/routes/measuresRoutes';
import notificationsRoutes from './src/routes/notificationsRoutes';
import objectsRoutes from './src/routes/objectsRoutes';
import serversRoutes from './src/routes/serversRoutes';
import { UserSchema } from './src/models/usersModel';
import eventsRoutes from './src/routes/eventsRoutes';

var app = express();
const User = mongoose.model('User', UserSchema)


// json parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const PORT = 3000;


// to allow angular client
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept, Authorization");
    next();
});


// mongodb connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/scdb');

usersRoutes(app);
homesRoutes(app);
serversRoutes(app);
beaconsRoutes(app);
measuresRoutes(app);
notificationsRoutes(app);
objectsRoutes(app);
eventsRoutes(app);
//serving static files
app.use(express.static('public'));

app.get('/', (req, res) => 
    res.send(`server is running in port: ${PORT}`)
);

app.post('/signup', async (req, res) => {
    console.log('signup...');
    let newUser = new User(req.body)
    let user = await newUser.save();
    sendToken(user, res);
});

app.post('/signin', async (req, res) => {
    console.log('signin...');
    var user = await User.findOne({email: req.body.email});
    
    if(!user) 
        sendAuthError(res);
    if (user.password == req.body.password)
        sendToken(user, res);
    else
        sendAuthError(res);
});

function sendToken(user, res) {
    var token = jwt.sign(user.id, '123'); // in production dont hard code the second argument
    res.json({firstName: user.firstName, token: token});
}


function sendAuthError(res) {
    return res.json({success: false, message: 'email or password incorrect'});
}



var server = app.listen(PORT, () =>
    console.log(`server is running in port: ${PORT}`)
);