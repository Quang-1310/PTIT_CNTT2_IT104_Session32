import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../store'

export default function ChangeBackColor() {
    const result = useSelector((state: RootState) => state.changeBackColor);
    const dispatch = useDispatch();
    const handleChange = () => {
        dispatch({type: "change"});
    }
  return (
    <div style={{backgroundColor: result, width:"100%", height:"100vh"}}>
        <input type="checkbox" onChange={handleChange}/>
        <label htmlFor="" style={{color:result === "white" ? "black" : "white"}}>{result === "white" ? "Sáng" : "Tối"}</label>
    </div>
  )
}
