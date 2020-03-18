import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import fire from '../../config/fire';

const Signedinlinks = () => {
    return (
       <ul className="right">
       <li><NavLink style={{textDecoration: 'none'}} to='/userrigpost'>Create Rig</NavLink></li>
       <li><NavLink style={{textDecoration: 'none'}} to='/myrig'>My Rig</NavLink></li>
       {/* <li><NavLink style={{textDecoration: 'none'}} to='/'>Log out</NavLink></li> 
        */}
        <li><NavLink style={{textDecoration: 'none'}} to='/' onClick={() => {fire.auth().signOut()}}>Sign out</NavLink></li>
        <li><NavLink style={{textDecoration: 'none'}} to='/' className='btn btn-floating pink lighten-1'>CJ</NavLink></li>
       
       </ul>
    )
}

export default Signedinlinks;