import mongoose from 'mongoose';

const Schema = mongoose.Schema;


export const NotificationSchema = new Schema({
    message: {
        type: String,
        required: "Enter a message"
    },
    date: {
        type: Date,
        required: "Specify a date and time"        
    },
    measure: {
        type: Schema.Types.ObjectId,
        required: "Specify a measure"
    },
    seen:{
        type: Boolean,
        default: false 
    },
    category:{
        type: String,
        required : "Specify it's category"
    }
});