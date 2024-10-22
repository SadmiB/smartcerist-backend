import mongoose from "mongoose";
import { HomeSchema } from "../models/homesModel";
import { RuleSchema } from "../models/rulesModel";

const Home = mongoose.model('Home', HomeSchema);
const Rule = mongoose.model('Rule', RuleSchema);


export const addHomeRule = async (req, res) => {
    try {
        console.log('------------ addHomeRule -----------------')
        console.log(req.params.homeId)
        let newHome = await Home.findById(req.params.homeId)  
        console.log('------------ addHomeRule1 -----------------')
        let rule = new Rule(req.body)
        console.log(rule)
        newHome.rules.push(rule)
        console.log(newHome.rules)
        let savedHome = await newHome.save()
        res.json(savedHome)
    } catch (error) {
        res.send(error)
    }
}

export const getHomeRules = async (req, res) => {
    try {
        console.log('------------ getHomeRules -----------------')
        let home = await Home.findById(req.params.homeId)
        let rules = home.rules
        res.json(rules)
    } catch (error) {
        res.send(error)
    }
}

export const getHomeRule = async (req, res) => {
    try {
        console.log('------------ getHomeRule -----------------')
        let home = await Home.findById(req.params.homeId)        
        let rule = await home.rules.id(req.params.ruleId)
        res.json(rule)
    } catch (error) {
        res.send(error)
    }
}

export const updateHomeRule = async (req, res) => {
    try {
        let home = await Home.findById(req.params.homeId)        
        let rule = await home.rules.id(req.params.ruleId)
        rule.set(req.body)
        let savedHome = await home.save()
        res.json(savedHome.rules)
    } catch (error) {
        res.send(error)
    }
}

export const deleteHomeRule = async (req, res) => {
    try {
        let home = await Home.findById(req.params.homeId)
        home.rules.pull(req.params.ruleId)
        await home.save()
        res.json(home)
    } catch (error) {
        res.send(error)
    }
};

export const getActionsRule = async (req, res) => {
    try {
        let home =  await Home.findById(req.params.homeId);
        let rule = home.rules.id(req.params.ruleId);
        res.json(rule.actions);
    } catch (error) {
        res.send(error);
    }
}

export const getConditionsRule = async (req, res) => {
    try {
        let home =  await Home.findById(req.params.homeId);
        let rule = home.rules.id(req.params.ruleId);
        res.json(rule.conditions);
    } catch (error) {
        res.send(error);
    }
}

export const addActionRule = async (req, res) => {
    try {
        let home =  await Home.findById(req.params.homeId);
        let rule = home.rules.id(req.params.ruleId);
        rule.actions.push(req.body);
        await home.save();
        res.json(home);
    } catch (error) {
        res.send(error);
    }
}

export const addConditionRule = async (req, res) => {
    try {
        console.log('------------ addConditionRule -------------------');
        console.log(req.body);
        let home =  await Home.findById(req.params.homeId);
        console.log('------------ addConditionRule 1-------------------');
        let rule = home.rules.id(req.params.ruleId);
        console.log('------------ addConditionRule 2-------------------');
        rule.conditions.push(req.body);
        console.log('------------ addConditionRule 3-------------------');
        await home.save();
        console.log('------------ addConditionRule 4-------------------');
        res.json(home);
    } catch (error) {
        res.send(error);
    }
}

export const removeConditionRule = async (req, res) => {
    try {
        console.log('---------------- removeConditionRule -----------------------');
        let home =  await Home.findById(req.params.homeId);
        let rule = home.rules.id(req.params.ruleId);
        rule.conditions.pull(req.params.conditionId);
        await home.save();
        res.json(home);
    } catch (error) {
        res.send(error);
    }
}

export const removeActionRule = async (req, res) => {
    try {
        console.log('---------------- removeActionRule -----------------------');
        let home =  await Home.findById(req.params.homeId);
        let rule = home.rules.id(req.params.ruleId);
        rule.actions.pull(req.params.actionId);
        await home.save();
        res.json(home);
    } catch (error) {
        res.send(error);
    }
}

export const updateConditionRule = async (req, res) => {
    try {
        let home =  await Home.findById(req.params.homeId);
        let rule = home.rules.id(req.params.ruleId);
        let condition = rule.conditions.id(req.params.conditionId);
        condition.set(req.body);
        await home.save();
        res.json(home);
    } catch (error) {
        res.send(error);
    }
}

export const updateActionRule = async (req, res) => {
    try {
        let home =  await Home.findById(req.params.homeId);
        let rule = home.rules.id(req.params.ruleId);
        let action = rule.actions.id(req.params.actionId);
        action.set(req.body);
        await home.save();
        res.json(home);
    } catch (error) {
        res.send(error);
    }
}