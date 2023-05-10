import { Component ,useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./Cart.css";

// import { useState } from "react";

const Cart = () => {
  const[countqty,setCountqty]=useState(0);
  
  return (
    <>
    
    <NavBar/>
      <div className="container cart-section">
        <div className="row">
          <div className="cart col-xl-9 col-lg-8">
            <h2>Your Cart</h2>
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
                <div className="col-md-2 cart-count ">
                  <div className="m-auto ">
                  <button onClick={()=>{setCountqty(countqty+1)}}>+</button>
                  <h4 className="count-h4">{countqty}</h4>
                  <button className='mins' onClick={()=>{setCountqty(countqty-1)}}>-</button>
                </div>
                </div>
                <div className="col-md-2">
                  <h4 className="norm-h4">300$</h4>
                </div>
                <div className="col-md-2">
                  <button className="cart-eliminate">X</button>
                </div>
                
              </div>
            </div>
            {/** Cart details*/}
            
           
          </div>{" "}
          {/************** Cart ***************/}
          <div className="summary-cart col-lg-4 col-md-5 col-7 col-xl-3">
            <h2>Summary</h2>
            <div className="summary-details">
              <table>
                <tr>
                  <th>3 ITEMS</th>
                  <td>$</td>
                </tr>
                <tr>
                  <th>SHIPPING</th>
                  <td>$</td>
                </tr>
                <tr>
                  <th>
                    <label for="code">ADD COUPON CODE</label>
                  </th>
                </tr>
                <tr>
                  <input
                    type="text"
                    id="code"
                    name="code"
                    placeholder="Enter Your Code"
                  />
                </tr>

                <tr>
                  {" "}
                  <hr />{" "}
                </tr>
                <tr>
                  <th>TOTAL PRICE</th>
                  <td>$</td>
                </tr>
                <tr>
                  <td style={{ paddingLeft: "20px", paddingTop: "10px" }}>
                  <Link to='/checkout'><button className="btn"> CHEACK OUT </button></Link>
                  </td>
                </tr>
              </table>
            </div>
          </div>{" "}
          {/************** sammary ***************/}
        </div>
      </div>
      <Footer/>
      
      
    </>
  );
};
export default Cart;