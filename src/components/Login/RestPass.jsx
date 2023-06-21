import React, { useState } from "react";
import "./Sign.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios";

const RestPass = () => {
  const [email, setEmail] = useState('');
  const [isSet, setIsSet] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== '') {

      axiosInstance
        .post(`/password/reset/`, {
          email: email,
        })
        .then((res) => {
          setIsSet(true)
        })
        .catch(err => {
          setIsSet(false)
        })
    }
  };
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
              <h2 className="headh2">Forget Password</h2>
            </section>

            <p className="haveacc text-secondary">Enter Your Email Address And Will Send You A Link To Reset Your Password</p>
            <div className="input-container email">
              <input onChange={(e) => { setEmail(e.target.value) }} id="email" name="email" type="email" placeholder="&#xf0e0; &nbsp;&nbsp; Your Email" style={{ fontFamily: "FontAwesome" }} />
            </div>
            <button onClick={handleSubmit} aria-label="submit the form" className="sinbttn" type="submit">
              Reset Password
            </button>
            {isSet ? <span>Please Check your Email</span>:null}
            <Link to='/setpass'>
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