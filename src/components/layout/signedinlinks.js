import React from 'react';
import { NavLink } from 'react-router-dom';

const Signedinlinks = () => {
    return (
       <ul className="right">
       <li><NavLink to='/myrig'>My Rig</NavLink></li>
       <li><NavLink to='/'>Log out</NavLink></li>
       <li><NavLink to='/' className='btn btn-floating pink lighten-1'>CJ</NavLink></li>
       
       </ul>
    )
}

export default Signedinlinks;