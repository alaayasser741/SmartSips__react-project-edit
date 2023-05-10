import React from "react";
import Footer from "../../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import './productdetail.css';
import {
  FaStar,
} from "react-icons/fa";  
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import SuccCart from "./succCart"
import SuccWashlist from "./succWishlist"

 

const colors={
  orange:"orange",
  grey:"gray",
}

const ProductDetail = () => {
  const [openPopup1, setOpenPopup1] = useState(false);
  const [openPopup2, setOpenPopup2] = useState(false);
    const[countqty,setCountqty]=useState(0);
    const stars=Array(5).fill(0);
    const[currentvalue,setCurrentvalue]=useState(0);
    const[hoverValue,setHoverValue]=useState(undefined);


    const handelClick=value=>{
      setCurrentvalue(value)
    };
    const handelMouseOver=value=>{
      setHoverValue(value)
    };
    const handelMouseleave=value=>{
      setHoverValue(undefined)
    };

    return ( <>
    
     <NavBar/>
      <div className="headShop">
        <div className="container">
          <div className="row">
            <div className="headShop-title col-md-6 col-sm-12">
              <h1>
                We Give Preference  <br/>For Your Water .<br/> Monitoring Analysis And
                Accuracy.
              </h1>
            </div>
            <div className="headShop-image col-md-6 col-sm-12">
              <div className="circles">
                <div className="largeCircle"></div>

                <div className="smallCircle"></div>
              </div>
              <img src="./images/product.png" alt="headerproduct" />
            </div>
          </div>
        </div>
      </div>
      <div className="product_detail_section container ">
           <div className="row" >
            <div className="product_detail_section_left col-lg-4 col-10">
            <img src="./images/product.png" alt="ourproduct" />
            </div>
            <div className="product_detail_section_right col-lg-6 col-10" >
                <h4 className="product_detail_section_right_title">Smart Sips Device</h4> 
                <p className="product_detail_section_right_category">Device</p>  
                <div className="product_detail_section_right_stars d-flex mb-4 ">
                    {stars.map((_,index)=>{
                      return(
                        < FaStar 
                        size={22} 
                        key={index}
                        style={{
                          marginRight:10,
                          cursor:"pointer"
                        }}
                        color={(hoverValue || currentvalue) > index ? colors.orange : colors.grey}
                        onClick={()=>handelClick(index+1)}
                        onMouseOver={()=>handelMouseOver(index+1)}
                        onMouseLeave={handelMouseleave}
                        />
                      )
                    })}
                    
                </div>
                <p className="product_detail_section_right_description">High Quality!Three Stage Whole House Water Filtration Syschlorine,bad tast,odors& other harmful media\r\n\r\nStage three: 10\"x2-1/2\" Five-micron Carbon Block filter remove residual chlorine, bad taste, Odors ,
                Volatile Organic Chemicals (VOC) like pesticides,
                herbicides, and industrial chemicals</p>
                <div className="product_detail_section_right_available container">
                    <div className="row">
                        <div className="col-7">
                            <p className="product_detail_section_right_p" >Available In Stock</p>
                        </div>
                        <div className="col-5 container">
                            <div className="row justify-content-around">
                                <div className="col-2">
                                    <p className="product_detail_section_right_p">QTY</p>
                                </div>
                                <div className="col-5 d-flex justify-content-between product_detail_section_right_QTY">
                                    <p className="QTYpositive" onClick={()=>{setCountqty(countqty+1)}}>+ </p>
                                    <p className="QTYcount">{countqty} </p>
                                    <p className="QTYnegative" onClick={()=>{setCountqty(countqty-1)}}>-</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className="container">$1200</h3>
                <div className="container product_detail_section_right_buttons">
                    <div className="row product_detail_section_right_buttons_space">
                    <div className="col-5 mt-3 ">
                    {/* <Link to="/cart"><button className="butAdd">ADD TO CARD</button></Link> */}
                    <button className="butAdd" onClick={() => setOpenPopup1(true)}>ADD TO CARD</button>
                    </div>
                    <div className="col-5 mt-3 ">
                    {/* <Link to="/wishlist"><button className="butAdd " >ADD TO Wishlist</button></Link> */}
                    <button className="butAdd " onClick={() => setOpenPopup2(true)}>ADD TO Wishlist</button>
                    </div>
                    </div>
                </div>
            </div>
           </div>
      </div>
    <Footer/>
     <SuccCart openPopup={openPopup1} setOpenPopup={setOpenPopup1}></SuccCart>
      <SuccWashlist openPopup={openPopup2} setOpenPopup={setOpenPopup2}></SuccWashlist>
    
    </> );
}
 
export default ProductDetail;