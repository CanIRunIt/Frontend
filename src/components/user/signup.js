import React, { Component } from 'react';
import fire from '../../config/fire';

class Signin extends Component{

    state = {
        mail: '',
        password: ''
    }

    handleChnge = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })

    }

    formcreateHandler () {
        console.log(this.state.mail)
        console.log(this.state.password)

        fire.auth().createUserWithEmailAndPassword(this.state.mail, this.state.password)
        .then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
    }

    handlePost (event) {
        event.preventDefault();
    }


    render() {
        return(
            <div>
            
            <form onSubmit={this.handlePost} className="white">
          
            <label htmlFor="mail">e-mail</label>
            <input type ="text" id="mail" onChange={this.handleChnge}></input>
           
             <label htmlFor="password">password</label>
             <input type ="text" id="password" onChange={this.handleChnge}></input>
             <button onClick={() => {this.formcreateHandler()}}>Sign Up</button>
             </form>

             </div>
            

        )
    }
}

export default Signin;