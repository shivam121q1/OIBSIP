import {createContext,useContext} from "react"

export const TodoContext = createContext({
    todos : [
        {
            id: 1,
            todo: "Todomsg",
            completed:false, 
        }
    ],
    addTodo:()=>{},
    updateTodo:()=>{},
    deleteTodo:()=>{},
    toggleComplete:()=>{}

})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider