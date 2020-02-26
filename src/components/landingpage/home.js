import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';
class Home extends Component {
    render () {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
            <Cell col={12}>
            <img 
            src="https://i.ya-webdesign.com/images/logo-gaming-png-1.png"
            alt="mainpic"
            className="mainpic">
            </img>
            <Link to='/runtest'>  <h1>TEST NOW</h1> </Link>

{/*             <div className="banner-text">
            <h1>Full Stack Web Developer</h1>
            
            <hr>
            </hr>

            <p>
                Vue | React | Node | Java | Mongo | CSS |  Express
            </p>

            <div className="social-links">

            {/* linkedIn */}
            {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-linkedin-in" aria-hidden="true"/>
            
            </a> */}
            {/* git */}
            {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-github" aria-hidden="true"/>
            </a>
             */}
            {/* facebook */}
            {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-facebook" aria-hidden="true"/>
            </a>
             */}
            {/* twitter */}
            {/* <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fab fa-twitter" aria-hidden="true"/>
            </a>
            
            </div>
 */} 
    {/*         </div>
     */}        </Cell>
            </Grid>
            </div>
        )
    }
}

export default Home;