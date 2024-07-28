import TodoCard from "./TodoCard";


export default  function TodoList(props) {
    const {todos,handleTodoDelete,handleTodoEdit} = props;
    
    return <>
        <ul className="main">
            {todos.map((todo,todoIndex) =>  {
                return (
                  <TodoCard handleTodoEdit = {handleTodoEdit}   handleTodoDelete = {handleTodoDelete} key = {todoIndex} todo = {todo} index = {todoIndex}></TodoCard>
                )
            })}
        </ul>
    </>
}