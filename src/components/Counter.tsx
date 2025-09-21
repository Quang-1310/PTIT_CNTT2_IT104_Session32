import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store'

export default function Counter() {
    const result = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();
    const handleIncrease = () => {
        dispatch({type: "increase"});
    }
    const handleDecrease = () => {
        dispatch({type: "decrease"});
    }
  return (
    <div>
        Counter: {result} <br />
        <button onClick={handleIncrease}>Tăng</button>
        <button onClick={handleDecrease}>Giảm</button>
    </div>
  )
}
