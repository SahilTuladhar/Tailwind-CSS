import dotenv from 'dotenv'
dotenv.config({
    path: './.env'
})

import connectDB from './db/index.js';
import app from './app.js';


const port = process.env.PORT || 4000


// Creating conenction with MongoDB database

connectDB()
.then(() => {

    app.on('error' , (err) => {
        console.log("ERR:" , err);
        throw err
    })

    app.listen( port , () => {
        console.log(`Sever sucessfully running at port ${port}`);
    })
}).catch((err) => {
    console.log("MongoDB connection Failed", err);
})

