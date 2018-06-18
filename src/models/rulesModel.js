import mongoose from 'mongoose';
import {ConditionSchema} from 'conditionsModel'
import {ActionSchema} from 'actionsModel'

const schema = mongoose.schema; 
export const ConditionSchema = new schema ({
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