/**
 * Ce est le point d'entrée principal de l'application.
 */

const { createEnquete, readEnquete, updateEnquete, deleteEnquete } = require('./enquetesModule');

setTimeout(() => {
  const enquete = {
    id: 12,
    name: "Develoopers",
    description: "MongoDb .",
    createdAt: new Date("2024-07-25"),
    createdBy: "You",
    questions: [1,]
  };

  createEnquete(enquete);
  readEnquete(1);
  updateEnquete(3, { id: 8 });
  deleteEnquete(2);
}, 100);

const { createAnswer, readAnswer, updateAnswer, deleteAnswer } = require('./answersModule');

setTimeout(() => {
  const answer = {
    id: 8,
    questionId: 3,
    title: "Peut-être"
  };

  createAnswer(answer);
  readAnswer(8);
  updateAnswer(8, { title: "Très content" });
  deleteAnswer(8);
}, 100);

const { createQuestion, readQuestion, updateQuestion, deleteQuestion } = require('./questionsModule');

setTimeout(() => {
  const question = {
    id: 9,
    answerId: 6

  }
  createQuestion(question);
  readQuestion(1);
  updateQuestion(5, {});
  deleteQuestion(6);
}, 100);



