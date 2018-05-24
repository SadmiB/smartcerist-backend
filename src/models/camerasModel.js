import mongoose from 'mongoose';
import { CameraHistorySchema } from './cameraHistoryModel';

const Schema = mongoose.Schema;


export const CameraSchema = new Schema({
    name: {
        type: String
    },
    ipv4: {
        type: String
    },
    ipv6: {
        type: String,
    },
    port:{
        type: Number,
        required: "Specify a port."
    },
    username:{
        type: String,
        required: "Specify a username."
    },
    password: {
        type: String,
        required: "Specify a password."
    },
    mainStream: {
        type: String,
        required: "Specify a main stream url."        
    },
    subStream: {
        type: String,
        required: "Specify a sub stream url."        
    },
    ddns: {
        type: String
    },
    history:[CameraHistorySchema]
});