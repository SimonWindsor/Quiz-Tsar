import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory, selectType, selectQuestions, resetQuiz } from './quizSlice.js';
import './Quiz.css'

export function Quiz() {
  const questions = useSelector(selectQuestions);
  const dispatch = useDispatch();

  return(
    <div>
      You selected {useSelector(selectCategory)} and {useSelector(selectType)}
      <button onClick={() => dispatch(resetQuiz())}>reset test</button>
    </div>
  )
}