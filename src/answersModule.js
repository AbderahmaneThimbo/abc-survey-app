const { getDb } = require('./config/database');

function createAnswer(answerData) {
  const db = getDb();
  db.collection('answers').insertOne(answerData)
    .then(result => {
      console.log('Réponse créée avec l\'id:', result.insertedId);
    })
    .catch(err => {
      console.error('Erreur lors de la création de la réponse:', err);
    });
}

function readAnswer(answerId) {
  const db = getDb();
  db.collection('answers').findOne({ id: answerId })
    .then(answer => {
      if (answer) {
        console.log('Réponse trouvée:', answer);
      } else {
        console.log('Aucune réponse trouvée avec l\'id:', answerId);
      }
    })
    .catch(err => {
      console.error('Erreur lors de la lecture de la réponse:', err);
    });
}


function updateAnswer(answerId, updateData) {
  const db = getDb();
  db.collection('answers').updateOne(
    { id: answerId },
    { $set: updateData }
  )
    .then(result => {
      console.log('Réponse mise à jour:', result.modifiedCount > 0);
    })
    .catch(err => {
      console.error('Erreur lors de la mise à jour de la réponse:', err);
    });
}


function deleteAnswer(answerId) {
  const db = getDb();
  db.collection('answers').deleteOne({ id: answerId })
    .then(result => {
      console.log('Réponse supprimée:', result.deletedCount > 0);
    })
    .catch(err => {
      console.error('Erreur lors de la suppression de la réponse:', err);
    });
}


module.exports = {
  createAnswer,
  readAnswer,
  updateAnswer,
  deleteAnswer
};



