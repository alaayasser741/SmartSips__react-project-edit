import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar/NavBar";
import './ProfileAccount.css'
import { FaPen } from "react-icons/fa";
const Profile = () => {
    return (
      <>
      <body style={{backgroundColor:"white"}}>
      <NavBar/>
      <div className="rapborder container" >
    <div className="abutpara">
        <h1>Your Account</h1>
        <img src={"./icons/profile.png"} alt="Download" className="imgaccount" />
        <div className="borderpen">
        <i className="penicon "><FaPen/></i></div>
        <p className="paraAccount mt-4">Omar Ashraf</p>
        </div>
        <div className="row ms-lg-5">
              <div className="col-lg-5 col-md-12 infoForm ms-lg-5">
                <label>First Name </label>
                <input type="text" placeholder="Omar" />
                <label>Full Name</label>
                <input type="text" placeholder="Ashraf" />
                <label>Email</label>
                <input type="email" placeholder="Omar123@gmail.com" />
              </div>

              <div className="col-lg-5 col-md-12 infoForm ms-lg-5 ">
                <label>Phone Number </label>
                <input type="text" placeholder="123 671 889" />
                <label>Country</label>
                <input type="text" placeholder="Egypt" />
                <label>Address</label>
                <input type="email" placeholder="22 Bakar Street Alex"/>
              </div>
              </div>
              <div className="abutpara">
                <button className="buttonform">Save</button>
                </div>
              
    </div>
      <Footer/>
      </body>
      </>)}
export default Profile