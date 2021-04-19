import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit {

  result1;
  result2;

  filterTodo1;
  filterTodo2;

  todoWeek;
  todoWeek2;

  todo;
  todo2;

  weekNumTodo;
  weekNumTodo2;

  today: Date = new Date();

  today2: Date = new Date();

  startDay: Date = new Date();

  firstEndDay = new Date(this.startDay.setDate(this.startDay.getDate()-30));

  constructor(private todoService: TodoService){}

  ngOnInit(){

    this.getWeekNum()
    this.getDay()
    this.getTodo()

    this.getWeekNum2()
    this.getDay2()
    this.getTodo2()
  }

  getWeekNum(){
    const oneJan = new Date(this.today.getFullYear(), 0, 4);
    const numOfDays = Math.floor((this.today.valueOf() - oneJan.valueOf()) / 86400000);

    this.result1 = Math.ceil((this.today.getDay() + 1 + numOfDays) / 7);
    console.log(this.result1);
  }

  getDay(){
    this.filterTodo1 = this.todoService.todos.filter(day => day.date > this.firstEndDay)
    console.log(this.filterTodo1);

  }

  getTodo(){
    this.todoWeek = [];
    for (let i = this.result1; i > this.result1 - 4; i--) {
      this.todo = [];
      const todoObj = {
        week: i,
        data: this.filterTodo1.filter(t => {
          const oneJan = new Date(t.date.getFullYear(), 0, 4);
          const numOfDays = Math.floor((t.date.valueOf() - oneJan.valueOf()) / 86400000);

          this.weekNumTodo = Math.ceil((t.date.getDay() + 1 + numOfDays) / 7);
          if (this.weekNumTodo == i) {
            this.todo.push(t)
          }
        })
      }

      todoObj.data = this.todo;
      this.todoWeek.push(todoObj)

    }

    console.log(this.todoWeek);
  }

  getWeekNum2(){
    const oneJan = new Date(this.startDay.getFullYear(), 0, 4);
    const numOfDays = Math.floor((this.startDay.valueOf() - oneJan.valueOf()) / 86400000);

    this.result2 = Math.ceil((this.startDay.getDay() + 1 + numOfDays) / 7);
    console.log(this.result2);
  }

  getDay2(){
    this.filterTodo2 = this.todoService.todos.filter(day => day.date < this.firstEndDay)
    console.log(this.filterTodo2);
  }

  getTodo2(){
    this.todoWeek2 = [];
    for (let i = this.result2; i > this.result2 - 4; i--) {
      this.todo2 = [];
      const todoObj = {
        week: i,
        data: this.filterTodo2.filter(t => {
          const oneJan = new Date(t.date.getFullYear(), 0, 4);
          const numOfDays = Math.floor((t.date.valueOf() - oneJan.valueOf()) / 86400000);

          this.weekNumTodo2 = Math.ceil((t.date.getDay() + 1 + numOfDays) / 7);
          if (this.weekNumTodo2 == i) {
            this.todo2.push(t)
          }
        })
      }

      todoObj.data = this.todo2;
      this.todoWeek2.push(todoObj)

    }

    console.log(this.todoWeek2);
  }


}
