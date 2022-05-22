import React from 'react'
import{FaPen} from"@react-icons/all-files/fa/FaPen"
import{FaTrash} from"@react-icons/all-files/fa/FaTrash"

const TodoItem = ({title,handleEdit,handleRemove}) => {
  return (
    <li className='d-flex justify-content-between my-2 list-group-item border-warning border-top'>
        <h5 className=''>{title}</h5>
        <div>
          <span className='mx-2 text-success ' role="button" onClick={handleEdit}><FaPen/></span>
          <span className='mx-2 text-danger' role="button" onClick={handleRemove}><FaTrash/></span>
        </div>

    </li>
  )
}

export default TodoItem