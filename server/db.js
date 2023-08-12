const {MongoClient} = require('mongodb');

// const url ='mongodb://localhost:27017';


// const client = new MongoClient(url);

// async function getData(){
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('visualization');
//     let response = collection.find({}).toArray();
//     console.log(response);
//     return response;
// }


// getData();


// import { MongoClient } from "mongodb";

const connectionString = 'mongodb://localhost:27017';
const database = 'dataVisualization';

const client = new MongoClient(connectionString);

let db;

async function connectToDatabase() {
  try {
    await client.connect();
    db = client.db(database);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

connectToDatabase();

module.exports = db;