import mongoose from "mongoose";
import { RoomSchema } from "../models/roomsModel";
import { HomeSchema } from "../models/homesModel";
import { UserSchema } from "../models/usersModel";

const Home = mongoose.model('Home', HomeSchema)
const Room = mongoose.model('Room', RoomSchema)
const User = mongoose.model('User', UserSchema)



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
        let user = await User.findById(req.params.userId)
        let homesIds = await user.homes
        let homes = await Home.find({_id: {$in: homesIds}})
        res.json(homes)
    } catch (error) {
        res.send(error) 
    }
};

export const addUserHome = async (req, res) => {
    let newHome = new Home(req.body)
    try {
        let savedHome = await newHome.save()
        let user = await User.update({_id: req.params.userId },{$push: {homes: savedHome._id}})
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
        let home = await Home.findByIdAndUpdate(req.params.homeId, req.body, {new: true})    
        res.json(home)
    } catch (error) {
        res.send(error)
    }
};

export const deleteUserHome = async (req, res) => {
    try {
        let home = await Home.remove({_id: req.params.homeId})
        let user = await User.update({_id:req.params.userId },{$pull: {homes: req.params.homeId}})
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
        res.send(rooms)
    }
};

export const addHomeRoom = async (req, res) => {
    try{
        let newHome = await Home.findById(req.params.homeId)  
        await newHome.rooms.push(req.body)
        let savedRoom = await newHome.save()
        res.json(savedRoom)
    } catch(error) {
        res.send(error)
    }
};

export const getRoom = async (req, res) => {
    try {
        let home = await Home.findById(req.params.homeId)        
        let room = await home.rooms.id(req.params.roomId)
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
        let home = await Home.findById(req.params.homeId)
        let room = await home.rooms.pull(req.params.roomId)
        await home.save()        
        res.json(room)
    } catch (error) {
        res.send(error)
    }
};
