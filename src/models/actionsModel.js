import mongoose from 'mongoose';

const Schema = mongoose.Schema
export const ActionSchema = new Schema ({
    name : {
        type : String
    },
    description : {
        type : String
    },
    type : {
        type: String,
    },
    server : {
        type : Schema.Types.ObjectId
    },
    beacon : {
        type : Schema.Types.ObjectId
    },
    object : {
        type : Schema.Types.ObjectId
    },
    action : {
        type : String
    }
})