import { users } from "$db/mongo.js";


/** @type {import('./$types').PageServerLoad} */
export const load = async function() {
    const dbUsers = users;
    let bron = {
        name: "bron",
        password: "lebronjames1",
    }

    let lebron = (password) => {
        return {
            persons: "Lebron James",
        };
    }

}