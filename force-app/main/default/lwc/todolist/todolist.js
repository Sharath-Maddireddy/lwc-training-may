import { LightningElement, track } from 'lwc';

export default class Todolist extends LightningElement {
    @track todos = [];
    todoId = 1;
    todo = {
        Id: this.todoId,
        Title: '',
        Description: ''
    }

    @track selectedTodo;

    handleTitleChange(event) {
        event.preventDefault();
        // Object deconstruction in JavaScript
        let { value } = event.target;
        this.todo.Title = value;
    }

    handleDescChange(event) {
        event.preventDefault();
        let { value } = event.target;
        this.todo.Description = value;
    }

    handleClick(event) {
        event.preventDefault();
        this.todos.push(
            Object.assign({}, this.todo)
        );
        this.todoId = this.todoId + 1;
    }

    handleTodoClick(event) {
        event.preventDefault();
        // data-*
        let dataset = event.currentTarget.dataset; // data-* data-todo-title, data-description
        let description = dataset.description;
        let todoTitle = dataset.todoTitle; // recordId
        console.log(description);
        console.log(todoTitle);
        // find method of Array in JavaScript
        this.selectedTodo = this.todos.find((todo) => {
            return todo.Title === todoTitle && todo.Description === description;
        });
        console.log(JSON.stringify(this.selectedTodo));
    }

}