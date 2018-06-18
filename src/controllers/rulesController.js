import mongoose from "mongoose";
import { HomeSchema } from "../models/homesModel";
import { RuleSchema } from "../models/rulesModel";

const Home = mongoose.model('Home', HomeSchema);
const Rule = mongoose.model('Rule', RuleSchema);

export const getHomeRules = async (req,res) => {
    try {
        let home = await Home.findOne({_id : req.params.homeId});
        res.json(home.rules);
    } catch (error) {
        res.send(error);
    }
}

export const addHomeRule = async (req,res) => {
    try {
        let home = await Home.findOne({_id : req.params.homeId});
        let rule = new Rule(req.body);
        home.rules.push(room);
        await home.save()
        res.json(home.rules);
    } catch (error) {
        res.send(error)
    }
}

export const getHomeRule = async (req, res) => {
    try {
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
        res.json(savedHome)
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