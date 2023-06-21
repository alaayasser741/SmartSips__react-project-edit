import React, { useState, useEffect } from "react";
import './MyAccount.css'
import { FaPen } from "react-icons/fa";
import Sidebar from "./Sidebar";
import axiosInstance from '../../axios';
import { toast } from "react-toastify";

const MyAccount = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const [image, setImage] = useState(null);
  const [city, setCity] = useState('');
  const [company, setCompany] = useState('');

  localStorage.setItem('adminImage',image)
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
        setCity(response.data[0].city)
        setCompany(response.data[0].company)
      } catch (error) {
        console.log(error);
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
        if (city) {
          requestData.city = city;
        }
        if (company) {
          requestData.company = company;
        }
        const res = await axiosInstance.put(`/user_api/${userId}/userprofile/update`, requestData);
        toast.success('Updated user profile successfully updated');
        console.log(res)

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
        // toast.success('Updated user profile successfully updated');
      } catch (error) {
        console.log(error);
        toast.error('Failed to update user profile');
      }
    }
  };
  return (
    <>
      <Sidebar />
      <div className="container-fluid dashboard_section">
        <div className='container dash_Board_content'>
          <h1>My Account</h1>
          <h4>Welcome!</h4>
          <div className="container  mb-4 ms-lg-3">
            <div className="row">
              <div className="col-lg-5 col-12 acc-left-side me-3 mb-4 ms-lg-5">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <form>

                        {/* Image */}
                        <div id="addPhoto"className=" col mt-4 mb-3" >
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            style={{ display: 'none' }}
                            id="imageInput"
                          />
                          <label htmlFor="imageInput" style={{  borderRadius: '50%', cursor: 'pointer', padding: '.5rem' }}>
                            <img className="imgaccount" src={image == 'http://smartsips-production.up.railway.app/images/upload_to/default.png' ? './icons/Ellipse 13.png' : image} alt="Download" />
                          <span className="nameacc ms-3">{username}</span>

                            <div className="borderpen">
                              <i className="penicon "><FaPen /></i>
                            </div>
                          </label>
                        </div>

                        {/* Admin Info */}
                        <label className="lapelcolor">UserName </label>
                        <input type="text" placeholder="Omar" value={username} onChange={(e) => { setUserName(e.target.value) }} />
                        <label className="lapelcolor">Email</label>
                        <input type="email" placeholder="Omar123@gmail.com" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <label className="lapelcolor">Password </label>
                        <input type="password" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <label className="lapelcolor">Phone Number </label>
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
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-12 acc-left-side mb-3">
                <div className="container">
                  <div className="row">
                    <div className="col-12 mt-4">
                      <form>
                        <label className="lapelcolor">City </label>
                        <input type="text" placeholder="Alex" value={city} onChange={(e) => { setCity(e.target.value) }} />
                        <label className="lapelcolor">Country</label>
                        <input type="text" placeholder="Egypt" value={country} onChange={(e) => { setCountry(e.target.value) }} />
                        <label className="lapelcolor">Address</label>
                        <input type="email" placeholder="22 Bakar Street Alex" value={address} onChange={(e) => { setAddress(e.target.value) }} />
                        <label className="lapelcolor">Company</label>
                        <input type="email" placeholder="Smart Sips" value={company} onChange={(e) => { setCompany(e.target.value) }} />
                        <div className="abutparaa">
                          <button aria-label="submit the form" className="buttonform" onClick={handleSubmit}>Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </>)
}
export default MyAccount;