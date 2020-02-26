import React from 'react';
import { Link } from 'react-router-dom';
import Signedinlinks from './signedinlinks'
import Signedoutlinks from './signedoutlinks.js';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3 hcolor">
        <div className="container">
        <Link to='/' className="brand-logo left">
        Can I Run it
        </Link>
        <Signedinlinks></Signedinlinks>
 <Signedoutlinks></Signedoutlinks>
      
        </div>
        </nav>

    )
}

export default Navbar;