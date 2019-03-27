import React from "react";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

import "react-datepicker/dist/react-datepicker.css";

class QuitForm extends React.Component {
  onDatepickerRef(el) {
    if (el && el.input) {
      el.input.readOnly = true;
    }
  }

  render() {
    return (
      <div className="quit-form">
        <Form>
          <Form.Group controlId="quit-date">
            <DatePicker
              placeholderText="The day I quit"
              selected={this.props.quitData.date}
              onChange={this.props.handleChangeDate}
              ref={el => this.onDatepickerRef(el)}
              className="form-control"
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={60}
              dateFormat="MMMM d, yyyy h:mm aa"
              timeCaption="time"
            />
          </Form.Group>
          <Form.Group controlId="packs-per-week">
            <Form.Control
              name="packsPerWeek"
              type="number"
              placeholder="Packs per Week"
              value={this.props.quitData.packsPerWeek}
              onChange={this.props.handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="price-per-pack">
            <Form.Control
              name="pricePerPack"
              type="number"
              placeholder="Price per pack"
              value={this.props.quitData.pricePerPack}
              onChange={this.props.handleInputChange}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

QuitForm.propTypes = {
  handleInputChange: PropTypes.func,
  handleChangeDate: PropTypes.func,
  quitData: PropTypes.object
};

export default QuitForm;
