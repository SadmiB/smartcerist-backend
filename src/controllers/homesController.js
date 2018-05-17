import mongoose from "mongoose";
import { RoomSchema } from "../models/roomsModel";
import { HomeSchema } from "../models/homesModel";
import { UserSchema } from "../models/usersModel";
import { PermissionSchema } from "../models/permissionsModel";

const Home = mongoose.model('Home', HomeSchema)
const Room = mongoose.model('Room', RoomSchema)
const User = mongoose.model('User', UserSchema)
const Permission = mongoose.model('Permissioin', PermissionSchema)



export const getHomes = async (req, res) => {
    try{
        let homes = await Home.find({})
        res.json(homes)
    } catch(error){
        res.send(error)
    }
};

export const getHomeById = async (req, res) => {
    try{
        let home = await Home.findById(req.params.homeId)
        res.json(home)
    } catch(error){
        res.send(error)
    }
};

export const getUserHomes = async (req, res) => {
    try {
        console.log("je suis ici")
        let user = await User.findById(req.userId)
        let homesIds = await user.homes
        let homes = await Home.find({_id: {$in: homesIds}})
        res.json(homes)
    } catch (error) {
        res.send(error) 
    }
};

export const getOwnerHomes = async(req,res)=>{
    try {
        let homes = await Home.find({owner:req.userId})
        res.json(homes)
    } catch (e) {
        res.send(e)
    }
};

export const addUserHome = async (req, res) => {
    let newHome = new Home(req.body)
    newHome.owner=req.userId;
    try {
        let savedHome = await newHome.save()
        let user = await User.update({_id: req.userId },{$push: {homes: savedHome._id,socketRooms:savedHome._id}})
        res.json(savedHome)
    } catch (error) {
        res.send(error)
    }
};

export const getUserHome = async (req, res) => {
    try {
        let home = await Home.findById(req.params.homeId)
        res.json(home)
    } catch (error) {
        res.send(error) 
    }
};

