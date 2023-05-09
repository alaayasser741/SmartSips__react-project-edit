import { DialogContent, DialogTitle } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import React from "react";
import "./../Cart/pymentPopup.css";
import "./succ.css";
export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <>
      <Dialog open={openPopup}>
        <DialogContent>
          <div>
            <div className="invoice-content-header sucsscart">
              <div className="invoice-img">
                <img src="./icons/correct.jpg" alt="" />
                <h5>Successfully Added</h5>
                <p>Item Added Successfully To Your Cart</p>
              </div>
            </div>
          </div>
          <div className="ok-btn-invoice">
            <button
              className="btn"
              onClick={() => {
                setOpenPopup(false);
              }}
            >
              OK
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
// export default Popup;
