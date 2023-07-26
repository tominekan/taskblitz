# TaskBlitz

A todo list application with a visualization for the entire day. This is just more of a test of how secure I can make an account system as well as learning best practices in designing secure systems.

Some quick notes for future reference

- The Device ID is in the form of `<OS Name>.<Browser Name>.<Browser Version>` 
- Hashing algoritm is `bcrypt`


## How does the account system work:

### Preequisites for a new account:
- Must be a unique username:
  - While chances are low that a user picks the same username and password (made even lower because `bcrypt` uses salting), it's not impossible, and enforcing a unique username takes care of that concern
- Must have a secure password:
  - Minimum of 8 characters 
  - Must have a number

### Create a new account:
- When a new account is created, a new profile is created, the profile contains:
  - The username, email, full name, and hashed version of the password
  - An array of generated tokens with the form `{Device ID: UUID}`
  - A generic task
- The new device tokens and username is then saved to localStorage 

### Automatic login
- The app checks if the localStorage tokens have been tampered with by:
  - Generating a new Device ID and checking if it matches with the locally stored token
  - If that test passes, then check if the Device ID and token exists for the user profile stored on the server 
- If all of that passes, a new `{Device ID: token}` pair is generated and sent to the server (as well as updated in localStorage)
- The user is then considered as "logged in"
- If the localStorage is tampered with, localStorage is wiped and the page is reloaded

### Login with username/password
- The username/password is prompted
- The password is then hashed and compared to the existing hash on the database, if the username and hash are the same (using the `bcrypt` compare algoritm), then the user is considered "logged in"
- A new device token is generated and both username and token is then saved to localStorage. 
- The new device token is also stored on the db.