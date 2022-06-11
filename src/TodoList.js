import * as React from 'react';

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

const TodoList = () => {
    return (
        <ul>
        {todoList.map(function(item){
          return ( 
            <li key ={item.id}>
              {item.title}
            </li>
          );
        })}
        </ul>
    );
};

export default TodoList;

