import React from "react";
import "./Contact.css";

import { fotoHello } from "../../Images/index";

const Contact = (props, ref) => {
  return (
    <div ref={ref} className="mainContact">
      <div className="backgroundContact"></div>
      <div className="blockTextContact">
        <h3>Hi! I'm looking for a new oportunity!</h3>
        <h2>Get in touch</h2>
        <p>
          Immense desire to apply my knowledge on a profesional way and explore
          the different areas of IT.
        </p>
      </div>
      <div className="blockCardContact">
        <div className="cardContact">
          <div className="circlePhotoContact">
            <img src={fotoHello} alt="Foto - Tomás Ndlate" />
          </div>
          <a
            href="https://www.linkedin.com/in/tomasndlate/"
            to="_blank"
            className="nameContact"
          >
            <h2>Tomás Ndlate</h2>
          </a>
          <h3 className="emailContact">tomasndlate.it@gmail.com</h3>
        </div>
      </div>
    </div>
  );
};

const ForwaredContact = React.forwardRef(Contact);

export { ForwaredContact };
