import dotenv from 'dotenv'
import express from 'express'

dotenv.config({
    path: './.env'
})


const app = express(); 
const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server Successfully running at port ${port}`);
})

app.get('/' , (req,res) => {
    res.send('Hello World')
})