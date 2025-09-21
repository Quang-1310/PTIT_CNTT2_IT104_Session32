import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';

export default function Register() {
    const navigate = useNavigate();
    const submit = useSelector((state: RootState) => state);
    const [form, setForm] = useState({ email: "", password: "" });
    const dispath = useDispatch();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispath({ type: "register", payload: form,});

        navigate("/login");
    };

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setForm({...form, [name]: value})
    }

    console.log(submit);
    

  return (
    <div style={{width:"20%", textAlign:"center", margin:"200px auto", display:"flex", justifyContent:"center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", padding:"50px 10px"}}>
        <form onSubmit={handleSubmit} action="" style={{width:"95%"}}>
            <h1>Đăng Ký</h1>
            <input type="text" name='email' placeholder='Nhập email' style={{width:"97%", padding:"10px 0 10px 5px", border:"1px solid gray", borderRadius:"5px"}} value={form.email} onChange={handleInput}/> <br /><br />
            <input type="password" name='password' placeholder='Nhập mật khẩu'  style={{width:"97%", padding:"10px 0 10px 5px", border:"1px solid gray", borderRadius:"5px"}} value={form.password} onChange={handleInput}/> <br /><br />
            <button type='submit' style={{width:"100%", padding:"10px", border:"1px solid gray", borderRadius:"5px", cursor:'pointer', backgroundColor:"#3e64ed", color:"white"}}>Đăng nhập</button>
        </form>
    </div>
  )
}
