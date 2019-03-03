import React from 'react';
import DatePicker from 'react-datepicker';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Achievements from '../achievements/achievements.component';
import axios from 'axios';

import './create-profile.component.css';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateProfile extends React.Component {

  constructor(props) {
    super(props);

    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePacksPerWeek = this.onChangePacksPerWeek.bind(this);
    this.onChangePricePerPack = this.onChangePricePerPack.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordConfirm = this.onChangePasswordConfirm.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      date: null,
      packsPerWeek: null,
      pricePerPack: null,
      email: '',
      password: '',
      passwordConfirm: ''
    }
  }

  onChangeDate(e) {
    this.setState({
      date: e
    });
  }

  onChangePacksPerWeek(e) {
    this.setState({
      packsPerWeek: e.target.value
    });
  }

  onChangePricePerPack(e) {
    this.setState({
      pricePerPack: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangePasswordConfirm(e) {
    this.setState({
      passwordConfirm: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Submitting form`);

    const newQuitProfile = {
      date: this.state.date,
      packsPerWeek: this.state.packsPerWeek,
      pricePerPack: this.state.pricePerPack,
      email: this.state.email,
      password: this.state.password
    };

    // axios.post('http://localhost:4000/api/profiles/create', newQuitProfile)
    //  .then(res => console.log(res.data));

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
                type="number" 
                placeholder="Packs per Week" 
                value={this.props.packsPerWeek}
                onChange={this.onChangePacksPerWeek}
              />
            </Form.Group>
            <Form.Group controlId="price-per-pack">
              {/* <Form.Label>Price per pack</Form.Label> */}
              <Form.Control 
                type="number" 
                placeholder="Price per pack" 
                value={this.props.pricePerPack}
                onChange={this.onChangePricePerPack}
              />
            </Form.Group>
            <Form.Group controlId="sign-up-email" style={{ display: this.props.showSignUp ? 'block' : 'none' }}>
              <Form.Control 
                type="email" 
                placeholder="Email" 
                value={this.props.email}
                onChange={this.onChangeEmail}
              />
            </Form.Group>
            <Form.Group controlId="sign-up-password" style={{ display: this.props.showSignUp ? 'block' : 'none' }}>
              <Form.Control 
                type="password" 
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChangePassword}
              />
            </Form.Group>
            <Form.Group controlId="sign-up-confirm-password" style={{ display: this.props.showSignUp ? 'block' : 'none' }}>
              <Form.Control 
                type="password" 
                placeholder="Confirm password"
                value={this.state.passwordConfirm}
                onChange={this.onChangePasswordConfirm}
              />
            </Form.Group>
            <Button variant="dark" type="submit">
              Check my Progress
            </Button>
          </Form>;
        </section>
        <section id="achievements">
          <Achievements date={this.state.date} pricePerPack={this.state.pricePerPack} packsPerWeek={this.state.packsPerWeek} />
        </section>
      </React.Fragment>
    )
  }
}