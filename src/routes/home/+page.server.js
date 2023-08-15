import users from "$db/mongo.js";
import { createNewAccount } from "$backend/accountSystem.js";



/** @type {import('./$types').Actions} */
export const actions = {
    signup: async ({ request }) => {
        const data = await request.formData();
        const username = data.get("username");
        const fullName = data.get("fullname");
        const password = data.get("password");
        const email = data.get("useremail")

        let userInfo = await createNewAccount(users, username, fullName, email, password);

        console.log(userInfo);
        return {
            user: userInfo,
            success: true,
        };
    }
};