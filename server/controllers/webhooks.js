import { Webhook } from "svix";//'svix' se Webhook class import kar rahe hain – ye Clerk ke webhook (events) ko verify aur handle karne ke liye use hoti hai
import User from "../models/User.js";

//Api Controller Function to Manage Clerck User with Database.
export const clerkWebhooks = async (req, res) => {
    try {
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        })

        const { data, type } = req.body;

        switch (type) {
            case 'user.created': {
                const userData = {
                    _id: data.id,
                    email: data.email_address[0].email_address,   // Ye user ka pehla email address access kar raha hai Clerk ke data se
                    name: data.first_name + " " + data.last_name,
                    imageUrl: data.image_url,
                }
                await User.create(userData)  // Database me new user create
                res.json({})                // Client ko empty JSON response bhejna
                break;
            }

            case 'user.updated': {
                const userData = {
                    email: data.email_address[0].email_address,
                    name: data.first_name + " " + data.last_name,
                    imageUrl: data.image_url,
                }
                await User.findByIdAndUpdate(data.id, userData)   // User update in DB
                res.json({})
                break;
            }

            case 'user.deleted': {
                await User.findByIdAndDelete(data.id)   // User ko DB se delete kar rahe hain
                res.json({});
                break
            }

            default:
                break;
        }


    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}
