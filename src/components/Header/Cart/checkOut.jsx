import './checkOut.css';
import {
    FaCheck,
   } from "react-icons/fa";  
import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import "./pymentPopup.css"
import PymentPopup from "./pymentPopup"

  
const CheckOut = () => {
  const [openPopup, setOpenPopup] = useState(false);
    const [toggle1,setToggle1]=useState(true);
    const [toggle2,setToggle2]=useState(true);
    const HandelClick1=(e)=>{
        e.currentTarget.classList.toggle('change');
        if(toggle2===false){
        setToggle2(!toggle2)
        }
        setToggle1(!toggle1);
    };
    const HandelClick2=(e)=>{
        if(toggle1===false){
            setToggle1(!toggle1);
        }
        setToggle2(!toggle2);
    };
    return ( <>
     <body style={{backgroundColor:"white"}}>
    <NavBar/>
        <div className='payment_method container'>
            <h1 className='payment_h1'>Payment</h1>
            <p>choose Payment Method</p>
            <div className='row payment_method_content'>
                <div className='col-4 pay_With_Credit' style={{backgroundColor:toggle1?'white':'rgb(230, 229, 229)',border:toggle1?'2px solid #ececec':'3px solid #0396A6'}} onClick={HandelClick1}>
                    <div className='choosed_method ' style={{border:toggle1?'2px solid #ececec':'3px solid #0396A6'}}> <FaCheck className='credit_icon' style={{display:toggle1?'none':'block'}}/></div>
                    <img src={'./icons/credit-card.png'} alt={'credit card'}/>
                    <p>Pay With Credit Card</p>
                </div>
                <div className='col-4 pay_With_PayPal ' style={{backgroundColor:toggle2?'white':'rgb(230, 229, 229)',border:toggle2?'2px solid #ececec':'3px solid #0396A6'}} onClick={HandelClick2} >
                    <div className='choosed_method' style={{border:toggle2?'2px solid #ececec':'3px solid #0396A6'}}> <FaCheck className='credit_icon' style={{display:toggle2?'none':'block'}}/></div>
                    <img src={'./icons/paypal.png'} alt={'credit card'}/>
                    <p>Pay With Paypal</p>
                </div>
            </div>
        </div>
        {/* ------------------------------------- inter billing info ------------------------------------------------- */}
        <div className='container mt-5 mb-5'>
            <div className='row inter_Info_Billing'>
                <div className='Billing_info container col-md-4 col-10'>
                 <div className='row mb-4'>
                    <div className='col-1 billing_info_one'>1</div>
                    <div className='col-4 billing_info_title'>Billing Info</div>
                 </div>
<form class="row g-1">
  <div class="col-12">
    <label for="inputName" class="form-label">Full Name</label>
    <input type="text" class="form-control h-50" id="inputName" placeholder="Ahmed"/>
  </div>
  <div class="Billing_AddressInput col-12">
    <label for="inputAddress" class="form-label">Billing Address</label>
    <input type="text" class="form-control h-50" id="inputAddress" placeholder="Sammound-Bana"></input>
    <div><img src={'./icons/location-removebg-preview.png'} alt='location'/></div>
  </div>

<div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" placeholder='Samnoud'/>
  </div>
  <div class="col-md-6">
    <label for="inputZipCode" class="form-label">Zip Code</label>
    <input type="text" class="form-control" id="inputZipCode" placeholder='1234'/>
  </div>
  <div class="col-12 mb-4">
    <label for="inputState" class="form-label">Country</label>
    <select id="inputState" class="form-select">
      <option selected>Egypt</option>
      <option>Afghanistan</option>
      <option>Albania</option>
      <option>Algeria</option>
      <option>Bahrain</option>
      <option>Bangladesh</option>
      <option>Barbados</option>
      <option>Cabo Verde</option>
      <option>Canada</option>
      <option>Chile</option>
      <option>China</option>
      <option>Democratic Republic of the Congo	</option>
      <option>Denmark</option>
      <option>Djibouti</option>
      <option>Ecuador</option>
      <option>El Salvador</option>
      <option>Equatorial Guinea</option>
      <option>Eritrea</option>
      <option>Finland</option>
      <option>France</option>
      <option>Gabon</option>
    </select>
  </div>
  <div class="col-12 mt-5">
    <button type="button" class="btn border-primary Billing_Back_button"><a href='#/'>BACK</a></button>
  </div>
</form>
                </div>
                <div className='divider_Billing col-1'></div>
                <div className='Credit_Card_info col-md-4 col-10' >
                <div className='row mb-4'>
                    <div className='col-1 billing_info_one'>2</div>
                    <div className='col-6 billing_info_title'>Credit Card Info</div>
                 </div>
<form class="row g-1">
  <div class="col-12">
    <label for="inputHolderName" class="form-label">Card Holder Name</label>
    <input type="text" class="form-control h-50" id="inputHolderName" placeholder="Ahmed Hatem"/>
  </div>
  <div class="Billing_AddressInput col-12">
    <label for="inputCardNumber" class="form-label">Card Number</label>
    <input type="text" class="form-control h-50" id="inputCardNumber" placeholder="5642-2345-2342-2348"></input>
  </div>

<div class="col-md-6 mb-3">
<label for="inputEXPMonth" class="form-label">EXP.Month</label>
    <select id="inputEXPMonth" class="form-select">
      <option selected>January</option>
      <option>February</option>
      <option>March</option>
      <option>April</option>
      <option>May</option>
      <option>June</option>
      <option>July</option>
      <option>August</option>
      <option>September</option>
      <option>October</option>
      <option>November</option>
      <option>December</option>
    </select>
  </div>
  <div class="col-md-6">
  <label for="inputEXPYear" class="form-label">EXP.Year</label>
    <select id="inputEXPYear" class="form-select">
      <option selected>2023</option>
      <option>2024</option>
      <option>2025</option>
      <option>2026</option>
      <option>2027</option>
      <option>2028</option>
      <option>2029</option>
      <option>2030</option>
      <option>2031</option>
      <option>2032</option>
      <option>2033</option>
      <option>2034</option>
    </select>
  </div>
  <div class="col-12 mb-4">
  <label for="inputHolderName" class="form-label">CVV Number</label>
    <input type="text" class="form-control h-50" id="inputHolderName" placeholder="468"/>
  </div>
  <div class="col-12 Continue_Button_Container">
    <button type="button" class="btn border-primary Billing_Continue_button" onClick={() => setOpenPopup(true)}><a href='#/'>CONTINUE</a></button>
  </div>
</form>

                </div>
            </div>
        </div>
        <Footer/>
        <PymentPopup openPopup={openPopup} setOpenPopup={setOpenPopup}></PymentPopup>
        </body>
    </> );
}
 
export default CheckOut;