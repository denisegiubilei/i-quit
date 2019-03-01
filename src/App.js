import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './stop.png';

import CreateTodo from './components/create-profile.component';
import EditTodo from './components/edit-todo.component';
import TodosList from './components/todos-list.component';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
           
            <nav className="navbar navbar-expand-lg  ">
                
                <div className="collpase navbar-collapse">
                  <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                      <Link to="/" className="nav-link"></Link>
                    </li>
                    <li className="navbar-item">
                      <Link to="/create" className="nav-link">I QUIT</Link>
                    </li>
                  </ul>
                </div>
            </nav>
            <br/>

          </header>
          

          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
         
        </div>
        
        
      </Router>
    );
  }
}

export default App;
