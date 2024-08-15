const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'survey_db';
let db = null;

async function connectDB() {
  if (db) return db; 
  try {
    const client = await MongoClient.connect(url);
    console.log('Connected successfully to MongoDB server');
    db = client.db(dbName);
    return db;
  } catch (error) {
    console.error('Connection failed', error);
    throw error;
  }
}

module.exports = { connectDB };
