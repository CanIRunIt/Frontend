import React from 'react';
import Gamerigscore from '../gamerigscore/gamerigscore';
import Rigscore from '../rigscore/rigscore';

const score = (props) => (
    <div style={{color: 'white'}}>
        <Gamerigscore></Gamerigscore>
        <Rigscore></Rigscore>
    </div>
)

export default score;