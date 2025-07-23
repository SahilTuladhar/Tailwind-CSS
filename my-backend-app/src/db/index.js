import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'


const connectDB  = async() => {

    await new Promise((resolve , reject) => {
        mongoose
        .connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        .then((dbConnectionInstance) => {
            console.log(
                `\n MOngoDB Connection Established!! DB HOST : ${dbConnectionInstance.connection.host}`
            );
            resolve()
        })
        .catch((err) => {
            console.log("ERR : Failed to create DB connection:" , err);
            reject(err)
            process.exit(1)
        })
    })

}

export default connectDB