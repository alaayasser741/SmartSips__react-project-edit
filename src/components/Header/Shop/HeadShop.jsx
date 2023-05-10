import React from "react";
import "./HeadShop.css";
import Product from "./prodect";
import NavBar from "../NavBar/NavBar";
const HeadShop = () => {
  return (
    <>
      
        <NavBar />
        <div className="headShop">
          <div className="container">
            <div className="row">
              <div className="headShop-title col-md-6 col-sm-12">
                <h1>
                  We Give Preference  <br />For Your Water .<br /> Monitoring Analysis And
                  Accuracy.
                </h1>
              </div>
              <div className="headShop-image col-md-6 col-sm-12">
                <div className="circles">
                  <div className="largeCircle"></div>

                  <div className="smallCircle"></div>
                </div>
                <img src="./images/product.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <Product />
      
    </>
  );
};
export default HeadShop;