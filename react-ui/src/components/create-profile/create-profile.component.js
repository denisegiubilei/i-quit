import React from 'react';
import DatePicker from 'react-datepicker';
import Form from 'react-bootstrap/Form';
import Achievements from '../achievements/achievements.component';
import SignUp from '../login-control/sign-up.component'
import SignIn from '../login-control/sign-in.component'

import './create-profile.component.css';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateProfile extends React.Component {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);

    this.state = {
      date: null,
      packsPerWeek: null,
      pricePerPack: null
    }
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <React.Fragment>
        <section id="create-profile" className="section-profile">
          <Form>
            <Form.Group controlId="quit-date">
              {/* <Form.Label>The day I quit</Form.Label> */}
              <DatePicker
                  placeholderText="The day I quit"
                  selected={this.state.date}
                  onChange={this.onChangeDate}
                  className="form-control"
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={60}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  timeCaption="time"
                />
            </Form.Group>
            <Form.Group controlId="packs-per-week">
              {/* <Form.Label>Packs per Week</Form.Label> */}
              <Form.Control 
                name="packsPerWeek"
                type="number" 
                placeholder="Packs per Week" 
                value={this.props.packsPerWeek}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="price-per-pack">
              {/* <Form.Label>Price per pack</Form.Label> */}
              <Form.Control 
                name="pricePerPack"
                type="number" 
                placeholder="Price per pack" 
                value={this.props.pricePerPack}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <SignIn
              buttonTitle="Login"
              modalTitle="Login"
            />
            <SignUp 
              buttonTitle="Save my Progress"
              modalTitle="Save my Progress"
              quitData={this.state}
            />
          </Form>;
          
        </section>
        <section id="achievements">
          <Achievements quitData={this.state} />
        </section>
      </React.Fragment>
    )
  }
}