import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import SignUp from "./components/Login/SignUp";
import SignIn from "./components/Login/SignIn";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/NavBar/NavBar";
import Home from "./components/Home/home";
import HeadShop from "./components/Header/Shop/HeadShop";
import Product from "./components/Header/Shop/prodect";
import AboutUs from "./components/Pages/AboutUS";
import Contact from "./components/Header/Contact/Contact";
import Cart from "./components/Header/Cart/Cart";
import Wishlist from "./components/Header/Wishlist/Washlist";
import Profile from "./components/Login/ProfileAccount";
import OrderHistory from "./components/Pages/OrderHistory";
import CheckOut from "./components/Header/Cart/checkOut";
import LogOut from "./components/Login/LogOut";
import Sidebar from "./components/Admin/Sidebar";
import MyAccount from "./components/Admin/MyAccount";
import Dashboard from "./components/Admin/dashboard";
import MyDevices from "./components/Admin/devices";
import RestPass from "./components/Login/RestPass";
import NewPass from "./components/Login/NewPass";
import Setting from "./components/Admin/Setting";
import Notification from "./components/Admin/Notification";
import MailBox from "./components/Admin/mailBox";
import Customer from "./components/Admin/tables/customers";
import Orders from "./components/Admin/tables/orders";
import AdminProducts from "./components/Admin/tables/productsAdmin";
import ProductDetail from "./components/Header/Shop/productdetail"
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App() {
  return (
    <>

      <BrowserRouter>
        <Route path="/signup"><SignUp /></Route>
        <Route path="/signin"><SignIn></SignIn> </Route>
        <Route path="/logout"><LogOut></LogOut></Route>
        <Route path="/restpass"><RestPass></RestPass></Route>
        <Route path="/setpass"><NewPass></NewPass></Route>
        <Route component={Home} path="/" exact />
        <Route path="/shop"><HeadShop></HeadShop></Route>
        <Route path="/cart"> <Cart></Cart></Route>
        <Route path="/wishlist"><Wishlist></Wishlist></Route>
        <Route path="/orderhistory"><OrderHistory></OrderHistory> </Route>
        <Route path="/checkout"><CheckOut></CheckOut></Route>
        <Route path="/profile"> <Profile></Profile></Route>
        <Route path="/aboutus"><AboutUs></AboutUs></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route path='/productdetails'><ProductDetail></ProductDetail></Route>
        <div className="d-flex" >
          <Route path="/myaccount"><MyAccount></MyAccount> </Route>
          <Route path="/dashboard"><Dashboard></Dashboard></Route>
          <Route path="/devices"><MyDevices></MyDevices></Route>
          <Route path="/customers"> <Customer></Customer></Route>
          <Route path="/orders"> <Orders></Orders> </Route>
          <Route path="/products"><AdminProducts></AdminProducts></Route>
          <Route path="/setting"><Setting></Setting></Route>
          <Route path="/mailbox"> <MailBox></MailBox> </Route>
          <Route path="/notification"><Notification></Notification> </Route>
        </div>
        <ToastContainer position="top-right" theme="dark" />
      </BrowserRouter>
    </>
  );
}

export default App;
