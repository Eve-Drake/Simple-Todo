import React from 'react'

const DeleteTodo = ({todos, setTodos, id}) => {
  const deleteTodo = (id) =>{
    setTodos(todos.filter(el => el.id !== id))
  }

  return (
    <div>
        <button onClick={()=>deleteTodo(id)}>Delete</button>
    </div>
  )
}

export default DeleteTodo