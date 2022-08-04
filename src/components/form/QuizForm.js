import React from 'react'

import styles from './QuizForm.module.css';

import InputText from './InputText';
import InputSelect from './InputSelect';
import Button from '../UI/Button';

const QuizForm = props => {

    const categories = ['Javascript', 'Php', 'Python'];
    const difficulties = ['Easy', 'Medium', 'Hard'];
    const type = ['MCQ', 'True False'];

    return(
        <form action="/" className={styles.quizForm}>
            <InputText className={styles["input-area"]}/>
            <InputSelect className={styles["input-area"]} options={categories} name={'Category'}/>
            <InputSelect className={styles["input-area"]} options={difficulties} name={'Difficulty'}/>
            <InputSelect className={styles["input-area"]} options={type} name={'Type'}/>
            <Button type={'submit'} className={styles['sub-btn']}>Next</Button>
        </form>
    )
};

export default QuizForm;