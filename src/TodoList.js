import * as React from 'react';
import TodoListItem from './TodoListItem';



const TodoList = ({ todoList, onRemoveTodo }) => (
  
  <ul>
    {todoList.map((item) => {
      return (
      <TodoListItem 
        key={item.id} 
        todo={item} 
        onRemoveTodo={onRemoveTodo}
      />
      );
    })}
  </ul>
);

export default TodoList;

