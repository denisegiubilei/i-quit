import React, { Component } from 'react';
import Widget from '../widget/widget.component'

import './achievements.component.css';

export default class TodosList extends Component {
  constructor(props) {
    super(props);

      this.state = {
      howLong: null,
      moneySaved: null,
      cigsMissed: null
    }
  }
  render() {
    const imgTime = require('../../static/time.gif');
    const imgMoney = require('../../static/money.gif');
    const imgCigars = require('../../static/cigars.gif');
    return (
      <section id="achievements">
        <Widget title='How long' image={imgTime} details={this.state.howLong}/>
        <Widget title='Money saved' image={imgMoney} details={this.state.moneySaved}/>
        <Widget title='Cigaretts missed' image={imgCigars} details={this.state.cigsMissed}/>
      </section>
    )
  }
}