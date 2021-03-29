import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {

    this.todos = [
      {
        content:'First todo',
        completed:false
      },
      {
        content:'Second todo',
        completed:false
      }
    ]
  }

  toggleDone (id) {
    this.todos.map((v, i) => {
      if(i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id) {
    this.todos = this.todos.filter((v, i) => i !== id);
    console.log(this.todos);
    
  }

  addTodo () {
   
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    // this.todos.reverse();
    this.inputTodo = "";

    
  }



}
