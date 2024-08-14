


const { getDb } = require('./config/database');

function createEnquete(enqueteData) {
  const db = getDb();
  db.collection('enquetes').insertOne(enqueteData)
    .then(result => {
      console.log('Enquete créée avec l\'id:', result.insertedId);
    })
    .catch(err => {
      console.error('Erreur lors de la création de l\'enquete:', err);
    });
}

function readEnquete(enqueteId) {
  const db = getDb();
  db.collection('enquetes').findOne({ id: enqueteId })
    .then(enquete => {
      if (enquete) {
        console.log('Enquete trouvée:', enquete);
      } else {
        console.log('Aucune enquete trouvée avec l\'id:', enqueteId);
      }
    })
    .catch(err => {
      console.error('Erreur lors de la lecture de l\'enquete:', err);
    });
}

function updateEnquete(enqueteId, updateData) {
  const db = getDb();
  db.collection('enquetes').updateOne(
    { id: enqueteId },
    { $set: updateData }
  )
    .then(result => {
      console.log('Enquete mise à jour:', result.modifiedCount > 0);
    })
    .catch(err => {
      console.error('Erreur lors de la mise à jour de l\'enquete:', err);
    });
}

function deleteEnquete(enqueteId) {
  const db = getDb();
  db.collection('enquetes').deleteOne({ id: enqueteId })
    .then(result => {
      console.log('Enquete supprimée:', result.deletedCount > 0);
    })
    .catch(err => {
      console.error('Erreur lors de la suppression de l\'enquete:', err);
    });
}

module.exports = {
  createEnquete,
  readEnquete,
  updateEnquete,
  deleteEnquete
};

