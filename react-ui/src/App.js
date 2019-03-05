import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from './static/stop.png';

import CreateTodo from './components/create-profile/create-profile.component';
import EditTodo from './components/edit-todo.component';
import Achievments from './components/achievements/achievements.component.js';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      packsPerWeek: null,
      pricePerPack: null,
    };
    this.connecToServer = this.connecToServer.bind(this);
  }

  connecToServer() {
    fetch('/');
  }

  componentDidMount() {
    this.connecToServer();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">

            <AnchorLink href='#create-profile'>
               <img src={logo} className="App-logo" alt="logo" />
            </AnchorLink>
           
            <nav className="navbar navbar-expand-lg  ">
                
                <div className="collpase navbar-collapse">
                  <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                     
                    </li>
                    <li className="navbar-item">
                      {/* <Link to="/create" className="nav-link" >
                        <AnchorLink href='#create-profile'>I QUIT</AnchorLink>
                      </Link> */}
                    </li>
                  </ul>
                </div>
            </nav>
            <br/>

          </header>
          
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/" component={CreateTodo} />
         
        </div>
        
        
      </Router>
    );
  }
}

export default App;
