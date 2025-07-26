import {v2 as cloudinary} from "cloudinary"
import ApiError from "./ApiErrors"

import fs from "fs"

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const uploadOnCloudinary = async(localFilePath) => {
    try{

        if(!localFilePath) return null

        const cloudResponse = await cloudinary.uploader.upload(localFilePath ,{
            resource_type: "auto"
        })
        
        // Removing from the local file system that is stored by using multer

        if(fs.existsSync(localFilePath)){
            fs.unlinkSync(localFilePath)
            console.log(`File has been removed from local system: ${localFilePath}`); 
        }

        return cloudResponse // return is a URL for the content

    }catch(err){

        fs.unlinkSync(localFilePath)
        throw new ApiError(400 , "Failed to upload on Cloudinary")
        
    }
}

export const  deleteFromCloudinary = async(cloudURL) => {
    
    try{
     
    if(!cloudURL) return null

    const deleteResponse = await cloudinary.uploader.destroy(cloudURL)

    return deleteResponse
        

    }catch(err){

        throw new ApiError(400 , "Failed to Delete From Cloudinary")
    }
}