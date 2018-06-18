import mongoose from 'mongoose';

const Schema = mongoose.Schema
export const RuleSchema = new Schema ({
    name : {
        type : String
    },
    description : {
        type : String
    },
    actions : {
        type : [Schema.Types.ObjectId]
    },
    conditions : {
        type : [Schema.Types.ObjectId]
    },
    state: {
        type : Boolean,
        default : true
    }    
})