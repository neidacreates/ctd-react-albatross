import * as React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
    {
      id: 1,
      title: "do the dishes",
    },
    {
      id: 2,
      title: "take out the trash",
    },
    {
      id: 3,
      title: "sweep the floor",
    },
];

const TodoList = () => (
  <ul>
    {todoList.map((item) => {
      return <TodoListItem key={item.id} todo={item} />
    })}
  </ul>
);

export default TodoList;

