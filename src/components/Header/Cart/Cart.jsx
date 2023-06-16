import { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./Cart.css";
import axiosInstance from "../../../axios";
import { toast } from "react-toastify";

// import { useState } from "react";

const Cart = () => {
  const [countqty, setCountqty] = useState(0);
  const cartId = localStorage.getItem('cart_id');
  const userId = localStorage.getItem('userId');
  const [wishlistUpdate, setWishlistUpdate] = useState(false);
  const [totalPrice, setTotalPrice] = useState('');
  const [shipping, setShipping] = useState('');
  const [itemsLength, setItemsLength] = useState('');

  const [itemsState, setItemsState] = useState([]);
  useEffect(() => {
    axiosInstance.get(`/order_api/cart/all/${userId}`)
      .then(res => {
        const resData = res.data;
        const items = resData.map(obj => obj);
        setItemsState(items);
        setTotalPrice(resData[0].total_price)
        setShipping(resData[0].shipping)
        setItemsLength(resData[0].items.length)

      })
      .catch(err => {
        console.log(err);
      })
  }, [wishlistUpdate])

  const deleteCart = (cart_Id) => {

    if (cart_Id == cartId) {
      localStorage.removeItem('cart_id');
    } else {
      console.log("not cart_id")
    }
    const authToken = localStorage.getItem('token');
    axiosInstance.delete(`/order_api/cart/delete/${cart_Id}`, {
      headers: {
        Authorization: `Bearer ${authToken}`, // Include the authentication token in the request headers
      }
    })
      .then((res) => {
        toast.success('Cart deleted successfully')
        setWishlistUpdate(prevState => !prevState);

      })
      .catch((err) => {
        toast.error('Failed to delete Cart')
      });
  };
  const deleteCartItem = (itemId) => {
    const authToken = localStorage.getItem('token');
    axiosInstance.delete(`order_api/item/cart/delete/${itemId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`, // Include the authentication token in the request headers
      }
    })
      .then((res) => {
        toast.success('Product deleted successfully')
        setWishlistUpdate(prevState => !prevState);

      })
      .catch((err) => {
        toast.error('Failed to delete product')
      });
  };
  const updateCartQty = (itemId, productId, updatedQuantity) => {
    axiosInstance.put(`order_api/item/cart/update/${itemId}`, {
      product: productId,
      qnt: updatedQuantity
    })
      .then((res) => {
        setWishlistUpdate(prevState => !prevState);
      })
      .catch((err) => {
        toast.error('Failed to update product');
      });
  };

  const qtyCountAdd = (id, productId, qnt) => {
    const updatedQuantity = qnt + 1;
    setCountqty(updatedQuantity);
    updateCartQty(id, productId, updatedQuantity)
  }

  const qtyCountMins = (id, productId, qnt) => {
    if (qnt == 0) {
      toast.info('quantity already 0');
    } else {
      const updatedQuantity = qnt - 1;
      setCountqty(updatedQuantity);
      updateCartQty(id, productId, updatedQuantity)
    }
  }

  return (
    <>
      <NavBar />
      <div className="container cart-section">
        <div className="row">
          <div className="cart col-xl-9 col-lg-8">
            <h2>Your Cart</h2>
            {itemsState.map((items, index) => (
              <div key={index} className="cart__container">
                {items.items.length > 0 ? (
                  <ul>
                    {items.items.map(({ id, product, priceqnt, qnt }) => (
                      <div key={id} className="cart-details container">
                        <div className="row">
                          <div className="col-md-2">
                            {product.image && <img src={product.image} alt="product-img" />}

                          </div>
                          <div className="col-md-2">
                            <p>{product.category == 1 ? 'Accessories' : product.category == 2 ? 'Devices' : 'Gadgets'}</p>
                            <h4 style={{ marginTop: "0px" }} className="norm-h4">
                              {product.title}
                            </h4>
                          </div>
                          <div className="col-md-2">
                            <h4 className="norm-h4">{product.price}$</h4>
                          </div>
                          <div className="col-md-2 cart-count ">
                            <div className="m-auto ">
                              <button aria-label="increase" onClick={() => { qtyCountAdd(id, product.id, qnt) }}>+</button>
                              <h4 className="count-h4">{qnt}</h4>
                              <button aria-label="decrease" className='mins' onClick={() => { qtyCountMins(id, product.id, qnt) }}>-</button>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <h4 className="norm-h4">{priceqnt}$</h4>
                          </div>
                          <div className="col-md-2">
                            <button aria-label="delete item" className="cart-eliminate" onClick={() => { deleteCartItem(id) }}>X</button>
                          </div>

                        </div>
                      </div>
                    ))}
                  </ul>
                ) : (
                  "no Items"
                )}
                <span className="delete-cart" onClick={() => { deleteCart(items.id) }}>Delete cart</span>
              </div>
            ))}

            {/** Cart details*/}
          </div>
          {/************** Cart ***************/}
          <div className="summary-cart col-lg-4 col-md-5 col-7 col-xl-3">
            <h2>Summary</h2>
            <div className="summary-details">
              <table>
                <tbody>
                  <tr>
                    <th>3 ITEMS</th>
                    <td>{itemsLength}$</td>
                  </tr>
                  <tr>
                    <th>SHIPPING</th>
                    <td>{shipping}$</td>
                  </tr>
                  <tr>
                    <th>
                      <label htmlFor="code">ADD COUPON CODE</label>
                    </th>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <input
                        type="text"
                        id="code"
                        name="code"
                        placeholder="Enter Your Code"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <hr />
                    </td>
                  </tr>
                  <tr>
                    <th>TOTAL PRICE</th>
                    <td>{totalPrice}$</td>
                  </tr>
                  <tr>
                    <td colSpan="2" style={{ paddingLeft: "20px", paddingTop: "10px" }}>
                      <Link to="/checkout">
                        <button className="btn">CHECKOUT</button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
      <Footer />


    </>
  );
};
export default Cart;