import {getObjectNotifications,
        addNotification,
        setNotificationSeen,
        deleteNotification,
        getObjectNotificationsWithId
}from '../controllers/notificationsController';



const notificationsRoutes = (app) => {
    //app.route('/:userId/notifications')
    //.get(getNotifications)
    app.route('/:serverId/:beaconId/:objectId/notifications')
    .get(getObjectNotifications)
    .post(addNotification)
    app.route('/:serverId/:beaconId/:objectId/notifications/:notificationId')
    .get(getObjectNotificationsWithId)
    .put(setNotificationSeen)
    .delete(deleteNotification)
}

export default notificationsRoutes;