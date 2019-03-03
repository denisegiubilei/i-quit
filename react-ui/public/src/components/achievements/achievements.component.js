import React from 'react';
import Widget from '../widget/widget.component'
import moment from 'moment'

import './achievements.component.css';

export default class Achievements extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      howLong: this.getHowLong(props.quitData),
      moneySaved: this.getMoneySaved(props.quitData),
      cigsMissed: this.getCigsMissed(props.quitData)
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  getDuration(date){
    const now = moment(Date.now());
    const diff = now.diff(date);
    return moment.duration(diff);
  }

  getHowLong(quitData){
    if (!quitData.date) {
      return null;
    } 
    const duration = this.getDuration(quitData.date);
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    return `${days} days ${hours} hours ${minutes} minutes`
  }

  getMoneySaved(quitData){
    if (!quitData.date || !quitData.packsPerWeek || !quitData.pricePerPack) {
      return null;
    } 
    const packsPerHour = quitData.packsPerWeek / 7 / 24; 
    const totalMoney = this.getDuration(quitData.date).asHours() * quitData.pricePerPack * packsPerHour ;
    return parseFloat(totalMoney.toFixed(2));
  }

  getCigsMissed(quitData){
    if (!quitData.date || !quitData.packsPerWeek) {
      return null;
    } 
    const packsPerHour = quitData.packsPerWeek / 7 / 24; 
    const cigsPerPack = 20;
    const cigsMissed =  this.getDuration(quitData.date).asHours() * packsPerHour * cigsPerPack;
    return Math.floor(cigsMissed);
  }

  tick() {
    this.setState((state, props) => ({
      howLong: this.getHowLong(props.quitData),
      moneySaved: this.getMoneySaved(props.quitData),
      cigsMissed: this.getCigsMissed(props.quitData)
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