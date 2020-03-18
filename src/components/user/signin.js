import React, { Component } from 'react';
import fire from '../../config/fire';

class Signin extends Component{

    constructor(props) {
        super(props);
    
    this.signin = this.signin.bind(this);

    this.state = {
        mail: '',
        password: ''
    }
}

    handleChnge = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })

    }

    formcreateHandler () {
        console.log(this.state.mail)
        console.log(this.state.password)
        
    }


    signin(event) {
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.mail, this.state.password).then((u)=>{
        }).then(response => {
            console.log(response.data.b.email)
        })
        .catch((error) => {
            console.log(error);
          })
    }


    render() {
        return(
            <div className="container" style={{marginTop: '9%'}}>
            
            <form className="white">
          <h5 style={{marginBottom: '3px', textAlign: 'center'}}>Sign In</h5>
            <label htmlFor="mail">e-mail</label>
            <input type ="text" id="mail" onChange={this.handleChnge}></input>
           
             <label htmlFor="password">password</label>
             <input type ="text" id="password" onChange={this.handleChnge}></input>
             <button type="submit" onClick={this.signin}>Sign In</button>
             </form>

             </div>
            

        )
    }
}

export default Signin;