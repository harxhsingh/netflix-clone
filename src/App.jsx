import React from 'react';
import './App.css';
import LoginScreen from './screens/LoginScreen'
import Homescreen from '../src/screens/Homescreen';
import { BrowserRouter as Router, Switch, Route, Prompt } from "react-router-dom"

function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
        {
          !user ? (
            <LoginScreen/>
          ):(
        <Switch>
          <Route exact path="/">
            <Homescreen/>
          </Route>
        </Switch>
      )}  
      </Router>
    </div>
  );
}

export default App;