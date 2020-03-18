import React from 'react';
import { Link } from 'react-router-dom';
import Signedinlinks from './signedinlinks'
import Signedoutlinks from './signedoutlinks.js';
import Signedinlinks1 from './signedinlinks1';
import ResponsiveDrawer from './toolbox';

const Navbar = (props) => {
    return (
        <div>
        <nav className="nav-wrapper grey darken-3 hcolor">
        <div className="container">
        <ResponsiveDrawer user={props.user}></ResponsiveDrawer>
        <div className="Menu">
        <Link to='/' className="brand-logo left" style={{textDecoration: 'none'}}>
        Can I Run it
        </Link>
        {props.user ?
        <Signedinlinks ></Signedinlinks> :
        /* <Signedinlinks1></Signedinlinks1> :
        */ <Signedoutlinks ></Signedoutlinks> }
        </div>
      
        </div>
        </nav>
        </div>

    )
}

export default Navbar;