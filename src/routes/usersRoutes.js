import { getUsers,
         addUser,
         getUserById,
         updateUser,
         deleteUser,
         getHomeUsers} from "../controllers/usersController";

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
};

export default usersRoutes;