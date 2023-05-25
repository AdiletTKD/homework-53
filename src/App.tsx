import React, { useState } from 'react';
import './App.css';
import Task from './Task/AddTaskForm';

const App = () => {
  const [task, setTask] = useState([
    {task: 'Buy milk', id: 111},
    {task: 'Walk with dog', id: 222},
    {task: 'Do homework', id: 333},
  ]);

  const taskList = task.map((task, index) => {
    return (
      <Task task={task.task} />
    )
  })

  const addTask = () => {
    const taskCopy = [...task];
    
  }

  return (
    <div className="App"> 
      <div className="addTask">
        <input type="text" className="inputTask" placeholder="Add new task..."/>
        <button className="addBtn">Add</button>
      </div>
        {taskList}
    </div>
  );
}

export default App;
