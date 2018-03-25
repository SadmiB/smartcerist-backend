import mongoose from 'mongoose';
import { BeaconSchema } from './beaconsModel';

const Schema = mongoose.Schema;


export const ServerSchema = new Schema({
    "name": {
        type: String
    },
    "ipv6": {
        type: String,
        required: "Specify an ipv6"
    },
    "ipv4": {
        type: String
    },
    beacons: [BeaconSchema]
});