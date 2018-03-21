import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String,
        required: 'Enter an email'        
    },
    password: {
        type: String,
        required: 'Enter a password'                
    },
    telephone: {
        type: String
    },
    gender: {
        type: String
    },
    country: {
        type: String
    }
});