import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const PermissionSchema = new Schema({
    homeId: {
        type: Schema.Types.ObjectId
    },
    roomId: {
        type: Schema.Types.ObjectId
    },
    permission: {
        type: String,
        lowercase: true
    }
});