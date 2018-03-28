import { getServerBeacons,
         getServerBeaconWithId,
         addServerBeacon,
         updateServerBeacon,
         deleteServerBeacon
} from '../controllers/beaconsController';


const beaconsRoutes = (app) =>   {
  app.route('/:serverId/beacons')
  .get(getServerBeacons)
  .post(addServerBeacon)
  app.route('/:serverId/beacons/:beaconId')
  .get(getServerBeaconWithId)
  .put(updateServerBeacon)
  .delete(deleteServerBeacon)
}

export default beaconsRoutes;