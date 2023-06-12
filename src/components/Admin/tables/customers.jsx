import { React, useEffect, useState } from "react";
import "./Customers.scss";
// import CustomersData from "../../../customersData.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Sidebar from "../Sidebar";
import { toast } from 'react-toastify'

import {
  FaDownload,
  FaPen,
  FaTrash,
  FaPaperPlane,
  FaSearch,
} from "react-icons/fa";
import axiosInstance from "../../../axios";

const Customer = () => {
  const [selects, setSelects] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  // const [page, setPage] = useState(1);
  // const [pageSize, setPageSize] = useState(10);
  const [value, setValue] = useState("");
  const [dataSource, setDataSource] = useState([]);
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

  const recordesPerPage = selects;
  const lastIndex = currentPage * recordesPerPage;
  const firstIndex = lastIndex - recordesPerPage;
  const records = dataSource.slice(firstIndex, lastIndex);
  const npage = Math.ceil(dataSource.length / recordesPerPage);
  const nnumbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    axiosInstance.get('user_api/userprofile/list')
      .then(res => {
        setDataSource(res.data);
        console.log(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const handleDelete = id => {
    axiosInstance.delete(`user_api/userprofile/delete/${id}`)
      .then(res => {
        toast.success('user deleted successfully')
        axiosInstance.get('user_api/userprofile/list')
          .then(res => {
            setDataSource(res.data);
            // console.log(res.data);
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        toast.error('Error occured')
      })

  }

  return (
    <>
      <Sidebar />
      <div className="container-fluid customers-section" >
        <div
          className="container customers_content"
          style={{ display: "flow" }}
        >
          <div className="container">
            <h1>Customers</h1>
            <h5>&nbsp;&nbsp; Welcome!</h5>
          </div>

          <div className="customersBodyContent" >
            <div className="bodyOfCustomers container">
              <h5>{dataSource.length} Customers</h5>
              <div className="container table-container ">
                <div className="row">
                  <div className="col-lg-4 col-md-12 entites">
                    <label>Show Entites :&nbsp;&nbsp;</label>

                    <select
                      className=" select-box number-rows "
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
                  </div>
                  <div className="col-lg-8 col-md-12 dS">
                    <div className="input-group mb-3 search d-flex">
                      <input
                        type="text"
                        placeholder="search"
                        style={{ fontFamily: "FontAwesome" }}
                        // placeholder="search"
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
                          Profile
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Name
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Email
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Phone
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Country
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Adress
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Join Date
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
                      {/* {records.map((d, i) => ( */}
                      {value.length > 0
                        ? tableFilter.map((d, i) => {
                          return (
                            <TableRow key={i}>
                              <TableCell className="tableCell">
                                <img src={d.profile_photo} alt="" />
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.username}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.email}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.phone_number}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.country}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.address}
                              </TableCell>
                              <TableCell className="tableCell">
                                22 Ali Street
                              </TableCell>
                              <TableCell className={`status ${d.Status}`}>
                                Pending
                              </TableCell>
                              <TableCell className="tableCell">
                                <i>
                                  {" "}
                                  <FaPen />{" "}
                                </i>

                                <i>
                                  {" "}
                                  <FaPaperPlane />
                                </i>
                                <i onClick={() => handleDelete(d.id)}><FaTrash /> </i>
                              </TableCell>
                            </TableRow>
                          );
                        })
                        : records.map((d, i) => {
                          return (
                            <TableRow key={i}>
                              <TableCell className="tableCell">
                                <img src={d.profile_photo} alt="" />
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.username}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.email}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.phone_number}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.country}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.address}
                              </TableCell>
                              <TableCell className="tableCell">
                                22 Ali Street
                              </TableCell>
                              <TableCell className={`status ${d.Status}`}>
                                Pending
                              </TableCell>
                              <TableCell className="tableCell">
                                <i>
                                  {" "}
                                  <FaPen />{" "}
                                </i>

                                <i>
                                  {" "}
                                  <FaPaperPlane />
                                </i>
                                <i onClick={() => handleDelete(d.id)}><FaTrash /> </i>
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
export default Customer;
