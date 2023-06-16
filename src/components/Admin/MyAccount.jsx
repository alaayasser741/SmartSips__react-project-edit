import React from "react";
import './MyAccount.css'
import { FaPen } from "react-icons/fa";
import Sidebar from "./Sidebar";
const MyAccount = () => {
  return (
    <>

      {/* <section className="customers-section">
        <div className="headCustomers">
          <div className="container">
            <h3>My Account</h3>
            <h5 className="ms-2">&nbsp; Welcome!</h5>
          </div>
        </div>{" "}
        
      </section> */}
      <Sidebar/>
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
                        <div className=" col mt-4 mb-3">
                          <img src={"./icons/Ellipse 13.png"} alt="Download" className="imgaccount" />
                          <span className="nameacc ms-3">Omar Ashraf</span>

                          <div className="borderpenn">
                            <i className="penicon "><FaPen /></i>
                          </div>

                        </div>
                        <label className="lapelcolor">First Name </label>
                        <input type="text" placeholder="Omar" />
                        <label className="lapelcolor">Full Name</label>
                        <input type="text" placeholder="Ashraf" />
                        <label className="lapelcolor">Email</label>
                        <input type="email" placeholder="Omar123@gmail.com" />
                        <label className="lapelcolor">Password </label>
                        <input type="password" placeholder=". . . . . . . . ." />
                        <label className="lapelcolor">Phone Number </label>
                        <input type="text" placeholder="123 671 889" />
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
                        <input type="text" placeholder="Alex" />
                        <label className="lapelcolor">Country</label>
                        <input type="text" placeholder="Egypt" />
                        <label className="lapelcolor">Address</label>
                        <input type="email" placeholder="22 Bakar Street Alex" />
                        <label className="lapelcolor">Company</label>
                        <input type="email" placeholder="Smart Sips" />
                        <label className="lapelcolor">About Me</label>
                        <textarea disabled className="text-area" rows="5">Man with 40 years has many experience,
                          ilove programmong and work in 3 companies in past ,
                          now  work as admin in Smart Sips company  </textarea>
                        <div className="abutparaa">
                          <button aria-label="Submit the form" className="buttonform">Save</button>
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