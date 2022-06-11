import React from 'react';

const AddTodoForm = () => {
    return (
        <form>
            <label htmlFor="todo">Title:</label>
            <br></br>
            <input type="text" id="todo">
            </input>
            <br></br>
            <button>Add</button>
        </form>
    );
};

export default AddTodoForm;