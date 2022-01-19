import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import AddTodo from './AddTodo'
import TodoList from './TodoList'

function Todo() {
    const [todos,settodos] = useState([])
    const [initialTodo, setinitialTodo] = useState({
        task:'',
        completed:false
    })
    return (
    <Router>
        <div>
            <h1>Todo App</h1>
            <div className='todoapp'>
            <Link to='/addtodo' > AddTodo </Link>
              <Link to='/todolist'> TodoList </Link>
            </div>
            <Route exact path='/AddTodo'  > <AddTodo todos={todos} settodos={settodos} initialTodo={initialTodo} setinitialTodo={setinitialTodo} /> </Route>
    <Route exact path='/TodoList' > <TodoList todos={todos} settodos={settodos} initialTodo={initialTodo} setinitialTodo={setinitialTodo}/> </Route>

            
        </div>
        </Router>
    )
}

export default Todo
