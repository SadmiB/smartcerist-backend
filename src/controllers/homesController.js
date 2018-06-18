import mongoose from "mongoose";
import { RoomSchema } from "../models/roomsModel";
import { HomeSchema } from "../models/homesModel";
import { UserSchema } from "../models/usersModel";
import { RuleSchema } from "../models/rulesModel";
import { PermissionSchema } from "../models/permissionsModel";

const Home = mongoose.model('Home', HomeSchema)
const Room = mongoose.model('Room', RoomSchema)
const User = mongoose.model('User', UserSchema)
const Rule = mongoose.model('Rule', RuleSchema)
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
        homes.forEach(home => {
            if(home.owner.toString() == req.userId.toString()){
                home.permission = "owner"
            }else{
                home.permission="user"
            }            
        });
        res.json(homes)
    } catch (error) {
        res.send(error) 
    }
};

export const getOwnerHomes = async(req,res)=>{
    try {
        console.log('---------------- getOwnerHomes -------------------------------')
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
        let home = await Home.findOne({_id: req.params.homeId})
        if(home.owner.toString() === req.userId.toString()){
            home = await Home.remove({_id: req.params.homeId})
            let users = await User.find({homes:{$in : [req.params.homeId]}});
            users.forEach(user => {
                user.homes.pull(req.params.homeId);
                user.socketRooms.pull(req.params.homeId);
                let userRooms = user.rooms;
                userRooms.forEach(room => {
                    if(room.homeId.toString() == req.params.homeId.toString()){
                        user.rooms.pull(room._id);
                        user.socketRooms.pull(room._id);
                    }                
                });
                user.save();
            });
        }else{
            let user = await User.findOne({_id: req.userId});
            user.homes.pull(req.params.homeId);
            user.socketRooms.pull(req.params.homeId);
            let userRooms = user.rooms;
            userRooms.forEach(room => {
                if(room.homeId.toString() == req.params.homeId.toString()){
                    user.rooms.pull(room._id);
                    user.socketRooms.pull(room._id);
                    room = home.rooms.id(room.roomId);
                    room.users.pull(req.userId);
                }                
            });
            user.save();
        }
        home.save();        
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
        let savedHome = await newHome.save()

        let user = await User.findById(newHome.owner);
        let permission = new Permission();
        permission.homeId = newHome._id;
        permission.roomId = room._id;
        permission.permission = "owner";
        user.rooms.push(permission);
        user.socketRooms.push(room._id);
        await user.save();
        res.json(savedHome)
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
    try {
        console.log('------------- deleteRoom -------------')
        let userPermission;
        let user = await User.findById(req.userId);
        console.log('------------- user -------------')
        console.log(user)
        user.rooms.forEach(room => {
            if (room.roomId.toString() == req.params.roomId.toString())
                userPermission = room.permission;          
        });
        console.log('------------- userPermission -------------')
        console.log(userPermission)
        let home = await Home.findById(req.params.homeId);
        console.log('------------- home -------------')
        console.log(home)
        if (userPermission.toString() == 'owner') {
            let room = await home.rooms.id(req.params.roomId)
            for (let element of room.users) {
                let elementUser = await User.findOne({_id: element});
                console.log('------------- user -------------');
                console.log(elementUser);
                console.log(req.params.roomId);
                console.log(req.params.homeId);
                deleteRoomInUserFct(req.params.homeId, req.params.roomId, elementUser)
                // deleteUserInRoomFct(home, req.params.roomId, element);
                console.log('------------- user -------------  ' + elementUser.firstName)
                console.log(elementUser.homes)
                console.log(elementUser.rooms)
                console.log(elementUser.socketRooms)
                await elementUser.save();
            };
            await home.rooms.pull(req.params.roomId)
            console.log('---------- home.rooms --------------');
            console.log(home.rooms);
        }else{
            deleteRoomInUserFct(req.params.homeId, req.params.roomId, user);
            await user.save();
            deleteUserInRoomFct(home, req.params.roomId, req.userId);
        }
        
        await home.save()
        console.log('------------- home -------------')
        console.log(home)        
        res.json(home)
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
        let home = await Home.findById(req.params.homeId);
        let room = await home.rooms.id(req.params.roomId);
        await room.objects.push(req.params.objectId);
        await home.save();
        res.json(home.rooms.id(req.params.roomId));
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
        console.log('------------------ getConnectedUserRooms ---------------------');
        let userRooms = new Set() ;
        let home = await Home.findOne({_id: req.params.homeId});
        let rooms = home.rooms;
        rooms.forEach(room => {
            let users = room.users;
            users.forEach(user => {
                if (user == req.userId)
                    if(!userRooms.has(room))
                        userRooms.add(room);
            });            
        });
        res.json(userRooms)
    } catch (e) {
        res.send(e)    
    }
}

export const getConnectedUserRoomsIds = async (req,res) => {
    try {
        console.log('------------------ getConnectedUserRoomsIds ---------------------');
        let userRoomsIds = new Set() ;
        let home = await Home.findOne({_id: req.params.homeId});
        let rooms = home.rooms;
        rooms.forEach(room => {
            let users = room.users;
            users.forEach(user => {
                if (user.userId.toString() == req.userId.toString())
                {
                    userRoomsIds.add(room._id);
                }
            });            
        });
        res.json(userRoomsIds)
    } catch (e) {
        res.send(e)    
    }
}

export const getConnectedUserSocketRooms = async (req,res) => {
    try {
        console.log('------------------ getConnectedUserSocketRooms ---------------------');
        let userId = req.params.userId;
        let socketRooms = [""];
        let user = await User.findById(userId);
        let homesId = user.homes;
        socketRooms=homesId;
        homesId.forEach(homeId => {
            Home.findOne({_id: homeId}, function(err, home) {
                let rooms = home.rooms;
                rooms.forEach(room => {
                    let users = room.users;
                    users.forEach(user => {
                        if (user.userId == userId){
                            socketRooms.push(room._id.toString());
                        }
                    });            
                });
            });
        });
        res.json(socketRooms)       
    } catch (e) {
        res.send(e)
    }
}


function deleteRoomInUserFct(homeId, reqRoomId, user){
    console.log("-------------------------- deleteRoomInUserFct ----------------------------")
    console.log(user);
    console.log('---------------- reqRoomId -------------------------');
    console.log(reqRoomId);
    user.socketRooms.pull(reqRoomId)
    console.log('---------------- user -------------------------');
    console.log(user);
    let homeNumber = 0;
    let roomId;
    console.log('---------------- homeNumber -------------------------');
    console.log(homeNumber);
    user.rooms.forEach(room => {
        if(room.roomId.toString() == reqRoomId.toString())
            roomId = room._id  ;
        if(room.homeId.toString()== homeId.toString())
            homeNumber ++;
    });
    if (homeNumber < 2) {
        user.homes.pull(homeId)
        user.socketRooms.pull(homeId)
    }
    user.rooms.pull(roomId);
    console.log(user);
    //user.save();
}

function deleteUserInRoomFct(home, roomId, userId){
        let room =  home.rooms.id(roomId);
        console.log(room);
        room.users.pull(userId);
        console.log(room);
}


export const addHomeRule = async (req, res) => {
    try {
        let newHome = await Home.findById(req.params.homeId)  
        let rule = new Rule(req.body)
        newHome.rules.push(rule)
        let savedHome = await newHome.save()
        res.json(savedHome)
    } catch (error) {
        res.send(error)
    }
}