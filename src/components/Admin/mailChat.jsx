import React from "react";
import {
    FaTrash,
    FaStar,
    FaPrint,
    FaShare,
    FaPaperclip,
    FaPaperPlane
} from 'react-icons/fa';
import './mailBox.css';
const MailChat = (props) => {
    // console.log(props)
    return ( <>
    <div className='mail_box_chat_icons container'>
                        <div className='row justify-content-between'>
                        <div className='mail_box_chat_icons_Left col-7' >
                            <span className='Chat_Icon_Leftt'><FaTrash size={20} color={"grey"}></FaTrash></span>
                            <span className='Chat_Icon_Leftt'><FaStar size={20} color={"grey"}></FaStar></span>
                            <span className='Chat_Icon_Leftt'><FaPrint size={20} color={"grey"}></FaPrint></span>
                            <span className='Chat_Icon_Leftt'><FaShare size={20} color={"grey"}></FaShare></span>
                        </div>
                        <div className='mail_box_chat_icons_Right col-3' onClick={props.HandelClose}>
                            <img src='./icons/cross.png' alt='close'/>
                        </div>
                        </div>
                    </div>
                    <div className="inbox_messege_container_Chat container mt-4">
            <div className="row justify-content-between">
                <div className="col-2">
                    <img src='./images/person.PNG' alt="person" className="mail-person-Image"></img>
                </div>
                <div className="col-9 ">
                    <h6>Sam Nelson</h6>
                    <p className='mail-person-Messge'>samNeloan@gimal.com</p>
                </div>
            </div>
                    </div>
                    <div className='col-11 inbox_message_write_input d-flex'>
                        <input type={'text'} placeholder={'Type your message ...'}/>
                        <div className='inbox_message_write_input_Container'>
                            <span className='inbox_message_write_input_attach'><FaPaperclip color='gray'></FaPaperclip></span>
                            <span className='inbox_message_write_input_send'><FaPaperPlane color='#0B69BB'></FaPaperPlane></span>
                        </div>
                        
                    </div>
    </> );
}
 
export default MailChat;