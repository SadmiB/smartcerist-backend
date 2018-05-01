import { 
         addRoomCamera,
         getRoomCameras,
         getCamera,
         addCamera 
} from '../controllers/camerasController';


const camerasRoutes = (app) => {
   
    app.route('/:homeId/:roomId/cameras')
    .get(getRoomCameras)    
    .post(addRoomCamera);
    app.route('/:serverId/cameras/:cameraId')
    .get(getCamera)
    .post(addCamera);
}

export default camerasRoutes;