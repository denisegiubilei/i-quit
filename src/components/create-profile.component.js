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
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      date: null,
      packsPerDay: null,
      pricePerPack: ''
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

  onSubmit(e) {
    console.log(`Form submitted:`);
    e.preventDefault();

    console.log(`Form submitted:`);

    const newQuitProfile = {
      date: this.state.date,
      packsPerDay: this.state.packsPerDay,
      pricePerPack: this.state.pricePerPack,
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
                value={this.state.day}
                onBlur={this.onChangeDate}
              />
          </div>
          <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Password"
                value={this.state.day}
                onBlur={this.onChangeDate}
              />
            </div>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Confirm password"
                value={this.state.day}
                onBlur={this.onChangeDate}
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