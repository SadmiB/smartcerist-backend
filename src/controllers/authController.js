import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import { UserSchema } from '../models/usersModel';
import bcryptjs from 'bcryptjs';
const User = mongoose.model('User', UserSchema);


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

export const signUp = async (req, res) => {
    console.log('signup...');
    let newUser = new User(req.body)
    const salt = bcryptjs.genSaltSync(10)
    console.log(salt);
    let hashed_password =  bcryptjs.hashSync(newUser.password, salt)
    newUser.password = hashed_password
    newUser.socketRooms.push(newUser._id)
    console.log(newUser)
    let user = await newUser.save()
    sendToken(user, res)
}


export const signIn = async (req, res) => {
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
} 


function sendToken(user, res) {
    let token = jwt.sign(user.id, '123'); // in production dont hard code the second argument
    res.json({email: user.email, token: token});
}


function sendAuthError(res, msg) {
    return res.json({status: 401, message: msg});
}

