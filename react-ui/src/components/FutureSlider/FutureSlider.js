import React from 'react';
import { CircleSlider }  from 'react-circle-slider'
import CurrencyFormat from 'react-currency-format'
import moment from 'moment'

import './FutureSlider.css'

class FutureSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      packsPerWeek: props.packsPerWeek,
      pricePerPack: props.pricePerPack,
      days: props.days,
      moneySaved: props.moneySaved,
      cigsMissed: props.cigsMissed
    }

    this.calculatePercent = this.calculatePercent.bind(this)
    this.getMoneySaved = this.getMoneySaved.bind(this)
    this.getCigsMissed = this.getCigsMissed.bind(this)

  }

  componentWillReceiveProps(nextProps){
    let days = null;
    if (nextProps.date) {
      const duration = this.getDuration(nextProps.date);
      days = duration.days();
      if (days < 300) {
        days = 365;
      }
    }

    let moneySaved = this.getMoneySaved(days, nextProps.pricePerPack, nextProps.packsPerWeek);
    let cigsMissed = this.getCigsMissed(days, nextProps.packsPerWeek);

    this.setState({ 
      days : days,
      pricePerPack : nextProps.pricePerPack,
      packsPerWeek: nextProps.packsPerWeek,
      moneySaved: moneySaved,
      cigsMissed: cigsMissed
    });

  }
  
  getMoneySaved(days, pricePerPack, packsPerWeek) {
    if (! (days && pricePerPack && packsPerWeek)){
      return null
    }
    const packsPerHour = packsPerWeek / 7 / 24;
    const totalMoney = days * 24 * pricePerPack * packsPerHour;
    return parseFloat(totalMoney.toFixed(2))
  }

  getCigsMissed(days, packsPerWeek) {
    if (! (days && packsPerWeek)){
      return null
    }
    const cigsPerPack = 20;
    const packsPerHour = packsPerWeek / 7 / 24;
    const cigsMissed = days * 24 * packsPerHour * cigsPerPack;
    return Math.floor(cigsMissed);
  }

  handleChange = percentage => {
    const fiveYears = 5 * 365;
    const days = fiveYears * percentage / 100

    let moneySaved = this.getMoneySaved(days, this.state.pricePerPack,  this.state.packsPerWeek);
    let cigsMissed = this.getCigsMissed(days, this.state.packsPerWeek);

    this.setState({ 
      days : days,
      moneySaved: moneySaved,
      cigsMissed: cigsMissed 
    });
  };  

  getDuration(date) {
    const now = moment(Date.now());
    const diff = now.diff(date);
    return moment.duration(diff);
  }

  calculatePercent(days){
    const fiveYears = 5 * 365;
    return days * 100 / fiveYears;
  }

  formatDateText(days){
    let years = null;
    let months = null;
    let formattedString = '';
    if (days >= 365){
      years = Math.floor(days / 365);
      days = days - (years * 365);
      formattedString += years > 1 ? `${years} years ` : `${years} year `;
    }
    if (days >= 30){
      months = Math.floor(days / 30);
      days = days - (months * 30);
      formattedString += months > 1 ? `${months} months ` : `${months} month `;
    }
    if (days > 0){
      formattedString += `${Math.floor(days)} days`;
    }
    return formattedString;
  }

  render() {

    return (
  
       <div class="circle-slider-container">
          <div class="circle-slider">
            <CircleSlider
                value={this.calculatePercent(this.state.days)} 
                size={360}
                knobRadius={20}
                showPercentage={true}
                gradientColorFrom="#000066"
                gradientColorTo="#800000"
                onChange={this.handleChange}
            />
          </div>
          <div class="circle-title">{this.formatDateText(this.state.days)}</div>
          <div class="future-widgets">
            <h3>Money saved: <CurrencyFormat value={this.state.moneySaved || 0 } displayType={'text'} thousandSeparator={true} prefix={'$'} /></h3>
            <h3>Cigaretts missed: {this.state.cigsMissed}</h3>
          </div>
        </div>
    )
  }
}

export default FutureSlider;