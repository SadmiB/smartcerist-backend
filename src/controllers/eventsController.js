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
 let newEvent = new _Event(req.body);
 try {
    let events = await newEvent.save()
    res.json(events);
} catch (error) {
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

