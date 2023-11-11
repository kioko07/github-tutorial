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
      <section>
    <label htmlFor="Item"> New Todo Item </label> 
    <br />
    <input 
      type="text"
      id="text"
      placeholder="Type here!"
      autoFocus
      required
      value={newItem}
      onChange={e => setNewItem(e.target.value)}
    /> <br/>
    <button className="btn">Add</button>
    </section>
  </form>
  )
}

export default TodoForm
