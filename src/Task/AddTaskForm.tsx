import React from "react";

interface ItaskProps {
    task: string
}

const Task: React.FC<ItaskProps> = props => {
    return (
        <div className="container">
            <div className="addTask">
                <input type="text" className="inputTask" placeholder="Add new task..."/>
                <button className="addBtn">Add</button>
            </div>
            <div className="tasks">
                <div className="task">
                    <span className="task-name">Buy milk</span>
                    <button>del</button>
                </div>
                <div className="task">
                    <span className="task-name">Walk with dog</span>
                    <button>del</button>
                </div>
                <div className="task">
                    <span className="task-name">Do homework</span>
                    <button>del</button>
                </div>
            </div>
        </div>
    )
};  

export default Task;