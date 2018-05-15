import { 
    getServers,
    getServer, 
    getHomeServers, 
    addHomeServer, 
    getHomeServer, 
    updateServer, 
    removeHomeServer, } from "../controllers/serversController";



const serversRoutes = (app) => {
    app.route('/servers')
    .get(getServers)
    
    app.route('/servers/:serverId')
    .get(getServer)
    .put(updateServer)

    app.route('/:homeId/servers')
    .get(getHomeServers)
    .post(addHomeServer)

    app.route('/:homeId/servers/:serverId')
    .get(getHomeServer)
    .delete(removeHomeServer)
    
}

export default serversRoutes;