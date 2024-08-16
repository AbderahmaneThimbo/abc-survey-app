const surveysModule = require('./surveysModule');
const questionsModule = require('./questionsModule');
const answersModule = require('./answersModule');

async function runTests() {
  try {
   
    await surveysModule.createSurvey({
      id: 3,
      name: 'Enquête de Satisfaction 003',
      description: 'Troisième enquête de satisfaction',
      createdAt: new Date(),
      createdBy: { employeeName: 'Abderahmane', employeeRole: 'Analyste' }
    });

    await surveysModule.getSurvey(3);

    await surveysModule.updateSurvey(3, { description: 'Mise à jour de l\'enquête' });

    await surveysModule.deleteSurvey(1);


    await questionsModule.createQuestion({
      id: 1,
      title: 'Quel est votre produit préféré ?',
      type: 'singleChoice',
      surveyId: 3,
      options: null,
      allowMultipleSelections: false,
      answers: [
        { id: 1, title: 'Produit A' },
        { id: 2, title: 'Produit B' }
      ]
    });

    await questionsModule.getQuestion(1);

    await questionsModule.updateQuestion(1, { title: 'Quel est votre produit préféré maintenant ?' });

    await questionsModule.deleteQuestion(1);

   
    await answersModule.createAnswer({
      id: 2,
      title: 'Très satisfait',
      questionId: 1
    });

    await answersModule.getAnswer(2);

    await answersModule.updateAnswer(2, { title: 'Satisfait' });

    await answersModule.deleteAnswer(2);

  } catch (err) {
    console.error('Error:', err);
  }
}

runTests();
