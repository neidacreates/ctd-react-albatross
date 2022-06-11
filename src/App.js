import React from 'react';

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

function App() {
  return (
    <div>
    <h1>Todo List</h1>
      <ul>
        {todoList.map(function(item){
          return ( 
            <li key ={item.id}>
              {item.title}
            </li>
          );
        })}
      </ul>
      </div>
  );
}

export default App;
