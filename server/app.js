const express = require('express');
const app = express();
const cors = require('cors');
const {MongoClient} = require('mongodb');
const PORT = 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

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


app.get('/api/data',async(req,res)=>{
try{
    const collection = db.collection('visualization');

    const data = await collection.find({}).toArray();
    res.status(200).json({data})
}catch(e){
    console.log(e);
    res.status(500).json({error:e.message})
}
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})