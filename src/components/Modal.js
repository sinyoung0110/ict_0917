import React from 'react';
import modalImg from './modal.jpg'
function Modal(){
    return(
        <div 
        style={{
            top: '80px',
            left : '35px',
            padding : '15px',
            textAlign: 'left',
            position : 'fixed',
            height : '0%'
        }} 
            >
                <img src={modalImg} 
                style={{
                    width : '80%',
                }}/>
        </div>
    )
}
export default Modal;