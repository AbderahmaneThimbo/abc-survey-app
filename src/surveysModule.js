const { connectDB } = require('./config/database');

async function createSurvey(survey) {
  const db = await connectDB();
  const collection = db.collection('surveys');
  const result = await collection.insertOne(survey);
  return { ...survey, id: result.insertedId }; 
}

async function getSurvey(id) {
  const db = await connectDB();
  const collection = db.collection('surveys');
  return await collection.findOne({ id });
}

async function updateSurvey(id, updateData) {
  const db = await connectDB();
  const collection = db.collection('surveys');
  const result = await collection.updateOne({ id }, { $set: updateData });
  return result.modifiedCount > 0;
}

async function deleteSurvey(id) {
  const db = await connectDB();
  const collection = db.collection('surveys');
  const result = await collection.deleteOne({ id });
  return result.deletedCount > 0;
}

module.exports = {
  createSurvey,
  getSurvey,
  updateSurvey,
  deleteSurvey
};
