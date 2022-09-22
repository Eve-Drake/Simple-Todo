import axios from "axios";
import { useEffect, useState } from "react";
import AddTodo from "./todo/Features/AddTodo";
import RenderTodo from "./todo/Display/RenderTodo";



function App() {
  const [todos, setTodos] = useState([])

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
    getPlaceholderTodos();
  },[])


  return (
    <div>
      <h1>Todo List: </h1>
      <AddTodo todos={todos} setTodos={setTodos}/>
      <RenderTodo todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
