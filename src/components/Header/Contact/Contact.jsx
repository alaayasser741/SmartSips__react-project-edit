import { Component } from "react";
import "./Contact.css";
import {
  FaPhone,
  FaRegEnvelope,
  FaBriefcase,
  FaCircleEnvelope,
} from "react-icons/fa";
import NavBar from "../NavBar/NavBar";
import Footer from './../../Footer/Footer';
// import { FaCirclePhone } from "@react-icons/all-files/fa/FaBeer";
const Contact = () => {
  return (
    <>
    
    <NavBar/>
      <div className="big-contact-section">
        <div className="head-contact">
          <h1>Contact Us</h1>
        </div>
        <div className="container contact-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 contact-information">
                <label>Full Name </label>
                <input type="text" placeholder="Enter Your Name" />
                <label>Email</label>
                <input type="text" placeholder="Enter Your Email" />
                <label>Your Message</label>
                <textarea placeholder="Enter Your Message" />

                <button aria-label="submit the form" className="btn">SEND</button>
              </div>{" "}
              {/** end of contact-information */}
              <div className="col-lg-4 col-md-12 contact-getInTouch">
                <h5 style={{ marginBottom: "20px" }}>Get In Touch </h5>
                <i>
                  {" "}
                  <FaPhone />{" "}
                </i>

                <h6>PHONE NUMBER</h6>
                <p>012 267 388 192</p>
                <i>
                  {" "}
                  <FaRegEnvelope />{" "}
                </i>

                <h6>EMAIL</h6>
                <p>Smartsips@Gmail.com</p>

                <h5>Our Office</h5>
                <i>
                  {" "}
                  <FaBriefcase />{" "}
                </i>
                <p>15 St Cairo Egypt, NY 10033</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      
    </>
  );
};
export default Contact;   