export const updateUserHome = async (req, res) => {
    try {
        console.log("i'm hiere")
        console.log(req.params.homeId);
        console.log(req.body);
        let home = await Home.findByIdAndUpdate(req.params.homeId, req.body, {new: true})    
        console.log(home);
        res.json(home)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
};

//delete a home and all related
export const deleteUserHome = async (req, res) => {
    try {
        let home = await Home.remove({_id: req.params.homeId})
        let users = await User.find({homes:{$in : [req.params.homeId]}});
        users.forEach(user => {
            user.homes.pull(req.params.homeId);
            user.socketRooms.pull(req.params.homeId);
            let userRooms = user.rooms;
            userRooms.forEach(room => {
                if(room.homeId.toString() == req.params.homeId.toString()){
                    user.rooms.pull(room._id);
                }                
            });
            user.save();
        });
        res.json(home)
    } catch (error) {
        res.send(error)
    }
};

export const getHomeRooms = async (req, res) => {
    try {
        let home = await Home.findById(req.params.homeId)
        res.json(home.rooms)
    } catch (error) {
        res.send(error)
    }
};

export const addHomeRoom = async (req, res) => {
    try{
        let newHome = await Home.findById(req.params.homeId)  
        let room = new Room(req.body);
        room.users.push(newHome.owner)
        newHome.rooms.push(room)
        let savedRoom = await newHome.save()

        let user = await User.findById(newHome.owner);
        let permission = new Permission();
        permission.homeId = newHome._id;
        permission.roomId = room._id;
        permission.permission = "owner";
        user.rooms.push(permission);
        user.socketRooms.push(room._id);
        await user.save();
        res.json(savedRoom)
    } catch(error) {
        res.send(error)
    }
};

export const getRoom = async (req, res) => {
    try {
        let home = await Home.findById(req.params.homeId)        
        let room = await home.rooms.id(req.params.roomId)
        console.log('getRoom: ', room)
        res.json(room)
    } catch (error) {
        res.send(error)
    }
};

export const updateRoom = async (req, res) => {
    try {
        let home = await Home.findById(req.params.homeId)        
        let room = await home.rooms.id(req.params.roomId)
        room.set(req.body)
        let savedHome = await home.save()
        res.json(savedHome)
    } catch (error) {
        res.send(error)
    }
};


export const deleteRoom = async (req, res) => {
    console.log('delete room...')
    try {
        let home = await Home.findById(req.params.homeId)
        let room = await home.rooms.pull(req.params.roomId)
        await home.save()        
        res.json(room)
    } catch (error) {
        res.send(error)
    }
};

// export const getRoomObjects = async (req, res) => {
//     console.log('get room objects..')
//     try {
//         let home = await Home.findById(req.params.homeId)
//         let room = await home.id(req.params.roomId)
//         let objectsIds = room.objects

//         let server = await _Server.findById(req.params.serverId)
//         let beacons = await server.beacons.id(req.params.beaconId)
//         let objects = await beacons.objects.find({_id: {$in: objectsIds}})
//         res.json(objects)
//     } catch (error) {
//         res.send(error)
//     }
// }

export const addRoomObject = async (req, res) => {
    console.log('add object to room...')
    try {
        let home = await Home.findById(req.params.homeId)
        let room = await home.rooms.id(req.params.roomId)
        await room.objects.push(req.params.objectId)
        await home.save()
        res.json(home)
    } catch (error) {
        res.send(error)
    }
};

export const deleteRoomObject = async (req, res) => {
    console.log('delete object..')
    try {
        let home = await Home.findById(req.params.homeId)
        let room = await home.rooms.id(req.params.roomId)
        await room.objects.pull(req.params.objectId)
        await home.save()
        res.json(home)
    } catch (error) {
        res.send(error)
    }
};


export const getUserRooms = async (req,res) => {
    try {
        let userRooms = new Set() ;
        let home = await Home.findOne({_id: req.params.homeId});
        let rooms = home.rooms;
        rooms.forEach(room => {
            let users = room.users;
            console.log(users);
            users.forEach(user => {
                if (user.userId == req.params.userId)
                    if(!userRooms.has(room))
                        userRooms.add(room);
                        console.log(userRooms);
            });            
        });
        console.log(userRooms); 
        res.json(userRooms)
    } catch (e) {
        res.send(e)    
    }
}

export const getConnectedUserRooms = async (req,res) => {
    try {
        let userRooms = new Set() ;
        let home = await Home.findOne({_id: req.params.homeId});
        let rooms = home.rooms;
        rooms.forEach(room => {
            let users = room.users;
            console.log(users);
            users.forEach(user => {
                if (user == req.userId)
                    if(!userRooms.has(room))
                        userRooms.add(room);
                        console.log(userRooms);
            });            
        });
        console.log(userRooms); 
        res.json(userRooms)
    } catch (e) {
        res.send(e)    
    }
}

export const getConnectedUserRoomsIds = async (req,res) => {
    try {
        let userRoomsIds = new Set() ;
        let home = await Home.findOne({_id: req.params.homeId});
        let rooms = home.rooms;
        rooms.forEach(room => {
            let users = room.users;
            console.log(users);
            users.forEach(user => {
                console.log(user.userId);
                console.log(req.userId);
                if (user.userId.toString() == req.userId.toString())
                {
                    console.log("true")
                    userRoomsIds.add(room._id);
                    console.log(userRoomsIds);
                }
            });            
        });
        console.log(userRoomsIds); 
        res.json(userRoomsIds)
    } catch (e) {
        res.send(e)    
    }
}

export const getConnectedUserSocketRooms = async (req,res) => {
    try {
        let userId = req.params.userId;
        let socketRooms = [""];
        let user = await User.findById(userId);
        let homesId = user.homes;
        socketRooms=homesId;
        homesId.forEach(homeId => {
            Home.findOne({_id: homeId}, function(err, home) {
                // docs contains your answer
                console.log("***********************************")
                let rooms = home.rooms;
                rooms.forEach(room => {
                    let users = room.users;
                    // console.log(users);
                    users.forEach(user => {
                        // console.log(user.userId);
                        // console.log(userId);
                        // console.log(room._id);
                        if (user.userId == userId){
                            console.log("true");
                            socketRooms.push(room._id.toString());
                            console.log(socketRooms)
                        }
                    });            
                });
            });
        });
        // console.log(socketRooms)
        res.json(socketRooms)       
    } catch (e) {
        res.send(e)
    }
}


