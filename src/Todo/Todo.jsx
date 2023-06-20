import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBin5Line } from 'react-icons/ri'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Todo.css'

        //(firebase deploy)
//  https://simple-todo-12258.web.app  

function Todo() {
    //input-function
    let [input, setinput] = useState('');
    let inputHandler = (e) => {
        setinput(e.target.value)

    }

    //submit-function
    let [submit, setsubmit] = useState([])
    let [button,setbutton]=useState("Add")

   
    let submitHandler = () => {
        if (input === '') {
            alert("Enter Some Value")
        }
        else {
            if (editId === null) {
                setsubmit((pre) => [...pre, { id: submit.length, text: input }])
                //  setsubmit([...submit, { id: submit.length, text: input }])
                setinput('')
                
            }
            else {
                setsubmit(submit.map((p) => p.id === editId ? { id :p.id,text: input } : p))
                setbutton("Add")
                seteditId(null)
                setinput('')
            }
        }
    }
    //delete-function
    let deleteHandler = (id) => {
        setsubmit(submit.filter((e) => {
            return e.id !== id
        }))
        setinput('')
        setbutton("Add")
    }
    //edit-function
    let [editId, seteditId] = useState(null);
    let editHandler = (value, id) => {
        // console.log(value, id)
        setbutton("Update")
        setinput(value)
        seteditId(id)
    }

    return (
        <div className='container parent' id=''>
            <div className='header'>Todo-List</div>
            <div className='body '>
                <input type="text" placeholder='Enter a task...' onChange={inputHandler} value={input} />
                <button className='btn btn-warning '
                    onClick={submitHandler} type='submit'>{button}</button>
            </div>

            <div className='footer'>
                {
                    submit.map((content, index) => {
                        return <div className='li-parent'>
                             <li key={index} className='list-item'>
                            <div className='content-box'>
                                {content.text}
                            </div>
                            <div className='buttons'>
                                <FaEdit size={32} onClick={() => editHandler(content.text, content.id)} className='edit_button button'></FaEdit>
                                <RiDeleteBin5Line size={32} onClick={() => deleteHandler(content.id)} className='delete_button button'></RiDeleteBin5Line>
                            </div>
                        </li>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Todo