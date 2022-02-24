import React, { useEffect, useRef } from 'react';
import './todoItems.css';
import { ReactComponent as Tick } from  '../SVGs/Tick.svg';
import { ReactComponent as Trash } from '../SVGs/Trash.svg'
import { ReactComponent as Edit } from '../SVGs/Edit.svg';


export default function TodoItems(props) {


    function handleRemove(thisState) {
        document.getElementsByClassName('mainContainer')[props.index].style.opacity = '0.5';
        document.getElementsByClassName('mainContainer')[props.index].querySelector('.remove').disabled = true;
        
        setTimeout(()=> {
            let filteredArr = props.arr.filter((items)=> {
                return props.index !== props.arr.indexOf(items)
                })
            props.setTodo(filteredArr);
        

        }, 300);

    }

    function fadeIn() {
        setTimeout(()=> {
            document.getElementsByClassName('mainContainer')[props.index].style.transform = 'translateX(0px)';

            document.getElementsByClassName('mainContainer')[props.index].style.opacity = '1';
        }, 30)
    }

    useEffect(()=> {
        fadeIn()
        let count = document.getElementsByClassName('title')[props.index].innerHTML;
        if(count.length > 12) {
            document.getElementsByClassName('title')[props.index].style.fontSize = '22px';
        }
    })


    function handleDone() {
        handleRemove('done');
    }

    function handleEditClick() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        props.setModalEdit([true, props.index]);
        props.setModalState(true);
    }

    return (
        <div className="mainContainer" id='main-container'>
            <div className="header">
                <span className="title">{props.title}</span>
                <div className="edit-div">
                    <Edit className="edit" onClick={handleEditClick} />
                </div>
            </div>

            <div className="details">
                {props.detail}
            </div>

            <hr/>
            <div className="buttons">
                <button className="mark-done" onClick={handleDone}>
                    <Tick className = 'tick'/>
                    Mark as Done
                </button>
                <button className="remove" onClick={()=> {
                    handleRemove('remove');
                }}>
                    <Trash className='trash'/>    
                    Remove
                </button>
            </div>
        </div>
    )
}
