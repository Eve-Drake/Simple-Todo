import React from 'react'
import DeleteTodo from '../Features/DeleteTodo';
import CompleteTodo from '../Features/CompleteTodo'

const Todo = ({todo, completed, setTodos, todos, id}) => {

  return (
    <div className='todo'>
      <p className={(completed ? 'textCompleted' : '')}>{todo}</p>
      <div className='todoButtons'>
        <DeleteTodo setTodos={setTodos} todos={todos} id={id}/>
        <CompleteTodo setTodos={setTodos} todos={todos} id={id}/>
      </div>

    </div>
  )
}

export default Todo