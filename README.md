#Survey App

Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches.
Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

    Node.js (version 12 ou supérieure)
    MongoDB (version 4.0 ou supérieure)

Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

    Clonez le repository :

    bash

git clone <URL_DU_REPOSITORY>

Accédez au dossier du projet :

bash

cd abc-survey-app

Installez les dépendances :

bash

    npm install

    Créez la base de données et les collections:
        Connectez-vous à MongoDB et exécutez les commandes pour créer la base de données survey_db ainsi que les collections questions, answers, et surveys.

    Configuration de la connexion à la base de données :
        Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
        La connexion à la base de données se fait via un fichier config/database.js, qui contient la logique nécessaire pour se connecter à MongoDB.

Utilisation des opérations CRUD
Module answers

    createAnswer(answer)
    Crée une réponse dans la base de données.
        Paramètre : {Object} answer - Réponse à insérer.
        Retourne : {Object} - Réponse insérée avec ID MongoDB.

    getAnswer(id)
    Récupère une réponse par son ID.
        Paramètre : {int} id - ID de la réponse.
        Retourne : {Object|null} - Réponse trouvée ou null.

    updateAnswer(id, updateData)
    Met à jour une réponse par son ID.
        Paramètre : {int} id - ID de la réponse.
        Paramètre : {Object} updateData - Données à mettre à jour.
        Retourne : {boolean} - true si mis à jour, false sinon.

    deleteAnswer(id)
    Supprime une réponse par son ID.
        Paramètre : {int} id - ID de la réponse.
        Retourne : {boolean} - true si supprimé, false sinon.

Module questions

    createQuestion(question)
    Crée une question dans la base de données.
        Paramètre : {Object} question - Question à insérer.
        Retourne : {Object} - Question insérée avec ID MongoDB.

    getQuestion(id)
    Récupère une question par son ID.
        Paramètre : {int} id - ID de la question.
        Retourne : {Object|null} - Question trouvée ou null.

    updateQuestion(id, updateData)
    Met à jour une question par son ID.
        Paramètre : {int} id - ID de la question.
        Paramètre : {Object} updateData - Données à mettre à jour.
        Retourne : {boolean} - true si mis à jour, false sinon.

    deleteQuestion(id)
    Supprime une question par son ID.
        Paramètre : {int} id - ID de la question.
        Retourne : {boolean} - true si supprimé, false sinon.

Module surveys

    createSurvey(survey)
    Crée une enquête dans la base de données.
        Paramètre : {Object} survey - Enquête à insérer.
        Retourne : {Object} - Enquête insérée avec ID MongoDB.

    getSurvey(id)
    Récupère une enquête par son ID.
        Paramètre : {int} id - ID de l'enquête.
        Retourne : {Object|null} - Enquête trouvée ou null.

    updateSurvey(id, updateData)
    Met à jour une enquête par son ID.
        Paramètre : {int} id - ID de l'enquête.
        Paramètre : {Object} updateData - Données à mettre à jour.
        Retourne : {boolean} - true si mis à jour, false sinon.

    deleteSurvey(id)
    Supprime une enquête par son ID.
        Paramètre : {int} id - ID de l'enquête.
        Retourne : {boolean} - true si supprimé, false sinon.

Utilisation

Pour démarrer l'application, exécutez la commande suivante :

bash

npm start

Auteurs

Abderahmane Thimbo

