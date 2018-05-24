import mongoose  from "mongoose";
import { RoomSchema } from "./roomsModel";
import { UserSchema } from "./usersModel";
import { ServerSchema } from "./serversModel";

const Schema = mongoose.Schema

const User = mongoose.model("User", UserSchema)
const Server = mongoose.model("Server", ServerSchema)


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
    lon:{
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
        required: 'Specify an owner',
        ref: 'User'
    },
    ipv4: {
        type: String
    },
    ipv6: {
        type: String
    },
    servers: [Schema.Types.ObjectId],
    rooms: [RoomSchema],
    permission: {
        type: String,
        default: 'owner'
    }
});