import { useRef } from "react"
import React from "react";
import { useState } from "react"





function AddTodoList() {
  

    const [textValue,setTextValue] = useState("")
    const inputRef = useRef(null)
    const [todoList,setTodoList] = useState([])

    
     const onChangeInput = (e) =>{
       setTextValue(e.target.value)
         

     }

     const addTodo = () => {
       if (textValue !== "") {
         setTodoList([...todoList,{text:textValue, id:inputRef.current ++}])
       }else{
         alert("텍스트를 추가해주세요.")
       }
     }

     const onClickAddButton = (e) => {
       e.preventDefault()
       setTextValue("")
       addTodo()
     }

     const handleDeleteTodo = (id)=>{
       const fillterTodo = todoList.filter((todo)=>{
         return todo.id !==todo.id
         setTodoList(fillterTodo)
       })
     }


    return(
    <div className="todo_form">
      <input type="text"
       className="input_area" 
        value={textValue} 
        ref={inputRef}
        placeholder="할 일을 입력해주세요"
        onChange={onChangeInput}/>
       <button className="add_btn" type='submit' onClick={onClickAddButton}>추가하기</button>
       <ul>
         {todoList.map((todo,i)=>{
           <li>
             {todo.text}
             {todo.id}
             <button onClick={handleDeleteTodo(todo.id)}>X</button>
           </li>
         })}
       </ul>
    </div>
    ) 
}

export default AddTodoList
