import mongoose from 'mongoose';
import { UserSchema } from '../models/usersModel';
import { HomeSchema } from '../models/homesModel';
import { ServerSchema } from '../models/serversModel';

const User = mongoose.model('User', UserSchema);
const Home = mongoose.model('Home', HomeSchema);
const _Server = mongoose.model('Server',ServerSchema)


// export const getNotifications = async (req, res) => {
//     try {
//         let user = await User.findById(req.params.userId)
//         let homesIds = user.homes
//         let homes = await Home.find({_id: {$in: homesIds}})
//         let rooms = []
//         homes.forEach(home => {
//             rooms.concat(home.rooms)
//         });
//
//     } catch (error) {
//         res.send(error)
//     }
// };

//works
export const getObjectNotifications = async (req ,res) => {
    try {
        let server = await _Server.findById(req.params.serverId)
        let beacon = server.beacons.id(req.params.beaconId)
        let object = beacon.objects.id(req.params.objectId)
        res.json(object)
    } catch (error) {
        res.send(error)
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
export const setNotificationSeen  = async (req, res) => {
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

//works
export const deleteNotification = async (req,res) => {
    try {
      let server = await _Server.findById(req.params.serverId)
      let beacon = server.beacons.id(req.params.beaconId)
      let object = beacon.objects.id(req.params.objectId)
      let notification =  object.notifications.pull(req.params.notificationId)
      let savedServer = await server.save() 
      res.json(savedServer)   
    } catch (error) {
      res.send(error)
    }
  }