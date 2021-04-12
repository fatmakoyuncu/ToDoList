import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.scss']
})
export class WeeklyComponent implements OnInit {

  result: number;
  res= [];
  result2;
  today: Date = new Date();
  dayList: [];
  index= [0,1,2,3];
  day = ["M", "T", "W", "T", "F", "S", "S"];
  days = ["onday", "huesday", "ednesday", "hursday", "riday", "aturday", "unday"]

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

    this.getWeekNumber();
    this.getDay();


  }

  getWeekNumber(){   
    const oneJan = new Date(this.today.getFullYear(),0,4);
    const numOfDays = Math.floor((this.today.valueOf()-oneJan.valueOf())/86400000);

    this.result = Math.ceil((this.today.getDay()+1+numOfDays)/7);
    console.log(this.result);
    // console.log(this.today.toDateString());
    // console.log(this.today.getDate());
    
  }

  getDay(){

    for (let i = 0; i < this.todoService.todos.length; i++) {
      
      const element = this.todoService.todos[i].date;

      const oneJan1 = new Date(element.getFullYear(),0,4);
      const numOdDays1 = Math.floor((element.valueOf()-oneJan1.valueOf())/86400000);


      this.res[i] = Math.ceil((element.getDay()+1+numOdDays1)/7);
    
      
    }
    console.log(this.res);

    if (this.res[1] == this.result) {
      console.log("asd");
      
    }
    
  }
 
  


}
