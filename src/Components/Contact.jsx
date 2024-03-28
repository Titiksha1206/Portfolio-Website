import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_se34h6e",
        "template_g5o7uuo",
        form.current,
        "0FNGCnVnyYE9FR06a"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };
  const notify = () => {
    toast.success("Message Sent Successfully!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleSubmit = (e) => {
    // Handle form submission
    e.preventDefault();
    const formData = new FormData(form.current);

    // Example validation
    if (!formData.get("tname")) {
      toast.error("Please enter your name", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (!formData.get("email")) {
      toast.error("Please enter your email address", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    if (!formData.get("project")) {
      toast.error("Please enter your project", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    sendEmail(e); // Send email if validation passes
    notify();
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
                target="blank"
              >
                Write me{" "}
                <i class="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <form ref={form} onSubmit={handleSubmit} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="tname"
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
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your project"
              />
            </div>

            <button className="buttonc">
              Send Message
              <i class="uil uil-message"></i>
              <ToastContainer />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
