import mongoose from 'mongoose';
import {EventSchema} from '../models/eventsModel';
import io from 'socket.io-client';

const _Event = mongoose.model("Event",EventSchema);
let socket = io('http://localhost:3000');

export const getEvents = async (req,res) => {
    try {
        console.log("---------------- get Events -----------");
        let events = await _Event.find();
        res.json(events);
    } catch (error) {
        res.send(error);
    }
};

export const getUserEvents = async (req,res) => {
    try {
        let events = await _Event.find({user:req.userId});
        res.json(events);
    } catch (error) {
        res.send(error);
    }
};

export const getRoomEvents = async (req,res) => {
    try {
        let events = await _Event.find({room:req.params.roomId});
        res.json(events);
    } catch (error) {
        res.send(error);
    }
};

export const getObjectEvents = async (req,res) => {
    try {
        let events = await _Event.find({object:req.params.objectId});
        res.json(events);
    } catch (error) {
        res.send(error);
    }
};

export const addEvent = async (req,res) => {
    console.log(req.body);
    let newEvent = new _Event(req.body);
    console.log(newEvent);
    try {
        let events = await newEvent.save()
        let roomId  = newEvent.socketId;
        console.log("room : ");
        console.log(roomId);
        socket.emit('add-room',roomId);
        res.json(events);
        
    } catch (error) {
        console.log(error)
        res.send(error);
    }   
}

export const getEventWithId = async (req, res) => {
    try{
        let _event = await _Event.findById(req.params.eventId)
        res.json(_event)
    } catch(error){
        console.log("rien n'est trouvé");
        res.send(error)
    }
};

export const updateEvent = async (req, res) => {
    try {
        let _envet = await _Event.findOneAndUpdate({_id: req.params.eventId}, req.body, {new: true})
        console.log(_envet);
        res.json(_envet)
    } catch (error) {
        res.send(error)
    }
};


export const deleteEvent = async (req, res) => {
    try {
        let _event = await _Event.remove({_id: req.params.eventId})
        res.json(_event)
    } catch (error) {
        res.send(error)
    }
}


