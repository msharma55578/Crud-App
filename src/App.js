import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from "./Todo"
import JokeGenerator from './components/JokeGenerator';
import {Switch,Route,BrowserRouter as Router} from "react-router-dom";
import Form from "./components/Form.js";

function App() {
  return (
    <div className="App">
      {/* <Multi/> */}
      <Router>
          <Switch>
            <Route exact path="/" exact component={JokeGenerator}/>
            <Route exact path="/path2" component={Todo}/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
