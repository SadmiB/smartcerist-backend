import mongoose from 'mongoose';

const Schema = mongoose.Schema;


export const CameraHistorySchema = new Schema({
    event: {
        type: String
    },
    date: {
        type: String
    },
    path: {
        type: String
    }
});