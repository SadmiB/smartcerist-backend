import { getUsers,
         addUser,
         getUserById,
         updateUser,
         deleteUser,
         getHomeUsers,
         getRoomUsers,
         getConnectedUser,
         updateConnectedUser,
         deleteConnectedUser} from "../controllers/usersController";
import {checkAuthenticated} from "../controllers/authController";

const usersRoutes = (app) => {
    app.route('/users')
    .get(getUsers)
    .post(addUser);

    app.route('/users/user')
    .get(checkAuthenticated,getConnectedUser)
    .put(checkAuthenticated,updateConnectedUser)
    .delete(checkAuthenticated,deleteConnectedUser)

    app.route('/users/:userId')
    .get(checkAuthenticated,getUserById)
    .put(checkAuthenticated,updateUser)
    .delete(checkAuthenticated,deleteUser)

    app.route('/:homeId/users')
    .get(getHomeUsers)

    app.route('/:homeId/:roomId/users')
    .get(getRoomUsers)
};

export default usersRoutes;