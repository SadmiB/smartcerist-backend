import { getHomeRules, addHomeRule, getHomeRule, updateHomeRule, deleteHomeRule } from "../controllers/rulesController";

const rulesRoutes = (app) => {
    app.route('/homes/:homeId/rules')
    .get(getHomeRules)
    .post(addHomeRule)

    app.route('/homes/:homeId/:ruleId')
    .get(getHomeRule)
    .put(updateHomeRule)
    .delete(deleteHomeRule)
}