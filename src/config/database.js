/**
 * Ce fichier configure et établit la connexion à la DB MongoDB
 */

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'survey_db';


const client = new MongoClient(url);

let db; 

client.connect()
  .then(() => {
    console.log('Connecté à MongoDB');
    db = client.db(dbName); 
  })
  .catch(err => {
    console.error('Erreur lors de la connexion à MongoDB:', err);
  });

function getDb() {
  if (!db) {
    throw new Error('La connexion à la base de données n\'est pas encore établie');
  }
  return db;
}

module.exports = { getDb };









