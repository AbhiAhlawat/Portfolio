import React,{ useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
export const Contact = () => {


  const form = useRef();
  const [done,setDone] = useState(false);
  // form validation
  
  
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8wcic9c', 'template_93052bi', form.current, 'EpsvF-qfaeTEWPmP3')
          .then((result) => {
              console.log(result.text);
              setDone(true)
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form  ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name='user_name' placeholder="Full Name" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name='user_email'placeholder="Email Address" required />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  name ='message' placeholder="Message" ></textarea>
                      <button className="vvd" value='Send'><span>Send</span></button>
                    </Col>
                    <span>{done && "Thanks for contacting me!"}</span>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
