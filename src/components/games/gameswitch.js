import React, { Component } from 'react';
import { Button } from '@material-ui/core';

const switches = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

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
            if(one.typeof == "0" ){
                return <Button variant="contained" color="primary" onClick={() => this.clicked(one)}>{one}</Button>
            } else {
                return <Button style={{marginTop: '3px', background: 'linear-gradient(to right, #1fa2ff, #12d8fa)',  fontFamily: 'ZCOOL QingKe HuangYou'}} variant="contained" onClick={() => this.clicked(one)}>{one}</Button>
            }
            }) }
            </div>

        )
    }
}



export default Gameswitch;