import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store'

export default function ChangeState() {
    const result = useSelector((state: RootState) => state.changeState);
    const dispatch = useDispatch();
    const handleChange = () => {
        dispatch({type: "change", payload:"RikkeiSoft"})
    }
  return (
    <div>
        <p>{result}</p>
        <button onClick={handleChange}>Change State</button>
    </div>
  )
}
