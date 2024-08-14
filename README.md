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
    db.createCollection("enquete")

5. **Configuration de la connexion à la base de données :**

    - Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
    - Votre application Node.js doit être connectée à MongoDB pour fonctionner. Le fichier config/database.js contient la logique de connexion.     
    Voici un exemple de configuration :
     
     const { MongoClient } = require('mongodb');
     const url = 'mongodb://localhost:27017';
     const dbName = 'surveyDB';

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

     Exporter la connexion à la base de données

    function getDb() {
       if (!db) {
            throw new Error('La connexion à la base de données n\'est pas encore établie');
       }
        return db;
    }

    module.exports = { getDb };

    
##  Utilisation des opérations CRUD 
      
    Module enquetesModule.js

    Ce module gère les opérations CRUD pour les enquêtes.


    createEnquete(enqueteData)

    Description: Crée une nouvelle enquête dans la collection enquete.

    Paramètres:
        enqueteData (Object): Les données de l'enquête à créer.

    Exemple:

     function createEnquete(enqueteData)  {
        
      };
    

    readEnquete(enqueteId)

    Description: Lit les détails d'une enquête spécifique à partir de la collection enquete.

    Paramètres:
        enqueteId (Number): L'ID de l'enquête à lire.

    Exemple:

        function readEnquete(enqueteId) {
          
       }; 

    updateEnquete(enqueteId, updateData)

    Description: Met à jour les détails d'une enquête dans la collection enquete.

    Paramètres:
        enqueteId (Number): L'ID de l'enquête à mettre à jour.
        updateData (Object): Les données à mettre à jour.

    Exemple:

       function updateEnquete(enqueteId, updateData) {
        
     };
     

    deleteEnquete(enqueteId)

    Description: Supprime une enquête de la collection enquete.

    Paramètres:
        enqueteId (Number): L'ID de l'enquête à supprimer.

    Exemple:

     function deleteEnquete(enqueteId) {
     
     };

    Module questionsModule.js

        Ce module gère les opérations CRUD pour les questions.

       createQuestion(questionData)

       Description: Crée une nouvelle question dans la collection questions.
       Paramètres:
          questionData (Object) : Les données de la question à créer.
       Exemple:

      function createQuestion(questionData) {
      
    };


   readQuestion(questionId)

    Description: Lit les détails d'une question spécifique à partir de la collection questions.
    Paramètres:
        questionId (Number) : L'ID de la question à lire.
    Exemple:

    function readQuestion(questionId) {
      
      
    };

   updateQuestion(questionId, updateData)

    Description: Met à jour les détails d'une question dans la collection questions.
    Paramètres:
        questionId (Number) : L'ID de la question à mettre à jour.
        updateData (Object) : Les données à mettre à jour.
    Exemple:

    function updateQuestion(questionId, updateData) {
      
    };

    deleteQuestion(questionId)

    Description: Supprime une question de la collection questions.
    Paramètres:
        questionId (Number) : L'ID de la question à supprimer.
    Exemple:

    function deleteQuestion(questionId){
  
    }; 


    Module answersModule.js

       Ce module gère les opérations CRUD pour les réponses.

       createAnswer(answerData)

        Description: Crée une nouvelle réponse dans la collection answers.
        Paramètres:
        answerData (Object) : Les données de la réponse à créer.
      Exemple:

        function createAnswer(answerData){
    
        };

     readAnswer(answerId)

      Description: Lit les détails d'une réponse spécifique à partir de la collection answers.
      Paramètres:
        answerId (Number) : L'ID de la réponse à lire.
      Exemple:

       function readAnswer(answerId) {
     
      };

    updateAnswer(answerId, updateData)

    Description: Met à jour les détails d'une réponse dans la collection answers.
    Paramètres:
        answerId (Number) : L'ID de la réponse à mettre à jour.
        updateData (Object) : Les données à mettre à jour.
    Exemple:

    function updateAnswer(answerId, updateData) {
      
    };

    deleteAnswer(answerId)

    Description: Supprime une réponse de la collection answers.
    Paramètres:
        answerId (Number) : L'ID de la réponse à supprimer.
    Exemple:

     function deleteAnswer(answerId)  {
  
      };


## Utilisation
Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```

## Authors

ABC Corporation