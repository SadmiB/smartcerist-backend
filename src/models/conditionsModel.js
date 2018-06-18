import mongoose from 'mongoose';

const schema = mongoose.schema; 

export const ConditionSchema = new schema ({
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
    }
})