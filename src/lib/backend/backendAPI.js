import { MongoClient } from "mongodb";
import { getDeviceId, genBrowserToken, genHash} from "./dataGen.js"


const uri = process.env.MONGO_KEY;

const client = new MongoClient(uri);
const taskblitzDB = client.db("taskblitzDB");
const users = taskblitzDB.collection("users");

