import {getBeaconObjectWithId,
        getBeaconObjects,
        addBeaconObject,
        deleteBeaconObject,
        updateBeaconObject,
        getServerByObjectId
      } from '../controllers/objectsController'

const objectsRoutes = (app) => {
  
  app.route('/:serverId/:beaconId/objects')
  .get(getBeaconObjects)
  .post(addBeaconObject)
  
  app.route('/:serverId/:beaconId/objects/:objectId')
  .get(getBeaconObjectWithId)
  .put(updateBeaconObject)
  .delete(deleteBeaconObject)

  app.route('/objects/:objectId')
  .get(getServerByObjectId)

}

export default objectsRoutes;