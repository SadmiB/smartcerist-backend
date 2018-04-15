import mongoose from "mongoose";
import { UserSchema } from "../models/usersModel";
import { HomeSchema } from "../models/homesModel";
const User = mongoose.model('User', UserSchema)
const Home = mongoose.model('Home', HomeSchema)

export const getUsers = async (req, res) => {
    let users = await User.find({})
    
    try {
        res.json(users)        
    } catch (error) {
        res.send(error)        
    }
};

export const addUser = async (req, res) =>{
    let newUser = new User(req.body)

    try {
        let savedUser = await newUser.save()
        res.json(savedUser)
    } catch (error) {
        res.send(error)
    }
};

export const getConnectedUser = async (req, res) => {
    try{
        let user = await User.findById(req.userId)
        res.json(user)
    } catch(error){
        console.log("rien n'est trouvé");
        res.send(error)
    }
};

export const updateConnectedUser = async (req, res) => {
    try {
        let user = await User.findOneAndUpdate({_id: req.userId}, req.body, {new: true})
        res.json(user)
    } catch (error) {
        res.send(error)
    }
};


export const deleteConnectedUser = async (req, res) => {
    try {
        let user = await User.remove({_id: req.userId})
        res.json(user)
    } catch (error) {
        res.send(error)
    }
}

export const getUserById = async (req, res) => {
    try{
        let user = await User.findById(req.params.userId)
        res.json(user)
    } catch(error){
        console.log("rien n'est trouvé");
        res.send(error)
    }
};

export const updateUser = async (req, res) => {
    try {
        let user = await User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true})
        console.log(user);
        res.json(user)
    } catch (error) {
        res.send(error)
    }
};


export const deleteUser = async (req, res) => {
    try {
        let user = await User.remove({_id: req.params.userId})
        res.json(user)
    } catch (error) {
        res.send(error)
    }
}

export const getHomeUsers = async (req,res) => {
    try {
        let homeUsers = new Set();
        let home = await Home.findById(req.params.homeId);
        let rooms = home.rooms;
        console.log(rooms);
        rooms.forEach(room => {
            let roomUsers = room.users;
            roomUsers.forEach(user => {
                if(!homeUsers.has(user.userId.toString()))
                    homeUsers.add(user.userId.toString()) ;               
            });
        });
        let homeUsersArray = Array.from(homeUsers);
        console.log(homeUsersArray);
        let users = await User.find({_id: {$in: homeUsersArray}})
        console.log(users);
        res.json(users);
    } catch (error) {
        res.send(error);
    }
}

export const getRoomUsersPermissions = async (req,res) => {
    try {
        let home = await Home.findById(req.params.homeId);
        let room = home.rooms.id(req.params.roomId);
        let users = room.users;
        res.json(users);
    } catch (error) {
        res.send(error);
    }
}

export const getRoomUserPermission = async (req,res) => {
    try {
        let userPermission= null;
        let home = await Home.findById(req.params.homeId);
        let room = home.rooms.id(req.params.roomId);
        let users = room.users;
        users.forEach(user => {
            if (user.userId == req.params.userId)
                userPermission = user;          
        });
        res.json(userPermission.permission);
    } catch (error) {
        res.send(error);
    }
}

export const getRoomUsers = async (req,res) => {
    try {
        console.log("users");
        let roomUsers = new Set();
        let home = await Home.findById(req.params.homeId);
        let room = home.rooms.id(req.params.roomId);
        let users = room.users;
        console.log(users);
        users.forEach(user => {
            if(!roomUsers.has(user.userId.toString()))
                roomUsers.add(user.userId.toString()) ;           
        });
        console.log(roomUsers);
        let roomUsersArray = Array.from(roomUsers);
        let usersResult = await User.find({_id: {$in: roomUsersArray}})
        res.json(usersResult);
    } catch (error) {
        res.send(error);
    }
}

export const updateUserRoomPermission = async (req,res ) => {
    try {
        let users = [];
        let home = await Home.findById(req.params.homeId);
        let room = home.rooms.id(req.params.roomId);
        users = room.users;
        console.log(users);
        users.forEach(user => {
            console.log(user);
            if(user.userId == req.params.userId)
                user.set(req.body);
        });
        await home.save();
        res.json(room);
    } catch (e) {
        console.log(e.message);
        res.send(e);
}

}

export const getConnectedUserHomesId = async (req,res) => {
    try {
        let user = await User.findById(req.userId);
        let homesId = user.homes;
        res.json(homesId)       
    } catch (e) {
        res.send(e)
    }
}

export const getUserHomesId = async (req,res) => {
    try {
        let user = await User.findById(req.params.userId);
        let homesId = user.homes;
        res.json(homesId)       
    } catch (e) {
        res.send(e)
    }
}

