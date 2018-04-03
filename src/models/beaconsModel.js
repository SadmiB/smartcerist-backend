import mongoose from 'mongoose';
import { ObjectSchema } from './objectsModel';

const Schema = mongoose.Schema;


export const BeaconSchema = new Schema({
    ipv6: {
        type: String,
        required: "Specify an ipv6 address"
    },
    ipv4: {
        type: String
    },
    name: {
        type: String
    },
    objects: [ObjectSchema]
});