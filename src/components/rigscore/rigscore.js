import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const rigscore = (props) => (

    <div className="container" style={{fontFamily: 'ZCOOL QingKe HuangYou', paddingTop: '8%', paddingBottom: '19%', color: 'white'}}>
    <h1 style={{textAlign: 'center'}}>Your rig scores </h1>
    CPU {props.cpu}<ProgressBar variant="warning" animated now={props.cpuscore} />
    GPU {props.gpu}<ProgressBar animated now={props.gpuscore} />
    RAM {props.ram}<ProgressBar variant="success" animated now={props.ramscore} />
    
    </div>

)

export default rigscore;