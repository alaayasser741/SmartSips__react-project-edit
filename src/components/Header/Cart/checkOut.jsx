import './checkOut.css';
import {
  FaCheck,
} from "react-icons/fa";
import { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../../Footer/Footer';
import "./pymentPopup.css"
import PymentPopup from "./pymentPopup"
import axiosInstance from '../../../axios'
import { toast } from "react-toastify";

const CheckOut = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);

  const [fullName, setFullName] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [countryCode, setCountryCode] = useState(0);
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [monthCode, setMonthCode] = useState(0);
  const [year, setYear] = useState('');
  const [yearCode, setYearCode] = useState(0);
  const [cvv, setCvv] = useState('');

  const [cardNumberError, setCardNumberError] = useState('');

  const handleCardNumberChange = (e) => {
    const value = e.target.value;
    setCardNumber(value);

    // Validate the card number using regex
    const regex = /^[0-9]{16,19}$/; // Assuming the card number should be 12 to 19 digits
    const isValid = regex.test(value);

    // Set an error message if the input is invalid
    setCardNumberError(isValid ? '' : 'Invalid card number');
  };

  const handleSubmit = async (e) => {
    if (fullName != '' && billingAddress != '' && city != '' && zip != '' && cardNumberError == '' && cvv != '') {
      try {
        // Send month data
        const monthResponse = await axiosInstance.post('/order_api/payment/add/month', { month: month });
        const monthId = monthResponse.data.id;
        setMonthCode(monthId);

        // Send country data
        const countryResponse = await axiosInstance.post('/order_api/payment/add/location', { country: country });
        const countryId = countryResponse.data.id;
        setCountryCode(countryId);

        // Send year data
        const yearResponse = await axiosInstance.post('/order_api/payment/add/year', { year: year });
        const yearId = yearResponse.data.id;
        setYearCode(yearId);
      } catch (error) {
        console.log('Error:', error);
      }
    } else {
      toast.error('Check information and please try again');
    }

  };

  useEffect(() => {
    if (countryCode !== 0 && monthCode !== 0 && yearCode !== 0) {
      // Send payment data
      const paymentData = {
        fullname: fullName,
        billingaddress: billingAddress,
        city: city,
        zipcode: zip,
        country: countryCode,
        month: monthCode,
        year: yearCode,
        cardholdername: cardHolderName,
        cardnumber: cardNumber,
        cvv: cvv
      };

      axiosInstance.post('/order_api/payment/create', paymentData)
        .then(response => {
          setOpenPopup(true);
          toast.success('payment created successfully')
        })
        .catch(error => {
          console.log('Error:', error);
          toast.error('payment Failed')
        });
    }
  }, [countryCode, monthCode, yearCode]);


  const HandelClick1 = (e) => {
    e.currentTarget.classList.toggle('change');
    if (toggle2 === false) {
      setToggle2(!toggle2)
    }
    setToggle1(!toggle1);
  };
  const HandelClick2 = (e) => {
    if (toggle1 === false) {
      setToggle1(!toggle1);
    }
    setToggle2(!toggle2);
  };
  return (<>

    <NavBar />
    <div className='payment_method container'>
      <h1 className='payment_h1'>Payment</h1>
      <p>choose Payment Method</p>
      <div className='row payment_method_content'>
        <div className='col-4 pay_With_Credit' style={{ backgroundColor: toggle1 ? 'white' : 'rgb(230, 229, 229)', border: toggle1 ? '2px solid #ececec' : '3px solid #0396A6' }} onClick={HandelClick1}>
          <div className='choosed_method ' style={{ border: toggle1 ? '2px solid #ececec' : '3px solid #0396A6' }}> <FaCheck className='credit_icon' style={{ display: toggle1 ? 'none' : 'block' }} /></div>
          <img src={'./icons/credit-card.png'} alt={'credit card'} />
          <p>Pay With Credit Card</p>
        </div>
        <div className='col-4 pay_With_PayPal ' style={{ backgroundColor: toggle2 ? 'white' : 'rgb(230, 229, 229)', border: toggle2 ? '2px solid #ececec' : '3px solid #0396A6' }} onClick={HandelClick2} >
          <div className='choosed_method' style={{ border: toggle2 ? '2px solid #ececec' : '3px solid #0396A6' }}> <FaCheck className='credit_icon' style={{ display: toggle2 ? 'none' : 'block' }} /></div>
          <img src={'./icons/paypal.png'} alt={'credit card'} />
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
          <form className="row g-1">
            <div className="col-12">
              <label for="inputName" className="form-label">Full Name</label>
              <input onChange={(e) => { setFullName(e.target.value) }} value={fullName} type="text" className="form-control h-50" id="inputName" placeholder="Ahmed" />
            </div>
            <div className="Billing_AddressInput col-12">
              <label for="inputAddress" className="form-label">Billing Address</label>
              <input onChange={(e) => { setBillingAddress(e.target.value) }} value={billingAddress} type="text" className="form-control h-50" id="inputAddress" placeholder="Sammound-Bana"></input>
              <div><img src={'./icons/location-removebg-preview.png'} alt='location' /></div>
            </div>

            <div className="col-md-6">
              <label for="inputCity" className="form-label">City</label>
              <input onChange={(e) => { setCity(e.target.value) }} value={city} type="text" className="form-control" id="inputCity" placeholder='Samnoud' />
            </div>
            <div className="col-md-6">
              <label for="inputZipCode" className="form-label">Zip Code</label>
              <input onChange={(e) => { setZip(e.target.value) }} value={zip} type="text" className="form-control" id="inputZipCode" placeholder='1234' />
            </div>
            <div className="col-12 mb-4">
              <label for="inputState" className="form-label">Country</label>
              <select required onChange={(e) => { setCountry(e.target.value) }} value={country} id="inputState" className="form-select">
                <option value="" disabled >Select Country</option>
                <option>Egypt</option>
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
            <div className="col-12 mt-5">
              <button aria-label="back" type="button" className="btn border-primary Billing_Back_button"><a href='#/'>BACK</a></button>
            </div>
          </form>
        </div>
        <div className='divider_Billing col-1'></div>
        <div className='Credit_Card_info col-md-4 col-10' >
          <div className='row mb-4'>
            <div className='col-1 billing_info_one'>2</div>
            <div className='col-6 billing_info_title'>Credit Card Info</div>
          </div>
          <form className="row g-1">
            <div className="col-12">
              <label for="inputHolderName" className="form-label">Card Holder Name</label>
              <input onChange={(e) => { setCardHolderName(e.target.value) }} value={cardHolderName} type="text" className="form-control h-50" id="inputHolderName" placeholder="Ahmed Hatem" />
            </div>
            <div className="Billing_AddressInput col-12">
              <label for="inputCardNumber" className="form-label">Card Number</label>
              <input
                onChange={handleCardNumberChange}
                value={cardNumber}
                type="text"
                className="form-control h-50"
                id="inputCardNumber"
                placeholder="5642-2345-2342-2348"
              />
              {cardNumberError && (
                <p className="error-message" style={{ color: 'red' }}>{cardNumberError}</p>
              )}
            </div>

            <div className="col-md-6 mb-3">
              <label for="inputEXPMonth" className="form-label">EXP.Month</label>
              <select onChange={(e) => { setMonth(e.target.value) }} value={month} id="inputEXPMonth" className="form-select">
                <option value="" disabled >Select Month</option>
                <option>January</option>
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
            <div className="col-md-6">
              <label for="inputEXPYear" className="form-label">EXP.Year</label>
              <select required onChange={(e) => { setYear(e.target.value) }} value={year} id="inputEXPYear" className="form-select">
                <option value="" disabled >Select Year</option>
                <option >2023</option>
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
            <div className="col-12 mb-4">
              <label for="inputHolderName" className="form-label">CVV Number</label>
              <input onChange={(e) => { setCvv(e.target.value) }} value={cvv} type="text" className="form-control h-50" id="inputHolderName" placeholder="468" />
            </div>
            <div className="col-12 Continue_Button_Container">
              <button aria-label="Continue" type="button" className="btn border-primary Billing_Continue_button"  onClick={() => { handleSubmit(); }}>CONTINUE</button>
            </div>
          </form>

        </div>
      </div >
    </div >
    <Footer />
    <PymentPopup openPopup={openPopup} setOpenPopup={setOpenPopup}></PymentPopup>

  </>);
}

export default CheckOut;