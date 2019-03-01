import React, { Component } from 'react';

import './widget.component.css'

export default class TodosList extends Component {
 
  render() {
    return (
      <div className='widget'>
        <p className='widget-title'>{this.props.title}</p>
        <img className='widget-img' src={this.props.image} />
        <p className='widget-details'>{this.props.details}</p>
      </div>
    )
  }
}