import React from "react";
import './Setting.css'
import Sidebar from "./Sidebar";

const Setting = () => {
  return (
    <>
      <Sidebar />
      <div className="container-fluid dashboard_section">
        <div className='container   dash_Board_content'>
          <h1>Setting</h1>
          <h4>Welcome!</h4>
          <div className="container  mb-4 ms-lg-3">
            <div className="row">
              <div className="col-lg-5 col-12 sett-left-side me-3 mb-4 ms-lg-5">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <form>
                        <div className=" col mt-4 mb-5">
                          <img src={"./icons/general.png"} alt="Download" className="imgasett" />
                          <span className="namesett ms-3">General</span>



                        </div>
                        <label className="lapelcolor mb-1">Bussiness Name </label>
                        <input type="text" placeholder="Smart Sips" />
                        <label className="lapelcolor mb-1">Contact Name</label>
                        <input type="text" placeholder="Ashraf" />
                        <label className="lapelcolor mb-1">Email</label>
                        <input type="email" placeholder="Omar123@gmail.com" />

                        <label className="lapelcolor mb-1">Phone Number </label>
                        <input type="text" placeholder="123 671 889" />
                        <div className="abutparaa">
                          <button className="buttonform">Update</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

              </div>

              <div className="col-lg-5 col-12  me-3 mb-4 ">
                <div className="container">
                  <div className="row seet-right-side">
                    <div className="col-12">
                      <div className=" col mt-4 mb-5 ">
                        <img src={"./icons/data & privacy.png"} alt="Download" className="imgasett" />
                        <span className="namesett ms-3">Data & Privacy</span>
                      </div>
                      <div className="form-check ms-5 mt-3 ">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label labelCheck" for="flexCheckDefault">
                          Keep User App Activity History
                        </label>
                      </div>
                      <div className="form-check ms-5 mt-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label labelCheck" for="flexCheckDefault">
                          Keep User App Search History
                        </label>
                      </div>
                      <div className="form-check ms-5 mt-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label labelCheck" for="flexCheckChecked">
                          Keep User App  Preferences
                        </label>
                      </div>
                    </div>

                  </div>

                </div>
                <div className="container">
                  <div className="row seet-right-side mt-3">
                    <div className="col-12">
                      <div className=" col mt-4 mb-3">
                        <img src={"./icons/prefences.png"} alt="Download" className="imgasett" />
                        <span className="namesett ms-3">Preferences</span>
                      </div>
                      <div className="row">

                        <div className="col-5"><label className="lapelcolor mb-1">Language</label>
                          <select className="form-select form-select-lg mb-3 " aria-label=".form-select-lg example">
                            <option selected>English</option>
                            <option value="arabic">Arabic</option>


                          </select></div>
                        <div className="col-5"><label className="lapelcolor mb-1">Currency</label>
                          <select className="form-select form-select-lg mb-3 " aria-label=".form-select-lg example">
                            <option selected>$ Us Dollors</option>
                            <option value="egp">EGP</option>
                          </select></div>
                      </div>


                      <label className="lapelcolor mb-1">Time Zone</label>
                      <select className="form-select form-select-lg mb-3 " aria-label=".form-select-lg example">
                        <option selected>Central Standard Time</option>
                        <option value="egypt">Egypt</option>
                        <option value="utc-6">Utc-6</option>
                      </select>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-10 col-12 secendsec me-3 mb-4 ms-lg-5">
                <div className="container overflow-auto">
                  <div className="row">
                    <div className="col-12">

                      <div className=" col mt-4 mb-5">
                        <img src={"./icons/notification.png"} alt="Download" className="imgasett" />
                        <span className="namesett ms-3">Notification</span>
                      </div></div>
                    <div className="row">
                      <div className="col-12 col-lg-6 ">
                        <div className="row">
                          <div className="row mt-2 ms-3">
                            <div className="col">
                              <label className=" mb-1 chek">Message Notification</label></div>
                            <div className="col">
                              <label className="switch ">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                              </label>

                            </div>

                          </div>

                          <div className="row mt-2 ms-3">
                            <div className="col">
                              <label className=" mb-1 chek">Email Notification</label></div>
                            <div className="col">
                              <label className="switch ">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                              </label>

                            </div>

                          </div>
                          <div className="row mt-2 ms-3">
                            <div className="col">
                              <label className=" mb-1 chek">New Device is Linked</label></div>
                            <div className="col">
                              <label className="switch ">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                              </label>

                            </div>

                          </div>


                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="row">
                          <div className="row mt-2 ms-3">
                            <div className="col-8">
                              <label className=" mb-1 chek">Information On New Products</label></div>
                            <div className="col">
                              <label className="switch ">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                              </label>

                            </div>

                          </div>

                          <div className="row mt-2 ms-3">
                            <div className="col-8">
                              <label className=" mb-1 chek">Information On New Orders</label></div>
                            <div className="col">
                              <label className="switch ">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                              </label>

                            </div>

                          </div>
                          <div className="row mt-2 ms-3">
                            <div className="col-8">
                              <label className=" mb-1 chek">Information On New Customers</label></div>
                            <div className="col">
                              <label className="switch ">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                              </label>

                            </div>

                          </div>


                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>



            </div>

          </div>
        </div>  {/* ----- end row----- */}
      </div>
    </>)
}
export default Setting;