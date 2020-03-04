import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const gamerigscore = (props) => (
    

    <div className="container" style={{fontFamily: 'ZCOOL QingKe HuangYou', paddingTop: '10%'}}>
    <h1 style={{textAlign: 'center'}}>Game Requirements</h1>
    <p>CPU (kind)<ProgressBar animated now={60} /></p>
    <p>GPU (kind)<ProgressBar animated now={78} /></p>
    <p>RAM (kind)<ProgressBar animated now={89} /></p>
    
    </div>


)

export default gamerigscore;