const { connectDB } = require('./config/database');

async function createAnswer(answer) {
  const db = await connectDB();
  const collection = db.collection('answers');
  const result = await collection.insertOne(answer);
  return { ...answer, id: result.insertedId };
}

async function getAnswer(id) {
  const db = await connectDB();
  const collection = db.collection('answers');
  return await collection.findOne({ id });
}

async function updateAnswer(id, updateData) {
  const db = await connectDB();
  const collection = db.collection('answers');
  const result = await collection.updateOne({ id }, { $set: updateData });
  return result.modifiedCount > 0;
}

async function deleteAnswer(id) {
  const db = await connectDB();
  const collection = db.collection('answers');
  const result = await collection.deleteOne({ id });
  return result.deletedCount > 0;
}

module.exports = {
  createAnswer,
  getAnswer,
  updateAnswer,
  deleteAnswer
};
