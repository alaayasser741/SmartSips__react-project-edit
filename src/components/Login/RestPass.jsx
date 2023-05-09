import React from "react";
import "./Sign.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {

  
  FaRegEnvelope,
 
} from "react-icons/fa";

const RestPass = () => {
  return (
    <>
    
      <div className="Split-Screen">
        <div className="left-screen">
          <section className="parag">
            <h1 className="headh1">
              Welcome To <br /> Smart Sips WebSite!
            </h1>
            <img
              className="backimg"
              src="./images/sign up.png "
              alt="Sign Up"
            />
          </section>
        </div>
        <div className="right-screen">
          <form>
            <section className="parag">
              <h2 className="headh2">Forget Password</h2>
            </section>
            
            <p className="haveacc text-secondary">Enter Your Email Address And Will Send You A Link To Reset Your Password</p>
            <div className="input-container email">
              {/* <i>
                <FaRegEnvelope />{" "}
              </i> */}
              <input id="email" name="email" type="email"  placeholder="&#xf0e0; &nbsp;&nbsp; Your Email" style={{fontFamily:"FontAwesome"}}/>
            </div>
            <Link to='/setpass'>
            <button className="sinbttn" type="submit">
            
              Reset Password
            </button>
            </Link>
            <div className="login">
              <p className="haveacc">
                
                <a href="#">
                  <strong><Link to='/signin'> SIGN IN </Link></strong>
                </a>
              </p>
            </div>
            
            
            
          </form>
        </div>
      </div>
      
    </>
  );
};
export default RestPass;