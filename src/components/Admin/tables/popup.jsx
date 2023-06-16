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

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  const [orderData, setOrderData] = useState([]);
  const [orderInfo, setOrderInfo] = useState([]);

  const userId = localStorage.getItem('userId');
  useEffect(() => {
    if (openPopup == true) {
      axiosInstance.get(`/order_api/cart/all/${userId}`).then((res) => {
        setOrderInfo(res.data)
        setOrderData(res.data[0].items)
      }).catch((err) => {
        console.log(err)
      })
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
              aria-label="submit the form"
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
                {orderInfo.map((d) => {
                  return (
                    <div className="row">
                      <table className="col-md-6 col-12 tab1">
                        <tr>
                          <th>INVOICE NUMBER</th>
                          <td>#{d.id}</td>
                        </tr>
                        <tr>
                          <th>INVOICE DATE</th>
                          <td>{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                        </tr>
                        <tr>
                          <th>BILL TO</th>
                          <td>{d.username}</td>
                        </tr>
                      </table>
                      <div className="col-md-2 col-12"></div>
                      <table className="col-md-4 col-12">
                        <tr>
                          <th>SUB TOTAL</th>
                          <td>{d.total_price}$</td>
                        </tr>
                        <tr>
                          <th>SHIOOING</th>
                          <td>{d.shipping}$</td>
                        </tr>
                        <tr>
                          <th>GRAND TOTAL</th>
                          <td>{d.finalprice}$</td>
                        </tr>
                      </table>
                    </div>
                  )
                })}
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
                        // borderBottomRightRadius: "7px",
                      }}
                    >
                      TOTAL
                    </TableCell>
                  </TableRow>

                </TableHead>
                <TableBody className="tableBody">
                  {orderData.map(({ id, priceqnt, product, qnt }) => {
                    return (
                      <TableRow key={id} className="tableContent">
                        <TableCell className="tableCell" align="center">
                          <p>Accessories</p>
                          {product.category == 1 ? 'Accessories' : product.category == 2 ? 'Devices' : 'Gadgets'}
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          {product.image && <img src={product.image} alt="product-img" />}
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          {product.price}$
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          {qnt}
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          {priceqnt}$
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>

          </div>
          <div className="ok-btn-invoice">
            <button aria-label="close popup" className="btn">OK</button>
          </div>

        </DialogContent>
      </Dialog>
    </>
  );
}
// export default Popup;
