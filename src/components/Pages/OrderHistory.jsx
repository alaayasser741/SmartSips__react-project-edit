import { Component, useEffect } from "react";
import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar/NavBar";
import "./OrderHistory.css";
import Popup from "../Admin/tables/popup";
import PopuoOrderDetails from "./popup-order-details"
import "./popup-order-details.css"
import { useState } from 'react';
import axiosInstance from "../../axios";

const OrderHistory = () => {
  const [openPopup1, setOpenPopup1] = useState(false);
  const [openPopup2, setOpenPopup2] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [orderId, setOrderId] = useState(0);
  const userId = localStorage.getItem('userId');
  useEffect(() => {
    axiosInstance.get(`/order_api/order/history/${userId}`).then((res) => {
      setOrderData(res.data[0].items)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
    <>

      <NavBar />
      <div className="container orderHistory-section">
        <div className="row">
          <h2>Order History</h2>
          <p className="order-p mt-0">{orderData.length} Orders</p>
          {orderData.map(({ Expected_date, category, image, id }) => {
            return (
              <div className="container order" key={id}>
                <div className="row">
                  <div className="col-12" >
                    <div className="circle-order">
                      {" "}
                      <br />{" "}
                    </div>
                    <p className="dispatch">Dispatched</p>
                    <div className="container big-cont">
                      <div className="row">
                        <div className=" col-lg-8 col-md-12 first-col">
                          <div className="row">
                            <div className="col-md-2">
                              {image && <img src={image} alt="img" />}
                            </div>
                            <div className="col-md-3">
                              <p className="order-p">Category</p>
                              <h5>{category}</h5>
                            </div>
                            <div className="col-md-3">
                              <p className="order-p">Order Id</p>
                              <h5>{id}</h5>
                            </div>
                            <div className="col-md-3">
                              <p className="order-p">Expected Date</p>
                              <h5>{Expected_date}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-3 order-btn">
                          <button aria-label="view order" className="btn" onClick={() => { setOpenPopup1(true); setOrderId(id) }}>View Order Details</button>
                          <button aria-label="get invoice" className="btn" onClick={() => setOpenPopup2(true)}>Get Invoice</button>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}





        </div>
      </div>
      <Footer />
      <Popup openPopup={openPopup2} setOpenPopup={setOpenPopup2}></Popup>
      <PopuoOrderDetails openPopup={openPopup1} setOpenPopup={setOpenPopup1} setOrderID={orderId}></PopuoOrderDetails>

    </>
  );
};
export default OrderHistory;