import { MongoClient } from "mongodb";
import { MONGO_KEY } from "$env/static/private"

const client = new MongoClient(MONGO_KEY);

export function startMongo() {
    console.log("Starting MongoDB ...");
    return client.connect();
}


export default client.db("taskblitzDB").collection("users");
