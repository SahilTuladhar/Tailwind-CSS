import mongoose , {Schema} from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

// Structure of the Instance

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
    ], 

    avatar: {
        type: String,
        required: true
        
    },

    coverImage: {
        type: String
    },
    
    password: {
        type: String,
        required: true
    },

    refreshToken: {
        type: String
    }
    
} , {
    timestamps: true
})

// Defining the auto-initiated function on save

userSchema.pre("save" , async function(next){

    if(!this.isModified('password')) return next()
    
    this.password = await bcrypt.hash(this.password , 10)
    next()

})

// Defining methods related to the User Instance

userSchema.methods.isPasswordCorrect = async (password) => {

    return await bcrypt.compare(password , this.password)

}

userSchema.methods.generateAccessToken = () => {

    return jwt.sign(

        // payload for jwt
        {

            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName

        },

        // Key to sign JWT token

        process.env.ACCESS_TOKEN_SECRET,

        // Expiry time

        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = () => {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
            
        },

        process.env.REFRESH_TOKEN_SECRET,

        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }


    )
}


export const User = mongoose.model("User" , userSchema) // Creating an instance of the Schema that interacts with the DB