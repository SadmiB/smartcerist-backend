import { getUsers,
         addUser,
         getUserById,
         updateUser,
         deleteUser,
         getHomeUsers,
         getRoomUsers} from "../controllers/usersController";

const usersRoutes = (app) => {
    app.route('/users')
    .get(getUsers)
    .post(addUser);

    app.route('/users/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

    app.route('/:homeId/users')
    .get(getHomeUsers)

    app.route('/:homeId/:roomId/users')
    .get(getRoomUsers)
};

export default usersRoutes;