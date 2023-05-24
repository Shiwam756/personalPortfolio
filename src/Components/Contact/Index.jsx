import React from "react";
import "./style.scss";
import Section from "../Shared/Section/Index";
import ContactInfo from "./Contact-Info/Index";
import Form from "./Form/Index";

const Contact = () => {
  return (
    <Section
      id="contact"
      title="Any Question? Feel Free to Contact"
      background="light"
    >
      <div className="contact-content-wrapper">
        <ContactInfo />
        <Form />
      </div>
    </Section>
  );
};

export default Contact;
