import mongoose from 'mongoose';
import { MeasureSchema } from './measuresModel';

const Schema = mongoose.Schema;

export const ObjectSchema = new Schema({
    name: {
        type: String,
        required : "Enter a name"
    },
    path: {
        type: String,
        // required : "Specify a path"
    },
    type: {
        type: String,
        // required: "Enter object's type"
    },
    min_threshold: {
        type: Number
    },
    max_threshold: {
        type: Number
    },
    kind: {
        type: String
    },
    measures: [MeasureSchema]

});
