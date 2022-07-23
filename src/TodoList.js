import * as React from 'react';
import TodoListItem from './TodoListItem';



const TodoList = ({ todoList }) => (
  <ul>
    {todoList.map((item) => {
      return <TodoListItem key={item.id} todo={item} />
    })}
  </ul>
);

export default TodoList;

