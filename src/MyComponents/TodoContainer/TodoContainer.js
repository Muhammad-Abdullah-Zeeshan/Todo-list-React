import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import './TodoContainer.css';
import { ReactComponent as Add} from '../SVGs/Add.svg';
import TodoItems from '../TodoItems/TodoItems';
import Modal from '../Modal/Modal';


export default function TodoContainer() {
    const [todo, setTodo] = useState([]);
    const [todoTitle, setTodoTitle] = useState('');
    const [todoDetail, setTodoDetail] = useState('');

    const [modalState, setModalState] = useState(false);
    const [modalCancel, setModalCancel] = useState(false);
    const [modalEdit, setModalEdit] = useState([]);

    function handleClick() {
        setModalEdit([false, null]);
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

                    if(modalEdit[0] === true) {

                    }
                    else{
                        let Title = todoTitle;
                        let Detail = todoDetail;
                        setTodo(prevTodo => [...prevTodo, {
                            title: Title.toUpperCase(),
                            detail: Detail
                        }])
                    }
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
                    : <Modal modalState = {setModalState} title = {setTodoTitle} detail = {setTodoDetail} cancel = {setModalCancel} todo = {todo} setTodo = {setTodo} method = {modalEdit} />
                }
            </div>
            <div className="tododiv">
                <span className="todos">Todos: </span>
                <hr/>
                {
                    !isEmpty ?
                    todo.map((eachTodo)=> {
                        let i = todo.indexOf(eachTodo);
                        return <TodoItems title = {eachTodo.title} detail = {eachTodo.detail} index = {i} arr = {todo} setTodo = {setTodo} key = {eachTodo.title} modalState={modalState} setModalState={setModalState} setModalEdit={setModalEdit} method = {modalEdit} />
                    })
                    : <span>Nothing</span>
                        
                }
            </div>
            <button className="add" onClick={handleClick}>
                <Add className='plus'/>
                Add a Todo
            </button>
        </div>
    );
}
