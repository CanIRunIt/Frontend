import React from 'react';
import { ProgressBar } from 'react-bootstrap';

const gamerigscore = (props) => (
    

    <div className="container" style={{fontFamily: 'ZCOOL QingKe HuangYou', paddingTop: '10%'}}>
    <h1 style={{textAlign: 'center'}}>Game Requirements</h1>
    CPU (kind)<ProgressBar animated now={props.cpuscore} />
    GPU (kind)<ProgressBar animated now={props.gpuscore} />
    RAM (kind)<ProgressBar animated now={props.ramscore} />

    </div>


)

export default gamerigscore;