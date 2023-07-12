import React,{useState,useRef} from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import emailjs from '@emailjs/browser';
const Footer = () => {
    const mail = process.env.REACT_APP_emailjs_token;
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    const form = useRef();
  const [Name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_s8nua5b', form.current,`${mail}`)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    window.alert("Message sent successfully");
  };
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                       Started in 2001 Dhanluxmi Trading Company started its operation at Balasmand Road,Hisar offering fancy products related to gates, grills, shutters, house railings. 
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item map">
                        <FaLocationArrow />
                        <div onClick={() => openInNewTab("https://goo.gl/maps/wHb7qW1dJKvHbcdLA")}className="text">
                            Shop No. 27, Marble Market, Balasmand Road, Hisar, Haryana - 125 001
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: +91 9254291091</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <a href="mailto:aggarwalkritik@gmail.com" className="anchor">aggarwalkritik@gmail.com</a>

                    </div>
                </div>
              
                <div className="col">
                <div className="title">Enquire Now</div>
                <div className="Enquire">
                 <form ref={form} onSubmit={sendEmail}>
           <input type="text" placeholder="Full Name" className="fn" name="name"value={Name}
              onChange={(e) => setName(e.target.value)}/>
            <input type="number" placeholder="Phone Number"className="fn" name="phone"value={phone}
              onChange={(e) => setPhone(e.target.value)}/>
            <input type="email" placeholder="Email Address"className="fn" name="email"value={email}
              onChange={(e) => setEmail(e.target.value)}/>
           <textarea rows="4" cols="40" placeholder="Message"className="fn" name="message"value={message}
              onChange={(e) => setMessage(e.target.value)}></textarea>
               <button className="submit-btn" value="send">SUBMIT</button>
                 </form>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
