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
  const [selectedCategory, setSelectedCategory] = useState("All Category");

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

  const [openPopup, setOpenPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const recordesPerPage = 10;
  const lastIndex = currentPage * recordesPerPage;
  const firstIndex = lastIndex - recordesPerPage;
  const records = dataSource.slice(firstIndex, lastIndex);
  const npage = Math.ceil(dataSource.length / recordesPerPage);
  const nnumbers = [...Array(npage + 1).keys()].slice(1);
  const [value, setValue] = useState("");
  const [tableFilter, setTableFilter] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [productId, setProductId] = useState(0);



  const filterData = (e) => {
    const selectedValue = e.target.value;

    setSelectedCategory(selectedValue);

    const filterTable = dataSource.filter((o) => {
      const matchesCategory =
        String(o.category).toLowerCase() === selectedValue.toLowerCase();

      return matchesCategory;
    });

    setTableFilter(filterTable);

  };

  const handleSearch = (e) => {
    let inputValue = e.target.value.toLowerCase();
    if (inputValue !== "") {
      setValue(inputValue);

      const filteredTable = dataSource.filter((o) =>
        Object.values(o).some(
          (value) => String(value).toLowerCase().includes(inputValue)
        )
      );

      setTableFilter(filteredTable);
    } else {
      setValue(inputValue);
      setTableFilter([...dataSource]);
    }
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("products_api/product/all");
        const productsData = response.data.map(async (product) => {
          const imageResponse = await axiosInstance.get(`/products_api/imageupload/${product.id}/`);
          const image = imageResponse.data
          return { ...product, image };
        });
        const productsWithImages = await Promise.all(productsData);
        setDataSource(productsWithImages);
        setIsLoad(isLoad => !isLoad);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [isLoad]);
  const handleDelete = (pro_id) => {
    axiosInstance.delete(`https://smartsips-production.up.railway.app/products_api/${pro_id}/detail`)
      .then(res => toast.success('item deleted successfully'))
      .catch(err => toast.success('Error occurd try agian'))
  }


  const handleEdit = (id) => {
    setOpenPopup(true)
    setProductId(id)
  };

  const handleAdd = (id) => {
    setOpenPopup(true)
    setProductId(id)
  };

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
                    <button aria-label="open popup" className="addproduct" onClick={() => handleAdd(0)}>
                      <img
                        src={"./icons/product (1) (1).png"}
                        alt="img"
                        className="dashphoto"
                      />
                      Add
                    </button>

                    &nbsp;&nbsp;
                    <div className="product-catogry">
                      <select
                        className="product-catogry number-rows select-box"
                        style={{ width: "101px" }}
                        value={selectedCategory}
                        onChange={filterData}
                      >
                        <option value="All Category">All Category</option>
                        <option value="1">Accessories</option>
                        <option value="2">Device</option>
                        <option value="3">Gadgets</option>
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
                        onChange={handleSearch}
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
                          Image
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Name
                        </TableCell>
                        <TableCell className="tableCell" align="center">
                          Category
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
                      {selectedCategory == 'All Category' && value.length === 0
                        ? records.map((d, i) => {
                          return (
                            <TableRow key={i}>

                              <TableCell className="tableCell">
                                {d.ID}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.image && (
                                  <img
                                    src={d.image.image}
                                    alt="prod"
                                    className=""
                                    style={{ maxHeight: "50px" }}
                                  />
                                )}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.title}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.category === 1 ? 'Accessories' : d.category === 2 ? 'Device' : 'Gadgets'}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.price}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.sales}
                              </TableCell>

                              <TableCell className={d.stock === 0 ? 'red' : d.stock < 50 ? 'yellow' : 'green'}>
                                {d.stock}
                              </TableCell>
                              <TableCell className="tableCell" >
                                <i style={{ paddingLeft: "15px" }}>
                                  <FaPen className="FaPen" onClick={() => {
                                    handleEdit(d.id)
                                  }} />
                                </i>
                                <i style={{ paddingLeft: "15px" }}>
                                  <FaTrash className="FaTrash" onClick={() => {
                                    handleDelete(d.id)
                                  }} />{" "}
                                </i>
                              </TableCell>
                            </TableRow>
                          );
                        })
                        : tableFilter.map((d, i) => {
                          return (
                            <TableRow key={i}>
                              <TableCell className="tableCell">
                                {d.ID}
                              </TableCell>
                              <TableCell
                                className="tableCell"
                                style={{ height: "50px" }}
                              >
                                {d.image && (
                                  <img
                                    src={d.image.image}
                                    alt="prod"
                                    className=""
                                    style={{ maxHeight: "50px" }}
                                  />
                                )}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.title}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.category === 1 ? 'Accessories' : d.category === 2 ? 'Device' : 'Gadgets'}
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.price} $
                              </TableCell>
                              <TableCell className="tableCell">
                                {d.sales}
                              </TableCell>
                              <TableCell className={d.stock === 0 ? 'red' : d.stock < 50 ? 'yellow' : 'green'}>
                                {d.stock}
                              </TableCell>
                              <TableCell className="tableCell" >
                                <i style={{ paddingLeft: "15px" }}>
                                  <FaPen className="FaPen" onClick={() => {
                                    handleEdit(d.id)
                                  }} />
                                </i>

                                <i style={{ paddingLeft: "15px" }}>
                                  {" "}
                                  <FaTrash className="FaTrash" onClick={() => {
                                    handleDelete(d.id)
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
            </div>
          </div>
        </div>
      </div>
      <PopupProduct openPopup={openPopup} productId={productId} setOpenPopup={setOpenPopup}></PopupProduct>
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
