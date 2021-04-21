import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.scss']
})
export class WeeklyComponent implements OnInit {

  result: number;
  weekNumTodo: number;
  today2: Date = new Date();
  todoObj

  // Bugünün tarihini alıyoruz
  today: Date = new Date();
  // Bulunduğumuz haftanın numarasını buluyoruz
  // weekNum = this.datePipe.transform(this.today, 'w');
  // Bulunduğumuz tarihten 30 gün öncesini buluyoruz
  endDay = new Date(this.today.setDate(this.today.getDate() - 30));

  filterTodo = [];

  todo: Array<any>
  todoAdd: Array<string| number>


  constructor(private todoService: TodoService, private datePipe: DatePipe) { }

  ngOnInit(): void {

    this.getWeekNumber()
    this.getDay()
    this.getTodo()

  }

  getWeekNumber() {
    const oneJan = new Date(this.today2.getFullYear(), 0, 4);
    const numOfDays = Math.floor((this.today2.valueOf() - oneJan.valueOf()) / 86400000);

    this.result = Math.ceil((this.today2.getDay() + 1 + numOfDays) / 7);
    console.log(this.result);
  }

  getDay() {
    this.filterTodo = this.todoService.todos.filter(r => r.date > this.endDay)
    console.log(this.filterTodo);
  }

  getTodo() {
    this.todoAdd = []
    for (let i = this.result; i > this.result - 4; i--) {
      this.todo = []
      this.todoObj = {
        week: i,
        data: this.filterTodo.filter(t => {
          const oneJan = new Date(t.date.getFullYear(), 0, 4);
          const numOfDays = Math.floor((t.date.valueOf() - oneJan.valueOf()) / 86400000);
          this.weekNumTodo = Math.ceil((t.date.getDay() + 1 + numOfDays) / 7);
          if (this.weekNumTodo == i) {
            this.todo.push(t)
          }
        })
      }
      this.todoObj.data = this.todo
      this.todoAdd.push(this.todoObj)
    }
    
    console.log("todo2",this.todoAdd);

  }

  deleteTodo(t){
    
    for (let i = 0; i < this.filterTodo.length; i++) {
      if (t == this.filterTodo[i]) {
        this.filterTodo.splice(i,1)

      }      
      
    }

    this.getTodo()

  }


}
