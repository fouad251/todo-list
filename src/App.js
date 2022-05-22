
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import "bootstrap/dist/css/bootstrap.min.css"
import {v4 as uuid} from "uuid"
import { useEffect, useState } from 'react';

function App() {

  const [tasks,setTasks] = useState({
    todos:[],
    id:uuid(),
    item:"",
    edited:false
  })

  const handleChange=(e)=>{
    
    setTasks({...tasks , item:e.target.value})
    
  }
  const onSubmit=(e)=>{
    e.preventDefault()
  }
  const handleAdd=()=>{
    const newTask = {
      item:tasks.item,
      id:tasks.id,
    }
  const updatedTsks =[...tasks.todos,newTask]
  setTasks({
    todos:updatedTsks,
    item:"",
    id:uuid(),
    edited:false
  })
    
    
  }
  const handleClear=()=>{
    const clearedTsks =[]
  setTasks({
    todos:clearedTsks,
    item:"",
    id:uuid(),
    edited:false
  })
  }
  const handleEdit=(id)=>{
    const filteredTasks= tasks.todos.filter(task=>task.id!==id)
    const editedTask = tasks.todos.find(task=>task.id===id)
    setTasks({
      todos:filteredTasks,
      item:editedTask.item,
      id:editedTask.id,
      edited:true
    })
  }
  const handleRemove=(id)=>{
    const filteredTasks= tasks.todos.filter(task=>task.id!==id)
    setTasks({
      todos:filteredTasks,
      item:"",
      id:uuid(),
      edited:false
    })
  }
  useEffect(()=>{
   
  },[tasks])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 mx-auto col-md-8 mt-4'>
          <h2 className='text-capitalize text-center'>to do input</h2>
          <TodoInput 
          item={tasks.item} 
          handleChange={handleChange} 
          onSubmit={onSubmit}
          handleAdd={handleAdd}
          edited={tasks.edited}
          />
          <TodoList 
          tasks={tasks.todos}
          handleClear={handleClear}
          handleEdit={handleEdit}
          handleRemove={handleRemove}
          />
        </div>
      </div>

    </div>
    
  );
}

export default App;
