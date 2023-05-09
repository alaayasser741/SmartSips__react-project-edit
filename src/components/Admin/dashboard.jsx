import './dashboard.css';
import FristChart from './fristchart';
import SecondChart from './secondchart';
import Sidebar from './Sidebar';

import {
    FaArrowUp,
} from "react-icons/fa";
import ThirdChart from './thirdchart';
const Dashboard = () => {
    return (<>
        <Sidebar />
        <div className="container-fluid dashboard_section" >
            <div className='container dash_Board_content'>
                <h1>Dashboard</h1>
                <h4>Welcome!</h4>
                <div className="row dashboard_info_row">
                    <div className="col-xl-2 col-5 m-2 frist_info_rectangle">
                        <div className="container">
                            <div className="row frist_info_rectangle_content">
                                <div className="col-7">
                                    <h3>340,230</h3>
                                    <p>Page views</p>
                                </div>
                                <div className="col-3">
                                    <img src="./icons/view.png" alt="views" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-5 m-2 frist_info_rectangle" >
                        <div className="container">
                            <div className="row frist_info_rectangle_content">
                                <div className="col-7">
                                    <h3>279,200</h3>
                                    <p>Customers</p>
                                </div>
                                <div className="col-3">
                                    <img src="./icons/customer.png" alt="views" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-5 m-2 frist_info_rectangle">
                        <div className="container">
                            <div className="row frist_info_rectangle_content">
                                <div className="col-7">
                                    <h3>240</h3>
                                    <p>Orders</p>
                                </div>
                                <div className="col-3">
                                    <img src="./icons/shopping-bag (5).png" alt="views" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-5 m-2 frist_info_rectangle">
                        <div className="container last_rec_content">
                            <div className="row frist_info_rectangle_content">
                                <div className="col-9">
                                    <h4>$740,230</h4>
                                    <p>Revenue Growth</p>
                                </div>
                                <div className="col-3">
                                    <img src="./icons/shopping-cart (3).png" alt="views" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------- frist section------------------- */}
            <div className='container chart_Admin_section'>
                <div className='row charts_Admin_Info'>
                    <div className='col-lg-5 col-11 m-2 frist_chart_Admin'>
                        <div className='container frist_chart_top'>
                            <div className='row justify-content-between mt-4'>
                                <h5 className='col-xl-5 col-lg-3 col-4'>Sales Report</h5>
                                <div className='col-xl-6 col-lg-8 col-6 frist_chart_selectGroup' >
                                    <select name="duration" id="duration">
                                        <option value="Weekly">This Week</option>
                                        <option value="Dayly">Dayly</option>
                                        <option value="Monthly">Monthly</option>
                                    </select>
                                    <img src='./icons/download.png' alt='download' />
                                </div>
                            </div>
                        </div>
                        <div className='col-12 LineAndBar_Chart'>
                            <FristChart />
                        </div>
                    </div>
                    <div className='col-lg-5 col-11 m-2 frist_chart_Admin'>
                        <div className='container frist_chart_top'>
                            <div className='row justify-content-between mt-4'>
                                <h5 className='col-xl-6 col-lg-3 col-4'>Customers Satisfaction</h5>
                                <div className='col-xl-6 col-lg-8 col-6 frist_chart_selectGroup' >
                                    <select name="duration" id="duration">
                                        <option value="Weekly">This Week</option>
                                        <option value="Dayly">Dayly</option>
                                        <option value="Monthly">Monthly</option>
                                    </select>
                                    <img src='./icons/download.png' alt='download' />
                                </div>
                            </div>
                        </div>
                        <div className='col-9 Pie_Chart '>
                            <SecondChart />
                        </div>
                    </div>
                </div>
            </div>
            {/* -------------------------second section------------------- */}
            <div className='container mt-5 Last_dashboard_section'>
                <div className='row Last_dashboard_section_space '>
                    <div className='col-lg-5 col-11 m-2 rr'>
                        <div className='row space_1last_dashboard_section'>
                            <div className='col-3 Numbers_of_People_div'>
                                <div className='top_Numbers_of_People_div'>
                                    <h2>178</h2>
                                    <h6>New Customers</h6>
                                </div>
                                <div className='Last_1_sectionDivider'></div>
                                <div className='bottom_Numbers_of_People_div' >
                                    <h2>750</h2>
                                    <h6>New Visitors</h6>
                                </div>
                            </div>
                            <div className='col-8 Activity_overview_div'>
                                <div className='top_Activity_overview_div container'>
                                    <h5>Activity Overview </h5>
                                    <div className='row'>
                                        <div className='col-2'><FaArrowUp style={{ color: '#0396A6' }} /></div>
                                        <p className='col-9'>16% This Month</p>
                                    </div>
                                </div>
                                <div className='bottom_Activity_overview_div container'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <div className='circle_activity_overview'></div>
                                            <div className='divider_activity_overview'></div>
                                        </div>
                                        <div className='col-9 bottom_Activity_overview_div_time'>
                                            <p>Purchase ($2400)</p>
                                            <p>11 Jul <span> 8:10 Pm</span></p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <div className='circle_activity_overview'></div>
                                            <div className='divider_activity_overview'></div>
                                        </div>
                                        <div className='col-9 bottom_Activity_overview_div_time'>
                                            <p>New Order(#887365)</p>
                                            <p>1 Jul <span> 7:20 Pm</span></p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <div className='circle_activity_overview'></div>
                                            <div className='divider_activity_overview'></div>
                                        </div>
                                        <div className='col-9 bottom_Activity_overview_div_time'>
                                            <p>New User (Ahmed Alsamahy)</p>
                                            <p>19 Jul <span> 8:30 Pm</span></p>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <div className='circle_activity_overview'></div>
                                        </div>
                                        <div className='col-9 bottom_Activity_overview_div_time'>
                                            <p>Product Added(Lcd Screen)</p>
                                            <p>11 Jul <span> 9:10 Am</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-11 m-2 rr'>
                        <div className='container Right_Side_Last_dashboard_section'>
                            <div className='row Right_Side_Last_dashboard_section_content'>
                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-3'><img src='./icons/profit.png' alt='profit' /></div>
                                        <div className='col-6 Right_Side_Last_dashboard_section_headings'>
                                            <h5>Total Profit</h5>
                                            <p>$1,753</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-4 Right_Side_Last_dashboard_section_chart'>
                                    <ThirdChart number={20} />
                                </div>
                            </div>
                        </div>
                        {/* -----one----- */}
                        <div className='container Right_Side_Last_dashboard_section'>
                            <div className='row Right_Side_Last_dashboard_section_content'>
                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-3'><img src='./icons/tag.png' alt='tag' /></div>
                                        <div className='col-6 Right_Side_Last_dashboard_section_headings'>
                                            <h5>Product Sold</h5>
                                            <p>4,7436</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-4 Right_Side_Last_dashboard_section_chart'>
                                    <ThirdChart number={14} />
                                </div>
                            </div>
                        </div>
                        {/* -------two-------- */}
                        <div className='container Right_Side_Last_dashboard_section'>
                            <div className='row Right_Side_Last_dashboard_section_content'>
                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-3'><img src='./icons/dollar.png' alt='dollar' /></div>
                                        <div className='col-6 Right_Side_Last_dashboard_section_headings'>
                                            <h5>Average Price</h5>
                                            <p>$6,543</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-4 Right_Side_Last_dashboard_section_chart'>
                                    <ThirdChart number={50} />
                                </div>
                            </div>
                        </div>
                        {/* ----------three--------- */}
                    </div>
                </div>
            </div>
            {/* ------------------------------------third section-------------------------------- */}
        </div>

    </>);
}

export default Dashboard;