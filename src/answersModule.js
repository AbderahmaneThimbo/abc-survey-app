const { connectDB } = require('./config/database');

async function createAnswer(answer) {
  const db = await connectDB();
  const collection = db.collection('answers');
  const existingAnswer = await collection.findOne({ id: answer.id });
  if (existingAnswer) {
    console.log("Answer already exists.");
    return "Answer already exists.";
  }
  const result = await collection.insertOne(answer);
  console.log("Answer created:", { ...answer, id: result.insertedId });
  return { ...answer, id: result.insertedId };
}

async function getAnswer(id) {
  const db = await connectDB();
  const collection = db.collection('answers');
  const answer = await collection.findOne({ id });

  if (!answer) {
    console.log("Answer not found.");
    return "Answer not found.";
  }
  console.log("Answer fetched:", answer);
  return answer;
}

async function updateAnswer(id, updateData) {
  const db = await connectDB();
  const collection = db.collection('answers');
  const existingAnswer = await collection.findOne({ id });
  if (!existingAnswer) {
    console.log("Answer not found.");
    return "Answer not found.";
  }
  const result = await collection.updateOne({ id }, { $set: updateData });
  const message = result.modifiedCount > 0 ? "Answer updated successfully." : "No changes made.";
  console.log(message);
  return message;
}

async function deleteAnswer(id) {
  const db = await connectDB();
  const collection = db.collection('answers');
  const existingAnswer = await collection.findOne({ id });
  if (!existingAnswer) {
    console.log("Answer not found.");
    return "Answer not found.";
  }
  const result = await collection.deleteOne({ id });
  const message = result.deletedCount > 0 ? "Answer deleted successfully." : "Failed to delete answer.";
  console.log(message);
  return message;
}

module.exports = {
  createAnswer,
  getAnswer,
  updateAnswer,
  deleteAnswer
};
