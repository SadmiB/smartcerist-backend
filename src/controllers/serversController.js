import mongoose from "mongoose";
import { ServerSchema } from "../models/serversModel";
import { HomeSchema } from "../models/homesModel";


const _Server = mongoose.model("Server", ServerSchema)
const Home = mongoose.model("Home", HomeSchema)

// works
export const getServers = async (req, res) => {
    try{
        let servers = await _Server.find({})
        res.json(servers)
    } catch(error) {
        res.send(error)
    }
};

// works
export const getServer = async (req, res) => {
    try{
        let server = await _Server.findById(req.params.serverId)
        res.json(server)
    } catch(error) {
        res.send(error)
    }
};

// works
export const getHomeServers = async (req, res) => {
    try {
        let home = await Home.findById(req.params.homeId)
        let serversIds = await home.servers
        let servers = await _Server.find({_id: {$in: serversIds}})
        res.json(servers)
    } catch (error) {
        res.send(error)
    }
};

// works
export const addHomeServer = async (req, res) => {
  let newServer = _Server(req.body)  
  try {
      let savedServer = await newServer.save()
      let home = await Home.update({_id: req.params.homeId}, {$push: {servers: savedServer._id}})
      res.json(savedServer)
  } catch (error) {
      res.send(error)
  }  
};

// works
export const getHomeServer = async (req, res) => {
   try {
       let server = await _Server.findById(req.params.serverId)
       res.json(server)
   } catch (error) {
       res.send(error)
   } 
};

// works
export const updateServer = async (req, res) => {
    try {
        let server = await _Server.findByIdAndUpdate(req.params.serverId, req.body, {new: true})
        res.json(server)
    } catch (error) {
        res.send(error)
    }
};

// works
export const removeHomeServer = async (req, res) => {
  try {
      let server = await _Server.remove({_id: req.params.serverId})
      let home = await Home.update({_id: req.params.homeId}, {$pull: {servers: req.params.serverId}})
      res.json(server)
  } catch (error) {
      res.send(error)
  }  
};