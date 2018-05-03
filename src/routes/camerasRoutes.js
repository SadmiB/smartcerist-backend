import { 
         addRoomCamera,
         getRoomCameras,
         getServerCamera,
         addServerCamera,
         addServerByCameraId 
} from '../controllers/camerasController';


const camerasRoutes = (app) => {
   
    app.route('/:homeId/:roomId/cameras')
    .get(getRoomCameras);
    app.route('/:homeId/:roomId/cameras/:cameraId')    
    .post(addRoomCamera);
    app.route('/:serverId/cameras/:cameraId')
    .get(getServerCamera)
    app.route('/:serverId/cameras')
    .post(addServerCamera);
    app.route('/cameras/:cameraId')    
    .post(addServerByCameraId);
}

export default camerasRoutes;