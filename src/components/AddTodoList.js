import { useRef } from "react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function AddTodoList() {
  const [textValue, setTextValue] = useState("");
  const inputRef = useRef(null)
  const [todoList, setTodoList] = useState([]);
  useEffect(()=>{
      inputRef.current.focus()  
    },[])
 
  const numberRef = useRef(0);
  const onChangeInput = (e) => {
    setTextValue(e.target.value)
    
  };

  const addTodo = () => {
    if (textValue !== "") {
      setTodoList([...todoList, { text: textValue, id: numberRef.current++ }]);
    } else {
      alert("텍스트를 추가해주세요.");
    }
  };

  const handleSubmit = (event) => {
    if (event.keyCode === 13) {
    event.preventDefault();
    setTextValue("");
    addTodo();
    }
  }

  const onClickAddButton = (event) => {
    event.preventDefault();
    setTextValue("");
    addTodo();
  }; 

  const handleTodoItemDelete = (id) => {
    const filterTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(filterTodoList);
  };
 
  
  return (
    <form className="todo_form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input_area"
        value={textValue}
        ref={inputRef}
        placeholder="할 일을 입력해주세요"
        onChange={onChangeInput}
      />
      <button className="add_btn" type="submit" onClick={onClickAddButton}>
        추가하기
      </button>
      <ul className="todolist_container">
        {todoList.map((todo, i) => (
          <li key={i} className="todolist_element" >
            {todo.text}
            {todo.id}
            <button
             className="del_btn"
              onClick={() => {
                handleTodoItemDelete(todo.id);
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
}

export default AddTodoList;