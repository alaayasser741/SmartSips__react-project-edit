import { DialogContent, DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import React, { useEffect, useState } from "react";
import "./popup.css";
import "./Customers.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axiosInstance from "../../../axios";

export default function PopupOrder(props) {
  const { title, children, openPopup, setOpenPopup, dataItems, orderId } = props;
  const [items, setItems] = useState([])
  const [orderInv, setOrderInv] = useState([])


  useEffect(() => {
    if (orderId != 0) {
      const product = dataItems.find((item) => item.id === orderId);
      setItems(product.items)
      setOrderInv(product)
      console.log(product)
    }
  }, [openPopup]);
  return (
    <>
      <Dialog open={openPopup}>
        <DialogTitle>
          <div style={{ textAlign: "center", height: "60px" }}>
            {" "}
            <img src="./icons/SmartSips.png" style={{ width: "180px" }} />
            <button
              aria-label="invoiceClose"
              className="invoiceClose"
              onClick={() => {
                setOpenPopup(false);
              }}
            >
              <img src="./icons/cross.png" />
            </button>
          </div>
        </DialogTitle>
        <DialogContent>
          <div
            className="container invoice-content "
          // style={{ width: "480px" }}
          >
            <div className="invoice-content-header">
              <div className="invoice-img">
                <img src="./icons/invoice (1).png" alt="img" />
                <h5>Order's Invoice</h5>
              </div>
              <div className="container upTable">
                <div className="row">
                  <table className="col-md-6 col-12 tab1">
                    <tr>
                      <th>INVOICE NUMBER</th>
                      <td>#{orderInv.id}</td>
                    </tr>
                    <tr>
                      <th>INVOICE DATE</th>
                      <td>{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                    </tr>
                    <tr>
                      <th>BILL TO</th>
                      <td>{orderInv.username}</td>
                    </tr>
                  </table>
                  <div className="col-md-2 col-12"></div>
                  <table className="col-md-4 col-12">
                    <tr>
                      <th>SUB TOTAL</th>
                      <td>{orderInv.total_price}$</td>
                    </tr>
                    <tr>
                      <th>SHIPPING</th>
                      <td>{orderInv.shipping ? orderInv.shipping + "$" : 'Free'}</td>
                    </tr>
                    <tr>
                      <th>GRAND TOTAL</th>
                      <td>{orderInv.total_price}$</td>
                    </tr>
                  </table>
                </div>
              </div>
              <hr />
            </div>
            {/* up content */}

            <TableContainer className="customers-table invoicePopup">
              <Table>
                <TableHead className="table-head">
                  <TableRow className="headcell">
                    <TableCell
                      className="tableCell"
                      align="center"
                      style={{
                        borderTopLeftRadius: "7px",
                        // borderBottomLeftRadius: "7px",
                      }}
                    >
                      ITEM
                    </TableCell>
                    <TableCell className="tableCell" align="center">
                      IMAGE
                    </TableCell>
                    <TableCell className="tableCell" align="center">
                      PRICE
                    </TableCell>
                    <TableCell className="tableCell" align="center">
                      QTY
                    </TableCell>
                    <TableCell
                      className="tableCell"
                      align="center"
                      style={{
                        borderTopRightRadius: "7px",
                      }}
                    >
                      Title
                    </TableCell>
                  </TableRow>

                </TableHead>
                <TableBody className="tableBody">
                  {items.length > 0 ? items.map(({ category, id, image, price, title, qnt }) => (
                    <TableRow key={id} className="tableContent">
                      <TableCell className="tableCell" align="center">
                        <p>Accessories</p>
                        {category}
                      </TableCell>
                      <TableCell className="tableCell" align="center">
                        {image && <img src={image} alt="product-img" />}
                      </TableCell>
                      <TableCell className="tableCell" align="center">
                        {price}$
                      </TableCell>
                      <TableCell className="tableCell" align="center">
                        {qnt ? qnt : 1}
                      </TableCell>
                      <TableCell className="tableCell" align="center">
                        {title}
                      </TableCell>
                    </TableRow>
                  )) : <p>there is no product</p>}
                </TableBody>

              </Table>
            </TableContainer>

          </div>
          <div className="ok-btn-invoice">
            <button aria-label="submit the form" className="btn" onClick={() => {
              setOpenPopup(false)
            }}>OK</button>
          </div>

        </DialogContent>
      </Dialog>
    </>
  );
}
// export default Popup;
