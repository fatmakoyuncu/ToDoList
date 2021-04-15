import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit {

  today: Date = new Date();

  startDay: Date = new Date();

  endDay = new Date(this.startDay.setDate(this.startDay.getDate() - 60));

  result;

  filterTodo = [];

  weekNumTodo;

  todo;
  todoWeek;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getWeekNumber();
    this.getDay();
    this.getToto();
  }

  getWeekNumber() {
    const oneJan = new Date(this.today.getFullYear(), 0, 4);
    const numOfDays = Math.floor((this.today.valueOf() - oneJan.valueOf()) / 86400000);

    this.result = Math.ceil((this.today.getDay() + 1 + numOfDays) / 7);
    console.log(this.result);
  }

  getDay() {
    this.filterTodo = this.todoService.todos.filter(day => day.date > this.endDay)
    console.log(this.filterTodo);

  }

  getToto() {
    this.todoWeek = [];
    for (let i = this.result; i > this.result - 8; i--) {
      this.todo = [];
      const todoObj = {
        week: i,
        data: this.filterTodo.filter(t => {
          const oneJan = new Date(t.date.getFullYear(), 0, 4);
          const numOfDays = Math.floor((t.date.valueOf() - oneJan.valueOf()) / 86400000);

          this.weekNumTodo = Math.ceil((t.date.getDay() + 1 + numOfDays) / 7);
          if (this.weekNumTodo == i) {
            this.todo.push(t.content)
          }
        })
      }

      todoObj.data = this.todo;
      this.todoWeek.push(todoObj)

    }

    console.log(this.todoWeek);
    
  }

}
