import mongoose from 'mongoose';
import { NotificationSchema } from './notificationsModel';

const Schema = mongoose.Schema;

export const MesureSchema = new Schema({
    "value": {
        type: String,
        required: 'Enter a value'
    },
    "date": {
        type: Date,
        required: "Specify a date and time"                
    },
    "notificatins": [NotificationSchema] 
});