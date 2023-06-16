import { DialogContent, DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import React, { useState, useRef } from "react";
import "./popup.css";
import "./popup-product.css";
import "./Customers.scss";
import axiosInstance from "../../../axios";
import { toast } from "react-toastify";
import { async } from "q";

export default function Popup(props) {

  const fileInputRef = useRef(null);
  const handleFileClick = (e) => {
    fileInputRef.current.click();
  }
  const handleInputChange = ({ target }) => {
    setSelectedFile(target.files[0]);

  }
  const handleUpload = async (productId) => {
    try {
      const formData = new FormData();
      formData.append('profile_photo', selectedFile);
      const response = await axiosInstance.post(`/products_api/imageupload/${prodID}/imageupload/`, formData);
      setShowUploadForm(0)
    } catch (error) {
      console.log(error);
      // Handle the error case
    }
  };
  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    handleUpload(prodID);
  }





  const [name, setName] = useState('');
  const [cat, setCat] = useState(0);
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [imageData, setImageData] = useState('');
  const [prodID, setProdID] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [showUploadForm, setShowUploadForm] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = async () => {
      try {
        const formData = new FormData();
        formData.append('id', 20);
        formData.append('title', name);
        formData.append('description', desc);
        formData.append('published', '2023-05-10T12:03:56.136Z');
        formData.append('price', price);
        formData.append('sales', 0);
        formData.append('stock', stock);
        formData.append('image', imageData); // Replace 'imageFile' with your actual image file object
        formData.append('category', cat);
        formData.append('admincompany', 'string');

        const response = await axiosInstance.post('/products_api/product/add', formData, {
          headers: {
            'Content-Type': 'multipart/form-data' // Set the content type to multipart/form-data
          }
        });
        toast.success('Add Processing done');
        setName('');
        setCat(0);
        setDesc(0);
        setPrice(0);
        setStock(0);
        setShowUploadForm(1)
        setProdID(response.data.id);
        console.log(response)
      } catch (error) {
        console.error(error);
        toast.error("add failed")
      }
    };
    postData();
  }
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
            <form className="form-group" >
              {showUploadForm === 1 ?
                <div className='wrapper__section'>
                  <header>Add Photo</header>
                  <form action="#" onClick={handleFileClick}>
                    <input type="file"
                      hidden
                      ref={fileInputRef}
                      onChange={handleInputChange}
                    />
                    <p>تصفح ملفاتك</p>
                  </form>
                  <button className="image-btn" onClick={handleUploadSubmit}>Save</button>
                </div> : <div>
                  <div className="form-group">
                    <label for="product-name">Product Name</label>
                    <input type="text" id="product-name" value={name} name="product-name" onChange={(e) => { setName(e.target.value) }} />
                  </div>
                  <div className="form-group">
                    <label for="product-category">Category</label>
                    <input
                      type="number"
                      id="product-category"
                      name="product-category"
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        setCat(value);
                      }}
                      value={cat}
                    />
                  </div>
                  <div className="row">


                    <div className="form-group col-md-6 col-sm-12">
                      <label for="product-price">Price</label>
                      <input
                        type="number"
                        style={{ width: "150px" }}
                        id="product-price"
                        name="product-price"
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          setPrice(value);
                        }}
                        value={price}
                      />
                    </div>
                    <div className="form-group col-md-6 col-sm-12">
                      <label style={{ display: "inlinBlock" }} for="product-stock">
                        Stock
                      </label>
                      <input
                        type="number"
                        style={{ width: "150px" }}
                        id="product-stock"
                        name="product-stock"
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          setStock(value);
                        }}
                        value={stock}
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
                      onChange={(e) => { setDesc(e.target.value) }}
                      value={desc}
                    />
                  </div>

                  <div className="ok-btn-invoice">
                    <button onClick={handleSubmit} className="btn">
                      <img
                        src={"./icons/product (1) (1).png"}
                        alt=""
                        className="dashphoto"
                      />
                      &nbsp; Add
                    </button>
                  </div>

                </div>}
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
// export default Popup;
