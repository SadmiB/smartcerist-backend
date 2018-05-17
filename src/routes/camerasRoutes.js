import { 
         addRoomCamera,
         getRoomCameras,
         getServerCamera,
         addServerCamera,
         getServerCameras,
         getServerByCameraId,
         updateServerCamera
} from '../controllers/camerasController';


const camerasRoutes = (app) => {
   
    app.route('/:homeId/:roomId/cameras')
    .get(getRoomCameras);
    app.route('/:homeId/:roomId/cameras/:cameraId')    
    .post(addRoomCamera);
    app.route('/:serverId/cameras/:cameraId')
    .get(getServerCamera)
    .put(updateServerCamera);
    app.route('/:serverId/cameras')
    .get(getServerCameras)
    .post(addServerCamera);
    app.route('/cameras/:cameraId')   
    .get(getServerByCameraId);
}

export default camerasRoutes;