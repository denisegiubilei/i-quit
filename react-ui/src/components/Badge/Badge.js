import React from "react";
import "./Badge.css";

const badge = props => {
  return (
    <div className="Badge">
      <p className="title">{props.title}</p>
      <img src={props.image} alt={props.title} />
      <p className="details">{props.details}</p>
    </div>
  );
};

export default badge;
