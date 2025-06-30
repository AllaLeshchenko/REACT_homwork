import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      text: 'Вы предпочитаете чай или кофе?',
      options: ['Чай', 'Кофе'],
      answer: '',
    },
    {
      id: 2,
      text: 'Вы любите путешествовать?',
      options: ['Да', 'Нет'],
      answer: '',
    },
    {
      id: 3,
      text: 'Вы предпочитаете работать в офисе или удалённо?',
      options: ['Офис', 'Удалённо'],
      answer: '',
    },
    {
      id: 4,
      text: 'Вы больше интроверт или экстраверт?',
      options: ['Интроверт', 'Экстраверт'],
      answer: '',
    },
    {
      id: 5,
      text: 'Вы любите читать книги?',
      options: ['Да', 'Нет'],
      answer: '',
    },
  ],
  submitted: false,
  result: null,
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion(state, action) {
      const { id, answer } = action.payload;
      const question = state.questions.find(q => q.id === id);
      if (question) {
        question.answer = answer;
      }
    },

    submitAnswers(state) {
      const totalAnswered = state.questions.filter(q => q.answer !== '').length;
      state.result = `Ваш результат: ${totalAnswered} из ${state.questions.length}`;
      state.submitted = true;
    },

    reset(state) {
      state.questions.forEach(q => (q.answer = ''));
      state.submitted = false;
      state.result = null;
    },
  },
});

export const { answerQuestion, submitAnswers, reset } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;