import { useState } from 'react';
import './Header.css';
import Modal from '../modal/Modal';

const Header=()=>{
    const [display ,setDisplay]=useState("none");
    return(
    <div className="Header">
        <div className='titre'>Destinations</div>
        <button className='button' onclick={()=>{setDisplay("block")}}>+ AJOUTER</button>
        <Modal mode={display}/>
    </div>
    );
}

export default Header