import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FaBars, FaChartSimple, FaBell, FaSearch } from "react-icons/fa";
const Sidebar = () => {
  const [show, setShow] = useState(false);
  const [toggle, setToggle] = useState();
  const adminImage = localStorage.getItem('adminImage');
console.log(adminImage)
  return (
    <main className={show ? "space-toggle" : null}>
      <header className="header">
        {/* <header  className="header" className={`header ${show ? 'space-toggle' : null}`}> */}
        <div className="logoandlink">
          <Link to="/dashboard" className="smart-linkk">
            <img
              src={"./images/smartSipsLogo.png"}
              className="photologo"
              style={{ marginLeft: "-3px" }}
            />

            <span className="nav-link-name mt-2">Smart Sips</span>
          </Link>
        </div>
        {/* <img src={"./images/smartSipsLogo.png"} className="photologo" style={{marginLeft:"-160px",position:"fixed"}}/> */}
        <div
          className="header-toggle"
          onClick={() => setShow(!show)}
        >
          <i className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}></i>
        </div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <div className="input-containerr pass mt-3 big-searsh">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <i className="RegEyeSlash">
                  <FaSearch />
                </i>
              </div>
              {/* <i className='fabell ps-3  pt-1'><FaBell style={{width:"29px"}}/></i> */}
              <div className="headerrnotif">
                <div className="container">
                  <div className="links">
                    <i className="fabell   pt-1">
                      <FaBell style={{ width: "29px" }} />
                    </i>

                    <ul>
                      <li>
                        <a href="#">Notification</a>
                      </li>
                      <li>
                        <img
                          src={"./icons/Ellipse 13.png"}
                          alt="img"
                          className="notifphoto"
                        />
                        <span className="ms-1 spanpara">
                          Ahmed shared file with you
                        </span>
                        <span className="ms-3 spanmarg">3 hours</span>
                      </li>
                      <li>
                        <img
                          src={"./icons/Intersect-1.png"}
                          alt="img"
                          className="notifphoto"
                        />
                        <span className="ms-1 spanpara">
                          Ali send file in your Email
                        </span>
                        <span className="ms-4 spanmarg">12:34 pm</span>
                      </li>
                      <li>
                        <img
                          src={"./icons/Intersect.png"}
                          alt="img"
                          className="notifphoto"
                        />
                        <span className="ms-1 spanpara">
                          Omar send Message for you
                        </span>
                        <span className="ms-3 spanmarg">yesterday</span>
                      </li>
                      <Link to="/notification">
                        <li>
                          <a href="#" className="text-center text-primary">
                            View All
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </form>

            <div className="headerr">
              <div className="container">
                <div className="links">
                  <img
                    src={adminImage == 'http://smartsips-production.up.railway.app/images/upload_to/default.png' ? './icons/Ellipse 13.png' : adminImage ? adminImage :'./icons/Ellipse 13.png'}
                    alt="img"
                    className="imgnav"
                    style={{  borderRadius: '50%' }}
                    onClick={() => { setToggle(!toggle) }}
                  />

                  <ul className={toggle ? 'showMenu' : ''}>
                    <Link to="/myaccount">
                      <li>
                        <a href="#">Account</a>
                      </li>
                    </Link>
                    <Link to="/setting">
                      {" "}
                      <li>
                        <a href="#">Setting</a>
                      </li>
                    </Link>
                    <li>
                      <Link to={'/logout'} >

                        <span>Logout</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>

            <Link to="/dashboard" className="nav-linkk">
              <img
                src={"./images/smartSipsLogo.png"}
                className="photologo"
                style={{ marginLeft: "-3px" }}
              />
              <span className="nav-link-name mt-2">Smart Sips</span>
            </Link>
            <div className="nav-list">
              <Link to="/dashboard" className="nav-linnk">
                <img src={"./icons/bar-chart.png"} className="dashphoto" />
                <span className="nav-link-name">Dashboard</span>
              </Link>
              <Link to="/customers" className="nav-linnk">
                <img src={"./icons/group.png"} className="dashphoto" />
                <span className="nav-link-name">Customers</span>
              </Link>
              <Link to="/orders" className="nav-linnk">
                <img
                  src={"./icons/shopping-bag (3).png"}
                  className="dashphoto"
                />
                <span className="nav-link-name">Orders</span>
              </Link>
              <Link to="/products" className="nav-linnk">
                <img src={"./icons/box.png"} className="dashphoto" />
                <span className="nav-link-name">Products</span>
              </Link>
              <Link to="/devices" className="nav-linnk">
                <img src={"./icons/mapp.png"} className="dashphoto" />
                <span className="nav-link-name">Devices</span>
              </Link>
              <Link to="/mailbox" className="nav-linnk">
                <img src={"./icons/letter.png"} className="dashphoto" />
                <span className="nav-link-name">Mailbox</span>
              </Link>
            </div>
          </div>

          {/* <Link to='/logout' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link> */}
        </nav>
      </aside>
    </main >
  );
};

export default Sidebar;
