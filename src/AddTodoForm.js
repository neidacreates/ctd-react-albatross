import React from 'react';

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = React.useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        console.log("newTodoTitle is: ", newTodoTitle)
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
      event.preventDefault(); 
    //   let todoTitle = event.target.title.value;
    //   console.log(todoTitle);
      // confused on this part, the instructions say to pass newTodo as an argument but when I do that it doesn't work 
    //   props.onAddTodo(newTodo);
      onAddTodo({
          title: todoTitle,
          id: Date.now(),
      });
    //   event.target.reset();
    setTodoTitle('');
    };

    return (
        <form onSubmit={handleAddTodo}>
            <label  htmlFor="todo">Title:</label>
            <br></br>
            <input 
            name="title" 
            type="text"
            value={todoTitle} 
            id="todo"
            onChange={handleTitleChange}
            />
            <br></br>
            <button>Add</button>
        </form>
    );
};

export default AddTodoForm;