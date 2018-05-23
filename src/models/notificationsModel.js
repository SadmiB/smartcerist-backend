import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ADD_USER_ROOM = 'add_user_room';
export const DELETE_USER_ROOM = 'delete_user_room';
export const EDIT_USER_PERMISSIONS = 'edit_user_permissions';

export const NotificationSchema = new Schema({
    homeId:{
        type:String,
    },
    roomId:{
        type:String,
    },
    userId:{
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
    message: {
        type: String,
        required: "Enter a message"
    },
    date: {
        type: Date,
        required: "Specify a date and time"        
    },
    seen:{
        type: Boolean,
        default: false 
    },
    type:{
        type: String,
        required : "Specify it's type"
    },
    resume:{
        type: String
    },
    category:{
        type: String,
        required : "Specify it's category"
    }
});