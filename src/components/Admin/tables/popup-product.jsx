import { DialogContent, DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
import "./popup.css";
import "./popup-product.css";
import "./Customers.scss";
import axiosInstance from "../../../axios";

export default function Popup(props) {
  const [title1, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')
  const [stock, setStock] = useState('')
  const [cat, setCat] = useState('')
  const [file, setFile] = useState('')
  const handleFileChange = (e) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = e => {
    e.preventDefault()
    const fd = new FormData();
    fd.append('image', file, file.name)
    fd.append('title', title1);
    fd.append('description', desc);
    fd.append('price', price);
    fd.append('stock', stock);
    fd.append('category', cat);
    fd.append('admincompany', "aaaa");
    axiosInstance.post('https://smartsips-production.up.railway.app/products_api/product/add', fd)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  };
  const { openPopup, setOpenPopup } = props;
  return (
    <>
      <Dialog open={openPopup}>
        <DialogTitle>
          <div style={{ textAlign: "center", height: "60px" }}>
            {" "}
            <div style={{ float: "left", margin: "10px", color: " #0b69bb" }}>
              <img
                src={"./icons/product.png"}
                alt=""
                className="dashphoto"
                style={{ width: "30px", height: "30px" }}
              />
              &nbsp;&nbsp; Add Product
            </div>
            <button
              className="invoiceClose"
              onClick={() => {
                setOpenPopup(false);
              }}
            >
              <img src="./icons/cross.png" alt="" />
            </button>
          </div>
        </DialogTitle>
        <DialogContent className="bodyofproductpoup">
          <div
            className="container add-product-form "
          // style={{ width: "480px" }}
          >
            <form className="form-group" onSubmit={handleSubmit} >
              <div className="form-group">
                <label for="product-imge" >Image</label>
                <div className="row">
                  <div className="col-3 imge-file" style={{ marginLeft: "13px" }}>
                    <img src="./images/soalar.png" alt="" />

                  </div>
                  <div className="col-3 add-imge-file" style={{ marginLeft: "25px" }}>
                    <label for="product-imge">+</label>
                    <input type="file" onChange={handleFileChange} id="product-imge" name="product-imge" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label for="product-name">Product Name</label>
                <input type="text" id="product-name" name="product-name" onChange={e => setTitle(e.target.value)} />
              </div>
              <div className="form-group">
                <label for="product-category">Category</label>
                <input
                  type="text"
                  id="product-category"
                  name="product-category"
                  onChange={e => setCat(e.target.value)}
                />
              </div>
              <div className="row">


                <div className="form-group col-md-6 col-sm-12">
                  <label for="product-price">Price</label>
                  <input
                    type="text"
                    style={{ width: "150px" }}
                    id="product-price"
                    name="product-price"
                    onChange={e => setPrice(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-6 col-sm-12">
                  <label style={{ display: "inlinBlock" }} for="product-stock">
                    Stock
                  </label>
                  <input
                    type="text"
                    style={{ width: "150px" }}
                    id="product-stock"
                    name="product-stock"
                    onChange={e => setStock(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label or="product-description">Description</label>
                <textarea
                  type="text"
                  // style={{ width: "100%", height: "90px", padding: "6px" }}
                  id="product-description"
                  name="product-description"
                  onChange={e => setDesc(e.target.value)}
                />
              </div>

              <div className="ok-btn-invoice">
                <button className="btn">
                  <img
                    src={"./icons/product (1) (1).png"}
                    alt=""
                    className="dashphoto"
                  />
                  &nbsp; Add
                </button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
// export default Popup;
