import React,{ Component } from 'react';
import './App.css';
import Navbar from './components/layout/navbar';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/landingpage/home';
import Rigform from './components/test/rigform';
import Gameselect from './components/test/gameselect';
import 'bootstrap/dist/css/bootstrap.min.css';
import Score from './components/score/score';
import Post from './components/test/gamepost';
import Rigpost from './components/test/rigpost';
import Gamedynamic from './components/test/gamedynamic';
import UserrigPost from './components/userrig/userrigform';
import Signin from './components/user/signin';
import Signup from './components/user/signup';
import fire from './config/fire';
import axios from './axios-userrig';
import Userrig from '../src/components/userrig/userrig';
import { userget } from './actions';
import { connect } from 'react-redux';
import Myrig from './components/userrig/myrig';
import MediaCard from '../src/components/Rig/rigcard';
import Userrigscore from '../src/components/userrig/userrigscore';
import CircularIndeterminate from './components/ui/progress';
import Gameswitch from './components/games/gameswitch';

class App extends Component {

  constructor(){
  super();

  this.state = ({
    useremail: ''
  })

  this.authListner = this.authListner.bind(this);
}

  componentDidMount() {
    this.authListner();
    axios.get('/userrigs.json')
    .then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }

  authListner() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user.email);
      this.setState({useremail: user.email})
      if(user){
        this.setState({user: user});
        localStorage.setItem('user', user.uid);
        localStorage.setItem('useremail',this.state.useremail);/* 
        this.props.onUserset(this.state.useremail) */
        this.props.onUserset(user.email)
      }else{
        this.setState({user: null});
        localStorage.removeItem('user');
        localStorage.removeItem('useremail');
      }
    })
  }

  


  render() {
  return (
    <div>
    <BrowserRouter>
    <div className="App">
     <Navbar className="hcolor" user={this.state.user}></Navbar>
     <Switch>
     <Route exact path='/' component={Home}></Route>
     <Route path='/runtest' component={Rigform}></Route>
     <Route path='/gameselect' component={Gameselect}></Route>
     <Route path='/score' component={Score}></Route>
     <Route path='/post' component={Post}></Route>
     <Route path='/rigpost' component={Rigpost}></Route>
     <Route path='/gamedynamic' component={Gamedynamic}></Route>
     <Route path='/userrigpost' component={UserrigPost}></Route>
     <Route path='/signin' component={Signin}></Route>
     <Route path='/signup' component={Signup}></Route>
     <Route path='/userrig' component={Userrig}></Route>
     <Route path='/myrig' component={Myrig}></Route>
    <Route path='/rigcard' component={MediaCard}></Route>
    <Route path='/myrigscore' component={Userrigscore}></Route>
    <Route path='/progress' component={CircularIndeterminate}></Route>
    <Route path='/gameswitch' component={Gameswitch}></Route>
    
    
     {/* <Route  {() =>{( <h1 style={{color:'white', textAlign: 'center'}}>404</h1>)}}></Route>
 */}

     </Switch>
    </div>
    </BrowserRouter>
    </div>
  );
}

}

const mapDispatchToProps = dispatch => {
  return {
      onUserset: (mail) => dispatch({type: 'USERSET', value: mail})
  };
};


/* const mapDispatchToProps = dispatch => {
  return {
      onUserset: () => dispatch({type: 'USERSET', value: mail})
  }
} */

export default connect(null, mapDispatchToProps)(App);
