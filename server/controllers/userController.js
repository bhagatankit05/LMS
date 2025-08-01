import Course from "../models/Course.js";
import { CourseProgress } from "../models/CourseProgress.js";
import { Purchase } from "../models/Purchase.js";
import User from "../models/User.js";
import Stripe from 'stripe'

//Get user Data.
export const getUserData = async (req, res) => {
    try {
        const userId = req.auth.userId
        const user = await User.findById(userId);

        if (!user) {
            return res.json({ success: false, message: 'User not found' })
        }

        res.json({ success: true, user });

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

//Users Enrolled Courses With Lecture Links.
export const userEnrolledCourses = async (req, res) => {
    try {
        const userId = req.auth.userId
        const userData = await User.findById(userId).populate('enrolledCourses');

        res.json({ success: true, enrolledCourses: userData.enrolledCourses })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}


//Function to purchase course.
export const purchaseCourse = async (req, res) => {
    try {
        const { courseID } = req.body
        const { origin } = req.headers
        const userId = req.auth.userId
        const userData = await User.findById(userId)
        const courseData = await Course.findById(courseID)

        if (!userData || !courseData) {
            return res.json({ success: false, message: 'Data not Found' })
        }

        const purchaseData = {
            courseID: courseData._id,
            userId,
            amount: (courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2),
        }

        const newPurchase = await Purchase.create(purchaseData)

        //Stripe Gateway Initialize
        const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY)
        const currency = process.env.CURRENCY.toLowerCase()

        //Creaating line items to for Stripe
        const line_items = [{
            price_data: {
                currency,
                product_data: {
                    name: courseData.courseTitle
                },
                unit_amount: Math.floor(newPurchase.amount) * 100
            },
            quantity: 1
        }]

        const session = await stripeInstance.checkout.sessions.create({
            success_url: `${origin}/loading/my-enrollments`,
            cancel_url: `${origin}/`,
            line_items: line_items,
            mode: 'payment',
            metadata: {
                purchaseId: newPurchase._id.toString()
            }
        })

        res.json({ success: true, session_url: session.url })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }

}

//Update user course progress
export const updateUserCourseProgress = async (req, res) => {
    try {
        const userId = req.auth.userId
        const { courseID, lectureId } = req.body

        const progressData = await CourseProgress.findOne({ userId, courseID})

        if (progressData) {
            if (progressData.lectureCompleted.includes(lectureId)) {
                return res.json({ success: true, message: 'Lecture Already Completed' })
            }
            progressData.lectureCompleted.push(lectureId)
            await progressData.save()
        } else {
            await CourseProgress.create({
                userId,
                courseID,
                lectureCompleted: [lectureId]
            })
        }
        res.json({ success: true, message: 'Progress Updated' })


    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

//get user course progress
export const getUserCourseProgress = async (req, res) => {

    try {
        const userId = req.auth.userId
        const { courseID } = req.body

        const progressData = await CourseProgress.findOne({ userId, courseID})
        res.json({ success: true, progressData })
    } catch (error) {
        res.json({ success: true, message: error.message })
    }
}

//Add User Ratings to Course

export const addUserRating = async (req, res) => {
    const userId = req.auth.userId;
    const { courseID, rating } = req.body;

    if (!courseID || !userId || !rating || rating < 1 || rating > 5) {
        return res.json({ success: false, message: 'Invalid Details.' });
    }

    try {
        const course = await Course.findById(userId);

        if (!course) {
            return res.json({ success: false, message: 'Course not found.' })
        }
        const user = await User.findById(userId);
        if (!user || !user.enrolledCourses.includes(courseID)) {
            return res.json({ success: false, message: 'User has not purchased this course.' });

        }

        const existingRatingIndex = course.courseRatings.findIndex(r => r.userId === userId)

        if (existingRatingIndex > -1) {
            course.courseRatings[existingRatingIndex].rating = rating
        }else{
            course.courseRatings.push({userId , rating});
        }
        await course.save();

        return res.json({success:true , message: 'Rating added'})


    } catch (error) {
            return res.json({success:false , message:error.message})
    }
}
