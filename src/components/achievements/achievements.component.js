import React, { Component } from 'react';
import Widget from '../widget/widget.component'

import './achievements.component.css';

export default class TodosList extends Component {
  render() {
    const imgTime = require('../../static/time.gif');
    const imgMoney = require('../../static/money.gif');
    const imgCigars = require('../../static/cigars.gif');
    return (
      <section id="achievements">
        <Widget title='How long' image={imgTime} details='issoae'/>
        <Widget title='Money saved' image={imgMoney} details='issoae'/>
        <Widget title='Cigaretts missed' image={imgCigars} details='issoae'/>
      </section>
    )
  }
}