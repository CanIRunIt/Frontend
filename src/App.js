import React from 'react';
import './App.css';
import Navbar from './components/layout/navbar';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/landingpage/home';
import Rigform from './components/test/rigform';
import Gameselect from './components/test/gameselect';

import 'bootstrap/dist/css/bootstrap.min.css';
import Rigscore from './components/rigscore/rigscore';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar className="hcolor"></Navbar>
     <Switch>
     <Route exact path='/' component={Home}></Route>
     <Route path='/runtest' component={Rigform}></Route>
     <Route path='/gameselect' component={Gameselect}></Route>
     <Route path='/rigscore' component={Rigscore}></Route>

     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
