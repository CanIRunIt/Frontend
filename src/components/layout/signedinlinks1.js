import React, { Component } from 'react'
import fire from '../../config/fire';
import { NavLink } from 'react-router-dom';
class Signedinlinks1 extends Component {
/* 
    state = {
        user: null
    }
 */
    signout() {
        fire.auth().signOut()
       /*  this.setState({
            user: null
        }) */
    }

/*     componentDidUpdate() {
        if(this.props.user){
            this.setState({
                user: this.props.user
            })
        }
    }
 */

    render() {
        return (
            <div>
        <ul className="right">
       <li><NavLink style={{textDecoration: 'none'}} to='/myrig'>My Rig</NavLink></li>
       {/* <li><NavLink style={{textDecoration: 'none'}} to='/'>Log out</NavLink></li> */}
       <li><button onClick={this.signout()}>SignOut</button></li> 
       <li><NavLink style={{textDecoration: 'none'}} to='/' className='btn btn-floating pink lighten-1'>CJ</NavLink></li>
       
       </ul>

            </div>
        )
    }
}

export default Signedinlinks1;