import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../static/stop.png';

import QuitForm from '../components/QuitForm/QuitForm';
import SignUp from '../components/LoginControl/SignUp'
import SignIn from '../components/LoginControl/SignIn'
import Badges from '../components/Badges/Badges';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      packsPerWeek: null,
      pricePerPack: null,
    };
    this.connectToServer = this.connectToServer.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  connectToServer() {
    fetch('/');
  }

  componentDidMount() {
    this.connectToServer();
  }

  handleChangeDate(date) {
    this.setState({
      date: date
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      // <Router>
        <div className="App">
         <section id="app-header" className="App-header">
            <AnchorLink href='#create-profile'>
               <img src={logo} className="App-logo" alt="logo" />
            </AnchorLink>
          </section>
          <section id="create-profile" className="create-profile-section">
            {/* <Route path="/" component={() =>  */}
                <div>
                  <QuitForm 
                    quitData={this.state} 
                    handleInputChange={this.handleInputChange} 
                    handleChangeDate={this.handleChangeDate}
                  />
                  <SignIn
                    buttonTitle="Login"
                    modalTitle="Login"
                  />
                  <SignUp 
                    buttonTitle="Save my Progress"
                    modalTitle="Save my Progress"
                    quitData={this.state}
                  />
              </div>
              }
            {/* />    */}
          </section>
          <section id="badges" class="badges-section">
            {/* <Route path="/" component={() =>  */}
                <Badges 
                  quitData={this.state} 
                  handleInputChange={this.handleInputChange} 
                  handleChangeDate={this.handleChangeDate}
                />
              }
            {/* />    */}
          </section>
        </div>
      // </Router>
    );
  }
}

export default App;
