import { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';
import { FaRegHeart, FaRegUser, FaShoppingBag, FaCartPlus, FaRegUserCircle } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RiUserSettingsLine } from 'react-icons/ri'
import { IoMdLogOut, IoIosClose } from 'react-icons/io'
import { useHistory } from 'react-router-dom';
import axiosInstance from '../../../axios';
class NavBar extends Component {
  state = { token: false, layout: false, userName: '', }


  componentDidMount() {
    const token = localStorage.getItem('token')
    console.log(token)
    if (token) {
      this.setState({ token: true })
      const fetchUserProfiles = async () => {
        try {
          const response = await axiosInstance.get('/user_api/auth/user/', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          // console.log(response);
          this.setState({ userName: response.data.email })
        } catch (error) {
          console.log(error);
          console.log('failed to get user')
        }
      };

      fetchUserProfiles();
    }
  }
  handleUserLogin() {

    if (this.state.token) {
      this.setState({ layout: true })
    } else {
      window.location.assign('/signin')
    }
  }

  render() {
    return (<>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid navpos">
          <img src={"./icons/Smart Sips.png"} alt="our logo" className="logoImg" />
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav navLink ms-auto">
              <li className="nav-item">
                <Link className="nav-link active Home_link" aria-current="page" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/shop">Shop</Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Pages
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="/" to='/aboutus'>About Us</Link></li>
                  <li><Link className="dropdown-item" href="/" to='/orderhistory'>History Order</Link></li>

                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#/" to='/contact'>Contact</Link>
              </li>
              {/* <li className="nav-item">
          <Link className="nav-link" href="#/" to='/signin'>Login</Link>
        </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link" href="#/" to='/logout'>LogOut</Link>
              </li> */}

              <li className="nav-item nav-icon" style={{ marginLeft: "20px" }} >
                <Link className="nav-link" href="/" to='/wishlist'><FaRegHeart /></Link>
              </li>
              <li className="nav-item nav-icon">
                <Link className="nav-link" href="/" to='/cart'> <FaCartPlus /></Link>
              </li>



              <li className="nav-item nav-icon lastNavIcon" style={{ marginRight: "20px", marginTop: "2px" }}>
                <button style={{ background: "transparent", border: "none", color: "#0B69BB" }} className="nav-link" href="#/" onClick={this.handleUserLogin.bind(this)}><FaRegUser /></button>
                {
                  this.state.layout && (
                    <div className="userLoggedInWrapper">
                      <span>{this.state.userName}</span>
                      <hr />
                      <Link to={'/profile'} >
                        <RiUserSettingsLine />
                        <span>Profile</span>
                      </Link>
                      <Link to={'/logout'} >
                        <IoMdLogOut />
                        <span>Logout</span>
                      </Link>
                      <span className="ioCloseIcon" title="close menu" onClick={() => this.setState({ layout: false })}>
                        <IoIosClose />
                      </span>
                    </div>
                  )
                }
              </li>
              {/* <li className="nav-item nav-icon" style={{marginRight:"20px"}}>
          <Link className="nav-link" href="#/" to='/profile'><FaRegUser/></Link>
        </li> */}


            </ul>
          </div>
        </div>
      </nav>




    </>);
  }
}

export default NavBar;