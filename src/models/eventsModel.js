import mongoose from 'mongoose';
import {ObjectSchema} from './objectsModel'; 

const Schema = mongoose.Schema;

export const EventSchema = new Schema({
    type:{
        type:String,
        required:"Specify the type of event"
    },
    date:{
        type: String,
        // required:"Specify the date"
    },

    category:{
        type: String,
        required:"Specify the date"
    },
    message:{
        type: String,
    },
    socketId:{
        type: Schema.Types.ObjectId,
        required:"Specify the socket room of event"
    }    
});