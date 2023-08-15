import { v4 as uuidv4 } from "uuid";
import { genSalt, hash } from "bcrypt";
import { detect } from "detect-browser";

const SALT_ROUNDS = 10;



// Generates a hash from the password given is asynchronous
export async function genHash(password) {
    let newHash = await genSalt(SALT_ROUNDS)
        .then(salt => {return hash(password, salt)})
        
    return newHash;
}

// Generates unique token for each user
export function genBrowserToken() {
    const browserToken = uuidv4();
    return browserToken;
}
