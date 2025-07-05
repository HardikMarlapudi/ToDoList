import { useState } from 'react';
import './ToDoList.css';

function ToDoList() {

    const [tasks, setTasks] = useState(["Walk the Dog", "Complete HomeWork", "Do the Chores"]);
    const [newTask, setNewTask] = useState("");

    function setTask(index) {
        event.target.value()
    }

    function addTask(index) {
        if(index < 0) {
        setTasks(t => [...t, newTask]);
        setNewTask("");
        }
    }

    function removeTask(index) {
       if(index) {
        setTasks(tasks.filter((_, i) => i !== index));
       }
    }

    return(
        <>
        <h1>To-Do-List</h1>
        <div className='to-do-list'>
            <input type="text" placeholder='Enter Task...' id="taskInput" value={newTask} onChange={(e) => {
                setNewTask(e.target.value);
            }}/>
            <button className='add-button' onClick={() => {
                setTasks(t => [...t, newTask]);
                setNewTask("");
            }}>Add</button>
            <div className='list'>
                {tasks.map((task, index) => {
                    return <div className='task' key={index}>
                        <span className='task-name'>{task}</span>
                        <button className='delete-button' onClick={() => {
                            setTasks(tasks.filter((_, i) => i !== index));
                        }}>Delete</button>
                        <button className="upArrow">Up</button>
                        <button className="downArrow">Down</button>
                    </div>
                })}
            </div>
        </div>
        </>
    )
}

export default ToDoList;
