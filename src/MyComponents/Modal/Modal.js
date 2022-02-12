import React from 'react';
import ReactDom from 'react-dom';
import './Modal.css';
//import 'https://kit.fontawesome.com/8b96a632fe.js'

export default function Modal(props) {
    
  return ReactDom.createPortal (
    <>
        
        <div className='modal-bg' onClick={()=> {
            props.modalState(false);
            props.cancel(true);
        }}>
        </div>
            
        <div className="modalContainer">
            <header className='modalHeader'>
                <span className='details'>
                    <i className="far fa-edit"></i>
                    Details
                </span>
                <i className="fas fa-times" onClick={()=> {
                    props.modalState(false);
                    props.cancel(true);
                }}></i>
            </header>
            <div className="modalBody">
                <div className="title">
                    <span>Title: </span>
                    <input type="text" placeholder='Add a Title...' className="title-input" />    
                </div> 
                <div className="todo-details">
                    <span>Details: </span>
                    <textarea name="details-input" className='details-input' cols="30" rows="10" placeholder='Add Details...'></textarea>
                </div>
            </div>
            <div className="modalBtn">
                <button className="cancel" onClick={()=> {
                    props.modalState(false);
                    props.cancel(true);
                }}>
                    <i className="far fa-times-circle"></i>
                    Cancel
                </button>
                <button className="save" onClick={()=> {

                    if(document.querySelector('.title-input').value !== '') {
                        props.title(document.querySelector('.title-input').value);
                        props.detail(document.querySelector('.details-input').value);

                        props.modalState(false);
                        props.cancel(false);

                    }

                    else {
                        alert('Some fields are Empty!');
                    }
                }}>
                    <i className="far fa-check-circle"></i>
                    Save
                </button>
            </div>
        </div>
        
    </>,
    document.getElementById('modal')
  )
}
