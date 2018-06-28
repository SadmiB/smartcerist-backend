import mongoose from 'mongoose';

const Schema = mongoose.Schema 

export const ConditionSchema = new Schema ({
    name : {
        type : String
    },
    description : {
        type : String
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
    condition : {
        type : String
    },
    value : {
        type: String
    },
})