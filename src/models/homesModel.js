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
    phone: {
        type: String
    },
    country: {
        type: String
    },
    lng:{
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
    ipv4: {
        type: String
    },
    ipv6: {
        type: String
    },
    servers: [Schema.Types.ObjectId],
    rooms: [RoomSchema]
}); 