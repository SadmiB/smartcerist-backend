import { 
    getServers,
    getServer, 
    getHomeServers, 
    addHomeServer, 
    getHomeServer, 
    updateHomeServer, 
    removeHomeServer, } from "../controllers/serversController";



const serversRoutes = (app) => {
    app.route('/servers')
    .get(getServers)
    
    app.route('/servers/:serverId')
    .get(getServer)

    app.route('/users/:userId/homes/:homeId/servers')
    .get(getHomeServers)
    .post(addHomeServer)

    app.route('/users/:userId/homes/:homeId/servers/:serverId')
    .get(getHomeServer)
    .put(updateHomeServer)
    .delete(removeHomeServer)

}

export default serversRoutes;