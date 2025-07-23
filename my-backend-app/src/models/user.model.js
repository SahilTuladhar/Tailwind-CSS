import mongoose , {Schema} from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


const userSchema = new Schema({
    username:{
        type: String,
        required:true,
        lowercase:true,
        unique:true,
        trim:true,
        index:true
    } ,

    email:{
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },

    fullName: {
        type: String,
        required: true,
        lowercase: true,
        index: true
    },

    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ]
})