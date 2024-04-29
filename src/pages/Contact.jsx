import React from "react";
import Header from "../components/Header";

const Contact = () => {
  return (
    <>
      <Header title="Contact Me" subtitle="Get in touch with me..." />

      <div className="container mt-5">
        <h2>Contact Me</h2>
        <div className="form-floating mt-5 d-flex align-items-center justify-content-center flex-column">
          <div className="row">
            <div class="form-floating mb-5 col-sm-12 col-lg-6">
              <input
                type="Name"
                class="form-control"
                id="floatingPassword"
                placeholder="Name"
              />
              <label for="floatingPassword">Name</label>
            </div>
            <div class="form-floating mb-5 col-sm-12 col-lg-6">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a message here"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">Message</label>
            </div>
          </div>
          <button type="button" class="btn btn-secondary mt-5">
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
