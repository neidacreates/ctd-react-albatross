import React from 'react';

const TodoListItem = ({ todo }) => {
    return (
    <li>
        {todo.title}
        <button type="button" onClick={() => onRemoveTodo(id)}>Remove</button>
    </li>
    );
};

export default TodoListItem;