const { connectDB } = require('./config/database');

async function createQuestion(question) {
  const db = await connectDB();
  const collection = db.collection('questions');
  const existingQuestion = await collection.findOne({ questionId: question.questionId });
  if (existingQuestion) {
    return "Question already exists.";
  }
  const result = await collection.insertOne(question);
  return { ...question, id: result.insertedId }; 
}

async function getQuestion(questionId) {
  const db = await connectDB();
  const collection = db.collection('questions');
  const question = await collection.findOne({ questionId });
  if (!question) {
    return "Question not found.";
  }
  return question;
}

async function updateQuestion(questionId, updateData) {
  const db = await connectDB();
  const collection = db.collection('questions');
  const existingQuestion = await collection.findOne({ questionId });
  if (!existingQuestion) {
    return "Question not found.";
  }
  const result = await collection.updateOne({ questionId }, { $set: updateData });
  return result.modifiedCount > 0 ? "Question updated successfully." : "No changes made.";
}

async function deleteQuestion(questionId) {
  const db = await connectDB();
  const collection = db.collection('questions');
  const existingQuestion = await collection.findOne({ questionId });
  if (!existingQuestion) {
    return "Question not found.";
  }
  const result = await collection.deleteOne({ questionId });
  return result.deletedCount > 0 ? "Question deleted successfully." : "Failed to delete question.";
}

module.exports = {
  createQuestion,
  getQuestion,
  updateQuestion,
  deleteQuestion
};
