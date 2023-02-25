import express from "express"
import connectDB from "./config/db.js"

connectDB()

const app = express()

const port = 5000
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})