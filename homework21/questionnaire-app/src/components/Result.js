import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../features/questionnaire/questionnaireSlice';
import styles from './Result.module.css';

const Result = () => {
  const result = useSelector(state => state.questionnaire.result);
  const submitted = useSelector(state => state.questionnaire.submitted);
  const dispatch = useDispatch();

  if (!submitted) return null;

  return (
    <div className={styles.result}>
      <h2>Результат</h2>
      <p>{result}</p>
      <button onClick={() => dispatch(reset())}>Пройти заново</button>
    </div>
  );
};

export default Result;