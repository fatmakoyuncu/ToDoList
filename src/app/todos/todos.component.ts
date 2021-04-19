import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  inputTodo:string = "";

  todosko = [];

  

  constructor(private todoService: TodoService) { 
    this.todosko = this.todoService.todos;

  }

  ngOnInit(): void {  
  }
  

  toggleDone (id) {
    this.todoService.todos.map((v, i) => {
      if(i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (clickedItem) {
    this.todosko = this.todosko.filter(i => i != clickedItem);
  }

  addTodo () {
    
    this.todosko.push({
      date: new Date(),
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
    
  }

  


}
