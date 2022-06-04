import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

function Greetingjs() {
   const [inputValue,setInputValue] = useState("")
   const [greeting,setGreeting] = useState("")
   const inputRef = useRef(null)
   
   
   const handleChangeValue = (e) => {
    setInputValue(e.target.value)
   }

   useEffect(()=>{
      inputRef.current.focus()
   },[])

   const addGreeting = ()=> {
       if (inputValue !== "") {
           setGreeting([...greeting,{text:`Hello${inputValue}`}])
       }else {
      alert("텍스트를 추가해주세요.");
    }
   }


//    const handleSubmit = (event) => {
//        if (event.keyCode === 13) {
//            event.prevntDefault()
           
//        }
//    } 
  return (
      <>
      <div ></div>
    <form  type="text" onSubmit={((e)=>{
        if (e.keyCode === 13) {
            console.log("전송됨")
            e.preventDefault()
            return(
                <>
                <h4>hello {inputValue}</h4>
                </>
            )
            
        }
    })}>
        <input value={inputValue} onChange={handleChangeValue} ref={inputRef}></input>
    </form>
       <div>
        {/* <h4 className="js-greetings greetings">Hello {inputValue}</h4> */}
        </div> 
    </>
  )
}
export default Greetingjs


//rfce