import React, { Component } from 'react';
import axios from '../../axios-userrig';
import Rig from '../Rig/rig';
import fire from '../../config/fire';

//var userrigs = []

class Myrig extends Component {
    
    state = {
        userrigs: [],
        done: false,
        userrig: {

        },
        useremail: ''
    }

    componentDidMount () {
        /* axios.get('userrigs.json') */
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

    
    render () {
        
        let rigs = null;

        if(this.state.done) {
         rigs = this.state.userrigs.map(singlerig => {
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
          <div> 
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

export default Myrig;