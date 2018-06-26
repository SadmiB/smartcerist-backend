import mongoose from "mongoose";
import bcryptjs from 'bcryptjs';

import { UserSchema } from "../models/usersModel";
import { HomeSchema } from "../models/homesModel";
import { EventSchema } from "../models/eventsModel";
import { NotificationSchema, DELETE_USER_ROOM, ADD_USER_ROOM, EDIT_USER_PERMISSIONS  } from "../models/notificationsModel";
const User = mongoose.model('User', UserSchema);
const Home = mongoose.model('Home', HomeSchema);
const _Event = mongoose.model('Event', EventSchema);
const Notification = mongoose.model('Notification', NotificationSchema);

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
    newUser.socketRooms.push(newUser._id); 
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
        console.log("-------- getConnectedUser -------------")
        let user = await User.findById(req.userId)
        console.log(user);
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
        console.log("-------------- getRoomUserPermission -----------------")
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

//return the permission of the connected user in a specific room
export const getRoomConnectedUserPermission = async (req,res) => {
    try {
        console.log("--------------- getRoomConnectedUserPermission -------------------")
        let userPermission;
        console.log(req.userId);
        let user = await User.findById(req.userId);
        let rooms = user.rooms;
        console.log(rooms);
        rooms.forEach(room => {
            if (room.roomId.toString() == req.params.roomId.toString())
                userPermission = room.permission;          
        });
        console.log(userPermission);
        res.json(userPermission);
    } catch (error) {
        res.send(error);
    }
}

