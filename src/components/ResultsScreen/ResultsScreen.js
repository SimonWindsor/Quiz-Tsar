import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectNumQuizzes } from "../../features/game/gameSlice";

export function ResultsScreen () {
  const numQuizzes = useSelector(selectNumQuizzes);
  return (
    <div>

    </div>
  )
}