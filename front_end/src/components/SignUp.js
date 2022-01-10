import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    }) 
    // no need to use dependancy array

    const collectData = async () => {
        console.log(name, email, password);
        let result = await fetch('http://localhost:5000/register', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result));
         navigate('/')
        
    }

    return (
        <div className="sign_box">
            <h1>Register</h1>
            <input className="input_box" type="text" placeholder="Enter Name"
                value={name} onChange={(e) => setName(e.target.value)} />

            <input className="input_box" type="text" placeholder="Enter Email"
                value={email} onChange={(e) => setEmail(e.target.value)} />

            <input className="input_box" type="text" placeholder="Enter Password"
                value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={collectData} className="btn" type="submit">Sign Up</button>
        </div>
    )
}

export default SignUp;