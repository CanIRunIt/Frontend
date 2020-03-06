import React, { Component } from 'react';
import Gamerigscore from '../gamerigscore/gamerigscore';
import Rigscore from '../rigscore/rigscore';

class Score extends Component {

    render () {
        return (
    <div style={{color: 'white'}}>
        <Gamerigscore></Gamerigscore>
        <Rigscore></Rigscore>
    </div>
       )
    }
}

export default Score;