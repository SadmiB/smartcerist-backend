import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const RoomSchema = new Schema({
    name: {
        type: String,
        required: 'Enter a room name'
    },
    type: {
        type: String
    },
    objects : [Schema.Types.ObjectId],
    users: [Schema.Types.ObjectId],
    cameras : [Schema.Types.ObjectId]
});

