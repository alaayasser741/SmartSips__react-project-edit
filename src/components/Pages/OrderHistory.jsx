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

  useEffect(() => {
    axiosInstance.get('/order_api/order/history').then((res) => {
      setOrderData(res.data)
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
          <p className="order-p mt-0">3 Orders</p>
          {orderData.map(({ delivery_date, category, image, id }) => {
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
                              <img src={image} />
                            </div>
                            <div className="col-md-3">
                              <p className="order-p">{category}</p>
                              <h5>Solar Panal</h5>
                            </div>
                            <div className="col-md-3">
                              <p className="order-p">Order Id</p>
                              <h5>{id}</h5>
                            </div>
                            <div className="col-md-3">
                              <p className="order-p">Expected Date</p>
                              <h5>{delivery_date}</h5>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-3 order-btn">
                          <button className="btn" onClick={() => { setOpenPopup1(true); setOrderId(id) }}>View Order Details</button>
                          <button className="btn" onClick={() => setOpenPopup2(true)}>Get Invoice</button>
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