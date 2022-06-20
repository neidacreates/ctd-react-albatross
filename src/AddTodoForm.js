import React from 'react';

const AddTodoForm = (props) => {
    const handleAddTodo = (event) => {
      event.preventDefault(); 
      let todoTitle = event.target.title.value;
      console.log(todoTitle);
      // confused on this part, the instructions say to pass newTodo as an argument but when I do that it doesn't work 
    //   props.onAddTodo(props.newTodo)
      props.onAddTodo(todoTitle);
      event.target.reset();
    };
    return (
        <form onSubmit={handleAddTodo}>
            <label  htmlFor="todo">Title:</label>
            <br></br>
            <input name="title" type="text" id="todo">
            </input>
            <br></br>
            <button>Add</button>
        </form>
    );
};

export default AddTodoForm;