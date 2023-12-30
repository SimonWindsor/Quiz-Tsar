import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory, selectType, selectQuestions, reset } from './quizSlice.js';
import './Quiz.css'

export function Quiz() {
  const questions = useSelector(selectQuestions);
  const dispatch = useDispatch();

  return(
    <div>
      You selected {useSelector(selectCategory)} and {useSelector(selectType)}
      <button onClick={() => dispatch(reset())}>reset test</button>
    </div>
  )
}