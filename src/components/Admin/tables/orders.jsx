import { React, useEffect, useState } from "react";
import OrdersData from "../../../ordersData.json";
import "./Customers.scss";
import "./orders.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PopupOrder from "./popupOrder";
import Sidebar from "../Sidebar";
import { toast } from "react-toastify";

import {
  FaDownload,
  FaPen,
  FaTrash,
  FaPaperPlane,
  FaSearch,
} from "react-icons/fa";
import axiosInstance from "../../../axios";
const handleDelete = (pro_id) => {

  // 
  axiosInstance.delete(`/order_api/${pro_id}/delete`)
    .then(res => toast.success('item deleted successfully'))
    .catch(err => toast.error('Error occurd try agian'))
}
const Orders = () => {
  const [dataSource, setDataSource] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selects, setSelects] = useState(10);
  const recordesPerPage = selects;
  const lastIndex = currentPage * recordesPerPage;
  const firstIndex = lastIndex - recordesPerPage;
  const records = dataSource.slice(firstIndex, lastIndex);
  const npage = Math.ceil(dataSource.length / recordesPerPage);
  const nnumbers = [...Array(npage + 1).keys()].slice(1);
  const [value, setValue] = useState("");
  const [tableFilter, setTableFilter] = useState([]);
  const filterData = (e) => {
    if (e.target.value != "") {
      setValue(e.target.value);
      const filterTable = dataSource.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setTableFilter([...filterTable]);
    } else {
      setValue(e.target.value);
      setDataSource([...dataSource]);
    }
  };

  useEffect(() => {
    axiosInstance.get('/order_api/order/list/all')
      .then(res => {
        setDataSource(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  return (
    <>
      <Sidebar />
      <div className="container-fluid customers-section orders">
        <div
          className="container customers_content"
          style={{ display: "flow" }}
        >
          <div className="container">
            <h1>Orders</h1>
            <h5>&nbsp;&nbsp; Welcome!</h5>
          </div>

          <div className="customersBodyContent">
            <div className="bodyOfCustomers container">
              <h5>{dataSource.length} Orders</h5>

              <div className="container table-container ">
                <div className="row">
                  <div className="col-lg-6 col-md-12 entites">
                    <label>Show Entites :&nbsp;&nbsp;</label>

                    <select
                      className="number-rows select-box"
                      value={selects}
                      onChange={(e) => setSelects(Number(e.target.value))}
                    >
                      <option value="5">5</option>
                      <option value="10" selected>
                        10
                      </option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                      <option value="30">50</option>
                    </select>
                    &nbsp;&nbsp;
                    <select className="number-rows select-box" style={{ width: "101px" }}>
                      <option value="This Day">This Day</option>
                      <option value="This Week" selected>
                        This Week
                      </option>
                      <option value="This Month">This Month</option>
                      <option value="This Year">This Year</option>
                    </select>
                  </div>

                  <div className="col-lg-6 col-md-12 dS">
                    <div className="input-group mb-3 search d-flex">
                      <input
                        type="text"
                        placeholder="search"
                        className="form-control"
                        aria-label="name"
                        aria-describedby="basic-addon1"
                        value={value}
                        onChange={filterData}
                      />
                    </div>
                    <i className="download">
                      <FaDownload />
                    </i>
                  </div>
                </div>
                <TableContainer className="customers-table" component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell className="tableCell" align="center">
                          ID
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Customer
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Adress
                        </TableCell>
                        {/* <TableCell className="tableCell" align="center">
                          Product
                        </TableCell> */}
                        <TableCell className="tableCell" align="center">
                          Amount
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Total Price
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Date
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Invoice
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Status
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Action
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        value.length > 0
                          ? tableFilter.map(({ address, id, username, order_date, total_price, items, amount }) => {
                            return (
                              <TableRow key={id}>
                                <TableCell className="tableCell">
                                  {id}
                                </TableCell>
                                <TableCell className="tableCell">
                                  {username}
                                </TableCell>
                                <TableCell className="tableCell">
                                  {address}
                                </TableCell>
                                {/* <TableCell className="tableCell">
                                  {d.Product}
                                </TableCell> */}
                                <TableCell className="tableCell">
                                  {amount}
                                </TableCell>
                                <TableCell className="tableCell">
                                  {total_price}
                                </TableCell>
                                <TableCell className="tableCell">
                                  {order_date}
                                </TableCell>order_date
                                <TableCell className="tableCell">
                                  <button
                                    style={{
                                      outline: "none",
                                      border: "none",
                                      backgroundColor: "white",
                                    }}
                                  >
                                    <img
                                      src={"./icons/invoice (1).png"}
                                      className="dashphoto"
                                      style={{ width: "28px" }}
                                    />
                                  </button>
                                </TableCell>
                                <TableCell className={`status ${'d.Status'}`}>
                                  {" "}
                                  {'d.Status'}{" "}
                                </TableCell>
                                <TableCell className="tableCell">
                                  <i>
                                    {" "}
                                    <FaPen />{" "}
                                  </i>

                                  <i>
                                    {" "}
                                    <FaTrash onClick={() => {
                                      handleDelete(id)
                                    }} />{" "}
                                  </i>
                                </TableCell>
                              </TableRow>
                            );
                          })
                          : records.map(({ address, id, username, order_date, total_price, items, amount }) => {
                            return (
                              <TableRow key={id}>
                                <TableCell className="tableCell">
                                  {id}
                                </TableCell>
                                <TableCell className="tableCell">
                                  {username}
                                </TableCell>
                                <TableCell className="tableCell">
                                  {address}
                                </TableCell>
                                {/* <TableCell className="tableCell">
                                  {Product}
                                </TableCell> */}
                                <TableCell className="tableCell">
                                  {amount}
                                </TableCell>
                                <TableCell className="tableCell">
                                  {total_price}
                                </TableCell>
                                <TableCell className="tableCell">
                                  {order_date}
                                </TableCell>
                                <TableCell className="tableCell">
                                  <button
                                    style={{
                                      outline: "none",
                                      border: "none",
                                      backgroundColor: "white",
                                    }}
                                    onClick={() => setOpenPopup(true)}
                                  >
                                    <img
                                      src={"./icons/invoice (1).png"}
                                      className="dashphoto"
                                      style={{ width: "28px" }}
                                    />
                                  </button>
                                </TableCell>
                                <TableCell className={`status ${'Status'}`}>
                                  {" "}
                                  {'Status'}{" "}
                                </TableCell>
                                <TableCell className="tableCell">
                                  <i>
                                    {" "}
                                    <FaPen />{" "}
                                  </i>

                                  <i>
                                    {" "}
                                    <FaTrash onClick={() => {
                                      handleDelete(id)
                                    }} />{" "}
                                  </i>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <nav className="customersNavPage">
                <ul className="pagination">
                  <li className="page-item">
                    <a href="#" className="page-link" onClick={prePage}>
                      Previous
                    </a>
                  </li>
                  {nnumbers.map((n, i) => (
                    <li
                      className={`page-item ${currentPage === n ? "active" : ""
                        }`}
                      key={i}
                    >
                      <a
                        href="#"
                        className="page-link"
                        onClick={() => changeCPage(n)}
                      >
                        {n}
                      </a>
                    </li>
                  ))}
                  <li className="page-item">
                    <a href="#" className="page-link" onClick={nextPage}>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="foot-table-nuber-rows">
                {" "}
                <p>
                  Show {recordesPerPage} Of {dataSource.length} Entites
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupOrder openPopup={openPopup} dataItems={dataSource} setOpenPopup={setOpenPopup}></PopupOrder>
    </>
  );
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
  function changeCPage(id) {
    setCurrentPage(id);
  }
};
export default Orders;
