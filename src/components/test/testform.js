import React,{ Component } from 'react';

class Runtest extends Component {
    state = {
        cpu: '',
        gpu: '',
        ram: ''

    }

    handleChnge = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        })

    }

    handlePost = (e) => {
        e.preventDefault();
        console.log(this.state)

    
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
            <button className="btn pink lighten-1 z-depth-1">Run Test</button>
                </div>
            
            </form>
            </div>

        )
    }
}

export default Runtest