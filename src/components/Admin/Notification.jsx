import React from "react";
import './Notification.css'
import Sidebar from "./Sidebar";

const Notification = () => {
        return (
                <>
                        <Sidebar />
                        <div className="container-fluid dashboard_section">
                                <div className='container   dash_Board_content'>
                                        <h1>Notification</h1>
                                        <h4>Welcome!</h4>
                                </div>
                        </div>
                </>)
}
export default Notification;