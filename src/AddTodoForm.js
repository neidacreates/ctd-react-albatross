import React from 'react';
import InputWithLabel from './InputWithLabel';

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = React.useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        // console.log("newTodoTitle is: ", newTodoTitle)
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
      event.preventDefault(); 
    //   let todoTitle = event.target.title.value;
    //   console.log(todoTitle);
      onAddTodo({
          title: todoTitle,
          id: Date.now(),
      });
    //   event.target.reset();
      setTodoTitle('');
    };

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel
              // value={todoTitle} 
              // onChange={handleTitleChange}
              // I had this ^ and the form wouldn't add items to the todo list, so I changed it to this below instead and it worked:
              todoTitle={todoTitle} 
              handleTitleChange={handleTitleChange}
            >
              Title:
            </InputWithLabel>
            <button type="submit">Add</button>
            {/* what I had before from lesson 1.5: */}
            {/* <label  htmlFor="todo">Title:</label>
            <br></br>
            <input 
            id="todo"
            name="title" 
            type="text"
            value={todoTitle} 
            onChange={handleTitleChange}
            />
            <br></br>
            <button type="submit">Add</button> */}
        </form>
    );
};

export default AddTodoForm;