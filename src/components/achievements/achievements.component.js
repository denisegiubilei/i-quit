import React, { Component } from 'react';
import Widget from '../widget/widget.component'
import moment from 'moment'

import './achievements.component.css';

export default class Achievements extends Component {
  constructor(props) {
    super(props);

    this.state = {
      howLong: this.getHowLong(props.date),
      moneySaved: this.getMoneySaved(props.date, props.packsPerWeek, props.pricePerPack),
      cigsMissed: this.getCigsMissed(props.date, props.packsPerWeek)
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  getDuration(quitDate){
    const now = moment(Date.now());
    const diff = now.diff(quitDate);
    return moment.duration(diff);
  }

  getHowLong(quitDate){
    if (!quitDate) {
      return null;
    } 
    const duration = this.getDuration(quitDate);
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    return `${days} days ${hours} hours ${minutes} minutes`
  }

  getMoneySaved(quitDate, packsPerWeek, pricePerPack){
    if (!quitDate || !packsPerWeek || !pricePerPack) {
      return null;
    } 
    const packsPerHour = packsPerWeek / 7 / 24; 
    const totalMoney = this.getDuration(quitDate).asHours() * packsPerHour * pricePerPack;
    return parseFloat(totalMoney.toFixed(2));
  }

  getCigsMissed(quitDate, packsPerWeek){
    if (!quitDate || !packsPerWeek) {
      return null;
    } 
    const cigsPerPack = 20;
    const packsPerHour = packsPerWeek / 7 / 24; 
    const cigsMissed =  this.getDuration(quitDate).asHours() * packsPerHour * cigsPerPack;
    return Math.floor(cigsMissed);
  }

  tick() {
    this.setState((state, props) => ({
      howLong: this.getHowLong(props.date),
      moneySaved: this.getMoneySaved(props.date, props.packsPerWeek, props.pricePerPack),
      cigsMissed: this.getCigsMissed(props.date, props.packsPerWeek)
    }));
  }

  render() {
    const imgTime = require('../../static/time.gif');
    const imgMoney = require('../../static/money.gif');
    const imgCigars = require('../../static/cigars.gif');
    return (
      <div>
        <Widget title='How long' image={imgTime} details={this.state.howLong}/>
        <Widget title='Money saved' image={imgMoney} details={this.state.moneySaved}/>
        <Widget title='Cigaretts missed' image={imgCigars} details={this.state.cigsMissed}/>
      </div>
    )
  }
}