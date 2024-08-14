const { connectDB } = require('./config/database');

async function createQuestion(question) {
  const db = await connectDB();
  const collection = db.collection('questions');
  const result = await collection.insertOne(question);
  return { ...question, id: result.insertedId };
}

async function getQuestion(id) {
  const db = await connectDB();
  const collection = db.collection('questions');
  return await collection.findOne({ id });
}

async function updateQuestion(id, updateData) {
  const db = await connectDB();
  const collection = db.collection('questions');
  const result = await collection.updateOne({ id }, { $set: updateData });
  return result.modifiedCount > 0;
}

async function deleteQuestion(id) {
  const db = await connectDB();
  const collection = db.collection('questions');
  const result = await collection.deleteOne({ id });
  return result.deletedCount > 0;
}

module.exports = {
  createQuestion,
  getQuestion,
  updateQuestion,
  deleteQuestion
};
