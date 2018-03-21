import express from 'express';
import bodyParser from 'body-parser';

var app = express();
app.use(bodyParser.json());
const PORT = 3000

app.get('/home', (req, res)=>
    res.sendStatus(200)
);
app.post('/home', (req, res)=>
    res.sendStatus(200)
);

var server = app.listen(PORT, () =>
    console.log(`server is running in port: ${PORT}`)
);