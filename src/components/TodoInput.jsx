import { useState } from "react"

export default function TodoInput({buttonType,setButtonType ,todoValue,setTodoValue,handleTodoUpdate}) {

    return <div>
          <header>
            <input onChange={(event)  => {
              console.log(event.target.value)
            setTodoValue(event.target.value); 
            } 
          } 
        value = {todoValue}
        placeholder="Enter todo..." />
            <button onClick={() => {
              if(todoValue != "") {
                handleTodoUpdate(todoValue);
                setTodoValue("")
                setButtonType("Add")
              }

              
            }}>{buttonType}</button>
          </header>
        </div>

}