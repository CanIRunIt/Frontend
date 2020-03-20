import React, { Component } from 'react';
import fire from '../../config/fire';
import { connect } from 'react-redux';

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
             <button className="pink lighten-1" type="submit" onClick={this.signin} /* onClick={() => this.props.onUserSign(this.state.mail)} */ >Sign In</button>
             <button className="yellow lighten-3" onClick={() => this.props.onUserSign(this.state.mail)}>Choose Rig</button>
             </form>

             </div>
            

        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserSign: (mail) => dispatch({type: 'USERSET', value: mail})
    }
}

export default connect(null, mapDispatchToProps)(Signin);