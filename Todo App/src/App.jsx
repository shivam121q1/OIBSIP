import { useEffect, useState } from 'react'

import './App.css'
import { Todoprovider } from './context/TodoContext'
import TodoForm from './component/todoform'
import TodoItem  from './component/TodoItem'

export default function App() {
  const [todos,setTodos] = useState([])
  const addTodo =(todo)=>{
       setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const updateTodo =(id,todo)=>{
    setTodos((prev)=>prev.map((prevs)=>prevs.id===id?todo:prevs))

  }
  const deleteTodo =(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id !==id))

  }
  const toggleComplete =(id)=>{
    console.log(id);
    setTodos((prev)=>prev.map((prevtodo)=>prevtodo.id===id?{...prevtodo,completed : !prevtodo.completed}:prevtodo))
  }
  useEffect(()=>{
   const todos = JSON.parse(localStorage.getItem("todos"))
   if(todos && todos.length > 0){
    setTodos(todos)
   }
  },[])
  useEffect(()=>{
    (localStorage.setItem("todos",JSON.stringify(todos)))
  },[todos])
  return (
    <Todoprovider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#6893d3] min-h-screen w-screen  py-2 px-2 ">
        <div className="bg-[#19335b] max-h-screen  w-full max-w-2xl mx-auto shadow-md rounded-lg px-9 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
               <div className="mb-5">
                  <TodoForm/>
                </div>
              <div className="flex flex-wrap gap-y-3">
                 {/*Loop and Add TodoItem here */}
                 {todos.map((todo)=>(
                  <div className='w-full' key={todo.id}>
                    <TodoItem todo={todo}/>
                  </div>
                 ))}
              </div>
         </div>
      </div>
      </Todoprovider>
  )
}