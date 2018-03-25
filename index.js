import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './src/routes/usersRoutes';
import homesRoutes from './src/routes/homesRoutes';
import mongoose from 'mongoose';
import serversRoutes from './src/routes/serversRoutes';

var app = express();

// json parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const PORT = 3000;

// mongodb connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/scdb');

usersRoutes(app);
homesRoutes(app);
serversRoutes(app);
//serving static files
app.use(express.static('public'));

app.get('/', (req, res) => 
    res.send(`server is running in port: ${PORT}`)
);

var server = app.listen(PORT, () =>
    console.log(`server is running in port: ${PORT}`)
);