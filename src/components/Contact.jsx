import "../styles/Contact.css";
import { useState } from "react";

const Contact = (props) => {
  const [buttonText, setButtonText] = useState("Send");

  async function handleFormSubmit(e) {
    e.preventDefault();
    setButtonText("Sending...");
    const form = e.target;
    const res = await fetch(
      "https://formsubmit.co/ajax/c4e769c5bf3c037504b6fcdf6432e3c8",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      }
    );
    const data = await res.json();
    if (data.success != "true") return setButtonText("Message Failed To Send!");
    setButtonText("Message Sent!");
    form.reset();
  }

  function handleInputFocus() {
    setButtonText("Send");
  }

  return (
    <section id="contact">
      <form id="contact-form" onSubmit={handleFormSubmit}>
        {/* Honeypot */}
        <input type="text" name="_honey" style={{ display: "none" }} />

        {/* Disable Captcha */}
        <input type="hidden" name="_captcha" value="false" />

        <div className="skill-heading">Contact Me</div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onFocus={handleInputFocus}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            onFocus={handleInputFocus}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Type message here..."
            onFocus={handleInputFocus}
            required
          ></textarea>
        </div>
        <button type="submit">{buttonText}</button>
      </form>
    </section>
  );
};

export default Contact;
