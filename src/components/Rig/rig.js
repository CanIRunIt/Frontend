import React from 'react';

const rig = (props) => (
    <div style={{color:'white', textAlign: 'center'}}>
            <h3>CPU : {props.cpu} </h3>
            <h3>GPU : {props.gpu} </h3>
            <h3>RAM : {props.ram} </h3>
            <h3>HD  : {props.hd} </h3>
            <h3>OS  : {props.os} </h3>
            
    </div>
)

export default rig;