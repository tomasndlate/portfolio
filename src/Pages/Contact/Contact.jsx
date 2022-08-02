import React from "react";
import "./Contact.css";

import { fotoContact } from "../../Images/index";

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
            <img src={fotoContact} alt="Foto - Tomás Ndlate" />
          </div>
          <h2 className="nameContact">Tomás Ndlate</h2>
          <h3 className="emailContact">tomasndlate.it@gmail.com</h3>
        </div>
      </div>
    </div>
  );
};

const ForwaredContact = React.forwardRef(Contact);

export { ForwaredContact };
