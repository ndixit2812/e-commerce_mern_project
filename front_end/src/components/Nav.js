import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () =>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signUp')
    }
    
    return(
        <div>
            <img src='' alt='app_logo' className='logo' />
            {
                auth ? 
            <ul className='nav_ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to='/signUp'>Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
              :   
             <ul className='nav_ul nav_right'> 
                <li><Link to="/signUp">SignUp</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            }
        </div>
    )
}

export default Nav;