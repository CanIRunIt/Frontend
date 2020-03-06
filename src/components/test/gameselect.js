import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import axios from 'axios';
import gamerigscore from '../gamerigscore/gamerigscore';

const options = [
  {value: 'The Eternal Castle Remastered', label: 'The Eternal Castle Remastered' },
  {value:  'Bury Me, My Love', label: 'Bury Me, My Love' },
  {value:  'New Super Mario Bros. U Deluxe', label: 'New Super Mario Bros. U Deluxe'},
  {value:  'Mario & Luigi: Bowser\'s Inside Story', label: 'Mario & Luigi: Bowser\'s Inside Story'}
];
 
class Gameselect extends React.Component {
  state = {
    selectedOption: null,
    ermessage : false,
    games: null
    
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    
  };

  componentDidMount () {
    axios.get('url')
    .then(response => {
      console.log(response)
      this.setState({games: response.data})
    }).catch(error => {
      this.setState({ermessage: true})
    })
    
  }

  componentDidUpdate () {
    if(!this.state.selectedOption) {
    let game = this.state.selectedOption
    axios.post('url', game)
    .then(response => {
      console.log(response)
    }).catch(error => {
      this.setState({ermessage: true})
    })
    }
  }





  render() {
    const { selectedOption } = this.state;
 
    return (
        
        <div className="container" style={{textAlign: 'center'}}>
        <h1>Game to run test on: {this.state.Game}</h1>
        <div className="gamesel">
        <h5 className="yellow-text text-darken-3" style={{ textAlign: 'center' }}>Game Select</h5>
        
      <button className="btn waves-effect waves-light btn" name="action" color="yellow"><Link to='/runtest' style={{textDecoration: 'none', color: 'white'}}>next</Link>
      <Link to='/runtest' style={{textDecoration: 'none', color: 'white'}}><i className="material-icons right">send</i></Link>
  </button>    
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        
      />

      </div>
      
      {/* <Gamerigscore
      cpuscore = */}

      </div>
    );
  }
}

export default Gameselect;




