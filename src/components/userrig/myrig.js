import React, { Component } from 'react';
import axios from '../../axios-userrig';
import Rig from '../Rig/rig';
import fire from '../../config/fire';
import MediaCard from '../Rig/rigcard';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'; 
import Scorehandler from './scorehandler';

//var userrigs = []

class Myrig extends Component {
    
    state = {
        userrigs: [],
        done: false,
        userrig: {

        },
        useremail: '',
        cpuscore: '',
        gpuscore: '',
        ramscore: '',

        done: false
    }

    componentDidMount () {
        /* axios.get('userrigs.json') */
        
        this.setState({
            useremail: localStorage.getItem('useremail')
        })
        fire.database().ref('userrigs').once('value')
        .then(data => {
        const userrig = []
        const obj = data.val()
        /* for(let key in obj) {
            userrig.push({
                id: key,
                user: obj[key].creator,
                cpu: obj[key].CPU,
                gpu: obj[key].GPU
            })
        } */
        if(obj) {
            const rigslist = Object.keys(obj).map(key => ({
                ...obj[key],
                id: key
            }));
            this.setState({
                userrigs: rigslist,
                done: true
            })
        }
        
        console.log('userrigs :' + userrig.cpu)
    }).catch(err => {
        console.log(err)
    })
    }

   /*  Scoresfetch () {
        axios.get('https://warm-island-31012.herokuapp.com/cpuscores/'+ this.state.cpu)        
        .then(response => {
            console.log(response)
            this.setState({
                cpuscore: response.data.score
            })
        })

/*         axios.get('http://localhost:3000/gpuscores/'+ this.state.gpu) */
       /*  axios.get('https://warm-island-31012.herokuapp.com/gpuscores/'+ this.state.gpu)
        .then(response => {
            console.log(response)
            this.setState({
                gpuscore: response.data.score
            })
        })


        axios.get('https://warm-island-31012.herokuapp.com/ramscores/' + this.state.ram)
        .then(response => {
            this.setState({
                ramscore: response.data.score
            })
        })
    } */ 

    clicked () {
        this.setState({done: true})
    }

    
    render () {
        
        let rigs = null;

        if(this.state.done) {
         /* rigs = this.state.userrigs.map(singlerig => {
                if(singlerig.creator === "ceejay6@mail.com"){
                return <Rig style={{marginTop: '8px'}}
                cpu = {singlerig.CPU}
                gpu = {singlerig.GPU}
                ram = {singlerig.RAM}
                hd = {singlerig.HD}
                os = {singlerig.OS}
                
                >
                </Rig>
                }
                
            }) */

            rigs = this.state.userrigs.map(singlerig => {
                if(singlerig.creator === this.state.useremail){
                    return <div><MediaCard 
                    cpu = {singlerig.CPU}
                gpu = {singlerig.GPU}
                ram = {singlerig.RAM}
                hd = {singlerig.HD}
                os = {singlerig.OS}
                ></MediaCard>
               {/*  <Button onClick={() => this.props.onRigSet(singlerig.CPU,singlerig.GPU,singlerig.RAM)} variant="contained" color="primary">
                Get Score
                </Button>
                <Button onClick={() => this.clicked()}>Scores</Button>
                 */}
                <Scorehandler
                cpu = {singlerig.CPU}
                gpu = {singlerig.GPU}
                ram = {singlerig.RAM}></Scorehandler>
               

                </div>
                }
            })
        }
    

        return (
           /*  
            <div className="container">            
           {this.state.userrigs ? 
           
           <Rig 
           cpu = {this.state.userrig.CPU}
           gpu = {this.state.userrig.GPU}
           ram = {this.state.userrig.RAM}
           hd = {this.state.userrig.HD}
           os = {this.state.userrig.OS}
           ></Rig>
           
        : null}
             </div>
           */
          <div style={{textAlign: 'center'}}> 
             {rigs}
             
             {/* <Rig 
           cpu = "intel i9"
           gpu = {this.state.userrig.GPU}
           ram = {this.state.userrig.RAM}
           hd = {this.state.userrig.HD}
           os = {this.state.userrig.OS}
           ></Rig>  */}
          </div>

        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onRigSet: (cpu, gpu, ram) => dispatch({type:"MYRIGSET", /* value: {cpu: cpu,gpu: gpu,ram: ram} */ cpu:cpu, gpu:gpu, ram:ram})
    }
}

export default connect(null,mapDispatchToProps)(Myrig);