//remove a user from a room
export const deleteRoomUser = async (req,res) =>{
    try {
        let user = await User.findById(req.params.userId);
        let userEvent = await User.findById(req.userId);
        let home = await Home.findById(req.params.homeId);
        deleteRoomInUserFct(home, req.params.roomId, user, userEvent);
        deleteUserInRoomFct(home, req.params.roomId, req.params.userId);
        await user.save();
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
        let homeId;
        console.log(rooms);
        rooms.forEach(room => {
            console.log(room);
            if(room.roomId == req.params.roomId){
                room.permission = req.body.permission;
                homeId = room.homeId;
            }
        });
        let home = await Home.findOne({_id: homeId});
        let userRoom = home.rooms.id(req.params.roomId);
        let notification = new Notification()
        initNotification(notification, homeId, req.params.roomId, req.params.userId, '','', '', 'Your permissions are set to "' + req.body.permission + '" in room "' + userRoom.name + '" in home "' + home.name + '"', 'Change your permissions in ' + userRoom.name, EDIT_USER_PERMISSIONS, 'info');
        user.notifications.push(notification);
        let _event = new _Event();
        let userEvent = await User.findById(req.userId);
        initEvent(_event, home._id, userRoom._id, req.userId, userEvent.firstName + ' ' + userEvent.lastName, '', '', '', '"'+userEvent.firstName +'" edited "' + user.firstName + ' ' + user.lastName + '" permissions in the room "' + userRoom.name + '" in home "' + home.name + '"', EDIT_USER_PERMISSIONS, 'info');
        userRoom.events.push(_event);
        await home.save();
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
    }let roomId;
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
        console.log("------------------ addUserToRoom ------------------------");
        let home = await Home.findById(req.body.homeId)
        let user = await User.findById(req.params.userId)
        let room = home.rooms.id(req.body.roomId)
        let roomUsers = room.users;
        roomUsers.push(req.params.userId);
        let notification = new Notification();
        initNotification(notification, req.body.homeId, req.body.roomId, req.params.userId, '', '', '', 'You are added to room "' + room.name + '" at home "' + home.name + '"', 'You have been added to ' + room.name, ADD_USER_ROOM,'info');
        let _event = new _Event();
        let userEvent = await User.findById(req.userId);
        initEvent(_event, home._id, room._id, req.userId, userEvent.firstName + ' ' + userEvent.lastName, '', '', '','"'+userEvent.firstName+'" added "' + user.firstName + ' ' + user.lastName + '" to the room "' + room.name + '" in home "' + home.name + '"', ADD_USER_ROOM, 'info');
        room.events.push(_event);
        user.rooms.push(req.body); 
        user.socketRooms.push(req.body.roomId)      
        if (user.homes.indexOf(req.body.homeId)===-1){
            user.homes.push(req.body.homeId);
            user.socketRooms.push(req.body.homeId);
        }
        user.notifications.push(notification);
        await home.save();
        await user.save();
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

//change user account password 
export const changeUserAccountPassword = async (req, res) => {
    try {
        console.log('changePwd...')
        console.log(req.body)
        console.log(req.userId)
        let user = await User.findOne({_id: req.userId})
        console.log(user.password)
        if (bcryptjs.compareSync(req.body.currentPassword, user.password)) {
            const salt = bcryptjs.genSaltSync(10)
            let hashed_password =  bcryptjs.hashSync(req.body.password, salt)
            user.password = hashed_password
            await user.save()
            res.json(user)
        }
        else{
            sendAuthError(res, "Passwords doesn't match");
            console.log(res)
        }        
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

function deleteRoomInUserFct(home, reqRoomId, user, userEvent){
    console.log("-------------------------- deleteRoomInUserFct ----------------------------")
    user.socketRooms.pull(reqRoomId)
    let homeNumber = 0;
    let roomId;
    user.rooms.forEach(room => {
        if(room.roomId.toString() == reqRoomId.toString())
            roomId = room._id  ;
        if(room.homeId.toString()== home._id.toString())
            homeNumber ++;
    });
    if (homeNumber < 2) {
        user.homes.pull(home._id)
        user.socketRooms.pull(home._id)
    }
    user.rooms.pull(roomId);
    let userRoom = home.rooms.id(reqRoomId);
    
    let notification = new Notification();
    initNotification(notification, home._id, userRoom._id, user._id, '', '', '','You have been removed from the room "' + userRoom.name + '" in home "' + home.name + '"', 'You have been removed from ' + userRoom.name, DELETE_USER_ROOM, 'warning');
    let _event = new _Event();
    console.log(notification);
    initEvent(_event, home._id, userRoom._id, userEvent._id, userEvent.firstName + ' ' + userEvent.lastName, '', '', '','"'+userEvent.firstName+'" removed "' + user.firstName + ' ' + user.lastName + '" from the room "' + userRoom.name + '" in home "' + home.name + '"', DELETE_USER_ROOM, 'warning');
    console.log(_event);
    userRoom.events.push(_event);
    user.notifications.push(notification);    
    console.log('------------------------------------ userRoom.events -----------------------------------');
    console.log(userRoom.events);
}

function deleteUserInRoomFct(home, roomId, userId){
    console.log("-------------------------- deleteUserInRoomFct ----------------------------");
        let room =  home.rooms.id(roomId);
        console.log(room);
        room.users.pull(userId);
        console.log(room);
        console.log("++++++++++++++++++++ done +++++++++++++++++++");

}

function initNotification(notification, homeId, roomId, userId, serverId, beaconId, objectId,  message, resume, type, category){
    console.log("-------------------------- initNotification ----------------------------")
    notification.homeId = homeId; 
    notification.roomId = roomId;
    notification.userId = userId;
    notification.serverId = serverId; 
    notification.beaconId = beaconId;
    notification.objectId = objectId;
    notification.message =message; 
    notification.resume = resume;
    notification.type = type; 
    notification.category = category;
    let date = new Date();
    notification.date = date;
}

function initEvent(event, homeId, roomId, userId, userName, serverId, beaconId, objectId,  message, type, category){
    console.log("-------------------------- initEvent ----------------------------")
    event.homeId = homeId; 
    event.roomId = roomId;
    event.userId = userId;
    event.userName = userName;
    event.serverId = serverId; 
    event.beaconId = beaconId;
    event.objectId = objectId;
    event.message =message; 
    event.type = type; 
    event.category = category;
    let date = new Date();
    event.date = date;
}
function sendAuthError(res, msg) {
    return res.json({status: 401, message: msg});
}