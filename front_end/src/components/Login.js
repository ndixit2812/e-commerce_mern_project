import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const[password, setPassword] = React.useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
    })

    // no need to use dependancy array in useEffect

    const handleLogin = async () => {
           console.log(email,password)
           let result = await fetch('http://localhost:5000/login', {
               method:'post',
               body:JSON.stringify({email,password}),
               headers: {
                   "Content-Type":"application/json"
               }
           });
           result = await result.json();
           console.log(result)
           if(result.auth){
                localStorage.setItem("user",JSON.stringify(result.user));
                localStorage.setItem("token",JSON.stringify(result.auth));
                navigate('/')
           }else{
               alert("Please, fill valid information")
           }

    }
    return(
        <div className='login'>
            <h1>Login</h1>
            <input type='text' className='input_box' placeholder='Enter your Email'
            value={email} onChange={(e) => setEmail(e.target.value)} />
            
            <input type='password'  className='input_box' placeholder='Enter your Password' 
            value={password} onChange={(e) => setPassword(e.target.value)}/>
            
            <button onClick={handleLogin} className="btn" type="submit">Login</button>
        </div>
    )
}

export default Login;