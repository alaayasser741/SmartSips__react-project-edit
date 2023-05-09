import { React, useEffect, useState } from "react";
// import ProductsData from "../../../productsData.json";
import "./Customers.scss";
import "./productsAdmin.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PopupProduct from "./popup-product";
import {
  FaDownload,
  FaPen,
  FaTrash,
  FaPaperPlane,
  FaSearch,
  FaFileCirclePlus,
} from "react-icons/fa";
import Sidebar from "../Sidebar";
import axiosInstance from "../../../axios";
import { toast } from "react-toastify";

const ProductsAdmin = () => {
  const [dataSource, setDataSource] = useState([]);
  // let stockColors = [];
  // ProductsData.map((i) => {
  //  if (i.Stock === 0) {
  //    stockColors.push("not");
  //  } else if (i.Stock  === 50) {
  //    stockColors.push("between");
  //  } else if (i.Stock  === 300) {
  //    stockColors.push("more");
  //  }});

  //  console.log(stockColors)
  //  const [loan, SetLoan] = useState(1);
  //  ProductsData.map((i) => {
  //   if (i.Stock === 0) {
  //     loan="red";
  //   } else if (i.Stock  === 50) {
  //     loan="green";
  //   } else if (i.Stock  === 300) {
  //     loan="blue";
  //   }});
  //   console.log(loan)
  const loan = []
  dataSource.map((i) => {
    if (i.Stock === 0) {
      loan.push("red");
      // loan="red";
    } else if (i.Stock > 0 && i.Stock <= 50) {
      loan.push("green");
      // loan="green";
    } else if (i.Stock > 50) {
      loan.push("black");
      // loan="black";
    }
  });


  //  const getColor=(colorr) =>{
  //   ProductsData.map((i) => {
  //      if (i.Stock === 0) {
  //       return "red"
  //      } else if (i.Stock  === 50) {
  //        return "green"
  //      } else if (i.Stock  === 300) {
  //        return "blue"
  //      }});
  //  };
  const [openPopup, setOpenPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordesPerPage = 10;
  const lastIndex = currentPage * recordesPerPage;
  const firstIndex = lastIndex - recordesPerPage;
  const records = dataSource.slice(firstIndex, lastIndex);
  const npage = Math.ceil(dataSource.length / recordesPerPage);
  const nnumbers = [...Array(npage + 1).keys()].slice(1);
  const [selects, setSelects] = useState(10);
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
    axiosInstance.get('products_api/product/all')
      .then(res => {
        const data1 = [...res.data];
        data1.forEach(item => {
          if (item.category === 1) {
            item.category = 'devices'
          } else if (item.category === 2) {
            item.category = 'Accessories'
          } else {
            item.category = 'Accessories'
          }
        })
        setDataSource(data1);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  const handleDelete = (pro_id) => {
    console.log(pro_id);
    // 
    axiosInstance.delete(`https://smartsips-production.up.railway.app/products_api/${pro_id}/detail`)
      .then(res => toast.success('item deleted successfully'))
      .catch(err => toast.success('Error occurd try agian'))
  }
  return (
    <>
      <Sidebar />
      <div className="container-fluid customers-section product-admin">
        <div className="container customers_content">
          <div className="container">
            <h1>Products</h1>
            <h5>&nbsp;&nbsp; Welcome!</h5>
          </div>
          <div className="customersBodyContent">
            <div className="bodyOfCustomers container">
              <h5> Product List ({dataSource.length}) </h5>

              <div className="container table-container ">
                <div className="row">
                  <div className="col-lg-5 col-sm-12 entites">
                    {/* <div className="addproduct"> */}
                    <button className="addproduct" onClick={() => setOpenPopup(true)}>
                      <img
                        src={"./icons/product (1) (1).png"}
                        alt=""
                        className="dashphoto"
                      />
                      Add

                    </button>
                    {/* <label for="files">
                        {" "}
                        <i>
                          <img
                            src={"./icons/product (1) (1).png"}
                            alt=""
                            className="dashphoto"
                          />
                        </i>{" "}
                      </label>
                      <label for="files">Add</label>
                      <input type="file" id="files" /> */}
                    {/* </div> */}
                    &nbsp;&nbsp;
                    <div className="product-catogry">
                      <select
                        className=" product-catogry number-rows select-box"
                        style={{ width: "101px" }}
                      >
                        <option value=" All Catogry" selected>
                          All Catogry
                        </option>
                        <option value="Accessorise">Accessorise</option>
                        <option value="Devices">Devices</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-7 col-sm-12 dS">
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
                          Imge
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Name
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Catogry
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Price
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Sales
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Stock
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
                                {d.ID}
                              </TableCell>
                              <TableCell className="tableCell">
                                <img
                                  src={d.Image}
                                  alt=""
                                  className=""
                                  style={{ maxHeight: "50px" }}
                                />
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.title}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.category}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.price}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.sales}
                              </TableCell>
                              {/* <TableCell className={d.Stock === 0 ? 'not' :'more'}> */}
                              <TableCell className={d.Stock === 0 ? 'not' : ''}>
                                {/* <TableCell className={d.Status==='Active'?'Active':'',d.Status==='In Active'?'InActive':'',d.Status=='Pending'?'Pending':''}>
                                 */}
                                {/* <TableCell className={`Stock ${d.Stock}`}> */}
                                {" "}
                                {d.stock}{" "}
                              </TableCell>
                              <TableCell className="tableCell" onClick={()=>{
                                handleDelete(d.id)
                              }}>
                                <i style={{ paddingLeft: "4px" }}>
                                  {" "}
                                  <FaPen />{" "}
                                </i>

                                <i style={{ paddingLeft: "4px" }}>
                                  {" "}
                                  <FaTrash />{" "}
                                </i>
                              </TableCell>
                            </TableRow>
                          );
                        })
                        : records.map((d, i) => {
                          return (
                            <TableRow key={i}>
                              <TableCell className="tableCell">
                                {d.ID}
                              </TableCell>
                              <TableCell
                                className="tableCell"
                                style={{ height: "50px" }}
                              >
                                <img
                                  src={d.image}
                                  alt=""
                                  className=""
                                  style={{ maxHeight: "50px" }}
                                />
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.title}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.category}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.price} $
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.sales}
                              </TableCell>

                              {/* <TableCell className={`Stock ${d.Stock}`}> */}
                              {/* <TableCell className={d.Stock === 0 ? 'not' : 'more'}> */}
                              <TableCell className={d.Stock === 0 ? 'not' : ''}>
                                {" "}
                                {d.stock}{" "}
                              </TableCell>
                              <TableCell className="tableCell" onClick={()=>{
                                handleDelete(d.id)
                              }}>
                                <i style={{ paddingLeft: "4px" }}>
                                  {" "}
                                  <FaPen />{" "}
                                </i>

                                <i style={{ paddingLeft: "4px" }}>
                                  {" "}
                                  <FaTrash />{" "}
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
              {/* <div className="foot-table-nuber-rows">
                {" "}
                <p>
                  Show {recordesPerPage} Of {ProductsData.length} Entites
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <PopupProduct openPopup={openPopup} setOpenPopup={setOpenPopup}></PopupProduct>
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
export default ProductsAdmin;
