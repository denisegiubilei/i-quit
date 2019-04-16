import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import axios from "axios";

class SignUp extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      show: false
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
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const profile = {
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post("http://localhost:4000/api/profiles/login", profile)
      .then(res => {
        console.log(res.data);
        this.props.handleLogin(res.data.profile);
        this.handleClose();
        this.props.feedback();
      });   
  }

  render() {
    return (
      <>
        <Button variant="danger" onClick={this.handleShow}>
          Login
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          // aria-labelledby="contained-modal-title-vcenter"
          // centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="sign-in-email">
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="sign-in-password">
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
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
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default SignUp;
