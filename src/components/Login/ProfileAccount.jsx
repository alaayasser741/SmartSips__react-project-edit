import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar/NavBar";
import './ProfileAccount.css'
import { FaPen } from "react-icons/fa";
import axiosInstance from '../../axios';
import { toast } from "react-toastify";
import { borderRadius } from "@mui/system";

const Profile = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const [image, setImage] = useState(null);


  const validatePhone = (value) => {
    const prefixRegex = /^(011|010|012|015)/;
    if (value == '') {
      setPhoneErrorMessage('');

    } else if (!prefixRegex.test(value) || value.length !== 11) {
      setPhoneErrorMessage('Phone number should start with 011, 010, 012, or 015');
    }
    else {
      setPhoneErrorMessage('');
    }
  };



  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const fetchUserProfiles = async () => {
      try {
        const response = await axiosInstance.get(`/user_api/${userId}/userprofile/get`);
        setAddress(response.data[0].address)
        setCountry(response.data[0].country)
        setEmail(response.data[0].email)
        setPhone(response.data[0].phone_number)
        setUserName(response.data[0].username)


      } catch (error) {
        console.log(error);
        console.log('failed to get user')
      }
    };
    fetchUserProfiles();


    // Image
    const fetchUserImage = async () => {
      try {
        const response = await axiosInstance.get(`/imageupload/${userId}/imageupload/`);
        setImage(response.data[0].profile_photo)


      } catch (error) {
        console.log(error);
        console.log('failed to get user')
      }
    };
    fetchUserImage();

  }, [])

  const userId = localStorage.getItem('userId');
  const handleSubmit = (e) => {
    e.preventDefault();

    const updateUserProfile = async () => {

      try {
        validatePhone(phone);
        if (phoneErrorMessage) {
          toast.warn('Ensure to add valid phone number');
          return; // Don't proceed with the API request if there's an error
        }
        const requestData = {
        };
        if (username) {
          requestData.username = username;
        }
        if (email) {
          requestData.email = email;
        }
        if (password) {
          requestData.password = password;
        }
        if (phone) {
          requestData.phone_number = phone;
        }
        if (address) {
          requestData.address = address;
        }
        if (country) {
          requestData.country = country;
        }
        const res = await axiosInstance.put(`/user_api/${userId}/userprofile/update`, requestData);
        console.log(res)
        toast.success('Updated user profile successfully updated');

      } catch (error) {
        console.log(error);
        toast.error('Failed to Update User Profile');

      }
    }

    updateUserProfile();
  }
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageDataUrl = reader.result;
      setImage(imageDataUrl);
    };

    if (file) {
      reader.readAsDataURL(file);
      try {
        const formData = new FormData();
        formData.append('profile_photo', file);

        const res = await axiosInstance.patch(`/imageupload/${userId}/imageupload/${userId}/`, formData);
        console.log(res);
        // toast.success('Updated user profile successfully updated');
      } catch (error) {
        console.log(error);
        toast.error('Failed to update user profile');
      }
    }
  };
  return (
    <>
      <NavBar />
      <div className="rapborder container" >
        <div className="abutpara">
          <h1>Your Account</h1>
          <div id="addPhoto" >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
              id="imageInput"
            />
            <label htmlFor="imageInput" style={{ border: '2px solid #ccc', borderRadius: '50%',cursor:'pointer',padding:'.5rem' }}>
              <img src={image} alt="Download" className="imgaccount" />
              <div className="borderpen">
                <i className="penicon "><FaPen /></i>
              </div>
            </label>
          </div>
          <p className="paraAccount mt-4">{username}</p>
        </div>
        <div className="row ms-lg-5">
          <div className="col-lg-5 col-md-12 infoForm ms-lg-5">
            <label>username</label>
            <input type="text" placeholder="Omar" value={username} onChange={(e) => { setUserName(e.target.value) }} />
            <label>Password</label>
            <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <label>Email</label>
            <input type="email" placeholder="Omar123@gmail.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
          </div>

          <div className="col-lg-5 col-md-12 infoForm ms-lg-5 ">
            <label>Phone Number </label>
            <input
              type="text"
              placeholder="123 671 889"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                validatePhone(e.target.value);
              }}
            />
            {phoneErrorMessage && <p style={{ color: 'red' }}>{phoneErrorMessage}</p>}

            <label>Country</label>
            <input type="text" placeholder="Egypt" value={country} onChange={(e) => { setCountry(e.target.value) }} />
            <label>Address</label>
            <input type="email" placeholder="22 Bakar Street Alex" value={address} onChange={(e) => { setAddress(e.target.value) }} />
          </div>
        </div>
        <div className="abutpara">
          <button className="buttonform" onClick={handleSubmit}>Save</button>
        </div>

      </div>
      <Footer />

    </>)
}
export default Profile