import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <>
    <section className="contactTitle">
    <h1>
        <dfn className="contact">Contact</dfn>
      </h1>
      
      <form className="contacttxt">
      <input className="txtname" id="name" placeholder="Your Name" type="text"></input>
      <input className="txtEmail" id="subject" placeholder="Subject" type="text"></input><br></br>
      <input className="txtsubject" id="email" placeholder="Email" type="text"></input>
      <textarea className="txtmassage" id="massage" placeholder="Massage" type="text"></textarea>
      </form>
    </section>
    </>
  );
};

export default Contact;
