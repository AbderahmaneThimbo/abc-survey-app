const { connectDB } = require('./config/database');

async function createSurvey(survey) {
  const db = await connectDB();
  const collection = db.collection('surveys');
  const existingSurvey = await collection.findOne({ id: survey.id });
  if (existingSurvey) {
    return "Survey already exists.";
  }
  const result = await collection.insertOne(survey);
  return { ...survey, id: result.insertedId }; 
}

async function getSurvey(id) {
  const db = await connectDB();
  const collection = db.collection('surveys');
  const survey = await collection.findOne({ id });
  if (!survey) {
    return "Survey not found.";
  }
  return survey;
}

async function updateSurvey(id, updateData) {
  const db = await connectDB();
  const collection = db.collection('surveys');
  const existingSurvey = await collection.findOne({ id });
  if (!existingSurvey) {
    return "Survey not found.";
  }
  const result = await collection.updateOne({ id }, { $set: updateData });
  return result.modifiedCount > 0 ? "Survey updated successfully." : "No changes made.";
}

async function deleteSurvey(id) {
  const db = await connectDB();
  const collection = db.collection('surveys');
  const existingSurvey = await collection.findOne({ id });
  if (!existingSurvey) {
    return "Survey not found";
  }
  const result = await collection.deleteOne({ id });
  return result.deletedCount > 0 ? "Survey deleted successfully." : "Failed to delete survey.";
}

module.exports = {
  createSurvey,
  getSurvey,
  updateSurvey,
  deleteSurvey
};
