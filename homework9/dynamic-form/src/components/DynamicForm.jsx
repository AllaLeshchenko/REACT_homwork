import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './DynamicForm.module.css';

const DynamicForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm();


const onSubmit = (data) => {
  console.log('Form data:', data);
  reset(); // сбрасывает все поля после успешной отправки
};

  const firstInputValue = watch('firstName');
  const isFirstValid = firstInputValue && firstInputValue.length >= 4;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="firstName">Имя:</label>
        <input
          id="firstName"
          {...register('firstName', { required: true, minLength: 4 })}
          className={styles.input}
        />
        {errors.firstName && (
          <p className={styles.error}>
            Имя обязательно и должно быть не менее 4 символов.
          </p>
        )}
      </div>

      {isFirstValid && (
        <div className={styles.formGroup}>
          <label htmlFor="lastName">Фамилия:</label>
          <input
            id="lastName"
            {...register('lastName', { required: true })}
            className={styles.input}
          />
          {errors.lastName && (
            <p className={styles.error}>Фамилия обязательна.</p>
          )}
        </div>
      )}

      <button type="submit" className={styles.button}>
        Отправить
      </button>
    </form>
  );
};

export default DynamicForm;