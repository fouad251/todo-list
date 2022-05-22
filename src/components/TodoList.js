import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({tasks,handleClear,handleEdit,handleRemove}) => {
  return (
    <div className=''>
        <h2 className='text-capitalize text-center '>Tasks To Do</h2>
        <ul className='list-group'>
          {tasks.map(task=>{
            return(
              <TodoItem 
              key={task.id}
              title={task.item}
              handleEdit={()=>handleEdit(task.id)}
              handleRemove={()=>handleRemove(task.id)}
              /> 
            )
          })}
          
        </ul>
        <div className='d-grid'>
            <button 
            type='button' 
            className='btn btn-danger d-block text-capitalize'
            onClick={handleClear}
            >clear list</button>
        </div>
        
    </div>
  )
}

export default TodoList