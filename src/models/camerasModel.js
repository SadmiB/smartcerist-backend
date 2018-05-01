import mongoose from 'mongoose';

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
        required: "Specify an ipv6."
    },
    username:{
        type: String,
        required: "Specify a username."       
    },
    password: {
        type: String,
        required: "Specify a password."
    },
    main_stream: {
        type: String,
        required: "Specify a main stream url."        
    },
    sub_stream: {
        type: String,
        required: "Specify a sub stream url."        
    },
    ddns: {
        type: String
    }
});