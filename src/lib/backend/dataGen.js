import { uuidv4 } from "uuid";
import { genSalt, hash } from "bcrypt";
import { detect } from "detect-browser";

const SALT_ROUNDS = 10;



// Generates a hash from the password given
export async function genHash(password) {
    let newHash = await genSalt(SALT_ROUNDS)
        .then(salt => {return hash(password, salt)})
        
    return newHash;
}

// Generates unique token for each user
export async function genBrowserToken() {
    const DEVICE_ID = await getDeviceId();
    const browserToken = uuidv4();

    return {
        device: DEVICE_ID,
        token: browserToken,
    };  
}

export async function getDeviceId() {
    const BROWSER_INFO = detect();
    const DEVICE_ID = `${BROWSER_INFO.os}.${BROWSER_INFO.name}.${BROWSER_INFO.version}`;

    return DEVICE_ID;
}