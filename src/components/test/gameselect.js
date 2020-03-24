import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import CircularIndeterminate from '../ui/progress';

var gamesjson = []
var gamesjsonsort = []
var dupname = ' '
var gamesunique = []
class Gameselect extends React.Component {
  state = {
    game: '',
    selectedOption: null,
    ermessage : false,
    games: false,
    first: '',
    dupname: '',
    progress: true
    
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    
  };

  componentDidMount () {

    console.log(this.props.location.search.replace('?',''))
        this.setState({first: this.props.location.search.replace('?','')},
        () => console.log(this.state.first))


    axios.get('https://canirunit.herokuapp.com/results')
    .then(response => {
      console.log(response)
      gamesjson = response.data
      gamesjsonsort = gamesjson.sort(function(x,y) {
        if(x.title < y.title) {return -1;}
        if(x.title > y.title) {return 1;}
        return 0;
      })
    /*   gamesunique = gamesjsonsort.filter((x,y) => gamesjsonsort.IndexOf(x).title === gamesjsonsort.IndexOf(y).title)
 */
      /* for(var i = 1 ; i < gamesjsonsort.length; i++){
        if(gamesjsonsort[i-1].title.replace(" system requirements","") != gamesjsonsort[i].replace(" system requirements","")){
          gamesunique.push(gamesjsonsort[i])
        }
      }
      console.log(gamesunique) */
      for(var i = 0; i<gamesjsonsort.length;i++){
        var name = gamesjsonsort[i].title/* 
        console.log(name) */
        var counter = 0
        for(var j = 0; j<gamesunique.length;j++){
          if(gamesunique[j].title === name){
            counter = 1
          }
        }
        if(counter = 0){
          gamesunique.push(gamesjsonsort[i])
        }
      }
      /* for(var i = 0 ; i < gamesjsonsort.length; i++){
        if(gamesjsonsort[i].title != gamesjsonsort[i+1].title){
          gamesunique.push(gamesjsonsort[i])
        }
      } */
     /*  for(var i = 1 ; i < gamesjsonsort.length; i++){
        for(var j = 0 ; j < gamesjsonsort.length; j++){
          if(gamesjsonsort[i].title === gamesunique[j].title){
            console.log(gamesjsonsort[i].title)
          }else {
            gamesunique.push(gamesjsonsort[i])
          }

        }
      } */
      
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

gamepickHandler = (gametitle, cpuname, gpuname, ramname) => {
  console.log("hey")
  console.log(gametitle);

  this.setState({game: gametitle})
  console.log(this.state.game)

  const game = gametitle
  const cpu = cpuname
  const gpu = gpuname
  const ram = ramname


  this.props.history.push({
      pathname: '/rigpost',
      search: '?' + game,
      cpu: '?' + cpu
  })

  let rigarray = [cpu, gpu, ram]
  this.props.onCpuSet(rigarray)
//  this.props.onGpuSet(gpu)
 // this.props.onRamSet(ram)
  
 /*  console.log( this.props.onCpuSet(cpu),
  this.props.onGpuSet(gpu),
  this.props.onRamSet(ram)) */

}

duplicateHandler = (name) => {
  this.setState({dupname : name})

}

progressHandler() {
  this.setState({
    progress: false
  })
}
   
  render() {
    let games = <div className="container" style={{textAlign: 'center', display: 'flex', justifyContent: 'space-around'}}> <CircularIndeterminate style={{textAlign: 'center'}}></CircularIndeterminate> </div> 
    if(this.state.games){
   
   
   games = 
   /* <div className="input-field" style={{paddingLeft:'99px', paddingRight: '99px'}}>
            {/* <label htmlFor="game" style={{textAlign: 'center'}}>Game</label> 
            <h3 style={{textAlign: 'center',color: 'white'}}>Game</h3>
            <input type ="text" id="game" onChange={this.handleChnge} style={{color: 'white'}}></input>
            </div> */
          
   gamesjsonsort.map((game,title) => {
     if(game.title[0] == this.state.first){
       
      
    /* return <h3 style={{color: 'white', textAlign: 'center'}}>{game.title.replace(' system requirements','')}</h3>
     */

    if(this.state.dupname != game.title){
    return (
      <div  key={title} style={{textAlign: 'center', marginTop: '3px'}} className="gamedynamic">

      <Button variant="contained" style={{background: 'linear-gradient(to right, #fdfc47, #24fe41)',textAlign: 'center', width: '60%', /* fontFamily: 'Yatra One' */ fontFamily: 'ZCOOL QingKe HuangYou'}} onClick={() => this.gamepickHandler(game.title, game.Intel_CPU, game.NVIDIA_Graphics, game.RAM)}>{game.title.replace(" system requirements","")}</Button>
      </div>
    )
    }
    
    {this.duplicateHandler(game.title)}
       }
       
     
    }, () => this.progressHandler())
}

  return ( <div style={{ fontFamily: 'ZCOOL QingKe HuangYou'}}>
    <h1 style={{color: 'white', textAlign: 'center', marginTop:'1%'}}>choose a game to run the test</h1>
    <div>      
    {games}
    </div>
    </div>
  )

  }

}


const mapDispatchToProps = dispatch => {
  return {
    onCpuSet: (cpu) => dispatch({type: 'GAMECPU', value: cpu}),
  //  onGpuSet: (gpu) => dispatch({type: 'GAMEGPU', value: gpu}),
  //  onRamSet: (ram) => dispatch({type: 'GAMEMEM', value: ram})
  }
}

export default connect(null,mapDispatchToProps)(Gameselect);




