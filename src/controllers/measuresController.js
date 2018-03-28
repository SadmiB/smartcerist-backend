import mongoose from 'mongoose';
import { ServerSchema } from '../models/serversModel';

const _Server = mongoose.model('Server', ServerSchema);

//works
export const getObjectMeasures = async (req, res) => {
  try{
    console.log("beacon")
    console.log("1")
    let server  = await _Server.findById(req.params.serverId)
    console.log(server)
    let beacon = server.beacons.id(req.params.beaconId)
    console.log(beacon)
    let object = beacon.objects.id(req.params.objectId)
    console.log(object)
    let measures = object.measures
    res.json(measures)
    console.log("beacon")
  }catch(error){
    res.send(error)
  }
};

//works
export const getObjectMeasureWithId = async (req, res) => {
  try{
    let server  = await _Server.findById(req.params.serverId)
    console.log(server)
    let beacon = server.beacons.id(req.params.beaconId)
    console.log(beacon)
    let object = beacon.objects.id(req.params.objectId)
    console.log(object)
    let measure = object.measures.id(req.params.measureId)
    res.json(measure)
  }catch(error){
    res.send(error)
  }
};

//works
export const addObjectMeasure = async (req,res) => {
  try {
    let server = await _Server.findById(req.params.serverId)
    let beacon = server.beacons.id(req.params.beaconId)
    let object = beacon.objects.id(req.params.objectId)
    object.measures.push(req.body)
    let savedServer = await server.save()
    res.json(savedServer)
  } catch (error) {
    res.send(error)
  } 
};

//works
export const deleteObjectMeasure = async (req,res) => {
  try {
    let server = await _Server.findById(req.params.serverId)
    let beacon = server.beacons.id(req.params.beaconId)
    let object = beacon.objects.id(req.params.objectId)
    let measure = await object.measures.pull(req.params.measureId)
    await server.save()
    res.json(object)    
  } catch (error) {
    res.send(error)
  }
};
