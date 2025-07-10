import { useState } from 'react';
import './ToDoList.css';

function ToDoList() {

    const [tasks, setTasks] = useState(["Walk the Dog", "Complete Homework", "Do the Chores"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask(index) {
       if (index < 0) {
        setTasks(t => [...t, newTask]);
        setNewTask("");
        }
    }

    function removeTask(index) {
        setTasks(t => t.filter((_, i) => i !== index));
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <>
        <h1>To-Do-List</h1>
        <div className='to-do-list'>
            <input type="text" placeholder='Enter Task...' id="taskInput" value={newTask} onChange={handleInputChange}/>
            <button className='add-button' onClick={() => addTask (-1)}>Add</button>
            <div className='list'>
                {tasks.map((task, index) => {
                    return <div className='task' key={index}>
                        <span className='task-name'>{task}</span>
                        <button className='delete-button' onClick={() => removeTask (index)}>Delete</button>
                        <button className="upArrow" onClick={() => moveTaskUp (index)}>Up</button>
                        <button className="downArrow" onClick={() => moveTaskDown (index)}>Down</button>
                    </div>
                })}
            </div>
        </div>
        </>
    )
}

export default ToDoList;
