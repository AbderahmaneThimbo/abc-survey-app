const { getDb } = require('./config/database');

function createQuestion(questionData) {
  const db = getDb();
  db.collection('questions').insertOne(questionData)
    .then(result => {
      console.log('Question créée avec l\'id:', result.insertedId);
    })
    .catch(err => {
      console.error('Erreur lors de la création de la question:', err);
    });
}

function readQuestion(questionId) {
  const db = getDb();
  db.collection('questions').findOne({ id: questionId })
    .then(question => {
      if (question) {
        console.log('Question trouvée:', question);
      } else {
        console.log('Aucune question trouvée avec l\'id:', questionId);
      }
    })
    .catch(err => {
      console.error('Erreur lors de la lecture de la question:', err);
    });
}

function updateQuestion(questionId, updateData) {
  const db = getDb();
  db.collection('questions').updateOne(
    { id: questionId },
    { $set: updateData }
  )
    .then(result => {
      console.log('Question mise à jour:', result.modifiedCount > 0);
    })
    .catch(err => {
      console.error('Erreur lors de la mise à jour de la question:', err);
    });
}


function deleteQuestion(questionId) {
  const db = getDb();
  db.collection('questions').deleteOne({ id: questionId }, function(err, result) {
    if (err) {
      console.error('Erreur lors de la suppression de la question:', err);
    } else {
      console.log('Question supprimée:', result.deletedCount > 0);
    }
  });
}

module.exports = {
  createQuestion,
  readQuestion,
  updateQuestion,
  deleteQuestion
};

