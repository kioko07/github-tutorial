import { useEffect, useState } from "react"
import {TodoForm} from "./TodoForm"
import { TodoList } from "./TodoList"

export default function App() { 
 const [todos, setTodos] = useState(() => {
  const localValue = localStorage.getItem("Todo-List")
  if (localValue == null) return []
  return JSON.parse(localValue)
 })

 useEffect(() => {
  localStorage.setItem("Todo-List", JSON.stringify(todos))
 }, [todos])

 function addTodo(title) {
    setTodos(currentTodos => {
    return [
      ...currentTodos, { id: crypto.randomUUID(), title, completed: false },
    ]
   })
 }

 function toggleTodo(id, completed) {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if(todo.id === id) {
        return { ...todo, completed}
      }
      return todo
    })
  })
 }

 function deleteTodo(id) {
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })
 }

  return (
    <>
      <TodoForm  onSubmit={addTodo}/>
      <h1>To-do List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  )
}