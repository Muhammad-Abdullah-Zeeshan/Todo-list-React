import React from 'react';
import './todoItems.css';
//import 'https://kit.fontawesome.com/8b96a632fe.js';


export default function todoItems(props) {

    function handleRemove(thisState) {
        document.getElementsByClassName('mainContainer')[props.index].style.opacity = '0.5';
        document.getElementsByClassName('mainContainer')[props.index].querySelector('.remove').disabled = true;

        setTimeout(()=> {
            let filteredArr = [];
        
            props.arr.forEach((todo)=> {
                if(props.arr.indexOf(todo) !== props.index) {
                    filteredArr.push(todo);
                }
            })

            props.setTodo(filteredArr);
        }, 1000);

        
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
                    <i className="far fa-check-circle"></i>
                    Mark as Done
                </button>
                <button className="remove" onClick={()=> {
                    handleRemove('remove');
                }}>
                    <i className="far fa-trash-alt"></i>    
                    Remove
                </button>
            </div>
        </div>
    )
}
