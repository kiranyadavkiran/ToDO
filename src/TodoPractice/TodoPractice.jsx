import React, { useState } from 'react'

function TodoPractice() {
    let [input, setinput] = useState();
    const inputHolder = (e) => {
        setinput(e.target.value);
        console.log(input)
    }

    let [submit, setsubmit] = useState([])
    const submitHandler = () => {
       if(input==''){
        alert("enter any text darling")
       }
       else{
        if(edit===null){
            setsubmit([...submit, { id: submit.length, text: input }])
            setinput('')
        }
        else{
            setsubmit(submit.map((e)=>e.id===edit?{text:input}:null))
            setinput('')
        }
       }
    }
       const deleteHandler=(id)=>{
           setsubmit(submit.filter((e)=>{
            return e.id!==id
           }))   
       }

    let [edit,setedit]=useState(null)
       const editHandler=(text,id)=>{
        setinput(text)
        setedit(id)
       }
    return (
        <div>
            <div>
            <input type="text" placeholder='Enter task' onChange={inputHolder} value={input}/>
            <button onClick={submitHandler} >submit</button>
            </div>

            <div>
                {
                    submit.map((content,index)=>{
                            return(
                                <li key={index}>
                                    {content.text}
                                    <button onClick={()=>editHandler(content.text,content.id)}>edit</button>
                                    <button onClick={()=>deleteHandler(content.id)}>delete</button>
                                </li>
                            )
                    })
                }
            </div>
        </div>
    )
}

export default TodoPractice