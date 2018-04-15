import { getEvents, getHomeEvents, getObjectEvents, getRoomEvents, getUserEvents, addEvent, getEventWithId, updateEvent, deleteEvent } from "../controllers/eventsController";
import { checkAuthenticated } from "../controllers/authController";

const eventRoutes = (app) => {
    app.route('/events')
    .get(getEvents)
    .post(addEvent)

    app.route('/events/:eventId')
    .get(getEventWithId)
    .put(updateEvent)
    .delete(deleteEvent)

    app.route('/homes/:homeId/events')
    .get(getHomeEvents)

    app.route('/users/user/events')
    .get(checkAuthenticated,getUserEvents)
    
    app.route('/rooms/:roomId/events')
    .get(getRoomEvents)

    app.route('/objects/:objectId/events')
    .get(getObjectEvents)
}

export default eventRoutes;