import { useState } from "react"

export function TodoForm ({onSubmit}){
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    if (newItem === "") return
  
   
    onSubmit(newItem)
  
   setNewItem("")
   }
  
  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="Item"> New Item </label> 
    <br />
    <input 
      type="text"
      id="text"
      autoFocus
      required
      value={newItem}
      onChange={e => setNewItem(e.target.value)}
    /> <br/>
    <button className="btn">Add</button>
  </form>
  )
}

export default TodoForm
