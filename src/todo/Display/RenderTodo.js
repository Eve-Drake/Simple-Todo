import React from 'react'
import Todo from "./Todo";

const RenderTodo = ({todos, setTodos}) => {
  return (
    <div>
        {todos.map((todo) => (
        <div key={todo.id}>
          <Todo 
            todo={todo.todo} 
            completed={todo.completed}
            id={todo.id}
            setTodos={setTodos}
            todos={todos}
            />
        </div>
      ))}
    </div>
  )
}

export default RenderTodo