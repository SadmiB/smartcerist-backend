import { getUsers,
         addUser,
         getUserById,
         updateUser,
         deleteUser,
         getHomeUsers,
         getRoomUsers} from "../controllers/usersController";
import {checkAuthenticated} from "../controllers/authController";

const usersRoutes = (app) => {
    app.route('/users')
    .get(getUsers)
    .post(addUser)

    app.route('/users/user')
    .get(checkAuthenticated,getUserById)
    .put(checkAuthenticated,updateUser)
    .delete(checkAuthenticated,deleteUser)

    app.route('/:homeId/users')
    .get(getHomeUsers)

    app.route('/:homeId/:roomId/users')
    .get(getRoomUsers)
};

export default usersRoutes;