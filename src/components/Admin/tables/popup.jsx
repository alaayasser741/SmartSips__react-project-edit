import { DialogContent, DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import React from "react";
import "./popup.css";
import "./Customers.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
        <DialogContent>
          <div
            className="container invoice-content "
            // style={{ width: "480px" }}
          >
            <div className="invoice-content-header">
              <div className="invoice-img">
                <img src="./icons/invoice (1).png" alt="" />
                <h5>Order's Invoice</h5>
              </div>
              <div className="container upTable">
                <div className="row">
                  <table className="col-md-6 col-12 tab1">
                    <tr>
                      <th>INVOICE NUMBER</th>
                      <td>#1258</td>
                    </tr>
                    <tr>
                      <th>INVOICE DATE</th>
                      <td>jul 2 2022</td>
                    </tr>
                    <tr>
                      <th>BILL TO</th>
                      <td>Ahmed</td>
                    </tr>
                  </table>
                  <div className="col-md-2 col-12"></div>
                  <table className="col-md-4 col-12">
                    <tr>
                      <th>SUB TOTAL</th>
                      <td>2400.0$</td>
                    </tr>
                    <tr>
                      <th>SHIOOING</th>
                      <td>250$</td>
                    </tr>
                    <tr>
                      <th>GRAND TOTAL</th>
                      <td>22$</td>
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
                        // borderBottomRightRadius: "7px",
                      }}
                    >
                      TOTAL
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className="tableBody">
                  {/* {records.map((d, i) => ( */}
                  {/* <TableRow key={i}> */}
                  <TableRow className="tableContent">
                    <TableCell className="tableCell" align="center">
                      <p>Accessories</p>
                      Solar Panal
                    </TableCell>
                    <TableCell className="tableCell" align="center">
                      <img src="./images/soalar.png" alt="" />
                    </TableCell>
                    <TableCell className="tableCell" align="center">
                      300$
                    </TableCell>
                    <TableCell className="tableCell" align="center">
                      1
                    </TableCell>
                    <TableCell className="tableCell" align="center">
                      300$
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="tableCell" align="center">
                      <p>Device</p>
                      Smart Sips
                    </TableCell>
                    <TableCell className="tableCell" align="center">
                      <img src="./images/product.png" alt="" />
                    </TableCell>
                    <TableCell className="tableCell" align="center">
                      1200$
                    </TableCell>
                    <TableCell className="tableCell" align="center">
                      1
                    </TableCell>
                    <TableCell className="tableCell" align="center">
                      1200$
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="tableCell" align="center">
                      <p>Accessories</p>
                     LCD Screen
                    </TableCell>
                    <TableCell className="tableCell" align="center">
                      <img src="./images/screen.png" alt="" />
                    </TableCell>
                    <TableCell className="tableCell" align="center">
                      70$
                    </TableCell>
                    <TableCell className="tableCell" align="center">
                      1
                    </TableCell>
                    <TableCell className="tableCell" align="center">
                      70$
                    </TableCell>
                  </TableRow>
                  {/* ))} */}
                </TableBody>
              </Table>
            </TableContainer>
           
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
