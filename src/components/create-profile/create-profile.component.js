import React, { Component } from 'react';
import moment from 'moment'
import axios from 'axios';

import './create-profile.component.css';

export default class CreateTodo extends Component {

  constructor(props) {
    super(props);

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePacksPerDay = this.onChangePacksPerDay.bind(this);
    this.onChangePricePerPack = this.onChangePricePerPack.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordConfirm = this.onChangePasswordConfirm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      date: null,
      packsPerDay: null,
      pricePerPack: '',
      email: '',
      password: '',
      passwordConfirm: ''
    }
  }

  onChangeDate(e) {
    this.setState({
      date: moment(e.target.value, 'DD/MM/YYYY HH:mm').toDate()
    });
  }

  onChangePacksPerDay(e) {
    this.setState({
      packsPerDay: e.target.value
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
      packsPerDay: this.state.packsPerDay,
      pricePerPack: this.state.pricePerPack,
      email: this.state.email,
      password: this.state.password
    };

   // axios.post('http://localhost:4000/api/profiles/create', newQuitProfile)
//  .then(res => console.log(res.data));

  }

  render() {
    return (
      <section id="create-profile" className="section-profile">
        <form onSubmit={this.onSubmit} className="form">
          <div className="form-group">
            <input type="text"
              className="form-control"
              placeholder="The day I quit"
              value={this.state.day}
              onBlur={this.onChangeDate}
            />
          </div>

          <div class="row">
            <div class="col">
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Packs per Day"
                  value={this.state.packsPerDay}
                  onChange={this.onChangePacksPerDay}
                />
              </div>
            </div>
            <div class="col">
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Price per Pack"
                  value={this.state.pricePerPack}
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
    )
  }
}