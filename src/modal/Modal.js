import { useState } from 'react';
import './Modal.css'

const Modal=({mode})=>{
    const [display ,setDisplay]=useState({mode});
    return(
    <div className='Modal'>
        <div className='modal-content'>
            <span class="close">&times;</span>
            <p>Some text in the Modal..</p>
        </div>
    </div>
    )
}

export default Modal;