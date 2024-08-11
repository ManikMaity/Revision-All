export class localStorageAPI {

    static getTodoFromLocalStorage (){
        const data = localStorage.getItem("todo") || "[]";
        const sortedData =  JSON.parse(data).sort((todo1, todo2) => {
            return todo1.todoTime > todo2.todoTime? -1 : 1;
        });

        const sortedAccordingToMarked = sortedData.sort((todo1, todo2) => todo1.marked ? 1 : -1)
        return sortedData;
    }
    
    static setItemToTodo (txt = ""){
        const allTodo = this.getTodoFromLocalStorage();
        const tempObj = {
            todoID: Math.floor(Math.random()*100000),
            todoText: txt,
            todoTime : new Date().toISOString(),
            marked : false
        }
        allTodo.push(tempObj);
        localStorage.setItem("todo",JSON.stringify(allTodo));
    }


    static deleteTodo (id){
        const allTodo = this.getTodoFromLocalStorage();
        const filteredTodo = allTodo.filter(todo => todo.todoID != id);
        console.log(filteredTodo);
        localStorage.setItem("todo", JSON.stringify(filteredTodo));
    }

    static mark (id){
        const allTodo = this.getTodoFromLocalStorage();
        const markedTodoIndex = allTodo.findIndex((todo) => todo.todoID == id);
        allTodo[markedTodoIndex].marked = !allTodo[markedTodoIndex].marked;
        localStorage.setItem("todo", JSON.stringify(allTodo));
    }


}
