import mongoose from "mongoose";

const campaignSchema = mongoose.Schema({
    name:{
        type: String, 
        required: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Helper'
    },
    start:{
        type: Date,
        required: false
    },
    end:{
        type: Date,
        required: true
    },
    story:{
        type: String,
        required: true
    },
    donations:[{
        donationId:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref:'Donation'
        }
    }]
})

const Campaign = mongoose.model("Campaign", campaignSchema)
export default Campaign