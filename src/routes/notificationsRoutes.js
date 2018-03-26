



const notificationsRoutes = (app) => {
    // app.route('/:userId/notifications')
    // .get(getNotifications)
    app.route('/:serverId/:beaconId/:objectId/notifications')
    .get(getObjectNotifications)
    .post(addNotification)
    app.route('/:serverId/:beaconId/:objectId/notifications/:notificationId')
    .put(setNotificationSeen)   
}