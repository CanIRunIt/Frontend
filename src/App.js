import React from 'react';
import './App.css';
import Navbar from './components/layout/navbar';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/landingpage/home';
import Runtest from './components/test/testform';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar className="hcolor"></Navbar>
     <Switch>
     <Route exact path='/' component={Home}></Route>
     <Route path='/runtest' component={Runtest}></Route>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
