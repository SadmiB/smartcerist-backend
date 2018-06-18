import { getHomeRules, 
    addHomeRule, 
    getHomeRule, 
    updateHomeRule, 
    deleteHomeRule, 
    getConditionsRule, 
    addConditionRule, 
    getActionsRule, 
    addActionRule, 
    updateConditionRule, 
    removeConditionRule, 
    updateActionRule, 
    removeActionRule } from "../controllers/rulesController";

const rulesRoutes = (app) => {
    app.route('/homes/:homeId/rules')
    .get(getHomeRules)
    .post(addHomeRule)

    app.route('/homes/:homeId/rules/:ruleId')
    .get(getHomeRule)
    .put(updateHomeRule)
    .delete(deleteHomeRule)

    app.route('/homes/:homeId/rules/:ruleId/conditions')
    .get(getConditionsRule)
    .post(addConditionRule)

    app.route('/homes/:homeId/rules/:ruleId/actions')
    .get(getActionsRule)
    .post(addActionRule)

    app.route('/homes/:homeId/rules/:ruleId/:conditionId')
    .put(updateConditionRule)
    .delete(removeConditionRule)

    app.route('/homes/:homeId/rules/:ruleId/:actionId')
    .put(updateActionRule)
    .delete(removeActionRule)
}

export default rulesRoutes;