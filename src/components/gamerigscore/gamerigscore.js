import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';


class GamerigScore extends Component {
    
    render() {
    
        return (

    <div className="container" style={{fontFamily: 'ZCOOL QingKe HuangYou', paddingTop: '10%', color: 'white'}}>
    <h1 style={{textAlign: 'center'}}>Minimum requirements rig scores</h1>
    CPU (kind)<ProgressBar animated now={this.props.cpuscore} />
    GPU (kind)<ProgressBar animated now={this.props.gpuscore} />
    RAM (kind)<ProgressBar animated now={this.props.ramscore} />

    </div>
        )
    }

}

export default GamerigScore;