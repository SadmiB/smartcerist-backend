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
    let newUser = new User(req.body);
    newUser.socketRooms.push(newUser); 
    console.log("newUser._id");
    console.log(newUser._id);
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
        let user = await User.findOne({_id:req.params.userId})
        res.json(user)
        console.log(user);
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


//return the permission of a specific user in a specific room
export const getRoomUserPermission = async (req,res) => {
    try {
        console.log("getRoomUserPermission")
        let userPermission;
        let user = await User.findById(req.params.userId);
        let rooms = user.rooms;
        console.log(rooms);
        rooms.forEach(room => {
            if (room.roomId.toString() == req.params.roomId.toString())
                userPermission = room.permission;          
        });
        res.json(userPermission);
    } catch (error) {
        res.send(error);
    }
}

//remove a user from a room
export const deleteRoomUser = async (req,res) =>{
    try {
        let roomId;
        let user = await User.findById(req.params.userId);
        user.socketRooms.pull(req.params.roomId)
        let homeNumber = 0;
        user.rooms.forEach(room => {
            if(room.roomId.toString() == req.params.roomId.toString())
                roomId = room._id  ;
            if(room.homeId.toString()== req.params.homeId.toString())
                homeNumber ++;                          
        });
        if (homeNumber < 2) {
            user.homes.pull(req.params.homeId)
            user.socketRooms.pull(req.params.homeId)
        }
        user.rooms.pull(roomId)
        await user.save() 
        
        let home = await Home.findById(req.params.homeId);
        let room=  home.rooms.id(req.params.roomId);
        room.users.pull(req.params.userId);
        await home.save();

        
        res.json(user)
    } catch (e) {
        res.send(e)
    }
}

export const getRoomUsers = async (req,res) => {
    try {
        let roomUsers = new Set();
        let home = await Home.findById(req.params.homeId);
        let room = home.rooms.id(req.params.roomId);
        let users = room.users;
        users.forEach(user => {
            if(!roomUsers.has(user.toString()))
                roomUsers.add(user.toString()) ;           
        });
        let roomUsersArray = Array.from(roomUsers);
        let usersResult = await User.find({_id: {$in: roomUsersArray}})
        res.json(usersResult);
    } catch (error) {
        res.send(error);
    }
}


// update the user permission in a specific room
export const updateUserRoomPermission = async (req,res ) => {
    try {
        let user = await User.findById(req.params.userId);
        let rooms = user.rooms;
        console.log(rooms);
        rooms.forEach(room => {
            console.log(room);
            if(room.roomId == req.params.roomId)
                room.permission = req.body.permission;
        });
        await user.save();
        res.json(user);
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

export const getConnectedUserSocketRooms = async (req,res) => {
    try {
        console.log("socketRooms");
        let user = await User.findById(req.userId);
        console.log(user.socketRooms);
        res.json(user.socketRooms);
    } catch (error) {
        res.send(error)
    }
}


// add a new user to an existing room with permission affectation
export const addUserToRoom = async (req,res) => {
    try {
        console.log("addUserToRoom");
        let home = await Home.findById(req.body.homeId)
        let room = home.rooms.id(req.body.roomId)
        let roomUsers = room.users;
        roomUsers.push(req.params.userId);
        await home.save();
        
        let user = await User.findById(req.params.userId)
        user.rooms.push(req.body); 
        user.socketRooms.push(req.body.roomId)      
        if (user.homes.indexOf(req.body.homeId)===-1){
            user.homes.push(req.body.homeId);
            user.socketRooms.push(req.body.homeId);
        }
        await user.save();        
        res.json(user)
    } catch (e) {
        res.send(e)
    }
}

//change the password of the connected user account
export const changeUserPassword = async (req,res) => {
    try {
    let user = await User.findById(req.userId);
    user.password = req.body.password;
    await user.save()
    res.json(user)
    } catch (e) {
        res.send(e)
    }
}

//get the users that don't have the access to a specific room
export const getUsersNonInRoom = async (req,res) => {
    try {
        let home = await Home.findById(req.params.homeId);
        let room = home.rooms.id(req.params.roomId)

        let users = await User.find({_id: {$nin: room.users}})
        console.log(users)
        res.json(users);
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}
