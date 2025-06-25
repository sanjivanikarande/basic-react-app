import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

function TodoList(){
    let [todos, setTodos] = useState([{task: "simple task", id: uuidv4() }])
    let [newTodo, setNewTodo] = useState("")
   
    let addNewTask = () => {
       setTodos([...todos, { task: newTodo, id: uuidv4() }])
       setNewTodo("")
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value)
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id))
    }

    return(
        <>
         <div>
            <br /> <br /> <br />
            <input placeholder="add a task"
            value={newTodo} 
            onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>Add Task</button>
            <br /> <br />
            <hr />
            <h2>Tasks Todo</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                    <span>{todo.task}</span>
                    &nbsp; &nbsp;
                    <button onClick={() => deleteTodo(todo.id)}>delete</button>
                </li>
                ))}
            </ul>
         </div>
        </>
    )
}
    export default TodoList