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
   
  }

  ngOnInit(): void {  
    
    this.todosko = this.todoService.todos.reverse();   
    
  }
  

  toggleDone (id) {
    this.todosko.map((v, i) => {
      if(i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id) {
    this.todosko = this.todosko.filter((v, i) => i !== id);
    console.log(this.todosko);
    
  }

  addTodo () {
    
    this.todosko.reverse().push({
      date: new Date(),
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
    this.ngOnInit()
    console.log(this.todosko);
    
  }

  


}
