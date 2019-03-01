import React, { Component } from 'react';

import './widget.component.css'

export default class TodosList extends Component {
 

  render() {
    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
      return images;
    }
    const images = importAll(require.context('../../static', false, /\.(png|jpe?g|svg|gif)$/));
    
    return (
      <div className='widget'>
        <p className='widget-title'>{this.props.title}</p>
        <img className='widget-img' src={images[this.props.imgName]} />
        <p className='widget-details'>{this.props.details}</p>
      </div>
    )
  }
}