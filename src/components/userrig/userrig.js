import React, { Component } from 'react';
import { connect } from 'react-redux';


class Userrig extends Component {
    state = {
        userrig: {

        }
    }

    componentDidMount () {
        this.props.onMount()
    }

    render () {
        return (
            <div>
                <h1 style={{textAlign: 'center'}}>My Rig</h1>
                <h3 style={{textAlign: 'center'}}>CPU : {this.props.rig.CPU}</h3>
                <h3 style={{textAlign: 'center'}}>GPU : {this.props.rig.GPU}</h3>
                <h3 style={{textAlign: 'center'}}>RAM : {this.props.rig.RAM}</h3>
                <h3 style={{textAlign: 'center'}}>HD : {this.props.rig.HD}</h3>
                <h3 style={{textAlign: 'center'}}>OS : {this.props.rig.OS}</h3>
                <button onClick={this.props.onMount}>Click</button>
            </div>
        )
    }
}

const mapSToProps = state => {
    return {
        rig: state.userrig
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onMount: () => dispatch({type: 'USERRIG'}),
    };
};

export default connect(mapSToProps, mapDispatchToProps)(Userrig);