import mongoose from 'mongoose';
import { ServerSchema } from '../models/serversModel';

const _Server = mongoose.model("Server",ServerSchema);

//works
export const getServerBeacons = async (req,res) => {
    try {
        let server = await _Server.findById(req.params.serverId)
        res.json(server.beacons)
    } catch (error) {
        res.send(error)
    }
}; 

//works
export const addServerBeacon = async (req,res) => {
    try {
        let newServer = await _Server.findById(req.params.serverId)
        await newServer.beacons.push(req.body)
        let savedBeacon = await newServer.save()
        res.json(savedBeacon)
    } catch (error) {
        res.send(error)        
    }
};

//works
export const getServerBeaconWithId = async (req,res) => {
    try {
        let server = await _Server.findById(req.params.serverId)
        let beacon = server.beacons.id(req.params.beaconId)
        res.json(beacon)
    } catch (error) {
        res.send(error)
    }
};

//works
export const updateServerBeacon = async(req,res) => {
    try {
        let server = await _Server.findById(req.params.serverId)
        let beacon = await server.beacons.id(req.params.beaconId)
        beacon.set(req.body)
        let savedServer = await server.save()
        res.json(savedServer)
    } catch (error) {
        res.send(error)
    }
};

//works
export const deleteServerBeacon = async (req,res) => {
    try {
        let server = await _Server.findById(req.params.serverId)
        let beacon = await server.beacons.pull(req.params.beaconId)
        await server.save()
        res.json(beacon)
    } catch (error) {
        res.send(error)        
    }
};