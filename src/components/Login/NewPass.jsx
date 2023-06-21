import React, { useState } from "react";
import "./Sign.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {

    FaLock,
  FaRegEnvelope,
 
} from "react-icons/fa";

const NewPass = () => {

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
              src="./images/signup.png "
              alt="Sign Up"
            />
          </section>
        </div>
        <div className="right-screen">
          <form>
            <section className="parag">
              <h2 className="headh2">Choose New Password</h2>
            </section>
            
            <p className="haveacc text-secondary"> Please Enter A New Password That Is At Least 5 Characters In Length</p>
            <div className="input-container pass">
              {/* <i>
                <FaLock />
              </i> */}
              <input
                id="pass"
                name="fname"
                type="password"
                placeholder="&#xf023; &nbsp;&nbsp; Password"
                style={{fontFamily:"FontAwesome"}}
                
              />
            </div>
           
            <button aria-label="submit the form" className="sinbttn" type="submit">
              Set Password
            </button>
            
            
            
            
          </form>
        </div>
      </div>
     
    </>
  );
};
export default NewPass;