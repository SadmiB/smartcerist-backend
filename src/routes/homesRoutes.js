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


const homesRoutes = (app) => {

    app.route('/homes')
    .get(getHomes)

    app.route('/homes/:homeId')
    .get(getHomeById)
    

    app.route('/users/:userId/homes')
    .get(getUserHomes)
    .post(addUserHome)


    app.route('/users/:userId/homes/:homeId')
    .get(getUserHome)
    .put(updateUserHome)
    .delete(deleteUserHome)


    app.route('/users/:userId/homes/:homeId/rooms')
    .get(getHomeRooms)
    .post(addHomeRoom)

    app.route('/users/:userId/homes/:homeId/rooms/:roomId')
    .get(getRoom)
    .put(updateRoom)
    .delete(deleteRoom)
}

export default homesRoutes;
