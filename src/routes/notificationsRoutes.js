import {addNotification,
        setNotificationSeen,
        deleteNotification,
        getObjectNotificationsWithId,
        getNotifications,
        setAllNotificationsTrue,
        getAllNotifications
}from '../controllers/notificationsController';
import { checkAuthenticated } from '../controllers/authController';



const notificationsRoutes = (app) => {
    //app.route('/:userId/notifications')
    //.get(getNotifications)
    app.route('/user/notifications')
    .get(checkAuthenticated, getNotifications)
    .put(checkAuthenticated, setAllNotificationsTrue)
    .post(addNotification)

    app.route('/user/notifications/all')
    .get(checkAuthenticated, getAllNotifications)
    
    app.route('/user/notifications/:notificationId')
    .get(getObjectNotificationsWithId)
    .put(checkAuthenticated, setNotificationSeen)
    .delete(checkAuthenticated, deleteNotification)
}

export default notificationsRoutes;