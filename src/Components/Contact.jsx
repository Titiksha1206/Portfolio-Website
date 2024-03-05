import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6j61b6a",
      "template_zio0fqe",
      form.current,
      "fGr1wppWVeuC8Q77t"
    );
    e.target.reset();
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Don't be shy !</h3>
          <p className="contact__description">
            {/* Feel feel to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions. */}
            Let's connect, collaborate, and create something extraordinary
            together.
          </p>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">titiksha1206@gmail.com</span>

              <a
                href="mailto:titiksha1206@gmail.com.com"
                className="contact__button"
              >
                Write me{" "}
                <i class="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i class="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">6350081679</span>
              <a
                href="https://api.whatsapp.com/send?phone=6350081679&text=Hello, more information!"
                className="contact__button"
              >
                Write me{" "}
                <i class="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                placeholder="Write your project"
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
              />
            </div>

            {/* <button className="button button--flex">
              Send Message
              <span className="button__icon">
                <i class="uil uil-message"></i>
              </span>
            </button> */}
            <a className="button button--flex">
              Send Message
              <span className="button__icon">
                <i class="uil uil-message"></i>
              </span>
            </a>
          </form>
        </div>
      </div>
      {/* <div className="separator"></div> */}
    </section>
  );
};

export default Contact;
