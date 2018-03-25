import mongoose from 'mongoose';

const Schema = mongoose.Schema;


export const NotificationSchema = new Schema({
    "message": {
        type: String,
        required: "enter a message"
    },
    "date": {
        type: Date,
        required: "Specify a date and time"        
    },
    "status": {
        type: String, // seen or unseen
        required: "Specify if it is seen or not"        
    }    
});