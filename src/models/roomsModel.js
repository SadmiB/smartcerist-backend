import mongoose from 'mongoose';
import { EventSchema } from "./eventsModel";
import { UserSchema } from "./usersModel";

const Schema = mongoose.Schema
const User = mongoose.model("User", UserSchema)
const Event = mongoose.model("Event", EventSchema)

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
    cameras : [Schema.Types.ObjectId],
    events: [{type: EventSchema}]
});

