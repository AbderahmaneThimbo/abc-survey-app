const surveysModule = require('./surveysModule');

(async () => {
  try {
    console.log('Testing Surveys Module');

    
    const newSurvey = await surveysModule.createSurvey({
      id: 10,
      name: 'Enquête de Satisfaction 003',
      description: 'Troisième enquête de satisfaction',
      createdAt: new Date(),
      createdBy: {
        employeeName: 'Abderahamn',
        employeeRole: 'Analyste'
      }
    });
    console.log('Survey created:', newSurvey);

  
    const survey = await surveysModule.getSurvey(10);
    console.log('Survey fetched:', survey);

 
    const updated = await surveysModule.updateSurvey(5, { description: 'Mise à jour de l\'enquête' });
    console.log('Survey updated:', updated);

   
    const deleted = await surveysModule.deleteSurvey(10);
    console.log('Survey deleted:', deleted);

  } catch (err) {
    console.error('Error:', err);
  }
})();

const questionsModule = require('./questionsModule');

(async () => {
  try {
    console.log('Testing Questions Module');

   
    const newQuestion = await questionsModule.createQuestion({
      id: 10,
      title: 'Quel est votre produit préféré ?',
      type: 'singleChoice',
      surveyId: 1,
      options: null,
      allowMultipleSelections: false,
      answers: [
        { id: 1, title: 'Produit A' },
        { id: 2, title: 'Produit B' }
      ]
    });
    console.log('Question created:', newQuestion);


    const question = await questionsModule.getQuestion(1); 
    console.log('Question fetched:', question);

    
    const updatedQuestion = await questionsModule.updateQuestion(1, { title: 'Quel est votre produit préféré maintenant ?' }); 
    console.log('Question updated:', updatedQuestion);

    
    const deletedQuestion = await questionsModule.deleteQuestion(1); 
    console.log('Question deleted:', deletedQuestion);

  } catch (err) {
    console.error('Error:', err);
  }
})();


const answersModule = require('./answersModule');

(async () => {
  try {
    console.log('Testing Answers Module');

    
    const newAnswer = await answersModule.createAnswer({
      id: 10,
      title: 'Très satisfait',
      questionId: 1
    });
    console.log('Answer created:', newAnswer);

    
    const answer = await answersModule.getAnswer(1); 
    console.log('Answer fetched:', answer);

    
    const updatedAnswer = await answersModule.updateAnswer(1, { title: 'Satisfait' }); 
    console.log('Answer updated:', updatedAnswer);

    
    const deletedAnswer = await answersModule.deleteAnswer(1); 
    console.log('Answer deleted:', deletedAnswer);

  } catch (err) {
    console.error('Error:', err);
  }
})();



