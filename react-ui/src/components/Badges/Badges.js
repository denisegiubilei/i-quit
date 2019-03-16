import React from 'react';
import Badge from './Badge/Badge'
import moment from 'moment'

import './Badges.css';

class Badges extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      howLong: this.getHowLong(props.quitData),
      moneySaved: this.getMoneySaved(props.quitData),
      cigsMissed: this.getCigsMissed(props.quitData),
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  getDuration(date) {
    const now = moment(Date.now());
    const diff = now.diff(date);
    return moment.duration(diff);
  }

  getHowLong(quitData) {
    if (!quitData.date) {
      return null;
    }
    const duration = this.getDuration(quitData.date);
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    return `${days} days ${hours} hours ${minutes} minutes`
  }

  getMoneySaved(quitData) {
    if (!quitData.date || !quitData.packsPerWeek || !quitData.pricePerPack) {
      return null;
    }
    const packsPerHour = quitData.packsPerWeek / 7 / 24;
    const totalMoney = this.getDuration(quitData.date).asHours() * quitData.pricePerPack * packsPerHour;
    return parseFloat(totalMoney.toFixed(2));
  }

  getCigsMissed(quitData) {
    if (!quitData.date || !quitData.packsPerWeek) {
      return null;
    }
    const packsPerHour = quitData.packsPerWeek / 7 / 24;
    const cigsPerPack = 20;
    const cigsMissed = this.getDuration(quitData.date).asHours() * packsPerHour * cigsPerPack;
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

    let badges = [
      { key: 'b-how-long', title: 'How long', image: require('../../static/time.gif'), details: this.state.howLong },
      { key: 'b-money-saved', title: 'Money saved', image: require('../../static/money.gif'), details: this.state.moneySaved },
      { key: 'b-cigs-missed', title: 'Cigaretts missed', image: require('../../static/cigars.gif'), details: this.state.cigsMissed }
    ]

    return (
      <div>
        {
          badges.map(badge =>
            <Badge
              key={badge.key}
              title={badge.title}
              image={badge.image}
              details={badge.details}
            />
          )
        }
      </div>
    )
  }
}

export default Badges;