import React from 'react';
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

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar className="hcolor"></Navbar>
     <Switch>
     <Route exact path='/' component={Home}></Route>
     <Route path='/runtest' component={Rigform}></Route>
     <Route path='/gameselect' component={Gameselect}></Route>
     <Route path='/score' component={Score}></Route>
     <Route path='/post' component={Post}></Route>
     <Route path='/rigpost' component={Rigpost}></Route>
     <Route path='/gamedynamic' component={Gamedynamic}></Route>


     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
