import React from 'react';
import './todoItems.css';
import { ReactComponent as Tick } from  '../SVGs/Tick.svg';
import { ReactComponent as Trash } from '../SVGs/Trash.svg'


export default function todoItems(props) {

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

    function handleDone() {
        handleRemove('done');
    }

    return (
        <div className="mainContainer">
            <div className="header">
                <span className="title">{props.title}</span>
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
