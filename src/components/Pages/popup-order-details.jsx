import { DialogContent, DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import React, { useState, useEffect } from "react";
import "./popup-order-details.css";
import axiosInstance from "../../axios";

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup, setOrderID } = props;
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    if (openPopup == true) {
      axiosInstance.get(`/order_api/${setOrderID}/list`).then((res) => {
        setOrderData(res.data)
      }).catch((err) => {
        console.log(err)
      })
    }
  }, [openPopup])
  const filteredOrder = orderData.filter((order) => order.id === setOrderID);
  return (
    <>
      <Dialog open={openPopup}>
        <DialogTitle>
          <div style={{ textAlign: "center", height: "60px" }}>
            {" "}
            <img src="./icons/Smart Sips.png" style={{ width: "180px" }} />
            <button
              className="invoiceClose"
              onClick={() => {
                setOpenPopup(false);
              }}
            >
              <img src="./icons/cross.png" />
            </button>
          </div>
        </DialogTitle>
        <DialogContent  >
          <div className="container invoice-content order-details">
            <div className="invoice-content-header">
              <div className="invoice-img">
                <img src="./icons/orderdetails.jpg" alt="" />
                <h5>Order Details</h5>
                <hr />
              </div>
              {filteredOrder.map(({ id, amount, total_price, delivery_date, order_date }) => {
                return (
                  <div className="container upTablee ">
                    <h6 className="ORDER">ORDER PECEIVED</h6>
                    <table className="detals-table">
                      <tr>
                        <th >ORDER ID</th>
                        <td >{id}</td>
                      </tr>
                      <tr>
                        <th>ORDER DATE</th>
                        <td>{order_date}</td>
                      </tr>
                      <tr>
                        <th>DELIVERY DATE</th>
                        <td>{delivery_date}</td>
                      </tr>
                      <tr>
                        <th>TOTAL ITEMS</th>
                        <td>{amount} items</td>
                      </tr>
                      <tr>
                        <th>TOTAL PRICE</th>
                        <td>{total_price}</td>
                      </tr>
                    </table>
                  </div>
                )
              })}
            </div>
            {/* up content */}
          </div>
          <div className="ok-btn-invoice">
            <button className="btn">OK</button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
// export default Popup;
