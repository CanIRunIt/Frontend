import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import axios from 'axios';


var gamesjson = []

class Gameselect extends React.Component {
  state = {
    selectedOption: null,
    ermessage : false,
    games: false
    
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    
  };

  componentDidMount () {
    axios.get('http://canirunit.herokuapp.com/results')
    .then(response => {
      console.log(response)
      gamesjson = response.data
      this.setState({ games: true })
    }).catch(error => {
      this.setState({ermessage: true})
    })
    
  }

/*   componentDidUpdate () {
    if(!this.state.selectedOption) {
    let game = this.state.selectedOption
    axios.post('url', game)
    .then(response => {
      console.log(response)
    }).catch(error => {
      this.setState({ermessage: true})
    })
    }
  } */



   
  render() {
    let games = null;
    if(this.state.games){
   
   
   games = gamesjson.map(game => {
    return <h3 style={{color: 'white', textAlign: 'center'}}>{game.title.replace(' system requirements','')}</h3>
    
  })
}

  return ( <div>
    <h1 style={{color: 'white', textAlign: 'center'}}>games</h1>
    <div>
    {games}
    </div>
    </div>
  )

  }

}

export default Gameselect;




