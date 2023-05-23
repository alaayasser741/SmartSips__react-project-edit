import React, { useState, useEffect } from "react";
import axiosInstance from "../../axios";
import { useHistory } from "react-router-dom";
import "./Sign.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import jwt_decode from 'jwt-decode'

import {
  FaFacebook,
  FaRegUser,
  FaRegEnvelope,
  FaLock,
  FaGoogle,
  FaRegEyeSlash,
  FaRegEye,
  FaAddressCard,
} from "react-icons/fa";
import { toast } from "react-toastify";


export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [idToken, setIdToken] = useState('');

  const history = useHistory();
  const initialFormData = Object.freeze({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [formData, updateFormData] = useState(initialFormData);
  // Hide or show the password
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleTogglePassword2 = () => {
    setShowPassword2((prevShowPassword) => !prevShowPassword);
  };
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`/user_api/auth/registration/`, {
        email: formData.email,
        username: formData.username,
        password1: formData.password1,
        password2: formData.password2,
      })
      .then((res) => {
        toast.success('User registered successfully , you will redirect to login page in 3 seconds ...')
        setTimeout(() => {
          history.push("/signin");
        }, 3000);

      })
      .catch(err => {
        if (err.response.data) {
          const errors = err.response.data;
          let userName = errors.username;
          let pass = errors.password1;
          let pass2 = errors.password2;
          let email = errors.email;
          let nonField = errors.non_field_errors;
          userName && userName.forEach(i => {
            toast.error(i)
          })
          pass && pass.forEach(i => {
            toast.error(i)
          })
          pass2 && pass2.forEach(i => {
            toast.error(i)
          })
          email && email.forEach(i => {
            toast.error(i)
          })
          nonField && nonField.forEach(i => {
            toast.error(i)
          })
        }

      })
  };

  //! Start Google SignUp 
  const handleCallbackResponse = (response) => {
    // Handle Google sign-in response here
    setIdToken(response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject)
  };

  useEffect(() => {
    /* global google */
    const clientId = "413583069200-o26le90g9p1828u7ha1hsqefua6rg4vi.apps.googleusercontent.com";

    google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCallbackResponse,

    });
    google.accounts.id.renderButton(
      document.getElementById("signInBtn"),
      { theme: 'filled', size: "large" }
    )
  }, [])

  useEffect(() => {
    if (idToken) {
      axiosInstance
        .post(`/google/connect/`, {
          access_token: idToken,
          id_token: idToken,
        })
        .then((res) => {
          toast.success('Singed up successfully');
          localStorage.setItem('token', res.data.access_token);
          localStorage.setItem('userId', res.data.user.pk);
          history.push("/");
        })
        .catch(err => {
          toast.error("Singed up failed")
        });
    }
  }, [idToken]);
  //! End Google SignUp 

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
              <h2 className="headh2">Sign Up</h2>
            </section>
            <div className="input-container name">
              {/* <i>
                <FaRegUser />
              </i> */}
              <input
                id="username"
                name="username"
                type="text"
                placeholder="&#xf007; &nbsp;&nbsp; User Name"
                className="icon-plac"
                autoComplete="username"
                onChange={handleChange}
              />
            </div>
            <div className="input-container email">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="&#xf0e0; &nbsp;&nbsp; Your Email"
                className="icon-plac"
                autoComplete="email"
                onChange={handleChange}
              />
            </div>
            <div className="input-container pass">
              <input
                id="password1"
                name="password1"
                type={showPassword ? 'text' : 'password'}
                placeholder="&#xf023; &nbsp;&nbsp; Password"
                className="icon-plac"
                autoComplete="current-password"
                onChange={handleChange}
              />
              <i className="RegEyeSlash" onClick={handleTogglePassword}>
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </i>
            </div>
            <div className="input-container pass">
              <input
                id="password2"
                name="password2"
                type={showPassword2 ? 'text' : 'password'}
                placeholder="&#xf023; &nbsp;&nbsp; Password"
                className="icon-plac"
                autoComplete="current-password"
                onChange={handleChange}
              />
              <i className="RegEyeSlash" onClick={handleTogglePassword2}>
                {showPassword2 ? <FaRegEyeSlash /> : <FaRegEye />}
              </i>
            </div>
            <button className="sinbttn" type="submit" onClick={handleSubmit}>
              SIGN UP
            </button>
            <p className="haveacc">Or social media</p>
            <div id="signInBtn" style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}></div>

            <div className="login">
              <p className="haveacc">
                Already have an account?
                <a href="#">
                  <strong>
                    <Link to="/signin"> SIGN IN </Link>
                  </strong>
                </a>
              </p>
            </div>
          </form>
        </div >
      </div >

    </>
  );
}
