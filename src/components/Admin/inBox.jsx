import './mailBox.css';
import {
    FaTrash,
    FaStar,
} from 'react-icons/fa';
import { useState } from 'react';
const InBox = (props) => {
    const[clickState,SetclickState]=useState(1);
    const[clickStar,SetclickStar]=useState(false);

    const HandelClickState=(item_id)=>{
        SetclickState(item_id);
        props.HandelOpen()
    };
    const HandelClickStar=(star_id)=>{
            SetclickStar(!clickStar)
    };
    return ( <>
    {props.data.map(mail=>{
        return(
            <div 
            className={clickState===mail.id?'inbox_messege_container_Active container mt-4':'inbox_messege_container container mt-4'}
            onClick={()=>HandelClickState(mail.id)}
            key={mail.id}
            >
            <div className="row">
                <div className="col-2">
                    <img src={mail.image} alt="person" className="mail-person-Image"></img>
                </div>
                <div className="col-6">
                    <h5>{mail.name}</h5>
                    <p className='mail-person-Messge'>{mail.message}</p>
                </div>
                <div className="col-4">
                    <div className='mail-person-time-part'>
                    <p className='mail-person-time-part-top'><span>{mail.day}</span> <span>{mail.time}</span></p>
                    <p className='mail-person-Icons-P'><span className='mail-person-Message-Icon1'><FaTrash size={22} color={"grey"}/></span> <span className='mail-person-Message-Icon2'><FaStar size={22} color={clickStar&&clickState===mail.id?'#0B69BB':'grey'} onClick={HandelClickStar}/></span></p>
                    </div>
                </div>
            </div>
           </div>
        )
    })}
     </> );
}
 
export default InBox;