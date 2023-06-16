import { DialogContent, DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import React, { useEffect, useState } from "react";
import "./pymentPopup.css";
import axiosInstance from '../../../axios';

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const [username, setUserName] = useState('');
  const [orderId, setOrderId] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [itemsLength, setItemsLength] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');


  const userId = localStorage.getItem('userId');
  const cartId = localStorage.getItem('cart_id');

  const orderInvoice = {
    cart: cartId
  };

  useEffect(() => {
    if (cartId && openPopup) {
      axiosInstance.get(`/order_api/cart/all/${userId}`)
        .then(res => {
          const resData = res.data;
          setTotalPrice(resData[0].total_price)
          setItemsLength(resData[0].items.length)
          const deliveryDate = new Date(res.data[0].delivery_date);
          const formattedDate = deliveryDate.toLocaleDateString('en', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          });
          setDeliveryDate(formattedDate)
        })
        .catch(err => {
          console.log(err);
        })

      axiosInstance.post('/order_api/OrderInvoice/create', orderInvoice)
        .then(response => {
          setUserName(response.data.billto)
          setOrderId(response.data.id)
          const deliveryDate = new Date(response.data.invoice_date);
          const formattedDate = deliveryDate.toLocaleDateString('en', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }); setInvoiceDate(formattedDate)
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  }, [openPopup])
  return (
    <>
      <Dialog open={openPopup}>
        <DialogTitle>
          <div style={{ textAlign: "center", height: "60px" }}>
            {" "}
            <img src="./icons/SmartSips.png" style={{ width: "180px" }} />
            <button
              aria-label="close popup"
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
                <img src="./icons/correct.jpg" alt="img" />
                <h5>Payment Received</h5>
                <p style={{ marginTop: "-5px" }}>{`Hi ${username}, Thank You For Your Order`}</p>
                {/* <hr /> */}
              </div>
              <div className="container upTablee ">
                <h6 className="ORDER">PAYMENT DETAILS</h6>
                <table className="detals-table">
                  <tr>
                    <th >ORDER ID</th>
                    <td >{orderId}</td>
                  </tr>
                  <tr>
                    <th>ORDER DATE</th>
                    <td>{invoiceDate}</td>
                  </tr>
                  <tr>
                    <th>DELIVERY DATE</th>
                    <td>{deliveryDate}</td>
                  </tr>
                  <tr>
                    <th>TOTAL ITEMS</th>
                    <td>{itemsLength} items</td>
                  </tr>
                  <tr>
                    <th>TOTAL PRICE</th>
                    <td>{totalPrice}$</td>
                  </tr>
                </table>
              </div>
            </div>
            {/* up content */}
          </div>
          <div className="ok-btn-invoice">
            <button aria-label="close popup" className="btn"><a href="/" style={{ color: 'white' }}>OK</a></button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
// export default Popup;
