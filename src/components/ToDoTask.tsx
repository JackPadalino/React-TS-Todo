import React from 'react';
import {TaskInt} from '../interfaces';

interface Props {
    task:TaskInt,
    taskCategory:string,
    completeTask(taskCategory:string,taskNameToDelete:string):void;
};

// const ToDoTask = ({task,completeTask}:Props) => {
const ToDoTask = ({task,taskCategory,completeTask}:Props) => {
    return (
        <div className='task'>
            <div className='content'>
                <span>{task.taskName}</span>
                <button onClick={()=>completeTask(taskCategory,task.taskName)}>x</button>
            </div>
        </div>
    );
};

export default ToDoTask;