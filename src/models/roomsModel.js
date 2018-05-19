import mongoose from 'mongoose'
import { UserSchema } from "./usersModel";

const Schema = mongoose.Schema
const User = mongoose.model("User", UserSchema)

export const RoomSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a room name'
    },
    type: {
        type: String
    },
    objects : [ {type: Schema.Types.ObjectId, ref: 'objects' }],
    users: [{type: Schema.Types.ObjectId, ref:'User'}],
    cameras : [Schema.Types.ObjectId]
});

