const { connectDB } = require('./config/database');

async function createQuestion(question) {
  const db = await connectDB();
  const collection = db.collection('questions');
  const existingQuestion = await collection.findOne({ id: question.id });
  if (existingQuestion) {
    console.log("Question already exists.");
    return "Question already exists.";
  }
  const result = await collection.insertOne(question);
  console.log("Question created:", { ...question, id: result.insertedId });
  return { ...question, id: result.insertedId }; 
}

async function getQuestion(id) {
  const db = await connectDB();
  const collection = db.collection('questions');
  const question = await collection.findOne({ id });
  if (!question) {
    console.log("Question not found.");
    return "Question not found.";
  }
  console.log("Question fetched:", question);
  return question;
}

async function updateQuestion(id, updateData) {
  const db = await connectDB();
  const collection = db.collection('questions');
  const existingQuestion = await collection.findOne({ id });
  if (!existingQuestion) {
    console.log("Question not found.");
    return "Question not found.";
  }
  const result = await collection.updateOne({ id }, { $set: updateData });
  const message = result.modifiedCount > 0 ? "Question updated successfully." : "No changes made.";
  console.log(message);
  return message;
}

async function deleteQuestion(id) {
  const db = await connectDB();
  const collection = db.collection('questions');
  const existingQuestion = await collection.findOne({ id });
  if (!existingQuestion) {
    console.log("Question not found.");
    return "Question not found.";
  }
  const result = await collection.deleteOne({ id });
  const message = result.deletedCount > 0 ? "Question deleted successfully." : "Failed to delete question.";
  console.log(message);
  return message;
}

module.exports = {
  createQuestion,
  getQuestion,
  updateQuestion,
  deleteQuestion
};
