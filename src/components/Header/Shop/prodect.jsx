import React from "react";
import "./prodect.css";
import { useState, useRef, useEffect } from "react";
import RangeSlider from "./rangeslider";
import ProData from "../../../productss.json";
import ProductItem from "./productitem";
import "jquery/dist/jquery.js";
import $ from "jquery";
import "ion-rangeslider/css/ion.rangeSlider.min.css";
import "ion-rangeslider/js/ion.rangeSlider.min.js";
import Footer from "../../Footer/Footer";
import axiosInstance from "../../../axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      max: 3000,
      from: 200,
      to: 2000,
      grid: false,
      skin: "round",
      postfix: "$",
      step: 100,
      hide_min_max: true,
    });
    axiosInstance.get('/products_api/product/all')
      .then(res => {
        setProducts(res.data);
        setFiltered(res.data);
      })
      .catch(err => {
        console.log(err);
      })

  }, [])

  const hanadleCategory = (cat = 0) => {
    if (cat === 0) {
      const clone = [...products]
      setFiltered(clone)
    } else {
      const clone = [...products]
      const filtered = clone.filter(item => item.category === cat)
      setFiltered(filtered)
    }

  }

  return (
    <>
      <div className="container product-section">
        <div className="row">
          <div className="col-lg-4 col-md-3  col-12 filter-product">
            <div className="catogries">
              <label>Catogries</label>
              <ul>
                <li onClick={() => hanadleCategory(0)}>All</li>
                <li onClick={() => hanadleCategory(2)}>Device</li>
                <li onClick={() => hanadleCategory(1)}>Accessories</li>
                <li onClick={() => hanadleCategory(3)}>gadgets</li>
              </ul>
            </div>{" "}
            {/** Catogries */}
            <div className="filter" style={{ width: "200px" }}>
              <label>Filter By:</label>
              <p>Price</p>
              <input
                type="text"
                className="js-range-slider"
                name="my_range"
                value=""
              />
              {/* <!-- Double range slider (flat design)  --> */}
              {/* <MultiRangeSlider min={0} max={1000} /> */}
            </div>{" "}
            {/** filter */}
            <div className="sort">
              <label>Sort By:</label>

              <div className="checkbox form-check">
                <input
                  id="chkPopular"
                  type="checkbox"
                  className="form-check-input"
                />
                <label
                  className="form-check-lable"
                  htmlFor="chkPopular "
                  checked
                >
                  Popular
                </label>
              </div>
              <div className="checkbox form-check">
                <input
                  id="chkPopular"
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="form-check-lable" htmlFor="chkNewest">
                  Newest
                </label>
              </div>
              <div className="checkbox form-check">
                <input
                  id="chkPopular"
                  type="checkbox"
                  className="form-check-input"
                />
                <label className="form-check-lable" htmlFor="chkOldest">
                  Oldest
                </label>
              </div>
            </div>{" "}
            {/** filter */}
          </div>{" "}
          {/*end of filter-product*/}
          <div className="products_Pages_Data col-lg-7 col-md-9 col-12 h-auto">
            <ProductItem data={filtered} />
          </div>
        </div>
      </div>{" "}
      {/** ENd of product-section **/}
      <Footer />

    </>
  );
}

export default Product;