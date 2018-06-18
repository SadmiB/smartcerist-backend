import mongoose from 'mongoose';
import {ConditionSchema} from 'conditionsModel'
import {ActionSchema} from 'actionsModel'

const schema = mongoose.schema; 
export const RuleSchema = new schema ({
    name : {
        type : String
    },
    description : {
        type : String
    },
    actions : {
        type : [ActionSchema]
    },
    conditions : {
        type : [ConditionSchema]
    },
    state: {
        type : Boolean,
        default : true
    }    
})