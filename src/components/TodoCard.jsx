export default function TodoCard(props) {
  const {index,todo,handleTodoDelete,handleTodoEdit} = props;
  return (
     <li key = {index} className = "todoItem" >
        <span>{todo}</span>
        <div className="actionsContainer">
          
          <button onClick={() => {
                handleTodoEdit(index)
            }}>
              <i className="fa-solid fa-pen-to-square"></i> 
          </button>

            <button onClick={() => {
                handleTodoDelete(index)
            }}>
              <i className="fa-solid fa-trash-can"></i>
            </button>

        </div>
         
     </li>
  )
}
