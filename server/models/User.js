import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        _id: { type: String, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true },
        imageUrl: { type: String, required: true },
        enrolledCourses : [
            {
                type : mongoose.Schema.Types.ObjectId,  //Har course ka ID hoga (reference type)
                ref: 'Course'         //Yeh ID 'Course' collection se link karega
            }
        ],

    },{timestamps : true}
);

const User = mongoose.model('User',userSchema);

export default User