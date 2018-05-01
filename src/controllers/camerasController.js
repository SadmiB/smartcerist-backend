import { HomeSchema } from '../models/homesModel';
import { ServerSchema } from '../models/serversModel';

const Home = mongoose.model("Home", HomeSchema);
const _Server = mongoose.model("Server", ServerSchema);

export const  getRoomCameras = async (req, res) => {
    try {
        let home = await Home.findOneById(req.params.homeId);
        let room = await home.rooms.id(req.params.roomId);
        let camerasIds = room.cameras;
        res.json(camerasIds); 
    } catch (error) {
        res.send(error);
    }
};

export const  addRoomCamera = async (req, res) => {
    try {
       
    } catch (error) {
        
    }
};



export const  getCamera = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

export const  addCamera  = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};