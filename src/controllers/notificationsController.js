import mongoose from 'mongoose';
import { UserSchema } from '../models/usersModel';
import { HomeSchema } from '../models/homesModel';
import { ServerSchema } from '../models/serversModel';

const User = mongoose.model('User', UserSchema);
const Home = mongoose.model('Home', HomeSchema);
const _Server = mongoose.model('Server',ServerSchema)


//works
export const getNotifications = async (req ,res) => {
    try {
        console.log('--------------- getNotifications ----------------');
        let user = await User.findById(req.userId)
        let notifications = user.notifications;
        console.log(notifications);
        let userNotifications = notifications.filter(notification => notification.seen === false);
        res.json(userNotifications);
    } catch (error) {
        res.send(error)
    }
}

//works
export const getAllNotifications = async (req ,res) => {
    try {
        console.log('--------------- getAllNotifications ----------------');
        let user = await User.findById(req.userId)
        let notifications = user.notifications;
        console.log(notifications);
        res.json(notifications);
    } catch (error) {
        res.send(error)
    }
}

//works
export const setAllNotificationsTrue = async (req ,res) => {
    try {
        console.log('--------------- setAllNotificationsTrue ----------------');
        let user = await User.findById(req.userId)
        user.notifications.forEach(notification => {
            if(notification.seen === false){
                notification.seen = true;
            }
        });
        console.log('---------- user ----------');
        console.log(user);
        await user.save();
        res.json(user.notifications);
    } catch (error) {
        res.send(error)
    }
}

//works
export const setNotificationSeen = async (req ,res) => {
    try {
        console.log('---------------------------------- setNotificationSeen ---------------------------');
        let user = await User.findById(req.userId)
        let notification = await user.notifications.id(req.params.notificationId);
        notification.seen = true;
        let userNotifications = user.notifications.filter(element => element.seen === false);        
        await user.save();
        res.json(userNotifications);
    } catch (error) {
        res.send(error)
    }
}

export const deleteNotification = async (req, res) => {
    try {
        console.log('----------------------------- deleteNotification ---------------------------------');
        let user = await User.findById(req.userId);
        user.notifications.pull(req.params.notificationId);
        await user.save();
        res.json(user.notifications);
    } catch (error) {
        send(error);
    }
}

//works
export const getObjectNotificationsWithId = async (req ,res) => {
    try {
        let server = await _Server.findById(req.params.serverId)
        let beacon = server.beacons.id(req.params.beaconId)
        let object = beacon.objects.id(req.params.objectId)
        let notification = object.notifications.id(req.params.notificationId)
        res.json(notification)
    } catch (error) {
        res.send(error)
    }
}

//works
export const addNotification = async (req, res) => {
    try {
        let server = await _Server.findById(req.params.serverId)
        let beacon = server.beacons.id(req.params.beaconId)
        let object = beacon.objects.id(req.params.objectId)
        object.notifications.push(req.body)
        let savedServer = await server.save()
        res.json(savedServer)
    } catch (error) {
        res.send(error)
    }
};

//works
export const setObjectNotificationSeen  = async (req, res) => {
    try {
        let server = await _Server.findById(req.params.serverId)
        let beacon = server.beacons.id(req.params.beaconId)
        let object = beacon.objects.id(req.params.objectId)
        let notification = object.notifications.id(req.params.notificationId)
        notification.set(req.body)
        let savedServer = await server.save()
        res.json(savedServer)
    } catch (error) {
        res.send(error)
    }
};

