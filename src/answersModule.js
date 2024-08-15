const { connectDB } = require('./config/database');

async function createAnswer(answer) {
  const db = await connectDB();
  const collection = db.collection('answers');
  const existingAnswer = await collection.findOne({ answerId: answer.answerId });
  if (existingAnswer) {
    return "Answer already exists.";
  }
  const result = await collection.insertOne(answer);
  return { ...answer, id: result.insertedId };
}

async function getAnswer(answerId) {
  const db = await connectDB();
  const collection = db.collection('answers');
  const answer = await collection.findOne({ answerId });

  if (!answer) {
    return "Answer not found.";
  }
  return answer;
}

async function updateAnswer(answerId, updateData) {
  const db = await connectDB();
  const collection = db.collection('answers');
  const existingAnswer = await collection.findOne({ answerId });
  if (!existingAnswer) {
    return "Answer not found.";
  }
  const result = await collection.updateOne({ answerId }, { $set: updateData });
  return result.modifiedCount > 0 ? "Answer updated successfully." : "No changes made.";
}

async function deleteAnswer(answerId) {
  const db = await connectDB();
  const collection = db.collection('answers');
  const existingAnswer = await collection.findOne({ answerId });
  if (!existingAnswer) {
    return "Answer not found.";
  }
  const result = await collection.deleteOne({ answerId });
  return result.deletedCount > 0 ? "Answer deleted successfully." : "Failed to delete answer.";
}

module.exports = {
  createAnswer,
  getAnswer,
  updateAnswer,
  deleteAnswer
};
