import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';

class SignUp extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      show: false,
      quitData: {
        date: this.props.date,
        packsPerWeek: this.props.packsPerWeek,
        pricePerPack: this.props.pricePerPack
      },
      email: '',
      password: '',
      passwordConfirm: ''
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    console.log(`Submitting form`);
    e.preventDefault();

    console.log(`Submitting form`);

    const newQuitProfile = {
      date: this.state.quitData.date,
      packsPerWeek: this.state.quitData.packsPerWeek,
      pricePerPack: this.state.quitData.pricePerPack,
      email: this.state.email,
      password: this.state.password
    };

    console.log(newQuitProfile.pricePerPack)

    axios.post('http://localhost:4000/api/profiles/create', newQuitProfile)
     .then(res => console.log(res.data));

  }

  render() {
    return (
      <>
        <Button variant="dark" onClick={this.handleShow}>
          Save my Progress
        </Button>

        <Modal 
          show={this.state.show} 
          onHide={this.handleClose}
          // aria-labelledby="contained-modal-title-vcenter"
          // centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Save my Progress</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group controlId="sign-up-email">
              <Form.Control 
                name="email"
                type="email" 
                placeholder="Email" 
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="sign-up-password">
              <Form.Control 
                name="password"
                type="password" 
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="sign-up-confirm-password">
              <Form.Control 
                name="passwordConfirm"
                type="password" 
                placeholder="Confirm password"
                value={this.state.passwordConfirm}
                onChange={this.handleInputChange}
              />
            </Form.Group>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="dark" type="submit" onClick={this.handleSubmit}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SignUp;