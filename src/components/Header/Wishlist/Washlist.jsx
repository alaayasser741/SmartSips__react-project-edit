import React from "react";
import Footer from "../../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import './Washlist.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SuccCart  from "../Shop/succCart";
import { useState } from "react";
const Wishlist = () => {
  const [openPopup, setOpenPopup] = useState(false);
    return (<>
    
     <body style={{backgroundColor:"white"}}>
      <NavBar/>

      <div className="container cart-section">
        <div className="row">
          <div className="cart col-xl-12 col-lg-12">
            <h2>WishList</h2>
            <div className="row">
            <div className="col-md-2 ms-1 mt-2">
                  <p className="norm-h4 pgray">Product</p>
                </div>
                <div className="col-md-2 mt-2 ms-5">
                  
                  <p className="count-h4 pgray"></p>
                  
                </div>
                <div className="col-md-2 mt-2">
                  
                  <p className="count-h4 pgray">Unit price</p>
                  
                </div>
                <div className="col-md-2 mt-2">
                  
                  <p className="count-h4 pgray">Stock Status</p>
                  
                </div>
                </div>
            <div className="cart-details container">
              <div className="row">
                <div className="col-md-2">
                  <img src="../images/soalar.png" />
                </div>
                <div className="col-md-2">
                  <p>Accessories</p>
                  <h4 style={{ marginTop: "0px" }} className="norm-h4">
                    Solar Panal
                  </h4>
                </div>
                <div className="col-md-2">
                  <h4 className="norm-h4">300$</h4>
                </div>
                <div className="col-md-2 mt-3">
                  
                  <h5 className="count-h4">In Stock</h5>
                  
                </div>
                <div className="col-md-2 mt-3 butadd">
                  <button className="butAdd" onClick={() => setOpenPopup(true)}>ADD TO CART</button>
                  {/* <Link to="/cart"><button className="butAdd" >ADD TO CART</button></Link> */}
                </div>
                <div className="col-md-2 ">
                  <button className="cart-eliminatee wishdel">X</button>
                </div>
              </div>
            </div>
            </div>
            </div></div>
            <SuccCart openPopup={openPopup} setOpenPopup={setOpenPopup}></SuccCart>

    <Footer/>
    </body>
    </>)}
    export default Wishlist;