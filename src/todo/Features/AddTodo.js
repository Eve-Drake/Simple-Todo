import {useState} from 'react'

const AddTodo = ({todos, setTodos}) => {
  const [todo, setTodo] = useState('')
  const [addTodo, setAddTodo] = useState(false)

  const addInputTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {todo:todo, id: Math.floor(Math.random() * 1000), completed: false, }])
    setTodo('')
    setAddTodo(false)
  }

  return (
    <div>
    <button className='addButton' onClick={()=>setAddTodo(!addTodo)}>{(addTodo ? 'Close' : 'Add Todo')}</button>
      <div className={(addTodo? 'show' : 'hide')}>
        <form onSubmit={addInputTodo}>
          <input 
            placeholder="Add Todo"
            value={todo}
            onChange={e => setTodo(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddTodo