import mongoose from 'mongoose'
import { NotificationSchema } from './notificationsModel';
import { PermissionSchema } from './permissionsModel';

const Schema = mongoose.Schema

export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String,
        required: 'Enter an email'        
    },
    password: {
        type: String,
        required: 'Enter a password'                
    },
    phone: {
        type: String
    },
    gender: {
        type: String
    },
    country: {
        type: String
    },
    city: {
        type: String
    },
    postCode: {
        type: String
    },
    status:{
        type:Boolean
    },
    picture:{
        type:String
    },
    homes: [Schema.Types.ObjectId],
    rooms: [PermissionSchema],
    socketRooms:[Schema.Types.ObjectId],
    notifications: [NotificationSchema]
});