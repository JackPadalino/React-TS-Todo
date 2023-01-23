export interface TaskInt {
    taskName:string,
    todoCategory:string
};

export interface CategoryInt {
    categoryName:string,
    todoList:TaskInt[];
};