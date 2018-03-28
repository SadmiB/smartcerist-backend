import { getObjectMeasures,
    addObjectMeasure,
    deleteObjectMeasure,
    getObjectMeasureWithId
} from '../controllers/measuresController'



const measuresRoutes = (app) => {
    
    app.route('/:serverId/:beaconId/:objectId/measures')
    .get(getObjectMeasures)
    .post(addObjectMeasure)
    
    app.route('/:serverId/:beaconId/:objectId/measures/:measureId')
    .get(getObjectMeasureWithId)
    .delete(deleteObjectMeasure)
}

export default measuresRoutes;