import React from 'react'

const CompleteTodo = ({todos, setTodos, id}) => {
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
        <button onClick={()=>completeTodo(id)}>Done</button>
    </div>
  )
}

export default CompleteTodo