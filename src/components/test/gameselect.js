import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-ui/core';

var gamesjson = []
var gamesjsonsort = []
class Gameselect extends React.Component {
  state = {
    game: '',
    selectedOption: null,
    ermessage : false,
    games: false,
    first: ''
    
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    
  };

  componentDidMount () {

    console.log(this.props.location.search.replace('?',''))
        this.setState({first: this.props.location.search.replace('?','')},
        () => console.log(this.state.first))


    axios.get('http://canirunit.herokuapp.com/results')
    .then(response => {
      console.log(response)
      gamesjson = response.data
      gamesjsonsort = gamesjson.sort(function(x,y) {
        if(x.title < y.title) {return -1;}
        if(x.title > y.title) {return 1;}
        return 0;
      })
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

  handleChnge = (e) => {
    this.setState({
        [e.target.id]: e.target.value.toUpperCase()

    })

}



   
  render() {
    let games = null;
    if(this.state.games){
   
   
   games = 
   /* <div className="input-field" style={{paddingLeft:'99px', paddingRight: '99px'}}>
            {/* <label htmlFor="game" style={{textAlign: 'center'}}>Game</label> 
            <h3 style={{textAlign: 'center',color: 'white'}}>Game</h3>
            <input type ="text" id="game" onChange={this.handleChnge} style={{color: 'white'}}></input>
            </div> */
   gamesjsonsort.map(game => {
     if(game.title[0] == this.state.first){
    /* return <h3 style={{color: 'white', textAlign: 'center'}}>{game.title.replace(' system requirements','')}</h3>
     */
    return (
      <div style={{textAlign: 'center', marginTop: '3px'}}>

      <Button variant="contained" color="primary" style={{textAlign: 'center', width: '60%'}} /* onClick={() => this.gamepickHandler(game.title)} */>{game.title.replace(" system requirements","")}</Button>
      </div>
    
    )
     }
  
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




