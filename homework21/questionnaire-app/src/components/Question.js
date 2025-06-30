import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../features/questionnaire/questionnaireSlice';
import styles from './Question.module.css';

const Question = ({ question }) => {
  const dispatch = useDispatch();
  const selectedAnswer = useSelector(
    state => state.questionnaire.questions.find(q => q.id === question.id)?.answer || ''
  );

  const onSelect = (option) => {
    dispatch(answerQuestion({ id: question.id, answer: option }));
  };

  return (
    <div className={styles.question}>
      <p>{question.text}</p>
      <div className={styles.options}>
        {question.options.map(option => (
          <label key={option} className={styles.optionLabel}>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onSelect(option)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;
