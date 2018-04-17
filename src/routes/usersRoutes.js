import { getUsers,
         addUser,
         getUserById,
         updateUser,
         deleteUser,
         getHomeUsers,
         getRoomUsers,
         getConnectedUser,
         updateConnectedUser,
         deleteConnectedUser,
         updateUserRoomPermission,
         getRoomUserPermission,
         getUserHomesId,
         getConnectedUserHomesId} from "../controllers/usersController";
import {checkAuthenticated} from "../controllers/authController";

const usersRoutes = (app) => {
    app.route('/users')
    .get(getUsers)
    .post(addUser)

    app.route('/users/user')
    .get(checkAuthenticated,getConnectedUser)
    .put(checkAuthenticated,updateConnectedUser)
    .delete(checkAuthenticated,deleteConnectedUser)

    app.route('/user/homesId')
    .get(checkAuthenticated,getConnectedUserHomesId)

    app.route('/users/:userId/homes')
    .get(getUserHomesId)

    app.route('/users/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

    app.route('/:homeId/users')
    .get(getHomeUsers)

    app.route('/:homeId/:roomId/users')
    .get(getRoomUsers)

    app.route('/:homeId/:roomId/permission/:userId')
    .put(updateUserRoomPermission)
    .get(getRoomUserPermission)
};

export default usersRoutes;