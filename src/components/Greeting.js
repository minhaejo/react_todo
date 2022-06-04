import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";


function Greeting() {
    const USER_LS= "currentUser"
    

    const [nameInput,setNameInput] = useState("")
    const inputRef = useRef("")
    
    useEffect(()=>{
    inputRef.current.focus()
    },[])
    
    const saveName = (text) => {
        localStorage.setItem(USER_LS,text)
    }

    const handleNameInputValue = (e) =>{
       setNameInput(e.target.value)
       console.log(nameInput)
    }

    // const handleNameSubmit = (e) => {
   
    // }
     const handleNameSubmit = (event) => {
        if (event.keyCode === 13) {
            event.preventDefault()
             paintGreeting(nameInput)
         saveName(nameInput)
            return(
                <>
              {nameInput && <h4 className="js-greetings greetings">`Hello {nameInput}`</h4>}
              </>
            )
        }
    }
    
    const askForName = () => {
     //클레스 리스트 무엇? 이거없이 어캐 가렸다가 나오게함..??
    return (
        <div>
        {nameInput === "" && <form className="js-form form" onSubmit={handleNameSubmit} name={""} >
        <input type="text" 
        placeholder="What is your name?"
        value={nameInput}
        onChange={handleNameInputValue}/>
        </form>}
        </div>
    )   
    }

    const paintGreeting = () => {
        
        return (
            <div>
                 {nameInput && <h4 className="js-greetings greetings">`Hello {nameInput}`</h4>}
            </div>
        )
    }

    const loadName = () =>{
        const currentUser = localStorage.getItem(USER_LS)
        if (currentUser === null) {
            askForName()
        }
        paintGreeting()
    }
    const init = () => {
        loadName()
    }
    init()


//     const handleSubmit = (event) => {
//     if (event.keyCode === 13) {
//     event.preventDefault();
//     setTextValue("");
//     addTodo();
//     }
//   }
    return(
    <>
    {/* <form className="js-form form" name={""} >
    <input type="text" 
    placeholder="What is your name?"
    value={nameInput}
    onChange={handleNameInputValue}/>
    </form> */}
    <div>
     {nameInput.keyCode !== 13 && <form className="js-form form"
     ref={inputRef}
     onSubmit={handleNameSubmit} name={""} >
        <input type="text" 
        placeholder="What is your name?"
        value={nameInput}
        onChange={handleNameInputValue}/>
        </form>} 
         <div>
        {nameInput.keyCode === "enter" &&  <h4 className="js-greetings greetings">Hello {nameInput}
         </h4>}
        </div> 
    </div>
    
    </>
    )
}
export default Greeting

// {/* <h1 style={name === 'Sara' ? right-panel-active : right-panel-inactive}>Hello, {name}</h1> */}

// export default Greeting

// const form=document.querySelector(".js-form"),
//     input=form.querySelector("input"),
//     greeting=document.querySelector(".js-greetings");


// function saveName(text){ //로컬 스토리지에 이름을 저장
// 	localStorage.setItem(USER_LS, text); 
// }

// function handleSubmit(event){
// 	event.preventDefault(); //제출되는 동작을 막는다.
//     const currentValue = input.value; //input 이름 값
//     paintGreetings(currentValue);
//     saveName(currentValue);
// }
// function askForName(){
// 	form.classList.add(SHOWING_CN);
//     form.addEventListener("submit",handleSubmit);
// }
// function paintGreeting(text){
//     form.classList.remove(SHOWING_CN); //텍스트를 색칠하려면, 폼을 숨겨야 함 
//     greeting.classList.add(SHOWING_CN);
//     greeting.innerText = `Hello ${text}`;
// }

// function loadName(){
//     const currentUser=localStorage.getItem(USER_LS);
//     if(currentUser===null){ //현재유저가 없으면 이름을 물어보는 폼을 보여줌
// 		askForName();
//     }else{ //현재 유저가 있으면 로컬스토리지에서 가져온 이름을 paint
//         paintGreeting(currentUser);
//     }
// }
// function init(){
//     loadName();
// }
// init();


