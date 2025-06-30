import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Question from './components/Question';
import Result from './components/Result';
import { submitAnswers } from './features/questionnaire/questionnaireSlice';
import './App.css'; 

function App() {
  const questions = useSelector(state => state.questionnaire.questions);
  const submitted = useSelector(state => state.questionnaire.submitted);
  const dispatch = useDispatch();

  const allAnswered = questions.every(q => q.answer !== '');

  const onSubmit = () => {
    if (allAnswered) {
      dispatch(submitAnswers());
    } else {
      alert('Пожалуйста, ответьте на все вопросы перед отправкой.');
    }
  };

  const totalSelected = questions.filter(q => q.answer !== '').length;

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: '0 auto' }}>
      <h1>Questionnarie</h1>
      {!submitted &&
        questions.map(q => <Question key={q.id} question={q} />)
      }

      {!submitted && (
        <>
          <button
            className="submitButton"
            onClick={onSubmit}
            disabled={!allAnswered}
          >
            Submit
          </button>
          <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
            Your Score: {totalSelected} из {questions.length}
          </p>
        </>
      )}

      <Result />
    </div>
  );
}

export default App;
