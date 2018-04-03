import jwt from 'jsonwebtoken';


export const checkAuthenticated = (req, res, next) => {
    if(!req.header('authorization'))
        return res.status(401).send({message: 'Unauthorized request. Missing authenication header'} );
    var token = req.header('authorization').split(' ')[1];
    var payload = jwt.decode(token, '123');
    if(!payload)
        res.status(401).send({message: 'Unauthorized request. Authentication header invalid'});
    
    req.userId = payload;
    next();
}