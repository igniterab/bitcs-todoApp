import React, {useState} from 'react';

const Todo = ({ text, todo, todos, setTodos, completed }) => {
    const [toggle,setToggle] = useState(true)

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }

    const textupdateHandler = (e) => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, text: e.target.value
                }
            }
            return item;
        }))
    }

    
    return (
        <>
        <li className="todo">
        <div className="view">
        <input type="checkbox" checked={completed} onChange={completeHandler}/>&nbsp;
        {toggle ? <label className={completed ? "cut-input-text" : "input-text"}  
            onDoubleClick={() => {
                setToggle(false)
                 }}>{text}</label> :
        <input className={"input-text-outlined"} type="text"
            value={text}
            onChange = {textupdateHandler}
            onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === 'Escape') {
                  setToggle(true)
                  event.preventDefault()
                  event.stopPropagation()
                }
              }} 
            />
                }
        <button className="destroy" onClick={deleteHandler}></button>
        </div>
        </li>
        </>
    )
};

export default Todo;