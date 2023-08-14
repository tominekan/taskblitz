import { startMongo } from "$db/mongo.js";

startMongo().then(() => {
	console.log('Mongo Started');
}).catch(e => {console.error(e)});