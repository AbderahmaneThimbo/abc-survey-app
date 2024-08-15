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

### Module answers

**createAnswer(answer)**
Crée une réponse dans la base de données.
Paramètre : (id {int},
             title {string},
             questionId {int})
Retourne : Reponse insérée avec succès..

**getAnswer(id)**
Récupère une réponse par son ID.
Paramètre :  (id {int})
Retourne : Reponse correspondant à l'ID fourni.

**updateAnswer(id, updateData)**
Met à jour une réponse par son ID.
Paramètre : (id {int},
            title {string})
Retourne : Reponse mise à jour avec succès ou reponse non retouvé.

**deleteAnswer(id)**
Supprime une réponse par son ID.
Paramètre : (id {int} )
Retourne : Reponse supprimée avec succès ou reponse non retrouvé.

### Module questions

**createQuestion(question)**
Crée une question dans la base de données.
Paramètre : ({id {int},
              title {string},
              type {string}, 
              surveyId {int}
              answer [ id {int}, titele {string} } ]).
Retourne : Question insérée avec succès.

**getQuestion(id)**
Récupère une question par son ID.
Paramètre : 
         ({ id {int} })
Retourne : Question correspondant à l'ID fourni.

**updateQuestion(id, updateData)**
Met à jour une question par son ID.
Paramètre : 
        ({ id {int},
          title {string} })
Retourne : Question mise à jour avec succès ou Question non retouvé.

**deleteQuestion(id)**
Supprime une question par son ID.
Paramètre : ({ id {int} })
Retourne : Question supprimée avec succès ou Question non retrouvé.

### Module surveys

**createSurvey(survey)**
Crée une enquête dans la base de données.
Paramètre : 
   ( { id {int},
   name {string}, 
   description {string}, 
   creatdAt {Date}, 
   createdBy [nameEmploye  {string} role {string} ] } )
Retourne : Enquête insérée avec succès.

**getSurvey(id)**
Récupère une enquête par son ID.
Paramètre : {id {int} }.
Retourne : Enquête correspondant à l'ID fourni.

**updateSurvey(id, updateData)**
Met à jour une enquête par son ID.
Paramètre : {id {int} }.
Paramètre : description {string}.
Retourne : Enquête mise à jour avec succès Enquête non retrouvé.

**deleteSurvey(id)**
Supprime une enquête par son ID.
Paramètre : {id {int} }.
Retourne : Enquête supprimée avec succès ou Enquête non retrouvé.

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
  npm start
```
## Auteur

[Abderahmane Thimbo](https://github.com/AbderahmaneThimbo)

