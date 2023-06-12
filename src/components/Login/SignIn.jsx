import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
import "./Sign.css";
import jwt_decode from 'jwt-decode'
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  FaFacebook,
  FaRegUser,
  FaLock,
  FaRegEyeSlash,
  FaRegEye,
  FaGoogle,
} from "react-icons/fa";
import { toast } from "react-toastify";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [idToken, setIdToken] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');

  const history = useHistory();
  const initialFormData = Object.freeze({
    email: '',
    password: '',
    // username:''
  });

  // Hide or show the password
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post(`/user_api/auth/login/`, {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.access_token);
        localStorage.setItem('userId', res.data.user.pk);
        toast.success('logged in successfully')
        const token = res.data.access_token;
        const email = formData.email;

        // Check if the email exists in the admin table
        axiosInstance
          .get('/user_api/adminprofile/list', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            const adminEmails = res.data.map(admin => admin.email);
            if (adminEmails.includes(email)) {
              // Redirect to the dashboard
              localStorage.setItem('isAdmin', true);

              history.push("/dashboard");
            } else {
              // Redirect to the home page
              history.push("/");
              localStorage.setItem('isAdmin', false);
            }
          })
          .catch(err => {
            console.log(err);
            toast.error('Failed to check admin email');
          });

      }).catch(err => {
        if (err.response.data) {
          const errors = err.response.data;
          let pass = errors.password;
          let email = errors.email;
          let nonField = errors.non_field_errors;

          pass && pass.forEach(i => {
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
    console.log(response)
    setEmail(userObject.email)
    setUserName(userObject.given_name)
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
          toast.success('logged in successfully');
          localStorage.setItem('token', res.data.access_token);
          localStorage.setItem('userId', res.data.user.pk);
          history.push("/");
        })
        .catch(err => {
          if (err.response.data) {
            const errors = err.response.data;
            let userName = errors.access_token;
            let pass = errors.code;
            let pass2 = errors.id_token;
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
            nonField && nonField.forEach(i => {
              toast.error(i)
            })
          }
        });
    }
  }, [idToken]);


  return (
    <>
      <div className="Split-Screen">
        <div className="left-screen">
          <section className="parag">
            <h1 className="headh12">Welcome Back !</h1>
            <img
              className="backimg"
              src="./images/sign in.png "
              alt="Sign Up"
            />
          </section>
        </div>
        <div className="right-screen">
          <form>
            <section className="parag">
              <h2 className="headh2">Sign In</h2>
            </section>
            <div className="input-container name">
              {/* <i>
                <FaRegUser />
              </i> */}
              <input
                id="email"
                name="email"
                type="email"
                placeholder="&#xf007; &nbsp;&nbsp; email"
                className="icon-plac"
                onChange={handleChange}
              />
            </div>

            <div className="input-container pass">
              {/* <i>
                {" "}
                <FaLock />
              </i> */}
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="&#xf023; &nbsp;&nbsp; Password"
                className="icon-plac"
                onChange={handleChange}
              />
              <i className="RegEyeSlash" onClick={handleTogglePassword}>
                {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </i>
            </div>
            <p className="haveacc">
              <Link to="/restpass">Forget Your Password?</Link>
            </p>
            <button className="sinbttn" type="submit" onClick={handleSubmit}>
              SIGN IN
            </button>
            <p className="haveacc">Or social media</p>

            <div id="signInBtn" style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}></div>
            <div className="login">
              <p className="haveacc">
                Don't have an account?
                <a href="#">
                  <strong>
                    <Link to="/signup">SIGN UP</Link>
                  </strong>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>

    </>
  );
};
// export default SignIn;