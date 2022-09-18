import React from 'react'

const Todo = ({todo, completed, id, deleteTodo, completeTodo}) => {

  return (
    <div className='todo'>
      <p className={(completed ? 'textCompleted' : '')}>{todo}</p>
      <div className='todoButtons'>
        <button onClick={()=>completeTodo(id)}>{(completed ? 'Undo' : 'Done?')}</button>
        <button onClick={()=>deleteTodo(id)}>Delete</button>
      </div>

    </div>
  )
}

export default Todo