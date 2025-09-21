import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function Login() {
    const user = useSelector((state: RootState) => state.account);
    const [form, setForm] = useState({ email: "", password: "" });

    useEffect(() => {
        setForm(user); 
    }, [user]);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Đăng nhập thành công");
    };
  return (
    <div style={{width:"20%", textAlign:"center", margin:"200px auto", display:"flex", justifyContent:"center", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", padding:"50px 10px"}}>
        <form onSubmit={handleSubmit} action="" style={{width:"95%"}}>
            <h1>Đăng nhập</h1>
            <input type="text" name="email" placeholder='Nhập email' style={{width:"97%", padding:"10px 0 10px 5px", border:"1px solid gray", borderRadius:"5px"}} onChange={handleInput}/> <br /><br />
            <input type="password" name="password" placeholder='Nhập mật khẩu'  style={{width:"97%", padding:"10px 0 10px 5px", border:"1px solid gray", borderRadius:"5px"}} onChange={handleInput}/> <br /><br />
            <button type="submit" style={{width:"100%", padding:"10px", border:"1px solid gray", borderRadius:"5px", cursor:'pointer', backgroundColor:"#3e64ed", color:"white"}}>Đăng nhập</button>
        </form>
    </div>
  )
}
