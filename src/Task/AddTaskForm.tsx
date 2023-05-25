import React from "react";

interface ItaskProps {
    task: string
}

const Task: React.FC<ItaskProps> = props => {
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