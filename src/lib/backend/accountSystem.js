import {genHash, genBrowserToken } from "./dataGen.js";

// Creates new account
// MAYBE USE A SINGLE DICTIONARY INSTEAD OF AL THESE ARGUMENTS
export async function createNewAccount(db, username, name, email, password) {
    // Generate password hash to store on server
    const hash = await genHash(password);

    const uToken = genBrowserToken();
    // Generate complete profile + some random starting data

    const firstTask = {
        title: "This is your first task",
        description: "You can edit all aspects of the task, ranging from the due date to the tags",
        startTime: "11:30 AM",
        endTime: "12:30 PM",
        date: "Today"
    }

    const userInfo = {
        fullName: name,
        email: email,
        hash: hash,
        userToken: [uToken, ],
        username: username,
        allTasks: [firstTask, ]
    }

    const result = await db.insertOne(userInfo);
    console.log(`New User Created: username: ${result.insertedId}`);

    let results = {
        fullName: name,
        deviceToken: uToken,
        username: username,
        allTasks: [firstTask, ]
    }
    return results;
}

/*
// Checks if the username is unique 
export async function isValidUsername(db, username) {
    let otherUserNameExists = await db.find({username: username});
    if (otherUserNameExists) {
        return false;
    }
    return true;
}

// Get account info
export async function getAccountInfo(db, userID) {
    let accountInfo = await db.findOne({_id: userID}).lean();
    return accountInfo;
}

// Checks if the speicifed token exists on the server
// NEED TO CHECK THIS CODE AGAIN
async function tokenExistsOnServer(db, token, username) {
    let result = await db.users.findOne({
        "username": username,
        userToken: token,
    })
    if (result) {
        return true;
    }
    return false;
}


export async function autoLogin(db) {
    let username = localStorage.getDeviceId("username")
    let uToken = JSON.parse(localStorage.getItem("userToken"));
    let current_device_id = await getDeviceId()
    // The current device ID matches the stored device ID
    if ((uToken.hasOwnProperty(current_device_id))) {
        if (await tokenExistsOnServer(db, uToken, username)) {
            let newToken = await genBrowserToken(); // Generate new browser token
            // Update new browser token in localStorage
            localStorage.setItem("userToken", JSON.stringify(newToken));

            // Update browser token 
            db.users.updateOne({
                username: username,
                userToken: uToken,
            },
            {$set: {userToken: newToken}}
            );
            return true;
        }
    }

    // If the verification doesn't work, clear localStorage and reload
    localStorage.clear();
    location.reload();
}


async function infoLogin(db, username, password) {
    const currentHash = await genHash(password);
}

async function getServerHash(db, username) {
    
} 

*/