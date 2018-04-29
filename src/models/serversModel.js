import mongoose from 'mongoose';
import { BeaconSchema } from './beaconsModel';
import { CamerasSchema } from './camerasModel';

const Schema = mongoose.Schema;


export const ServerSchema = new Schema({
    name: {
        type: String
    },
    ipv6: {
        type: String,
        required: "Specify an ipv6"
    },
    lipv6: {
        type: String,
    },
    ipv4: {
        type: String
    },
    lipv4: {
        type: String
    },
    beacons: [BeaconSchema],
    cameras: [CamerasSchema]
});