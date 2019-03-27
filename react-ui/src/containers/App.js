import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../assets/stop.png";

import moment from "moment"
import QuitForm from "../components/QuitForm/QuitForm";
import SignUp from "./LoginControl/SignUp";
import SignIn from "./LoginControl/SignIn";
import Badges from "./Badges/Badges";
import FutureSlider from "./FutureSlider/FutureSlider";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      packsPerWeek: null,
      pricePerPack: null,
      howLong: null
    };
    this.sectionRef = React.createRef();
    this.connectToServer = this.connectToServer.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleScrollToSection = this.handleScrollToSection.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  connectToServer() {
    fetch("/");
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
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleScrollToSection() {
    window.scrollTo(0, this.sectionRef.current.offsetTop);
  }

  handleLogin(profile) {
    const date = moment(profile.date).toDate();
    console.log(date);
    this.setState({
      date: date,
      packsPerWeek: profile.packsPerWeek,
      pricePerPack: profile.pricePerPack,
      email: profile.email,
      _id: profile.id
    });
  }

  render() {
    return (
      <div className="App">
        <section id="app-header" className="App-header">
          <AnchorLink href="#create-profile">
            <img src={logo} className="App-logo" alt="logo" />
          </AnchorLink>
        </section>
        <section
          id="create-profile"
          className="create-profile-section"
          ref={this.sectionRef}
        >
          <div>
            <QuitForm
              quitData={this.state}
              handleInputChange={this.handleInputChange}
              handleChangeDate={this.handleChangeDate}
            />
            <SignIn
              buttonTitle="Login"
              modalTitle="Login"
              handleLogin={this.handleLogin}
              feedback={this.handleScrollToSection}
            />
            <SignUp
              buttonTitle="Save my Progress"
              modalTitle="Save my Progress"
              quitData={this.state}
              feedback={this.handleScrollToSection}
            />
          </div>
        </section>
        <section id="badges" className="badges-section">
          <Badges
            quitData={this.state}
            handleInputChange={this.handleInputChange}
            handleChangeDate={this.handleChangeDate}
          />
          <AnchorLink href="#future">
            <span className="see-the-future">See the future</span>
          </AnchorLink>
        </section>
        <section id="future" className="future-section">
          <FutureSlider
            date={this.state.date}
            packsPerWeek={this.state.packsPerWeek}
            pricePerPack={this.state.pricePerPack}
          />
        </section>
      </div>
    );
  }
}

export default App;
