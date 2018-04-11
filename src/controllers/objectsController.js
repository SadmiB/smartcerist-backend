import mongoose from 'mongoose';
import { ServerSchema } from '../models/serversModel'

const _Server = mongoose.model('Server',ServerSchema)

//works
export const getBeaconObjects = async (req,res) => {
    try {
        let server = await _Server.findById(req.params.serverId)
        console.log(server)
        let beacon = server.beacons.id(req.params.beaconId)
        let objects = beacon.objects
        res.json(objects)
    } catch (error) {
        res.send(error)
    }
};

//works
export const getBeaconObjectWithId = async (req,res) => {
    try {
        let server = await _Server.findById(req.params.serverId)
        let beacon = server.beacons.id(req.params.beaconId)
        let object = beacon.objects.id(req.params.objectId)
        res.json(object)
    } catch (error) {
        res.send(error)
    }
};


//works
export const addBeaconObject = async(req,res) => {
    try {
        let server = await _Server.findById(req.params.serverId)
        let beacon = server.beacons.id(req.params.beaconId)
        beacon.objects.push(req.body)
        let savedServer = await server.save()
        res.json(savedServer)
    } catch (error) {
        res.send(error)
    }
};


//works
export const updateBeaconObject = async(req,res)=>{
    try {
        let server = await _Server.findById(req.params.serverId)
        let beacon = server.beacons.id(req.params.beaconId)
        let object = beacon.objects.id(req.params.objectId)
        object.set(req.body)
        let savedServer = await server.save()
        res.json(savedServer)
    } catch (error) {
        res.send(error)        
    }
};

//works
export const deleteBeaconObject = async (req,res) => {
    try {
      let server = await _Server.findById(req.params.serverId)
      let beacon = server.beacons.id(req.params.beaconId)
      let object = await beacon.objects.pull(req.params.objectId)
      await server.save()
      res.json(beacon)    
    } catch (error) {
      res.send(error)
    }
}

