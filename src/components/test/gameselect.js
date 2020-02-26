import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
 
const options = [
  {value: 'The Eternal Castle Remastered', label: 'The Eternal Castle Remastered' },
  {value:  'Bury Me, My Love', label: 'Bury Me, My Love' },
  {value:  'New Super Mario Bros. U Deluxe', label: 'New Super Mario Bros. U Deluxe'},
  {value:  'Mario & Luigi: Bowser\'s Inside Story', label: 'Mario & Luigi: Bowser\'s Inside Story'}
];
 
class Gameselect extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;
 
    return (
        
        <div className="container" style={{textAlign: 'center'}}>
        <div className="gamesel">
        <h5 className="yellow-text text-darken-3" style={{ textAlign: 'center' }}>Game Select</h5>
            
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        
      />
      </div>
      
      <div style={{marginTop: '1px'}}>
      <button className="btn waves-effect waves-light btn" name="action" color="yellow"><Link to='/runtest' style={{textDecoration: 'none', color: 'white'}}>next</Link>
      <Link to='/runtest' style={{textDecoration: 'none', color: 'white'}}><i className="material-icons right">send</i></Link>
  </button>
  </div>
      </div>
    );
  }
}

export default Gameselect;
