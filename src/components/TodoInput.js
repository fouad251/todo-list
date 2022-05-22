import React from 'react'

import { FaBook } from "@react-icons/all-files/fa/FaBook";


const TodoInput = ({item,handleChange,onSubmit,handleAdd,edited}) => {
  return (
    <div className='card card-body my-3'>
        <form onSubmit={onSubmit}>
            <div className='input-group'>
                <div className='input-group-prepend'>
                    <div className='input-group-text bg-primary text-white'>
                        <FaBook style={{fontSize:24}}/>
                    </div>
                </div>
                <input 
                type="text" 
                className='form-control text-capitalize' 
                placeholder='add todo item'
                value={item}
                onChange={handleChange}
                ></input>

            </div>
            <div className='d-grid'>
                <button 
                type='submit' 
                className={edited?'btn btn-block  btn-success text-capitalize my-5 ':'btn btn-block  btn-primary text-capitalize my-5 '}
                onClick={handleAdd}
                >
                   { edited ?"edit task":"add task"}</button>
            </div>
            
            
        </form> 
    </div>
  )
}

export default TodoInput