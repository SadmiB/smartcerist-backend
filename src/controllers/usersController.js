import mongoose from "mongoose";
import { UserSchema } from "../models/usersModel";

const User = mongoose.model('User', UserSchema)

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

export const getUserById = async (req, res) => {
    try{
        let user = await User.findById(req.params.userId)
        res.json(user)
    } catch(error){
        res.send(error)
    }
};

export const updateUser = async (req, res) => {
    try {
        let user = await User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true})
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