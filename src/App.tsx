import React, { useState } from 'react';
import './App.css';
import Task, { ITaskProps } from './Task/AddTaskForm';

const App = () => {

  const [tasks, setTasks] = useState<ITaskProps[]>([
    { task: 'Buy milk', id: "111" },
    { task: 'Walk with dog', id: "222" },
    { task: 'Do homework', id: "333" },
  ]);

  const [currentTask, setCurrentTask] = useState<string>('');

  const taskInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTask(e.target.value);
  };

  const addTask = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (currentTask.trim() !== '') {
      const newTask: ITaskProps = {
        id: String(Math.random()),
        task: currentTask,
      };

      setTasks([...tasks, newTask]);
      setCurrentTask('');
    }
  };

  const taskList = tasks.map((task, index) => {
    return (
      <Task key={task.id} task={task.task} />
    )
  })

  return (
    <div className="App">
      <form className="addTask">
        <input
          type="text"
          className="inputTask"
          placeholder="Add new task..."
          onChange={taskInputChange}
          value={currentTask}
        />

        <button className="addBtn" onClick={addTask}>Add</button>
      </form>
      {taskList}
    </div>
  );
};

export default App;
