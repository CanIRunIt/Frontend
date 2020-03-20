import React, { Component } from 'react';
import axios from '../../axios-userrig';

class Myrig extends Component {
    
    state = {
        userrigs: [],
        userrig: {

        },
        useremail: ''
    }

    componentDidMount () {
        axios.get('userrigs.json')
        .then(response => {
            this.setState({
                userrigs: response.data
            })
        }).catch(err => {
            console.log(err)
        })
        for(i = 0; i < this.state.userrigs.length(); i++){
            if(userrigs[i].creator === "ceejay8@mail.com"){
                this.setState({
                    userrig: userrigs[i]
                })
            }
        }
    }
    
    render () {
        return (
            
            <div className="container">            
            <h3>CPU : {this.state.userrig.CPU} </h3>
            <h3>GPU : {this.state.userrig.GPU} </h3>
            <h3>RAM : {this.state.userrig.RAM} </h3>
            <h3>HD  : {this.state.userrig.HD} </h3>
            <h3>OS  : {this.state.userrig.OS} </h3>  
            </div>
          

        )
    }
}