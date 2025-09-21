import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store'

export default function RandomNumber() {
    const result = useSelector((state: RootState) => state.random);
    const dispatch = useDispatch();
    const handleRandom = () => {
        dispatch({type: "random", payload: Math.ceil(Math.random() * 1000)});
    }
  return (
    <div>
        <p>[{result}]</p>
        <button onClick={handleRandom}>Generate Random Number</button>
    </div>
  )
}
