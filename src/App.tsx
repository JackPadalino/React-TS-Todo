import React,{FC,ChangeEvent,useState} from 'react';
import {Task} from './interfaces'
import './App.css';
import ToDoTask from './components/ToDoTask';

const App:FC=()=>{

  const [taskName,setTaskName] = useState<string>("");
  const [category,setCategory] = useState<string>("");
  const [deadline,setDeadline] = useState<number>(0);
  const [todoList,setTodoList] = useState<Task[]>([]);

  const handleChange=(event:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLSelectElement>):void=>{
    if(event.target.name==="taskName"){
      setTaskName(event.target.value);
    };
    if(event.target.name==="deadline"){
      setDeadline(Number(event.target.value));
    };
    if(event.target.name==="category"){
      setCategory(event.target.value);
    };
  };

  const addTask = ():void=>{
    const newTask = {taskName:taskName,deadline:deadline,category:category};
    setTodoList([...todoList,newTask]);
    setTaskName("");
    setCategory("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete:string):void=>{
    setTodoList(todoList.filter((task)=>{
      return task.taskName!== taskNameToDelete;
    }));
  };

  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input type='text' placeholder='Task...' name='taskName' value={taskName} onChange={handleChange}/>
          <input type='number' placeholder='Deadline (in days)...' name='deadline' value={deadline} onChange={handleChange}/>
          <select name='category' value={category} onChange={handleChange}>
            <option>-</option>
            <option>Work</option>
            <option>School</option>
            <option>Home</option>
          </select>
          <button onClick={addTask}>Add</button>
        </div>
        
      </div>
      <div className='todoList'>
        {todoList.map((task:Task,key:number)=>{
          return <ToDoTask key={key} task={task} completeTask={completeTask}/>;
        })}
      </div>
      <div className='categories'></div>
    </div>
  );
};

export default App;
