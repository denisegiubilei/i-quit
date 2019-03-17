import React from 'react';
import './Widget.css'

const widget = props => {
  return (
    <div className='Widget'>
      <p className='title'>{props.title}</p>
      <img src={props.image} alt={props.title}/>
      <p className='details'>{props.details}</p>
    </div>
  )
};

export default widget;