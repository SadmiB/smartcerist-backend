import { HomeSchema } from '../models/homesModel';
import { ServerSchema } from '../models/serversModel';

const Home = mongoose.model("Home", HomeSchema);
const _Server = mongoose.model("Server", ServerSchema);

export const  getRoomCameras = async (req, res) => {
    try {
        let home = await Home.findOneById(req.params.homeId)
        let room = await home.rooms.id(req.params.roomId)
        let camerasIds = room.cameras
        res.json(camerasIds);
    } catch (error) {
        res.send(error)
    }
};

export const  addRoomCamera = async (req, res) => {
    try {
        let home = await Home.findOneById(req.params.homeId)
        let room = await home.rooms.id(req.params.roomId)
        await room.cameras.push(req.params.cameraId)
        await home.save()
        res.json(home)     
    } catch (error) {
        res.send(error)
    }
};


export const  getServerCamera = async (req, res) => {
    try {
        let server = await _Server.findOneById(req.params.serverId)
        let camera = await server.cameras.id(req.params.cameraId)
        res.json(camera)
    } catch (error) {
        res.send(error)
    }
};

export const  addServerCamera  = async (req, res) => {
    try {
        let server = await _Server.findById(req.params.serverId)
        await server.cameras.push(req.body)
        let savedCamera = await server.save()
        res.json(savedCamera)
    } catch (error) {
        res.send(error)
    }
};

export const addServerByCameraId = async (req, res) => {
    try {
        let server = await _Server.findOne({'cameras': {$elemMatch: {_id: req.params.cameraId }}}, {'cameras.$': 1})
        console.log('getServerByCamerasId: ', server)        
        res.json(server)
    } catch (error) {
        res.send(error)
    }
}