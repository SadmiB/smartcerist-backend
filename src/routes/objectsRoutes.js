import {getBeaconObjectWithId,
        getBeaconObjects,
        addBeaconObject,
        deleteBeaconObject,
        updateBeaconObject
} from '../controllers/objectsController'

const objectsRoutes = (app) => {
  
  app.route('/:serverId/:beaconId/objects')
  .get(getBeaconObjects)
  .post(addBeaconObject)
  
  app.route('/:serverId/:beaconId/objects/:objectId')
  .get(getBeaconObjectWithId)
  .put(updateBeaconObject)
  .delete(deleteBeaconObject)

}

export default objectsRoutes;