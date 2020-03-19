import React, { Component } from 'react';
import fire from '../../config/fire';

class Signup extends Component{

    constructor(props) {
        super(props);
    
    this.signup = this.signup.bind(this);

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

    handlePost (event) {
        event.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.mail, this.state.password)
        .then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
    }

    signup(event) {
        event.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.mail, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
          })
    }


    render() {
        return(
            <div className="container" style={{marginTop: '9%'}}>
            
            <form className="white">
          
            <h5 style={{marginBottom: '3px', textAlign: 'center'}}>Sign Up</h5>
            <label htmlFor="mail">e-mail</label>
            <input type ="text" id="mail" onChange={this.handleChnge}></input>
           
             <label htmlFor="password">password</label>
             <input type ="text" id="password" onChange={this.handleChnge}></input>
             <button className="pink lighten-1" type="submit" onClick={this.signup}>Sign Up</button>
             </form>

             </div>
            

        )
    }
}

export default Signup;