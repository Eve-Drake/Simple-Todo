import axios from "axios";
import { useEffect, useState } from "react";
import Todo from "./Todo";


function App() {
  const [todos, setTodos] = useState([])
  const [addTodo, setAddTodo] = useState(false)
  const [todo, setTodo] = useState('')
  const [displayTodoSettings, setDisplayTodoSettings] = useState([])
  const [displayTodo, setDisplayedTodo] = useState('All')

  const getPlaceholderTodos = async () =>{
    try{
      const response = await axios.get('https://dummyjson.com/todos?limit=3')
      setTodos(response.data.todos)
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    getPlaceholderTodos()
  },[])

  const addInputTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {todo:todo, id: Math.floor(Math.random() * 1000), completed: false, }])
    setTodo('')
    setAddTodo(false)
  }

  const deleteTodo = (id) =>{
    setTodos(todos.filter(el => el.id !== id))
  }

  const completeTodo = (id) => {
    setTodos(todos.map((el) => {
      if(el.id === id){
        return {...el, completed: !el.completed}
      }
      return el
    }))
  }

  return (
    <div>
      <h1>Todo List: </h1>
      <button onClick={()=>setAddTodo(!addTodo)}>{(addTodo ? 'Close' : 'Add Todo')}</button>
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

      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo 
            todo={todo.todo} 
            completed={todo.completed}
            id={todo.id}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
            />
        </div>
      ))}
    </div>
  );
}

export default App;
