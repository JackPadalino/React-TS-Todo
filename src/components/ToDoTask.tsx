import React from 'react';
import {Task} from '../interfaces';

interface Props {
    task:Task,
    completeTask(taskNameToDelete:string):void;
};

const ToDoTask = ({task,completeTask}:Props) => {
    return (
        <div className='task'>
            <div className='content'>
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
                <span>{task.category}</span>
            </div>
            <button onClick={()=>completeTask(task.taskName)}>x</button>
            
        </div>
    );
};

export default ToDoTask;