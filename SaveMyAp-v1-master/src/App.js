import React from 'react';
import './App.css';
import Home from './components/Home'
import Questions2 from './components/Questions2'
import PageNotFound from './components/PageNotFound'
import {BrowserRouter,Route, Switch} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/questions' component={Questions2}/>
        <Route exact path='*' component={PageNotFound}/>
        </Switch>
        </BrowserRouter>

  );
}

export default App;
