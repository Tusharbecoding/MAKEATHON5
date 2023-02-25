import express from "express"
import connectDB from "./config/db.js"

connectDB()

const app = express()
app.use(express.json())

// app.use('/api/helpers', helperRoutes)
// app.use('/api/refugees', refugeeRoutes)
// app.use('/api/campaigns', campaignRoutes)
// app.use('/api/donations', donationRoutes)

const port = 5000
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})