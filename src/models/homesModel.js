import mongoose  from "mongoose";
import { RoomSchema } from "./roomsModel";

const Schema = mongoose.Schema

export const HomeSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a home name'
    },
    address: {
        type: String,
    },
    email: {
        type: String,
    },
    telephone: {
        type: String
    },
    country: {
        type: String
    },
    long:{
        type: String
    },
    lat:{
        type: String
    },
    picture:{
        type:String
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: 'Specify an owner'        
    },
    servers: [Schema.Types.ObjectId],
    rooms: [RoomSchema]
}); 