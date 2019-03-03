import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment'
import axios from 'axios';

import './create-profile.component.css';
import 'react-datepicker/dist/react-datepicker.css';

import Achievements from '../achievements/achievements.component';

export default class CreateProfile extends Component {

  constructor(props) {
    super(props);

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePacksPerWeek = this.onChangePacksPerWeek.bind(this);
    this.onChangePricePerPack = this.onChangePricePerPack.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordConfirm = this.onChangePasswordConfirm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      date: null,
      packsPerWeek: null,
      pricePerPack: null,
      email: '',
      password: '',
      passwordConfirm: ''
    }
  }

  onChangeDate(e) {
    this.setState({
      date: e
    });
  }

  onChangePacksPerWeek(e) {
    this.setState({
      packsPerWeek: e.target.value
    });
  }

  onChangePricePerPack(e) {
    this.setState({
      pricePerPack: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangePasswordConfirm(e) {
    this.setState({
      passwordConfirm: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Submitting form`);

    const newQuitProfile = {
      date: this.state.date,
      packsPerWeek: this.state.packsPerWeek,
      pricePerPack: this.state.pricePerPack,
      email: this.state.email,
      password: this.state.password
    };

   // axios.post('http://localhost:4000/api/profiles/create', newQuitProfile)
//  .then(res => console.log(res.data));

  }

  render() {
    return (
      <React.Fragment>
        <section id="create-profile" className="section-profile">
          <form onSubmit={this.onSubmit} className="form">
            <div className="form-group">
              <DatePicker
                placeholderText="The day I quit"
                selected={this.state.date}
                onChange={this.onChangeDate}
                className="form-control"
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={60}
                dateFormat="MMMM d, yyyy h:mm aa"
                timeCaption="time"
              />
            </div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Packs per Week"
                    value={this.props.packsPerWeek}
                    onChange={this.onChangePacksPerWeek}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Price per Pack"
                    value={this.props.pricePerPack}
                    onChange={this.onChangePricePerPack}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input type="text"
                  className="form-control"
                  placeholder="E-mail"
                  value={this.state.email}
                  onBlur={this.onChangeEmail}
                />
            </div>
            <div className="form-group" style={{display: this.props.showSignUp ? 'block' : 'none' }}>
                <input type="text"
                  className="form-control"
                  placeholder="Password"
                  value={this.state.password}
                  onBlur={this.onChangePassword}
                />
              </div>
              <div className="form-group" style={{display: this.props.showSignUp ? 'block' : 'none' }}>
                <input type="text"
                  className="form-control"
                  placeholder="Confirm password"
                  value={this.state.passwordConfirm}
                  onBlur={this.onChangePasswordConfirm}
                />
              </div>
            <div className="form-group">
              <input type="submit" value="Check my progress" className="btn btn-dark" />
            </div>
          </form>
        </section>
        <section id="achievements">
          <Achievements date={this.state.date} pricePerPack={this.state.pricePerPack} packsPerWeek={this.state.packsPerWeek} />
        </section>
      </React.Fragment>
    )
  }
}