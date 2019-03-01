import React, { Component } from 'react';
import Widget from '../widget/widget.component'

import './achievements.component.css';

export default class TodosList extends Component {
  render() {
    return (
      <section id="achievements">
        <Widget title='How long' imgName='time.gif' details='issoae'/>
        <Widget title='Money saved' imgName='money.gif' details='issoae'/>
        <Widget title='Cigaretts missed' imgName='cigars.gif' details='issoae'/>
      </section>
    )
  }
}