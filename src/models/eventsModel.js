import mongoose from 'mongoose';
import {ObjectSchema} from './objectsModel'; 

const Schema = mongoose.Schema;

export const EventSchema = new Schema({
    type:{
        type:String,
        required:"Specify the type of event"
    },
    date:{
        type: Date,
        required:"Specify the date"
    },
    home:{
        type:Schema.Types.ObjectId,
        required:"specify the home"
    },
    user:{
        type:Schema.Types.ObjectId,
        required:"specify the user"
    },
    room:{
        type:Schema.Types.ObjectId,
        required:"specify the room"
    },
    object:{
        type:Schema.Types.ObjectId,
        required:"specify an object"
    }
    
});