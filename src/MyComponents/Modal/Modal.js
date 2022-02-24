import React, { useEffect } from 'react';
import ReactDom from 'react-dom';
import './Modal.css';
import { ReactComponent as Cross} from '../SVGs/Cross.svg';
import { ReactComponent as Tick} from '../SVGs/Tick.svg'

export default function Modal(props) {

    function closeModal(param) {
        props.modalState(false);
        props.cancel(param);
    }

    useEffect(()=> {
        if(props.method[0] === true) {
            document.querySelector('.title-input').value = props.todo[props.method[1]].title;
            document.querySelector('.details-input').value = props.todo[props.method[1]].detail;
        }
    })

  return ReactDom.createPortal (
    <>
        
        <div className='modal-bg' onClick={()=> {
            closeModal(true);
            
        }}>
        </div>
            
        <div className="modalContainer">
            <header className='modalHeader'>
                <span className='details'>
                    <i className="far fa-edit"></i>
                    {
                    props.method[0] === true ?
                        'Edit Todo: '
                        : 'Details' 
                    }
                </span>
                <Cross className='cross' onClick={()=> {
                    closeModal(true);
                }} />
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
                    closeModal(true);
                }}>
                    <Cross className='cross' />
                    Cancel
                </button>
                <button className="save" onClick={()=> {

                    if(document.querySelector('.title-input').value !== '') {
                        if(document.querySelector('.title-input').value.length >= 40) {
                            alert("The title's too long, please make it short!");
                        }
                        else if(props.method[0] === true) {

                            let toEdit = {
                                title : document.querySelector('.title-input').value.toUpperCase(),

                                detail : document.querySelector('.details-input').value
                            }
                            
                            let toChange = [];
                            toChange = props.todo;

                            toChange[props.method[1]].title = toEdit.title;
                            toChange[props.method[1]].detail = toEdit.detail;

                            props.setTodo(toChange);

                            props.modalState(false)
                            

                        }
                        else{ 
                            props.title(document.querySelector('.title-input').value);
                            props.detail(document.querySelector('.details-input').value);

                            closeModal(false);
                        }
                    }

                    else {
                        alert('Some fields are Empty!');
                    }
                }}>
                    <Tick className='tick' />
                    Save
                </button>
            </div>
        </div>
        
    </>,
    document.getElementById('modal')
  )
}
