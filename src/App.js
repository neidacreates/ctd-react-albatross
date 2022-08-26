import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList') || '[]'));

  // useEffect (() => {
  //   Promise
  // });
  
  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const editedList = todoList.filter((todo) => todo.id !== id);
    setTodoList(editedList);
  };

  return (
    <>
    <h1>Todo List</h1>
    <AddTodoForm 
      onAddTodo={addTodo}
    />
    <TodoList 
      todoList={todoList}
      onRemoveTodo={removeTodo}
    />
    </>
  );
}

export default App;
