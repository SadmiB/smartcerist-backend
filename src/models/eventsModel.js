import mongoose from 'mongoose';
import {ObjectSchema} from './objectsModel'; 

const Schema = mongoose.Schema;

export const EventSchema = new Schema({
    homeId:{
        type:String,
    },
    roomId:{
        type:String,
    },
    userId:{
        type:String,
    },
    userName:{
        type:String,
    },
    serverId:{
        type:String,
    },
    beaconId:{
        type:String,
    },
    objectId:{
        type:String,
    },
    type:{
        type:String,
    },
    date:{
        type: String,
        // required:"Specify the date"
    },
    category:{
        type: String,
    },  
    message:{
        type: String,
    },   
});