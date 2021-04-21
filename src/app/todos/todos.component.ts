import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  inputTodo:string = "";

  todo = [];

  

  constructor(private todoService: TodoService) { 
    this.todo = this.todoService.todos;

  }

  ngOnInit(): void {  
  }
  

  toggleDone (id) {
    this.todo.map((v, i) => {
      if(i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (clickedItem) {
    this.todo = this.todo.filter(i => i != clickedItem);
  }

  addTodo () {
    
    this.todo.push({
      date: new Date(),
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
 
  }

  deleteSelected(){
    this.todo = this.todo.filter(i => !i.completed);
  }

  


}
