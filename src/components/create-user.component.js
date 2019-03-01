import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {

  constructor(props) {
    super(props);

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeHour = this.onChangeHour.bind(this);
    this.onChangePacksPerDay = this.onChangePacksPerDay.bind(this);
    this.onChangePricePerPack = this.onChangePricePerPack.bind(this);
    this.onChangeCigsPerPack = this.onChangeCigsPerPack.bind(this);
    this.onChangeCurrency = this.onChangeCurrency.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      day: '',
      hour: '',
      packsPerDay: '',
      pricePerPack: '',
      cigsPerPack: 20,
      currency: '$',
      completed: false
    }
  }

  onChangeDate(e) {
    this.setState({
      day: e.target.value
    });
  }

  onChangeHour(e) {
    this.setState({
      hour: e.target.value
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

  onChangeCigsPerPack(e) {
    this.setState({
      cigsPerPack: e.target.value
    });
  }

  onChangeCurrency(e) {
    this.setState({
      currency: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);

    const newQuitProfile = {
      day: this.state.day,
      hour: this.state.hour,
      packsPerDay: this.state.packsPerDay,
      pricePerPack: this.state.pricePerPack,
      cigsPerPack: this.state.cigsPerPack,
      currency: this.state.currency,
      completed: this.state.completed,
    };

    axios.post('http://localhost:4000/profiles/add', newQuitProfile)
      .then(res => console.log(res.data));


    this.setState({
      day: '',
      hour: '',
      packsPerDay: '',
      pricePerPack: '',
      cigsPerPack: 20,
      currency: '$',
      completed: false
    })
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>I QUIT!</h3>
        <form onSubmit={this.onSubmit}>
          <div class="row">
            <div class="col">
              <div className="form-group">
                <label>Day of quitting: </label>
                <input type="text"
                  className="form-control"
                  value={this.state.day}
                  onChange={this.onChangeDate}
                />
              </div>
            </div>
            <div class="col">
              <div className="form-group">
                <label>Hour of quitting: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.hour}
                  onChange={this.onChangeHour}
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div className="form-group">
                <label>Packs per Day: </label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.packsPerDay}
                  onChange={this.onChangePacksPerDay}
                />
              </div>
            </div>
            <div class="col">
              <div className="form-group">
                <label>Cigaretts per Pack: </label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.cigsPerPack}
                  onChange={this.onChangeCigsPerPack}
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div className="form-group">
                <label>Price per Pack: </label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.pricePerPack}
                  onChange={this.onChangePricePerPack}
                />
              </div>
            </div>
            <div class="col">
              <div className="form-group">
                <label>Currency: </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.currency}
                  onChange={this.onChangeCurrency}
                />
              </div>
            </div>
          </div>


          <div className="form-group">
            <input type="submit" value="Create Todo" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}