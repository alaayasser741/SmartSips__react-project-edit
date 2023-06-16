import React from "react";
import "./Footer.css";
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container ">
          <div className="row">
            <div className="box ftr col-lg-4 col-md-3 col-6 divimg  ">
              <div className="imagfooter">
                <img className="" src="./images/SmartSips.png" alt="logo" width="44%" />
                <p className="footerpara">
                  Check Your Water To Get Cood
                  <br />
                  Health
                </p>
              </div>
            </div>
            <div className="box ftr col-lg-2 col-md-3  col-6">
              <h4 className="">Company</h4>
              <ul className="">
                <li>About</li>
                <li>Careers</li>
                <li>Mobile</li>
              </ul>
            </div>
            <div className="box ftr col-lg-2 col-md-3  col-6">
              <h4 className="">Contact</h4>
              <ul className="">
                <li>Help</li>
                <li>Press</li>
                <li>Affilates</li>
              </ul>
            </div>

            <div className="box ftr col-lg-2  col-md-3 col-6 ">
              <h4> More </h4>
              <ul className="">
                <li> Offers</li>
                <li>Services</li>
                <li>Popular</li>
              </ul>
            </div>
            <div className="box ftr col-lg-2 col-md-12 last-box ">
              <ul className="last-col">
                <li> <i> <FaInstagram /> </i> </li>
                <li> <i> <FaTwitter /> </i> </li>
                <li> <i> <FaFacebookF /> </i> </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom mx-sm-auto ">
            <p>all right reserved &copy;smartsips.com</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
