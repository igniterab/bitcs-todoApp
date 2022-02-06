import React,{useState} from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    const [checked, setChecked] = useState(true);

    const handletoggle = () => {
        filteredTodos = filteredTodos.map(a=>a.completed=checked);
        setChecked(!checked);
    }

    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" onChange={handletoggle}/>
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                        <Todo
                            todos={todos}
                            setTodos={setTodos}
                            text={todo.text}
                            key={todo.id}
                            todo={todo}
                            completed={todo.completed}
                        />
                    ))}
            </ul>
        </section>
    )
};

export default TodoList;