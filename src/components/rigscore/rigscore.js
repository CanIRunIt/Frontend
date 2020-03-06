import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const rigscore = (props) => (

    <div className="container" style={{fontFamily: 'ZCOOL QingKe HuangYou', paddingTop: '19%', paddingBottom: '19%'}}>
    <h1 style={{textAlign: 'center'}}>Your Rig </h1>
    CPU (kind)<ProgressBar variant="warning" animated now={props.cpuscore} />
    GPU (kind)<ProgressBar animated now={props.gpuscore} />
    RAM (kind)<ProgressBar variant="success" animated now={props.ramscore} />
    
    </div>

)

export default rigscore;