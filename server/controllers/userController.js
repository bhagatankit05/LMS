import User from "../models/User.js";

//Get user Data.
export const getUserData = async()=>{
    try {
        const userId = req.auth.userId
        const user = await User.findById(userId);

        if (!user) {
            return res.json({success:false , message:'User not found'})
        }

        req.json({success:true,user});

    } catch (error) {
            res.json({success:false,message: error.message})
    }
}
