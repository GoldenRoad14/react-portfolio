import React, { useState } from "react";

function ContactForm() {
  // State variables to track form input values and validation status
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameError(value ? "" : "Name is required");
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const isValidEmail = /\S+@\S+\.\S+/.test(value);
    setEmailError(isValidEmail ? "" : "Invalid email address");
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    setMessageError(value ? "" : "Message is required");
  };

  return (
    <div className="form-container">
      <div className="form-body m-3 p-3">
        <form onSubmit={handleSubmit}>
          <div>
            <h3 id="form-title">Drop me a line!</h3>
            <label htmlFor="name">Name:</label><br></br>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              onBlur={() => setNameError(name ? "" : "Name is required")}
            />
            <div className="error">{nameError}</div>
          </div>
          <div>
            <label htmlFor="email">Email:</label><br></br>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={() => setEmailError(email ? "" : "Email is required")}
            />
            <div className="error">{emailError}</div>
          </div>
          <div>
            <label htmlFor="message">Message:</label><br></br>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              onBlur={() =>
                setMessageError(message ? "" : "Message is required")
              }
            />
            <div className="error">{messageError}</div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
