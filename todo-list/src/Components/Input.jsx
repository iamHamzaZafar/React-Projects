import React , {useState}from 'react'
import './Input.css'

const Input = ({addTask}) => {

    const [inputText , setInputText] = useState('') ;
    
    const handleSubmit = (event) =>{
        event.preventDefault() ;
        addTask(inputText) ;
        setInputText('') ;
    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input value={inputText} required onChange={(e)=> setInputText(e.target.value)} placeholder='Enter the task' type="text" />
            <button>Add the Task</button>
        </form>
    </div>
  )
}

export default Input