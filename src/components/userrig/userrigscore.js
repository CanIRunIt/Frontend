import React, { Component } from 'react';
import Rigscore from '../rigscore/rigscore';
import { connect } from 'react-redux';
import axios from 'axios';

class Userrigscore extends Component {

    state = {
        cpuscore: '',
        gpuscore: '',
        ramscore: ''
    }
    
    componentDidMount () {
    console.log(this.props.rig)
    /* axios.get('https://warm-island-31012.herokuapp.com/cpuscores/'+ this.props.rig.CPU)        
        .then(response => {
            console.log(response)
            this.setState({
                cpuscore: response.data.score
            })
        })
 */
/*         axios.get('http://localhost:3000/gpuscores/'+ this.state.gpu) */
        axios.get('https://warm-island-31012.herokuapp.com/gpuscores/GeForce RTX 2080 Ti')
        .then(response => {
            console.log(response)
            this.setState({
                gpuscore: response.data.score
            })
        })


        axios.get('https://warm-island-31012.herokuapp.com/ramscores/' + this.props.rig.RAM)
        .then(response => {
            this.setState({
                ramscore: response.data.score
            })
        })
    }


    render () {
        return (
            <Rigscore cpuscore = /* {this.state.cpuscore} */ "80"
                      gpuscore = {this.state.gpuscore}
                      ramscore = {this.state.ramscore}
                      ></Rigscore>

        )
    }
}

const mapSToProps = state => {
    return {
        rig: state.userrig.CPU
    }
}

export default connect(mapSToProps)(Userrigscore);