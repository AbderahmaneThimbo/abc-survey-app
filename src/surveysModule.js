const { connectDB } = require('./config/database');

async function createSurvey(survey) {
  const db = await connectDB();
  const collection = db.collection('surveys');
  const existingSurvey = await collection.findOne({ id: survey.id });
  if (existingSurvey) {
    console.log("Survey already exists.");
    return "Survey already exists.";
  }
  const result = await collection.insertOne(survey);
  console.log("Survey created:", { ...survey, id: result.insertedId });
  return { ...survey, id: result.insertedId };
}

async function getSurvey(id) {
  const db = await connectDB();
  const collection = db.collection('surveys');
  const survey = await collection.findOne({ id });
  if (!survey) {
    console.log("Survey not found.");
    return "Survey not found.";
  }
  console.log("Survey fetched:", survey);
  return survey;
}

async function updateSurvey(id, updateData) {
  const db = await connectDB();
  const collection = db.collection('surveys');
  const existingSurvey = await collection.findOne({ id });
  if (!existingSurvey) {
    console.log("Survey not found.");
    return "Survey not found.";
  }
  const result = await collection.updateOne({ id }, { $set: updateData });
  const message = result.modifiedCount > 0 ? "Survey updated successfully." : "No changes made.";
  console.log(message);
  return message;
}

async function deleteSurvey(id) {
  const db = await connectDB();
  const collection = db.collection('surveys');
  const existingSurvey = await collection.findOne({ id });
  if (!existingSurvey) {
    console.log("Survey not found.");
    return "Survey not found.";
  }
  const result = await collection.deleteOne({ id });
  const message = result.deletedCount > 0 ? "Survey deleted successfully." : "Failed to delete survey.";
  console.log(message);
  return message;
}

module.exports = {
  createSurvey,
  getSurvey,
  updateSurvey,
  deleteSurvey
};
