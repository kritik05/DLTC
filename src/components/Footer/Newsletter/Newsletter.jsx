import React, {useRef,useState} from "react";
import emailjs from '@emailjs/browser';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";

const mail = process.env.REACT_APP_emailjs_token;

const Newsletter = () => {
    const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_ex8mkho', form.current,`${mail}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    window.alert("Message sent successfully");
  };

    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <form className="form-content" ref={form}  onSubmit={sendEmail}>
                    <input type="text" placeholder="Email Address" name="email" />
                    <button>Subscribe</button>
                    </form>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <div className="icon">
                        <FaLinkedinIn size={14} />
                    </div>
                    <div className="icon">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icon">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icon">
                        <FaInstagram size={14} />
                    </div>
                </span>
                <span className="coming">Coming Soon !</span>
            </div>
        </div>
    );
};

export default Newsletter;
