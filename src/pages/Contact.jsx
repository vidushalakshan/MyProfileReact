import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contactTitle">
        <h1 className="textContacts">
          <dfn className="contact">Contact</dfn>
        </h1>

        <section className="linksHandle">
          <div className="socialLinks"></div>
          <b className="linkName">Socila Links</b>
          <div className="linkdin"></div>
          <div className="facebook"></div>
          <div className="twiter"></div>
        </section>

        <form className="contacttxt">
          <input
            className="txtname"
            id="name"
            placeholder="Your Name"
            type="text"
          ></input>
          <input
            className="txtEmail"
            id="subject"
            placeholder="Subject"
            type="text"
          ></input>
          <br></br>
          <input
            className="txtsubject"
            id="email"
            placeholder="Email"
            type="text"
          ></input>
          <textarea
            className="txtmassage"
            id="massage"
            placeholder="Massage"
            type="text"
          ></textarea>
        </form>
      </section>
    </>
  );
};

export default Contact;
