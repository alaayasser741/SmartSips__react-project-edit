import React from "react";
import Footer from "../../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import './productdetail.css';
import {
  FaStar,
} from "react-icons/fa";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import SuccCart from "./succCart"
import SuccWashlist from "./succWishlist"
import axiosInstance from "../../../axios";
import Product from "./prodect";


const colors = {
  orange: "orange",
  grey: "gray",
}

const ProductDetail = () => {
  const [openPopup1, setOpenPopup1] = useState(false);
  const [openPopup2, setOpenPopup2] = useState(false);
  const [countqty, setCountqty] = useState(1);
  const stars = Array(5).fill(0);
  const [currentvalue, setCurrentvalue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const userId = localStorage.getItem('userId');
  const cartId = localStorage.getItem('cart_id');
  const cartId2 = localStorage.getItem('cartID');
  useEffect(() => {
    axiosInstance.get('/products_api/product/all')
      .then(allProductsRes => {
        const allProducts = allProductsRes.data;
        const filteredProducts = allProducts.filter(product => product.id == id);
        setProducts(filteredProducts);
        console.log(filteredProducts)
      })
      .catch(err => {
        console.log(err);
      });
  }, [cartId]);

  const handelClick = value => {
    setCurrentvalue(value)
  };
  const handelMouseOver = value => {
    setHoverValue(value)
  };
  const handelMouseleave = value => {
    setHoverValue(undefined)
  };

  // ? handle WishList
  const handleWishList = (p_id) => {
    axiosInstance.post('/products_api/wishlist/add', {
      "product": [p_id],
      "user_wishlist": userId
    })
      .then(res => {
        setOpenPopup2(true)
      })
      .catch(err => console.log(err))
  }
  // ! handle cart
  const handleCart = (p_id) => {
    console.log(cartId)
    if (cartId) {
      axiosInstance.post(`order_api/item/create`,
        {
          "product": p_id,
          "qnt": countqty,
          "cart": cartId
        }
      )
        .then(res => {
          setOpenPopup1(true)
        })
        .catch(err => console.log(err, 'updated cart'))
    } else if (cartId2 != null) {
      axiosInstance.post(`order_api/item/create`,
        {
          "product": p_id,
          "qnt": countqty,
          "cart": cartId2
        }
      )
        .then(res => {
          setOpenPopup1(true)
        })
        .catch(err => console.log(err, 'cartId2 cart'))
    }
    else {
      axiosInstance.post('/order_api/cart/create', {
        "user": userId,
        "items": [
          {
            "product": p_id,
            "qnt": countqty
          }
        ]
      })
        .then(res => {
          localStorage.setItem('cart_id', res.data.id)
          setOpenPopup1(true)
        })
        .catch(err => console.log(err, 'created cart'))
    }
  }
  const qtyCountMins = (qnt) => {
    if (qnt == 0) {
      return null
    } else {
      const updatedQuantity = qnt - 1;
      setCountqty(updatedQuantity);
    }
  }
  return (<>

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
            <img src={process.env.PUBLIC_URL + '/images/product.png'} alt="headerproduct" />
          </div>
        </div>
      </div>
    </div>
    <div className="product_detail_section container ">
      {products.map((p) => {
        return (
          <div className="row" >
            <div className="product_detail_section_left col-lg-4 col-10">
              <img src={p.image} alt="ourproduct" />
            </div>
            <div className="product_detail_section_right col-lg-6 col-10" >
              <h4 className="product_detail_section_right_title">{p.title}</h4>
              <p className="product_detail_section_right_category">{p.category === 1 ? 'Accessories' : p.category === 2 ? 'Device' : 'Gadgets'}</p>
              <div className="product_detail_section_right_stars d-flex mb-4 ">
                {stars.map((_, index) => {
                  return (
                    < FaStar
                      size={22}
                      key={index}
                      style={{
                        marginRight: 10,
                        cursor: "pointer"
                      }}
                      color={(hoverValue || currentvalue) > index ? colors.orange : colors.grey}
                      onClick={() => handelClick(index + 1)}
                      onMouseOver={() => handelMouseOver(index + 1)}
                      onMouseLeave={handelMouseleave}
                    />
                  )
                })}

              </div>
              <p className="product_detail_section_right_description">{p.descriptio ? p.descriptio : p.title}</p>
              <div className="product_detail_section_right_available container">
                <div className="row">
                  <div className="col-7">
                    <p className="product_detail_section_right_p" >{p.stock > 0 ? 'Available In Stock' : 'Out of stock'}</p>
                  </div>
                  <div className="col-5 container">
                    <div className="row justify-content-around">
                      <div className="col-2">
                        <p className="product_detail_section_right_p">QTY</p>
                      </div>
                      <div className="col-5 d-flex justify-content-between product_detail_section_right_QTY">
                        <p className="QTYpositive" onClick={() => { setCountqty(countqty + 1) }}>+ </p>
                        <p className="QTYcount">{countqty} </p>
                        <p className="QTYnegative" onClick={() => { qtyCountMins(countqty) }}>-</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="container">{p.price}$</h3>
              <div className="container product_detail_section_right_buttons">
                <div className="row product_detail_section_right_buttons_space">
                  <div className="col-5 mt-3 ">
                    <button aria-label="Add to cart" className="butAdd" onClick={() => handleCart(p.id)}>ADD TO CARD</button>
                  </div>
                  <div className="col-5 mt-3 ">
                    <button aria-label="Add to wishlist" className="butAdd " onClick={() => handleWishList(p.id)}>ADD TO Wishlist</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
    <Footer />
    <SuccCart openPopup={openPopup1} setOpenPopup={setOpenPopup1}></SuccCart>
    <SuccWashlist openPopup={openPopup2} setOpenPopup={setOpenPopup2}></SuccWashlist>

  </>);
}

export default ProductDetail;