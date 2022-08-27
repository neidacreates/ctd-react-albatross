import * as React from 'react';

const InputWithLabel = (props) =>
{
    const inputRef = React.useRef();

    React.useEffect(() => {
        inputRef.current.focus();
    });

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
            ref={inputRef}
        />
        <br></br>
        </>
    );     
};
export default InputWithLabel;