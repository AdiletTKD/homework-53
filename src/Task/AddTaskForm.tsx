import React from "react";

export interface ITaskProps {
    task: string,
    id?: string
}

const Task: React.FC<ITaskProps> = props => {
    return (
        <div className="container">
            <div className="tasks">
                <div className="task">
                    <span className="task-name"> {props.task} </span>
                    <button>D</button>
                </div>
            </div>
        </div>
    )
};  

export default Task;
