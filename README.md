# Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

    ```bash
    git clone <URL_DU_REPOSITORY>
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd ABC-SURVEY-APP
    ```

3. **Installez les dépendances :**

    ```bash
    npm install
    ```

4. **Créez la base de données et les collections:**
    Étape 1 : Connexion à MongoDB
       Ouvrez votre shell MongoDB et exécutez les commandes suivantes pour créer la base de données et les collections nécessaires :

    pour creer la base de données: 

      use survey_db

    pour creer les collections:   

    db.createCollection("questions")
    db.createCollection("answers")
    db.createCollection("surveys")

5. **Configuration de la connexion à la base de données :**

    - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
    - Votre application Node.js doit être connectée à MongoDB pour fonctionner. Le fichier config/database.js contient la logique de connexion.     
    Voici un exemple de configuration :
     
     const { MongoClient } = require('mongodb');
     const url = 'mongodb://localhost:27017';
     const dbName = 'survey_db';
     let db = null;

    async function connectDB() {
      if (db) return db; 
         try {
         const client = await MongoClient.connect(url, { useUnifiedTopology: true });
           console.log('Connected successfully to MongoDB server');
            db = client.db(dbName);
          return db;
        } catch (error) {
        console.error('Connection failed', error);
         throw error;
       }
      }

     module.exports = { connectDB };


    
##  Utilisation des opérations CRUD 
      
Module answers

    createAnswer(answer)

Crée une réponse dans la base de données.
 
   paramètre  {Object} answer - Réponse à insérer.
   returns {Object} - Réponse insérée avec ID MongoDB.
 
async function createAnswer(answer) {
  const db = await connectDB();
  const collection = db.collection('answers');
  const result = await collection.insertOne(answer);
  return { ...answer, id: result.insertedId };
}

getAnswer(id)

  Récupère une réponse par son ID.
  
   paramètre  {number} id - ID de la réponse.
   returns {Object|null} - Réponse trouvée ou null.

async function getAnswer(id) {
  const db = await connectDB();
  const collection = db.collection('answers');
  return await collection.findOne({ id });
}

updateAnswer(id, updateData)



 Met à jour une réponse par son ID.
  
   paramètre  {number} id - ID de la réponse.
   paramètre  {Object} updateData - Données à mettre à jour.
   returns {boolean} - `true` si mis à jour, `false` sinon.

async function updateAnswer(id, updateData) {
  const db = await connectDB();
  const collection = db.collection('answers');
  const result = await collection.updateOne({ id }, { $set: updateData });
  return result.modifiedCount > 0;
}

deleteAnswer(id)

      Supprime une réponse par son ID.
     
       paramètre  {number} id - ID de la réponse.
       returns {boolean} - `true` si supprimé, `false` sinon.

    async function deleteAnswer(id) {
      const db = await connectDB();
      const collection = db.collection('answers');
      const result = await collection.deleteOne({ id });
      return result.deletedCount > 0;
    }

Module questions

    createQuestion(question)

Crée une question dans la base de données.
 
    paramètre {Object} question - Question à insérer.
    returns {Object} - Question insérée avec ID MongoDB.
 
async function createQuestion(question) {
  const db = await connectDB();
  const collection = db.collection('questions');
  const result = await collection.insertOne(question);
  return { ...question, id: result.insertedId };
}

getQuestion(id)

 Récupère une question par son ID.
 
   paramètre  {number} id - ID de la question.
   returns {Object|null} - Question trouvée ou null.
 
async function getQuestion(id) {
  const db = await connectDB();
  const collection = db.collection('questions');
  return await collection.findOne({ id });
}

updateQuestion(id, updateData)

   Met à jour une question par son ID.
 
   paramètre  {number} id - ID de la question.
   paramètre  {Object} updateData - Données à mettre à jour.
    returns {boolean} - `true` si mis à jour, `false` sinon.

async function updateQuestion(id, updateData) {
  const db = await connectDB();
  const collection = db.collection('questions');
  const result = await collection.updateOne({ id }, { $set: updateData });
  return result.modifiedCount > 0;
}

deleteQuestion(id)

   Supprime une question par son ID.
     
      paramètre {number} id - ID de la question.
      returns {boolean} - `true` si supprimé, `false` sinon.
     
    async function deleteQuestion(id) {
      const db = await connectDB();
      const collection = db.collection('questions');
      const result = await collection.deleteOne({ id });
      return result.deletedCount > 0;
    }

Module surveys

    createSurvey(survey)

    Crée une enquête dans la base de données.
 
    paramètre  {Object} survey - Enquête à insérer.
    returns {Object} - Enquête insérée avec ID MongoDB.
 
async function createSurvey(survey) {
  const db = await connectDB();
  const collection = db.collection('surveys');
  const result = await collection.insertOne(survey);
  return { ...survey, id: result.insertedId };
}


getSurvey(id)

   Récupère une enquête par son ID.
 
    paramètre  {number} id - ID de l'enquête.
    returns {Object|null} - Enquête trouvée ou null.
 
async function getSurvey(id) {
  const db = await connectDB();
  const collection = db.collection('surveys');
  return await collection.findOne({ id });
}

updateSurvey(id, updateData)


   Met à jour une enquête par son ID.
  
    paramètre  {number} id - ID de l'enquête.
    paramètre {Object} updateData - Données à mettre à jour.
    returns {boolean} - `true` si mis à jour, `false` sinon.
 
async function updateSurvey(id, updateData) {
  const db = await connectDB();
  const collection = db.collection('surveys');
  const result = await collection.updateOne({ id }, { $set: updateData });
  return result.modifiedCount > 0;
}


deleteSurvey(id)


   Supprime une enquête par son ID.
 
   paramètre  {number} id - ID de l'enquête.
   returns {boolean} - `true` si supprimé, `false` sinon.
 
async function deleteSurvey(id) {
  const db = await connectDB();
  const collection = db.collection('surveys');
  const result = await collection.deleteOne({ id });
  return result.deletedCount > 0;
}


## Utilisation
Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```

## Authors

ABC Corporation