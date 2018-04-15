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
    status: {
        type: String, // seen or unseen
        required: "Specify if it is seen or not"        
    },
    category:{
        type: String,
        required : "Specify it's category"
    }
});