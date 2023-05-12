import "./prodect.css";
import {
  FaRegHeart,
  FaShoppingBag
} from "react-icons/fa";
import Footer from "../../Footer/Footer";
import { useEffect } from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import SuccCart from "./succCart"
import SuccWashlist from "./succWishlist";
import axiosInstance from "../../../axios";

const ProductItem = (props) => {
  const [openPopup1, setOpenPopup1] = useState(false);
  const [openPopup2, setOpenPopup2] = useState(false);
  const { data } = props;
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));

  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  const handleWishList = (p_id) => {
    axiosInstance.post('https://smartsips-production.up.railway.app/products_api/wishlist/add', {
      "product": [p_id],
      "user_wishlist": ['6']
    })
      .then(res => {
        setOpenPopup2(true)
      })
      .catch(err => console.log(err))
  }
  return (
    <>
      {currentItems.map(p => {
        return (
          <div className="product_Contant" key={p.id}>
            <div className="product_Image">
              <img src={p.image} alt="" />
            </div>
            <div className="container-fluid product_description">
              <div className="row">
                <div className="col-6">
                  <Link to='/productdetails'>{p.title}</Link>
                  <h6>{p.price}$</h6>
                </div>
                <div className="col-6 container product_Icons_Container">
                  <div className="row">
                    <div className="favourite_Product col-md-5 col-8">
                      <a href="#/" onClick={() => handleWishList(p.id)}><FaRegHeart /></a>
                    </div>
                    <div className="product_Cart col-md-5 col-8">
                      <a href="#/" onClick={() => setOpenPopup1(true)}>< FaShoppingBag /></a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )
      })}

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        activeLinkClassName="active"
      />
      <SuccCart openPopup={openPopup1} setOpenPopup={setOpenPopup1}></SuccCart>
      <SuccWashlist openPopup={openPopup2} setOpenPopup={setOpenPopup2}></SuccWashlist>

    </>
  );
}

export default ProductItem;