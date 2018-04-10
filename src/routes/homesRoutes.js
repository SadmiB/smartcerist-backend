import {
    getHomes,
    getHomeById,
    getUserHomes,
    addUserHome,
    getUserHome,
    updateUserHome,
    deleteUserHome,
    getHomeRooms,
    addHomeRoom,
    getRoom,
    updateRoom,
    deleteRoom
} from '../controllers/homesController'

import { checkAuthenticated } from '../controllers/authController'


const homesRoutes = (app) => {

    app.route('/homes')
    .get(getHomes)

    app.route('/homes/:homeId')
    .get(getHomeById)
    

    app.route('/user/homes')
    .get(checkAuthenticated, getUserHomes)
    .post(checkAuthenticated, addUserHome)


    app.route('/user/homes/:homeId')
    .get(getUserHome)
    .put(updateUserHome)
    .delete(checkAuthenticated, deleteUserHome)


    app.route('/user/:homeId/rooms')
    .get(getHomeRooms)
    .post(addHomeRoom)  

    app.route('/user/:homeId/rooms/:roomId')
    .get(getRoom)
    .put(updateRoom)
    .delete(deleteRoom)
}

export default homesRoutes;
