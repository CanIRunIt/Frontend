import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const rigscore = (props) => (

    <div className="container" style={{fontFamily: 'ZCOOL QingKe HuangYou', paddingTop: '19%'}}>
    <h1 style={{textAlign: 'center'}}>Your Rig Score</h1>
    <p>CPU<ProgressBar variant="warning" animated now={45} /></p>
    <p>GPU<ProgressBar animated now={60} /></p>
    <p>RAM<ProgressBar variant="success" animated now={89} /></p>
    
    </div>

)

export default rigscore;