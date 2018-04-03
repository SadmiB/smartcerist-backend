import { getEvents, getHomeEvents, getObjectEvents, getRoomEvents, getUserEvents, addEvent } from "../controllers/eventsController";

const eventRoutes = (app) => {
    app.route('/events')
    .get(getEvents)
    .post(addEvent)

    app.route('/homes/:homeId/events')
    .get(getHomeEvents)

    app.route('/users/:userId/events')
    .get(getUserEvents)
    
    app.route('/rooms/:roomId/events')
    .get(getRoomEvents)

    app.route('/objects/:objectId/events')
    .get(getObjectEvents)
}

export default eventRoutes;