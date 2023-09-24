import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo Working</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
