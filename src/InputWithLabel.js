import * as React from 'react';

const InputWithLabel = (props) =>
{
    return (
        <>
        <label htmlFor="todo">{props.children}</label>
        <br></br>
        <input 
            id="todo"
            name="title" 
            type="text"
            value={props.todoTitle} 
            onChange={props.handleTitleChange}
            autoFocus
        />
        <br></br>
        </>
    );     
};
export default InputWithLabel;