import React,{FC,ChangeEvent,useState} from 'react';
import {TaskInt,CategoryInt} from './interfaces'
import './App.css';
import ToDoTask from './components/ToDoTask';
import Category from './components/Category';

const App:FC=()=>{

  const [taskName,setTaskName] = useState<string>("");
  const [todoCategory,setTodoCategory] = useState<string>("");
  
  const [categoryName,setCategoryName] = useState<string>("");
  //const [todoList,setTodoList] = useState<TaskInt[]>([]);
  const [categoryList,setCategoryList] = useState<CategoryInt[]>([]);

  const handleCategoryChange=(event:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLSelectElement>):void=>{
      setCategoryName(event.target.value);
  };

  const addCategory = ():void=>{
    const newCategory = {categoryName:categoryName,todoList:[]};
    setCategoryList([...categoryList,newCategory]);
    setCategoryName("");
  };

  const handleToDoChange=(event:ChangeEvent<HTMLInputElement>|ChangeEvent<HTMLSelectElement>):void=>{
    if(event.target.name==="taskName"){
      setTaskName(event.target.value);
    };
    if(event.target.name==="category"){
      setTodoCategory(event.target.value);
    };
  };

  const addTask = ():void=>{
    const newTask = {taskName:taskName,todoCategory:todoCategory};
    // find category that matches the 'todoCategory'
    const foundCategory = categoryList.find((category)=>category.categoryName===todoCategory);
    if(foundCategory) foundCategory.todoList.push(newTask);
    setTaskName("");
    setTodoCategory("");
  };

  const completeTask = (taskCategory:string,taskNameToDelete:string):void=>{
    const foundCategory = categoryList.find((category)=>category.categoryName===taskCategory);
    if(foundCategory){
      const updateTodoList = foundCategory.todoList.filter((task)=>{
        return task.taskName!==taskNameToDelete
      });
      foundCategory.todoList = updateTodoList;
    };
    // setTodoList(todoList.filter((task)=>{
    //   return task.taskName!== taskNameToDelete;
    // }));
  };

  return (
    <div className="App">
      <div className='header'>
        <div className='createCategoryContainer'>
          <input type='text' placeholder='Add a new category...' name='categoryName' value={categoryName} onChange={handleCategoryChange}/>
          <button onClick={addCategory}>Add</button>
        </div>
        <div className='createTodoContainer'>
          <input type='text' placeholder='Task...' name='taskName' value={taskName} onChange={handleToDoChange}/>
          <select name='category' value={todoCategory} onChange={handleToDoChange}>
            <option>-</option>
            {categoryList.map((category:CategoryInt,key:number)=>{
              return <option>{category.categoryName}</option>;
            })}
          </select>
          <button onClick={addTask}>Add</button>
        </div>
      </div>
      <div className='categories'>
        {categoryList.map((category:CategoryInt)=>{
          return <Category category={category} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
};

export default App;
