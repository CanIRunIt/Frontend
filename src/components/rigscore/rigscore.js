import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const rigscore = (props) => (

    <div className="container" style={{fontFamily: 'ZCOOL QingKe HuangYou', paddingTop: '19%', paddingBottom: '19%'}}>
    <h1 style={{textAlign: 'center'}}>Your Rig </h1>
    <p>CPU (kind)<ProgressBar variant="warning" animated now={45} /></p>
    <p>GPU (kind)<ProgressBar animated now={60} /></p>
    <p>RAM (kind)<ProgressBar variant="success" animated now={89} /></p>
    
    </div>

)

export default rigscore;