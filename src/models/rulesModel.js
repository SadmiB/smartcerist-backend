import mongoose from 'mongoose';
import {ActionSchema} from './actionsModel'
import {ConditionSchema} from './conditionsModel'

const Schema = mongoose.Schema
export const RuleSchema = new Schema ({
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