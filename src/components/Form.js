import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random()*1000}
        ]);
        setInputText("");
    }

    return (
        <>
            <header className="header">
            <h1>todos</h1>
            <form onSubmit={submitTodoHandler}>
            <input className="new-todo"
                placeholder="What needs to be done?"
                value={inputText}
                onChange={inputTextHandler}
                /> 
                </form>
        </header>
        </>
    )
};

export default Form;