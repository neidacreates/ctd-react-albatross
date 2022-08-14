import * as React from 'react';
import TodoListItem from './TodoListItem';



const TodoList = ({ todoList, removeTodo }) => (
  
  <ul>
    {todoList.map((item) => {
      return (
      <TodoListItem 
        key={item.id} 
        todo={item} 
        onRemoveTodo={removeTodo}
      />
      );
    })};
  </ul>
);

export default TodoList;

