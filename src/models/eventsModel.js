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

    category:{
        type: String,
        required:"Specify the date"
    },
    message:{
        type: String,
    },
    home:{
        type:Schema.Types.ObjectId,
    },
    user:{
        type:Schema.Types.ObjectId,
    },
    room:{
        type:Schema.Types.ObjectId,
    },
    object:{
        type:Schema.Types.ObjectId,
    }
    
});