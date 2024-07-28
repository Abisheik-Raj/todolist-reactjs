import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import {useEffect, useState} from "react";

function App() {
  const [todos,setTodos] = useState([]);   
  const [buttonType,setButtonType] = useState("Add");
  const [todoValue,setTodoValue] = useState("");

  function persist(newList) {
    localStorage.setItem("todos", JSON.stringify({todos : newList}));
  }


  function handleTodoUpdate (newTodo) {
    const newTodos = [...todos,newTodo];
    persist(newTodos);
    setTodos(newTodos);
  } 

  function handleTodoDelete(index) {
    const newTodos = todos.filter((_,i) => i !== index);
    persist(newTodos);
    setTodos(newTodos);
  }

  function handleTodoEdit(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleTodoDelete(index);
    setButtonType("Edit");
  }

  useEffect(
    () => {
      if(!localStorage) return;
      let localTodos = localStorage.getItem("todos");
      if(!localTodos) return;
      localTodos = JSON.parse(localTodos).todos;
      setTodos(localTodos);
    }, []
  );

  return (
      <>
        <TodoInput buttonType = {buttonType} setButtonType = {setButtonType} todoValue = {todoValue} setTodoValue = {setTodoValue} handleTodoUpdate = {handleTodoUpdate}></TodoInput>
        <TodoList  handleTodoDelete = {handleTodoDelete} handleTodoEdit = {handleTodoEdit} todos = {todos}></TodoList>
      </>
   )
}

export default App
