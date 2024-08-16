# Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

    Node.js (version 12 ou supérieure)
    MongoDB (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

**Clonez le repository :**

```bash
git clone <https://github.com/AbderahmaneThimbo/abc-survey-app.git>
```

**Accédez au dossier du projet :**

```bash
  cd abc-survey-app
```

**Installez les dépendances :**

```bash
   npm install
```

## Configuration 

**Créez la base de données et les collections:**

Connectez-vous à MongoDB et exécutez les commandes pour créer la base de données survey_db ainsi que les collections questions, answers, et surveys.
    
**Configuration de la connexion à la base de données :**
Assurez-vous que MongoDB est en cours d'exécution sur votre machine locale.
La connexion à la base de données se fait via un fichier config/database.js, qui contient la logique nécessaire pour se connecter à MongoDB.

## Fonctionnalités


### Module surveys

**createSurvey(survey)**

Crée une enquête dans la base de données.

createSurvey( {id : int, name : string, description : string,  createdAt : Date, createdBy : [ {employeeName : string, employeeRole :string} ] } ) 

Retourne :

  "Enquête insérée avec succès." : Si l'enquête a été créée avec succès.

  "Enquête exist." : Si une enquête avec le même ID existe déjà.

**getSurvey(id)**

Récupère une enquête par son ID.

getSurvey(id : int).

Retourne :

  "L'objet enquête correspondant à l'ID fourni.

  "Enquête  non retrouvée." : Si aucune enquête n'est trouvée avec l'ID donné.

**updateSurvey(id, updateData)**

Met à jour une enquête par son ID.

updateSurvey(id : int, {name : string, description : string,  createdAt : Date, createdBy : [ {employeeName : string, employeeRole :string} ]})

Retourne :

  "Enquête mise à jour avec succès." : Si la mise à jour a été effectuée avec succès.

  "Enquête non retrouvée." : Si aucune enquête n'est trouvée avec l'ID donné.

**deleteSurvey(id)**

Supprime une enquête par son ID.

deleteSurvey(id : int)

Retourne :

  "Enquête supprimée avec succès." : Si la suppression a été effectuée avec succès.

  "Enquête  non retrouvée." : Si aucune enquête n'est trouvée avec l'ID donné.

### Module questions

**createQuestion(question)**

Crée une question dans la base de données.

createQuestion({id : int, title : string, type : string,  surveyId : int, answers :  [ {id : int, title : string} ]})

Retourne :

  "Question insérée avec succès." : Si la question a été créée avec succès.

  "Question  exist déja." : Si une question avec le même ID existe déjà.

**getQuestion(id)**

Récupère une question par son ID.

getQuestion(id : int)

Retourne :

  "L'objet question correspondant à l'ID fourni.

  "Question n'exist pas.": Si aucune question n'est trouvée avec l'ID donné.

**updateQuestion(id, updateData)**

Met à jour une question par son ID.

updateQuestion(id : int, {title : string, type : string,  surveyId : int, answers : [ {id : int, title :string} ]})

Retourne :

  "Question mise à jour avec succès." : Si la mise à jour a été effectuée avec succès.

  "Question  non retrouvée." : Si aucune question n'est trouvée avec l'ID donné.

**deleteQuestion(id)**

Supprime une question par son ID.

deleteQuestion(id : int)

Retourne :

  "Question supprimée avec succès." : Si la suppression a été effectuée avec succès.

  "Question  non retrouvée." : Si aucune question n'est trouvée avec l'ID donné.

### Module answers

**createAnswer(answer)**

Crée une réponse dans la base de données.

createAnswer({id : int, title : string, questionId : int})

Retourne :

  "Réponse insérée avec succès." : Si la réponse a été créée avec succès.

  "Answer exist déja." : Si une réponse avec le même ID existe déjà.

**getAnswer(id)**

Récupère une réponse par son ID.

getAnswer(id : int)

Retourne :

  L'objet réponse correspondant à l'ID fourni.

  "Réponse non trouvée." : Si aucune réponse n'est trouvée avec l'ID donné.

**updateAnswer(id, updateData)**

Met à jour une réponse par son ID.

updateAnswer(id : int, {title : string, questionId : int})

Retourne :

  "Réponse mise à jour avec succès." : Si la mise à jour a été effectuée avec succès.

  "Réponse non trouvée." : Si aucune réponse n'est trouvée avec l'ID donné.

**deleteAnswer(id)**

Supprime une réponse par son ID.

deleteAnswer(id : int)

Retourne :

  "Réponse supprimée avec succès." : Si la suppression a été effectuée avec succès.
  
  "Réponse non trouvée." : Si aucune réponse n'est trouvée avec l'ID donné.


## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
  npm start
```
## Auteur

[Abderahmane Thimbo](https://github.com/AbderahmaneThimbo)

