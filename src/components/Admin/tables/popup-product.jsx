import { DialogContent, DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
import "./popup.css";
import "./popup-product.css";
import "./Customers.scss";
import axiosInstance from "../../../axios";
import { toast } from "react-toastify";

export default function Popup(props) {
  const [name, setName] = useState('');
  const [cat, setCat] = useState(0);
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [imageData, setImageData] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const imageData = reader.result;
      setImageData(imageData); // Update the state with the image data
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axiosInstance
    //   .post(`/products_api/product/add`, {
    //     title: name,
    //     description: desc,
    //     published: '2023-05-10T12:03:56.136Z',
    //     price: price,
    //     sales: 0,
    //     stock: stock,
    //     image: imageData,
    //     category: cat,
    //     admincompany: "Not Allowed"
    //   })
    //   .then((res) => {
    //     toast.success('Add Processing done');
    //     console.log(res)
    //   })
    //   .catch(err => {
    //     toast.error("add failed")
    //     console.log(err);

    //   })

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
              <div className="form-group">
                <label for="product-imge" >Image</label>
                <div className="row">
                  <div className="col-3 imge-file" style={{ marginLeft: "13px" }}>
                    <img src="./images/soalar.png" alt="" />

                  </div>
                  <div className="col-3 add-imge-file" style={{ marginLeft: "25px" }}>
                    <label for="product-imge">+</label>
                    <input type="file" id="product-imge" name="product-imge" onChange={handleFileChange} />
                  </div>
                </div>
              </div>
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
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
// export default Popup;
