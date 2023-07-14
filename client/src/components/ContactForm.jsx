import React, { useRef, useState } from "react";
const axios = require("axios").default;

function ContactForm() {
  const nameRef = useRef();
  const [email, setEmail] = useState("");
  const messageRef = useRef();
  const [submitState, setSubmitState] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/contact", {
        Email: email,
        Name: nameRef.current.value,
        Message: messageRef.current.value,
      })
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setSubmitState(true);
  };
  return submitState ? (
    <div className="contact-form">
      <div className="thanks-div">
        <h1 style={{ color: "white" }}>Thanks!</h1>
      </div>
    </div>
  ) : (
    <div className="contact-form">
      <form id="myForm" name="myForm">
        <div className="form-floating mb-3 col-4 ">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            autoComplete="off"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating col-4 mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingText"
            placeholder="Name"
            autoComplete="off"
            name="name"
            required
            ref={nameRef}
          />
          <label htmlFor="floatingText">Name</label>
        </div>

        <div>
          <div className="form-floating col-4 mb-3">
            <textarea
              className="form-control"
              placeholder="Leave a message here"
              id="floatingTextarea2"
              style={{ height: "150px" }}
              autoComplete="off"
              name="message"
              required
              ref={messageRef}
            />
            <label htmlFor="floatingTextarea2">Message</label>
          </div>
        </div>
        <button
          className="btn pt-[6px] pb-[6px] pl-[12px] pr-[12px] bg-teal-300 text-green-800 border-none btn-primary"
          type="submit"
          onClick={handleSubmit}
        >
          Let's Talk!
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
