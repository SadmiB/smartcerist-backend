import mongoose from 'mongoose';
import {EventSchema} from '../models/eventsModel';

const _Event = mongoose.model("Event",EventSchema);

export const getEvents = async (req,res) => {
    try {
        let events = await _Event.find();
        res.json(events);
    } catch (error) {
        res.send(error);
    }
};

export const getHomeEvents = async (req,res) => {
    try {
        let events = await _Event.find({home:req.params.homeId});
        res.json(events);
    } catch (error) {
        res.send(error);
    }
};

export const getUserEvents = async (req,res) => {
    try {
        let events = await _Event.find({user:req.params.userId});
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
 let newEvent = new _Event(req.body);
 try {
    let events = await newEvent.save()
    res.json(events);
} catch (error) {
    res.send(error);
}   
}

