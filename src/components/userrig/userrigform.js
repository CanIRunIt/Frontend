import React,{ Component } from 'react';
import axios from 'axios';
import Rigscore from '../rigscore/rigscore';

class Rigform extends Component {
    state = {
        cpu: '',
        gpu: '',
        ram: '',
        hd: '',
        cpuscore: '',
        gpuscore: '',
        ramscore: '',
    

    }

    handleChnge = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })

    }

    handlePost = (e) => {
        e.preventDefault();
        console.log(this.state)

        const rig = {
         cpu : this.state.cpu,
         gpu : this.state.gpu,
         ram : this.state.ram
        }

        axios.post('url', rig)
        .then(response => {
            this.setState({
                cpuscore: response.data.cpuscore,
                gpuscore: response.data.gpuscore,
                ramscore: response.data.ramscore,
            })

        }).catch(error => {
            this.setState({ermessage: true})
        })



    
    }


    render () {

        return (
            <div className="container">
            <form onSubmit={this.handlePost} className="white">
            <h5 className="grey-text text-darken-3" style={{ textAlign: 'center' }}>Can I run it</h5>
            
          
           <div className="input-field">
            <label htmlFor="cpu">CPU</label>
            <input type ="text" id="cpu" onChange={this.handleChnge}></input>
            </div>

            <div className="input-field">
            <label htmlFor="gpu">GPU</label>
            <input type ="text" id="gpu" onChange={this.handleChnge}></input>
            </div>

            <div className="input-field">
            <label htmlFor="ram">RAM</label>
            <input type ="text" id="ram" onChange={this.handleChnge}></input>
            </div>

            <div className="input-field">
            <label htmlFor="hd">HARD DISK</label>
            <input type ="text" id="hd" onChange={this.handleChnge}></input>
            </div>



 


         
            <div className="input-field">
            <button className="btn pink lighten-1 z-depth-1">Create my rig</button>
                </div>

                
            
            </form>
            
            
        
        


            </div>

        )
    }
}

export default Rigform