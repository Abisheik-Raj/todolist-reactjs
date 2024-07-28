import { useState } from "react"

export default function TodoInput({buttonType,setButtonType ,todoValue,setTodoValue,handleTodoUpdate}) {

    return <div>
        <audio id="mySound" src="/255389-PA4000-Keyboard-Enter-Key-10.wav"></audio>
          <header>
            <input onChange={(event)  => {
              const audio = document.getElementById("mySound");
              if (audio) {
                audio.currentTime = 0; 
                audio.play();
              }
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