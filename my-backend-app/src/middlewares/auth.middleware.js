// this middleware is used to make sure to provide access to endpoints to authorized users only
// We take the acccess token from the cookies that we store while logging in and then based on it we then decode the JWT access token 
// based on the access token we then check the existence of the user in the database

import asyncHandler from "../utils/ayncHandler";
import ApiError from "../utils/ApiErrors";
import jwt from 'jsonwebtoken'
import { User } from "../models/user.model";


const verifyJWT = asyncHandler(async(req,res,next) => {
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer" , "")
    
    if(!token) throw new ApiError(401, "Unauthorized Access")

    const decodedToken = jwt.verify(token , process.env.ACCESS_TOKEN_SECRET)

    const user = await User.findById(decodedToken?._id).select(
        "-password -refreshToken"
    )

    if(!user){
        throw new ApiError(401 , "Invalid Access Token")
    }

    req.user = user
    next()
})

export default verifyJWT