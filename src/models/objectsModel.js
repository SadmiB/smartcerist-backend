import mongoose from 'mongoose';
import { MesureSchema } from './mesuresModel';

const Schema = mongoose.Schema;

export const ObjectSchema = new Schema({
    "name": {
        type: String,
        required : ""
    },
    "path": {
        type: String,
        required : ""        
    },
    "min_threshold": {
        type: Number
    },
    "max_threshold": {
        type: Number
    },
    "mesures": [MesureSchema]
});