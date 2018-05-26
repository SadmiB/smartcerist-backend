import { signIn, signUp } from "../controllers/authController";




const authRoutes = (app) => {

    app.route('/signin')
    .post(signIn)
    app.route('/signup')
    .post(signUp)

}

export default authRoutes;