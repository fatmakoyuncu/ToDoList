import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';



@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  inputTodo:string = "";

  todosko: any;

  constructor(private todoService: TodoService) { 
    this.todosko = todoService.todos;
  }

  ngOnInit(): void {  
    
  }
  

  toggleDone (id) {
    this.todosko.map((v, i) => {
      if(i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id) {
    this.todosko = this.todosko.filter((v, i) => i !== id);
    console.log(this.todoService.todos);
    
  }

  addTodo () {
    this.todoService.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";

    
  }



}
