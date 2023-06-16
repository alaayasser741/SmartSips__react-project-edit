import React from "react";
import './AboutUs.css'
import NavBar from "../Header/NavBar/NavBar";
import Footer from "../Footer/Footer";
const AboutUs = () => {
  return (<>

    <NavBar />
    <div className="rapborder container">
      <div className="abutpara"><h1>About Us</h1></div>
      <div className="container download-section">
        <div className="row mb-5">
          <div className="col-lg-5 col-sm-12 ms-5">

            <div className="explainn">
              <h1>
                Our Vision
              </h1>
              <p className="para-explain">
                We Are A Team in The College of Computer Science Working On
                Creating A Product That Analyzes Water Periodically To Product Our Health
                From Polluted Water That We Drink Or Use For Irrigation Which May Causes Plant Disesses.
              </p>
            </div>
          </div>

          <div className="col-lg-5 col-sm-12 download-image ms-5">

            <img src="./images/aboutus1.png" alt="Download" />
          </div>


        </div>
        {/* {'rowww'} */}
        <div className="row margrow mt-5">
          <div className="col-lg-5 col-sm-12 download-image me-5">

            <img src="./images/ourteam1.png" alt="Download" />
          </div>{" "}


          <div className="col-lg-5 col-sm-12 ms-5">

            <div className="explainn">

              <p className="para-explain mt-5">
                This Product Will Be Put Into Pure Water Centers To Determine Suitability For Drinking.
                In Water Tanks In Homes Or Near Water Filters In Faucets To Determine Filter Efficiency.
              </p>
              <p className="para-explain mt-5">
                Thess Sensor Collect And Anallyze Data In Real
                Time Upload it To The Server, And Then Display This Results
                On Our Mobile App DashBoard Which User Will Download it
                TO Monitor Concentrations Remotely Generated items And Warnings
              </p>
            </div>
          </div>

        </div>
        {/* {'roww'} */}
      </div>
    </div>
    <Footer />

  </>)
}
export default AboutUs;