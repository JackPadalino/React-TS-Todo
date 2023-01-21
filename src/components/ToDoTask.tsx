import React from 'react';
import {ITask} from '../interfaces';

interface Props {
    task:ITask,
    completeTask(taskNameToDelete:string):void;
};

const ToDoTask = ({task,completeTask}:Props) => {
    return (
        <div className='task'>
            <div className='content'>
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={()=>completeTask(task.taskName)}>x</button>
            
        </div>
    );
};

export default ToDoTask;