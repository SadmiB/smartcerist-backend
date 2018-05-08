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
         getConnectedUserHomesId,
         deleteRoomUser,
         getConnectedUserSocketRooms,
         addUserToRoom,
         changeUserPassword,
         getUsersNonInRoom} from "../controllers/usersController";
import {checkAuthenticated} from "../controllers/authController";

const usersRoutes = (app) => {
    app.route('/users')
    .get(getUsers)
    .post(addUser)

    app.route('/users/user/password')
    .put(checkAuthenticated,changeUserPassword) 
        
    app.route('/users/user')
    .get(checkAuthenticated,getConnectedUser)
    .put(checkAuthenticated,updateConnectedUser)
    .delete(checkAuthenticated,deleteConnectedUser)

    app.route('/user/homesId')
    .get(checkAuthenticated,getConnectedUserHomesId)

    app.route('/users/:userId/homes')
    .get(getUserHomesId)

    app.route('/user/socketRooms')
    .get(checkAuthenticated,getConnectedUserSocketRooms)

    app.route('/users/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

    app.route('/:homeId/users')
    .get(getHomeUsers)

    app.route('/:homeId/:roomId/users')
    .get(getRoomUsers)

    app.route('/:homeId/:roomId/users/:userId')
    .delete(deleteRoomUser)

    app.route('/rooms/room/users/:userId') 
    .put(addUserToRoom)

    app.route('/:homeId/:roomId/nonUsers')
    .get(getUsersNonInRoom) 

    app.route('/rooms/:roomId/users/permission/:userId')
    .put(updateUserRoomPermission)
    .get(getRoomUserPermission)
};

export default usersRoutes;