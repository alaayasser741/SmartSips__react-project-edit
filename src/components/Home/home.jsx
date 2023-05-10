import { Component } from "react";
import "./home.css";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaGooglePlay,
  FaAppStoreIos,
  FaChevronUp,
  FaChevronDown,
  FaRegEnvelope,
  FaRegPaperPlane,
} from "react-icons/fa";
import NavBar from "../Header/NavBar/NavBar";
import Slider from "./slider";
class Home extends Component {
  state = {};
  render() {
    return (
      <>
        
          <NavBar />
          {/* ------------------------start Header----------------------------- */}
          <header className="container mt-5">
            <div className="row">
              <div className="header_leftSide col-lg-5 col-md-6 col-12">
                <h6 className="heading1">
                  YOUR WATER QUALITY IS PART OF YOUR HEALTH.
                </h6>
                <h1>
                  We Give Preference For Your Water.<br></br> Monitoring
                  ,Analysis And Accuracy.
                </h1>
                <p className="header_p">
                  Let's Buy Smart Sips And Download Our Remote <br></br>{" "}
                  Monitoring App.
                </p>
                <button type="button" className="btn header_button">
                  <a href="#/">More</a>
                </button>
              </div>
              <div className="header_rightSide col-lg-5 col-md-3 col-12">
                <div className="fristImg">
                  <img
                    src="./images/pexels-ksenia-chernaya-8054440.jpg"
                    alt="cup of water"
                  />
                </div>
                <div className="secondImg">
                  <img
                    src="./images/pexels-ksenia-chernaya-8054437.jpg"
                    alt="cup of water"
                  />
                </div>
              </div>
            </div>
          </header>
          {/* ################################### End of Header section ############################# */}
          <section className="best_Advantages h-auto">
            <div className="Adv_heading">
              <p>ADVANTAGE</p>
              <h3>Best Advantages</h3>
            </div>
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-md-2 Adv_content">
                  <div className="Adv_icon">
                    <img src={"./icons/construct.png"} alt="constract icon" />
                  </div>
                  <h6>Effectivness</h6>
                  <p className="Adv_p">
                    with our Divce We Provide High Accuracy And Trusted Results.
                  </p>
                </div>

                {/* --------------------------frist adv_content-------------------- */}

                <div className="col-md-2 Adv_content">
                  <div className="Adv_icon">
                    <img src={"./icons/construct.png"} alt="constract icon" />
                  </div>
                  <h6>Free Installation</h6>
                  <p className="Adv_p">
                    The Maintenance Team Will Contact You To Determine Where To
                    Install The Device .
                  </p>
                </div>

                {/* --------------------------second adv_content-------------------- */}

                <div className="col-md-2 Adv_content">
                  <div className="Adv_icon">
                    <img src={"./icons/dashboard.png"} alt="constract icon" />
                  </div>
                  <h6>Real Time Monitoring</h6>
                  <p className="Adv_p">
                    The Device Monitors Changes in Water Quality And Sends
                    Alerts to the User.
                  </p>
                </div>
                {/* --------------------------third  adv_content-------------------- */}
                <div className="col-md-2 Adv_content">
                  <div className="Adv_icon">
                    <img src={"./icons/badge.png"} alt="constract icon" />
                  </div>
                  <h6>Warrantly</h6>
                  <p className="Adv_p">
                    The Warrantly Period Lasts For Two Years,With Any Defects
                    Being Repaired At 50% Discount
                  </p>
                </div>
                {/* --------------------------fourth  adv_content-------------------- */}
              </div>
            </div>
          </section>
          {/* --------------------------End of Advandage section ----------------------------- */}
          <section className="Easy_Fast container h-auto">
            <div className="row justify-content-between">
              <div className="Easy_Fast_LeftSide col-lg-6 col-12 ">
                <h6>EASY AND FAST</h6>
                <h1>Use Smart Sips Device in 3 Easy Steps:</h1>
                <div className="mt-5">
                  <div className="steps container">
                    <div className="row">
                      <div className="left_step col-2">
                        <div className="circle_number">01</div>
                        <div className="line_vertical"></div>
                      </div>
                      <div className="right_step col-9">
                        <h6>Briefing</h6>
                        <p>
                          create your own account on our website,get to know us
                          through the about us page,and finally sign up for any
                          new information.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="steps container">
                    <div className="row">
                      <div className="left_step col-2">
                        <div className="circle_number">02</div>
                        <div className="line_vertical"></div>
                      </div>
                      <div className="right_step col-9">
                        <h6>Processing</h6>
                        <p>
                          you can buy smart sips advice from our website then
                          determine the location of Installation during payment
                          process.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="steps container">
                    <div className="row">
                      <div className="left_step col-2">
                        <div className="circle_number">03</div>
                      </div>
                      <div className="right_step col-9">
                        <h6>Finishing</h6>
                        <p>
                          you can download our app to monitor water quality
                          remotely,you can chat with the admin in case of a
                          malfunction,finally you can send a feedback to us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Easy_Fast_RightSide col-md-6 col-12">
                <Slider />
              </div>
            </div>
          </section>
          <div className="container download-section">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <h5>
                  {" "}
                  <span>D</span>OWNLOAD
                </h5>
                <div className="download-explain">
                  <h1>
                    Download <span>Smart Sips</span> On Your Device.
                  </h1>
                  <p className="p-explain">
                    Smart Sips app is the perfect solution to monitor your water
                    quality to protect your heath from diseases, don't forget to
                    download it for free and use it in an easy way.
                  </p>
                </div>
                <div className="row">
                  <button className="col-lg-6">
                    <div>
                      <i>
                        <FaGooglePlay />
                      </i>
                      <p>Play Store</p>
                    </div>
                  </button>
                  <button className="col-lg-6">
                    <div>
                      <i>
                        {/* <img src={appStore} /> */}
                        <FaAppStoreIos />
                      </i>
                      <p>Apple Store</p>
                    </div>
                  </button>
                </div>
              </div>{" "}
              {/** End of explain */}
              <div className="col-lg-6 col-sm-12 download-image">
                {/* <img src={downloadApp}/>   */}
                <img src="./images/download app.png" alt="Download" />
              </div>{" "}
              {/** End of download image */}
            </div>
          </div>
          {/** End of container of download section ************************************************/}
          <div className="container comments-section">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <h5>TESTIMONIALS </h5>
                <div className="testimonials-title">
                  <h1>What People Say About Us.</h1>
                </div>
              </div>{" "}
              {/** first col */}
              <div className="col-lg-6 col-sm-12 people-comment">
                <div className="mike">
                  <p>
                    "it was a good experience, the order arrived on time and my
                    device was in good quality and effective, it send accurate
                    results in real time,this is not my last deal with them."
                  </p>
                  <br />
                  <p className="name-comment">Mike Tayler</p>
                  <p className="country-comment">cairo,egypt</p>
                </div>{" "}
                {/** mike */}
                <div className="crise">
                  <p>
                    "it was a good experience, the order arrived on time and my
                    device was in good quality and effective, it send accurate
                    results in real time,this is not my last deal with them."
                  </p>
                  <br />
                  <p className="name-comment">Crise Tomas</p>
                  <p className="country-comment">alex,egypt</p>
                </div>{" "}
                {/**crise */}
                <button className="commentUp">
                  <FaChevronUp />
                </button>
                <button className="commentDown">
                  <FaChevronDown />
                </button>
              </div>{" "}
              {/** second col people-comment */}
            </div>{" "}
            {/** row */}
          </div>
          {/* * End of comments-section *************************************************************** */}
          <div className="container subscribe-section">
            <div className="sendIcon">
              <i>
                <FaRegPaperPlane />
              </i>
            </div>
            <div className="sub-content">
              <p>
                {" "}
                Subscribe To Get Information, Latest News And Other Interesting
                Offers About Us
              </p>

              <div className="sub-details row">
                <div className="iconWithEmail col-lg-8 col-12">
                  {/* <i className="emailIcon">
              <FaRegEnvelope />
              </i> */}
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" &#xf0e0; Your Email"
                    style={{ fontFamily: "FontAwesome" }}
                  />
                </div>
                <button className="col-lg-4 col-12">Subscribe</button>
              </div>
            </div>{" "}
            {/** End of container sendIcon */}
          </div>{" "}
          {/** End of container subscribe-section ***************************************************/}
          <Footer />
        
      </>
    );
  }
}

export default Home;
