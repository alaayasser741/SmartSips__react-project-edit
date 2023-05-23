import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import './Washlist.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SuccCart from "../Shop/succCart";
import axiosInstance from "../../../axios";
import { all } from "axios";
import { toast } from "react-toastify";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [wishlistUpdate, setWishlistUpdate] = useState(false);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    axiosInstance.get('/products_api/product/all')
      .then(allProductsRes => {
        const allProducts = allProductsRes.data;
        axiosInstance.get(`/products_api/wishlist/list/${userId}`)
          .then(wishlistRes => {
            const wishlist = wishlistRes.data;
            console.log(wishlist)
            const productIdsInWishlist = wishlist.map(item => item.product[0]);
            const productsInWishlist = allProducts.filter(product => productIdsInWishlist.includes(product.id));

            // Add id_wishlist property to productsInWishlist
            const productsWithIdWishlist = productsInWishlist.map(product => {
              const wishlistItem = wishlist.find(item => item.product[0] === product.id);
              return {
                ...product,
                id_wishlist: wishlistItem ? wishlistItem.id : null
              };
            });

            setProducts(productsWithIdWishlist);
            console.log(productsWithIdWishlist);
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  }, [wishlistUpdate]);

  const deleteProductFromWishlist = (prodID) => {
    const authToken = localStorage.getItem('token'); // Retrieve the authentication token from storage

    axiosInstance.delete(`/products_api/wishlist/delete/${prodID}`, {
      headers: {
        Authorization: `Bearer ${authToken}`, // Include the authentication token in the request headers
      },
    })
      .then(response => {
        // Handle successful deletion
        setWishlistUpdate(prevState => !prevState);
        toast.success('Product deleted successfully')
      })
      .catch(error => {
        // Handle error
        toast.error('Failed to delete product')
      });
  };

  return (<>
    <NavBar />

    <div className="container cart-section">
      <div className="row">
        <div className="cart col-xl-12 col-lg-12">
          <h2>WishList</h2>
          <div className="row">
            <div className="col-md-2 ms-1 mt-2">
              <p className="norm-h4 pgray">Product</p>
            </div>
            <div className="col-md-2 mt-2 ms-5">

              <p className="count-h4 pgray"></p>

            </div>
            <div className="col-md-2 mt-2">

              <p className="count-h4 pgray">Unit price</p>

            </div>
            <div className="col-md-2 mt-2">

              <p className="count-h4 pgray">Stock Status</p>

            </div>
          </div>
          {products.map((prod) => {
            return (
              <div key={prod.id} className="cart-details container">
                <div className="row">
                  <div className="col-md-2">
                    <img src={prod.image} alt="product-img" />
                  </div>
                  <div className="col-md-2">
                    <p>{prod.category === 1 ? 'Accessories' : prod.category === 2 ? 'Device' : 'Gadgets'}</p>
                    <h4 style={{ marginTop: "0px" }} className="norm-h4">
                      {prod.title}
                    </h4>
                  </div>
                  <div className="col-md-2">
                    <h4 className="norm-h4">{prod.price + '$'}</h4>
                  </div>
                  <div className="col-md-2 mt-3">
                    <h5 className="count-h4">{prod.stock > 0 ? 'In stock' : 'Out stock'}</h5>

                  </div>
                  <div className="col-md-2 mt-3 butadd">
                    <button className="butAdd" onClick={() => setOpenPopup(true)}>ADD TO CART</button>
                    {/* <Link to="/cart"><button className="butAdd" >ADD TO CART</button></Link> */}
                  </div>
                  <div className="col-md-2 ">
                    <button className="cart-eliminatee wishdel" onClick={() => deleteProductFromWishlist(prod.id_wishlist)}>X</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div></div>
    <SuccCart openPopup={openPopup} setOpenPopup={setOpenPopup}></SuccCart>

    <Footer />

  </>)
}
export default Wishlist;