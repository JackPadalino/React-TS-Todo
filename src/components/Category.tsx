import React from 'react';
import ToDoTask from './ToDoTask'
import {TaskInt,CategoryInt} from '../interfaces';

interface Props {
    category:CategoryInt,
    completeTask(taskCategory:string,taskNameToDelete:string):void;
};

const Category = ({category,completeTask}:Props) => {
    return (
        <div className='category'>
            <div className='name'>
                <span>{category.categoryName}</span>
            </div>
            <div className='todoList'>
                {category.todoList.map((task:TaskInt,key:number)=>{
                    return <ToDoTask key={key} task={task} taskCategory={category.categoryName} completeTask={completeTask}/>
                })}
            </div>
        </div>
    );
};

export default Category;