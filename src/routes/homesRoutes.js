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
    

    app.route('/:userId/homes')
    .get(getUserHomes)
    .post(addUserHome)


    app.route('/:userId/homes/:homeId')
    .get(getUserHome)
    .put(updateUserHome)
    .delete(deleteUserHome)


    app.route('/:userId/:homeId/rooms')
    .get(getHomeRooms)
    .post(addHomeRoom)  

    app.route('/:userId/:homeId/rooms/:roomId')
    .get(getRoom)
    .put(updateRoom)
    .delete(deleteRoom)
}

export default homesRoutes;
