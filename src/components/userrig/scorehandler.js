import React, { Component } from 'react';
import Rigscore from '../rigscore/rigscore';
import axios from 'axios';

class Scorehandler extends Component {
    state = {
        cpu: '',
        gpu: '',
        ram: '',

        cpuscore: '',
        gpuscore: '',
        ramscore: ''

    }

    componentDidMount () {
        console.log(this.props.cpu)
        console.log(this.props.gpu)
        console.log(this.props.ram)
        this.setState({
            cpu: this.props.cpu,
            gpu: this.props.gpu,
            ram: this.props.ram
        })

        console.log(this.state.cpu)
        console.log(this.state.gpu)

        if(this.props.cpu) {
             axios.get('https://warm-island-31012.herokuapp.com/cpuscores/' +  this.props.cpu)             
              .then(response => {
                 console.log(response)
                this.setState({cpuscore: response.data.score})
                console.log(response)
            }).catch(err => {
                console.log(err)
            })
        }

        if(this.props.gpu) {
            axios.get('https://warm-island-31012.herokuapp.com/gpuscores/' + this.props.gpu)
            .then(response => {
                this.setState({gpuscore: response.data.score})
            }).catch(err => {
                console.log(err)
            })
        }

        if(this.props.ram) {
            axios.get('https://warm-island-31012.herokuapp.com/ramscores/' + this.props.ram)
            .then(response => {
                this.setState({ramscore: response.data.score})
            }).catch(err => {
                console.log(err)
            })
        }
    }

    render () {
        return (
            <Rigscore cpuscore={this.state.cpuscore / 14.13}
                      gpuscore={this.state.gpuscore  / 95.55}
                      ramscore={this.state.ramscore / 0.16}
                      cpu={this.state.cpu}
                      gpu={this.state.gpu}
                      ram={this.state.ram}
                      ></Rigscore>
        )
    }
} 

export default Scorehandler;