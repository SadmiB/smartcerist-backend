import { getUsers,
         addUser,
         getUserById,
         updateUser,
         deleteUser} from "../controllers/usersController";

const usersRoutes = (app) => {
    app.route('/users')
    .get(getUsers)
    .post(addUser);

    app.route('/users/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)
};

export default usersRoutes;