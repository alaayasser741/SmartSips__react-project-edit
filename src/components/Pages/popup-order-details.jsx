import { DialogContent, DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import React from "react";
import "./popup-order-details.css";
export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
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
              <div className="container upTablee ">
                <h6 className="ORDER">ORDER PECEIVED</h6>
                <table className="detals-table">
                  <tr>
                    <th >ORDER ID</th>
                    <td >1258</td>
                  </tr>
                  <tr>
                    <th>ORDER DATE</th>
                    <td>Jul 2 2022</td>
                  </tr>
                  <tr>
                    <th>DELIVERY DATE</th>
                    <td>Jul 9 2022</td>
                  </tr>
                  <tr>
                    <th>TOTAL ITEMS</th>
                    <td>3 items</td>
                  </tr>
                  <tr>
                    <th>TOTAL PRICE</th>
                    <td>2780.00$</td>
                  </tr>
                </table>
              </div>
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
