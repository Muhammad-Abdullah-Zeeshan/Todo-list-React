import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import './TodoContainer.css';
import TodoItems from '../TodoItems/todoItems';
import Modal from '../Modal/Modal'
import 'https://kit.fontawesome.com/8b96a632fe.js';


export default function TodoContainer() {
    const [todo, setTodo] = useState([]);
    const [todoTitle, setTodoTitle] = useState('');
    const [todoDetail, setTodoDetail] = useState('');

    const [modalState, setModalState] = useState(false);
    const [modalCancel, setModalCancel] = useState(false);

    function handleClick() {
        setModalState(true)
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

    }

    if(modalState) {
        document.body.style.overflowY = 'hidden';
    }

    else {
        document.body.style.overflowY = 'scroll'
    }

    let firstRender = useRef(true);
    useEffect(()=> {
        if(firstRender.current) {
            firstRender.current = false;
        }
        else{
            if(!modalState) {
                if(!modalCancel) {
                    let Title = todoTitle;
                    let Detail = todoDetail;
                    setTodo(prevTodo => [...prevTodo, {
                        title: Title.toUpperCase(),
                        detail: Detail
                    }])
                }
    
            }
            
        }
    }, [modalState, modalCancel, todoTitle, todoDetail])
    const isEmpty = todo.length === 0;

    return (

        <div className="wholeContainer">
            <div>
                {
                    !modalState ?
                        null
                    : <Modal modalState = {setModalState} title = {setTodoTitle} detail = {setTodoDetail} cancel = {setModalCancel} />
                }
            </div>
            <div className="tododiv">
                <span className="todos">Todos: </span>
                <hr/>
                {
                    !isEmpty ?
                    todo.map((eachTodo)=> {
                        let i = todo.indexOf(eachTodo);
                        return <TodoItems title = {eachTodo.title} detail = {eachTodo.detail} index = {i} arr = {todo} setTodo = {setTodo} key = {eachTodo.title}/>
                    })
                    : <span>Nothing</span>
                        
                }
            </div>
            <button className="add" onClick={handleClick}>
            <i className="fas fa-plus"></i>
                Add a Todo
            </button>
        </div>
    );
}
