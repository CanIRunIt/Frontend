import React from 'react';
import { NavLink } from 'react-router-dom';

const Signedoutlinks = () => {
    return (
       <ul className="right">
       <li ><NavLink style={{textDecoration: 'none'}} to='/signup'>SignUp</NavLink></li>
       <li><NavLink style={{textDecoration: 'none'}} to='/signin'>SignIn</NavLink></li>
       
       </ul>
    )
}

export default Signedoutlinks;