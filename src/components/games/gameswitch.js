import React, { Component } from 'react';
import { Button } from '@material-ui/core';

const switches = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

class Gameswitch extends Component {
    
    state = {
        letter: ''

    }

    clicked(one) {
        this.setState(
            {letter: one},
            () => console.log(this.state.letter)
            )
            this.props.history.push({
                pathname: '/gameselect',
                search: '?' + one
            })
    }


    render () {
        return (
            <div className="container" style={{textAlign: 'center', marginTop: '10px'}}>
            {switches.map(one => {
            return <Button variant="contained" onClick={() => this.clicked(one)}>{one}</Button>
            }) }
            </div>

        )
    }
}



export default Gameswitch;